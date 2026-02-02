import { Audio } from "expo-av";
import {
    off,
    onValue,
    push,
    ref,
    remove,
    serverTimestamp,
    set,
    update,
} from "firebase/database";
import { useEffect, useRef, useState } from "react";
import {
    Alert,
    FlatList,
    Linking,
    Modal,
    PermissionsAndroid,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import SmsListener from "react-native-android-sms-listener";
import SmsAndroid from "react-native-get-sms-android";

import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../firebaseConfig";

export default function BarangayDashboardScreen({ route, navigation }) {
  const { barangay } = route.params;

  const [onlineAlerts, setOnlineAlerts] = useState([]);
  const [offlineAlerts, setOfflineAlerts] = useState([]);
  const [combinedAlerts, setCombinedAlerts] = useState([]);
  const [filteredAlerts, setFilteredAlerts] = useState([]);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("Waiting...");

  // --- TABS & FILTER STATE ---
  const [activeTab, setActiveTab] = useState("INCOMING"); // 'INCOMING' or 'ACTIVE_OPS'
  const [filterLevel, setFilterLevel] = useState("ALL");

  const isFirstLoad = useRef(true);
  const processedIds = useRef(new Set());
  const soundObject = useRef(new Audio.Sound()).current;

  // --- AUDIO ---
  useEffect(() => {
    async function loadSound() {
      try {
        await soundObject.loadAsync(require("../../assets/siren.mp3"));
      } catch (error) {
        console.log(error);
      }
    }
    loadSound();
    return () => {
      soundObject.unloadAsync();
    };
  }, []);

  const playSiren = async () => {
    try {
      await soundObject.replayAsync();
    } catch (error) {
      console.log(error);
    }
  };

  // --- PERMISSIONS ---
  useEffect(() => {
    const requestPermissions = async () => {
      if (Platform.OS === "android") {
        await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_SMS,
          PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
          PermissionsAndroid.PERMISSIONS.SEND_SMS,
        ]);
        fetchInboxHistory();
      }
    };
    requestPermissions();
  }, []);

  // --- LISTENER SMS ---
  useEffect(() => {
    let subscription = null;
    if (Platform.OS === "android") {
      subscription = SmsListener.addListener((message) => {
        const cleanBody = message.body ? message.body.replace(/\n/g, " ") : "";
        if (cleanBody.includes("SOS Alert")) {
          const newAlert = parseSms(
            cleanBody,
            message.originatingAddress,
            new Date().getTime(),
          );
          if (newAlert) {
            playSiren();
            setOfflineAlerts((prev) => {
              const exists = prev.find((a) => a.id === newAlert.id);
              if (exists) return prev;
              return [newAlert, ...prev];
            });
            setLastUpdated("Just Now (Live SMS)");
          }
        }
      });
    }
    return () => {
      if (subscription) subscription.remove();
    };
  }, []);

  // --- FIREBASE ONLINE ---
  useEffect(() => {
    const alertsRef = ref(db, `alerts/${barangay}`);
    const unsubscribe = onValue(alertsRef, (snapshot) => {
      const data = snapshot.val();
      const loaded = [];
      let hasNewAlert = false;
      let newestAlertName = "";

      if (data) {
        Object.keys(data).forEach((key) => {
          const item = data[key];

          // Skip alerts that have been pushed to COMCEN
          if (item.status === "PUSHED_TO_COMCEN") {
            return;
          }

          const lat = item.coords ? item.coords.latitude : 0;
          const long = item.coords ? item.coords.longitude : 0;

          const alertItem = {
            id: key,
            ...item,
            source: "ONLINE",
            level: item.level || "HIGH",
            urgencyReason: item.urgencyReason || "LOCATION",
            status: item.status || "PENDING", // Default to PENDING
            latitude: lat,
            longitude: long,
            fullAddress:
              item.fullAddress ||
              `${item.address || ""}, Brgy. ${barangay}, Naga City`,
          };

          loaded.push(alertItem);

          if (!processedIds.current.has(key)) {
            processedIds.current.add(key);
            if (!isFirstLoad.current && item.status === "PENDING") {
              hasNewAlert = true;
              newestAlertName = item.name;
            }
          }
        });
      }

      // Sort by timestamp descending
      loaded.sort((a, b) => {
        const dateA = new Date(`${a.date} ${a.timestamp}`);
        const dateB = new Date(`${b.date} ${b.timestamp}`);
        return dateB - dateA;
      });

      setOnlineAlerts(loaded);

      if (hasNewAlert) {
        playSiren();
        Alert.alert(
          "🚨 NEW ONLINE SOS",
          `Resident ${newestAlertName} sent a request!`,
        );
      }

      isFirstLoad.current = false;
    });

    return () => off(alertsRef);
  }, [barangay]);

  // --- MANUAL FETCH SMS ---
  const fetchInboxHistory = () => {
    if (Platform.OS === "ios") return;
    const filter = { box: "inbox", maxCount: 30 };
    SmsAndroid.list(
      JSON.stringify(filter),
      (fail) => {},
      (count, smsList) => {
        const arr = JSON.parse(smsList);
        const validSos = [];
        arr.forEach((msg) => {
          const cleanBody = msg.body ? msg.body.replace(/\n/g, " ") : "";
          if (cleanBody.includes("SOS Alert")) {
            const parsed = parseSms(cleanBody, msg.address, msg.date);
            if (parsed) validSos.push(parsed);
          }
        });
        setOfflineAlerts(validSos);
        setLastUpdated(new Date().toLocaleTimeString());
      },
    );
  };

  // --- PARSER ---
  const parseSms = (body, senderNumber, dateSent) => {
    try {
      let content = body.replace("SOS Alert:", "").trim();
      const parts = content.split(",");
      let extracted = {
        name: "Unknown",
        phone: senderNumber,
        location: "Unknown",
        condition: "Emergency",
        level: "HIGH",
        urgencyReason: "LOCATION",
        latitude: 0,
        longitude: 0,
        familyInfo: "Unknown Pax",
        timestamp: new Date(dateSent).toLocaleTimeString(),
        date: new Date(dateSent).toLocaleDateString(),
        id: `sms-${dateSent}`,
        status: "PENDING", // SMS defaults to Pending
        source: "OFFLINE",
        rawDate: dateSent,
      };

      parts.forEach((part) => {
        const p = part.trim();
        if (p.startsWith("Name="))
          extracted.name = p.replace("Name=", "").trim();
        if (p.startsWith("Mobile="))
          extracted.phone = p.replace("Mobile=", "").trim();
        if (p.startsWith("Location="))
          extracted.location = p.replace("Location=", "").trim();
        if (p.startsWith("Cond="))
          extracted.condition = p.replace("Cond=", "").trim();
        if (p.startsWith("Lvl=") || p.startsWith("Level=")) {
          const rawLvl = p.replace(/(Lvl=|Level=)/, "").trim();
          if (rawLvl.includes("(")) {
            extracted.level = rawLvl.split("(")[0];
            extracted.urgencyReason = rawLvl.split("(")[1].replace(")", "");
          } else {
            extracted.level = rawLvl;
          }
        }
        if (p.startsWith("Lat="))
          extracted.latitude = parseFloat(p.replace("Lat=", "").trim());
        if (p.startsWith("Long="))
          extracted.longitude = parseFloat(p.replace("Long=", "").trim());
        if (p.startsWith("Fam=")) {
          const rawFam = p.replace("Fam=", "").trim();
          extracted.familyInfo = `${rawFam} Pax`;
        }
        if (p.startsWith("V=")) {
          let vRaw = p.replace("V=", "").trim();
          vRaw = vRaw
            .replace("S", " Senior, ")
            .replace("K", " Child, ")
            .replace("P", " PWD, ")
            .replace("Pr", " Preg, ")
            .replace("Si", " Sick, ");
          extracted.familyInfo += ` (${vRaw.slice(0, -2)})`;
        }
      });
      return extracted;
    } catch (e) {
      return null;
    }
  };

  // --- SORT & FILTER ---
  useEffect(() => {
    let all = [...onlineAlerts, ...offlineAlerts];

    // Sort: Newest First
    all.sort((a, b) => {
      const timeA = a.rawDate || new Date(`${a.date} ${a.timestamp}`).getTime();
      const timeB = b.rawDate || new Date(`${b.date} ${b.timestamp}`).getTime();
      return timeB - timeA;
    });

    setCombinedAlerts(all);
  }, [onlineAlerts, offlineAlerts]);

  useEffect(() => {
    // 1. Filter by TAB (Status)
    let filtered = combinedAlerts.filter((item) => {
      const isDispatched = item.status === "DISPATCHED";
      if (activeTab === "INCOMING") return !isDispatched; // Show Pending
      if (activeTab === "ACTIVE_OPS") return isDispatched; // Show Dispatched
      return true;
    });

    // 2. Filter by LEVEL
    if (filterLevel !== "ALL") {
      filtered = filtered.filter((item) => item.level === filterLevel);
    }

    setFilteredAlerts(filtered);
  }, [filterLevel, combinedAlerts, activeTab]);

  // --- DISPATCH TEAM (Moves to Active Ops) ---
  const handleDispatch = async (alertItem) => {
    if (alertItem.source === "ONLINE") {
      try {
        await update(ref(db, `alerts/${barangay}/${alertItem.id}`), {
          status: "DISPATCHED",
        });
        Alert.alert(
          "✅ Team Dispatched",
          "Citizen has been notified via online system. Request moved to Active Ops.",
          [{ text: "OK" }],
        );
      } catch (error) {
        Alert.alert(
          "Error",
          "Failed to update dispatch status. Please try again.",
        );
        return;
      }
    } else {
      // Offline (SMS) Alert
      if (!alertItem.phone || alertItem.phone === "N/A") {
        Alert.alert("Error", "No phone number available for this alert.");
        setSelectedAlert(null);
        return;
      }

      // Check SMS permission
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.SEND_SMS,
        );

        if (!granted) {
          const result = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.SEND_SMS,
          );
          if (result !== PermissionsAndroid.RESULTS.GRANTED) {
            Alert.alert(
              "Permission Denied",
              "SMS permission is required to notify citizen.",
            );
            return;
          }
        }
      }

      // Send SMS notification
      SmsAndroid.autoSend(
        alertItem.phone,
        `RESCUE TEAM DISPATCHED from ${barangay}. Please stay calm and wait. Help is on the way!`,
        (fail) => {
          console.error("SMS send failed:", fail);
          Alert.alert(
            "⚠️ SMS Failed",
            `Could not send SMS to ${alertItem.phone}. You may need to call them directly.`,
            [{ text: "OK" }],
          );
        },
        (success) => {
          // Update local state for offline alerts
          setOfflineAlerts((prev) =>
            prev.map((a) =>
              a.id === alertItem.id ? { ...a, status: "DISPATCHED" } : a,
            ),
          );

          Alert.alert(
            "✅ Team Dispatched",
            `SMS notification sent to ${alertItem.phone}. Citizen has been notified.`,
            [{ text: "OK" }],
          );
        },
      );
    }
    setSelectedAlert(null);
  };

  // --- RESOLVE OPERATION (Removes from List) ---
  const handleResolve = (alertItem) => {
    Alert.alert("Complete Operation", "Mark this rescue as finished?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Yes, Completed",
        onPress: () => {
          if (alertItem.source === "ONLINE") {
            // Option A: Delete it
            remove(ref(db, `alerts/${barangay}/${alertItem.id}`));
            // Option B: Archive it (Update status to RESOLVED if you want to keep history)
            // update(ref(db, `alerts/${barangay}/${alertItem.id}`), { status: "RESOLVED" });
          } else {
            Alert.alert(
              "Offline Alert",
              "Please delete SMS manually from inbox.",
            );
          }
          setSelectedAlert(null);
        },
      },
    ]);
  };

  // --- PUSH TO COMCEN (Command Center) ---
  const handlePushToComcen = async (alertItem) => {
    try {
      const comcenRef = ref(db, "comcen_requests");
      const newRequestRef = push(comcenRef);

      const comcenData = {
        // Original alert data
        originalAlertId: alertItem.id,
        barangay: barangay,
        name: alertItem.name || "Unknown",
        phone: alertItem.phone || "N/A",
        location: alertItem.address || alertItem.location || "Unknown Location",
        fullAddress:
          alertItem.fullAddress ||
          `${alertItem.address || ""}, Brgy. ${barangay}, Naga City`,
        condition: alertItem.condition || "Emergency",
        level: alertItem.level || "HIGH",
        urgencyReason: alertItem.urgencyReason || "LOCATION",
        latitude: alertItem.latitude || alertItem.coords?.latitude || 0,
        longitude: alertItem.longitude || alertItem.coords?.longitude || 0,
        source: alertItem.source || "UNKNOWN",

        // Household info
        totalPax: alertItem.totalPax || 1,
        household: alertItem.household || null,
        familyInfo: alertItem.familyInfo || "Unknown Pax",

        // Comcen specific fields
        status: "PENDING",
        pushedAt: serverTimestamp(),
        pushedBy: barangay,
        date: alertItem.date || new Date().toLocaleDateString(),
        time: alertItem.time || new Date().toLocaleTimeString(),
      };

      await set(newRequestRef, comcenData);

      // Update original alert status or remove from local state
      if (alertItem.source === "ONLINE") {
        await update(ref(db, `alerts/${barangay}/${alertItem.id}`), {
          status: "PUSHED_TO_COMCEN",
          comcenRequestId: newRequestRef.key,
        });
      } else {
        // For offline (SMS) alerts, remove from local state
        setOfflineAlerts((prev) => prev.filter((a) => a.id !== alertItem.id));
      }

      Alert.alert(
        "✅ Pushed to COMCEN",
        `Request for ${alertItem.name} has been forwarded to Command Center.`,
        [{ text: "OK" }],
      );
      setSelectedAlert(null);
    } catch (error) {
      console.error("Error pushing to COMCEN:", error);
      Alert.alert(
        "Error",
        "Failed to push request to COMCEN. Please try again.",
      );
    }
  };

  const openMap = (lat, long) => {
    if (!lat || !long || lat === 0) {
      Alert.alert("No Coordinates", "Sender did not provide valid GPS data.");
      return;
    }
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${lat},${long}`;
    const label = "Emergency Location";
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err),
    );
  };

  const getBorderColor = (level) => {
    if (level === "HIGH") return "#D32F2F";
    if (level === "MEDIUM") return "#F57C00";
    return "#FBC02D";
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: getBorderColor(item.level) }]}
      onPress={() => setSelectedAlert(item)}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{item.name}</Text>
        <View
          style={[
            styles.badge,
            { backgroundColor: getBorderColor(item.level) },
          ]}
        >
          <Text style={styles.badgeText}>
            {item.urgencyReason === "CONDITIONS"
              ? `${item.level} (VULNERABLE)`
              : item.level}
          </Text>
        </View>
      </View>

      <Text style={{ fontWeight: "bold", color: "#333", marginTop: 5 }}>
        👥{" "}
        {item.source === "ONLINE"
          ? `${item.totalPax || 1} Pax`
          : item.familyInfo}
      </Text>

      <Text style={styles.locationText}>
        📍 {item.address || item.location || "Location Unknown"}
      </Text>

      <Text style={styles.time}>
        {item.timestamp} - {item.date}
      </Text>

      {item.status === "DISPATCHED" && (
        <Text style={styles.activeTag}>⚠️ ACTIVE OPERATION</Text>
      )}
      {item.source === "OFFLINE" && (
        <Text style={styles.smsBadge}>✉️ SMS ALERT</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{barangay} COMMAND CENTER</Text>
        <Text style={styles.subHeader}>Last Update: {lastUpdated}</Text>
      </View>

      {/* --- MAIN TABS --- */}
      <View style={styles.mainTabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "INCOMING" && styles.tabButtonActive,
          ]}
          onPress={() => setActiveTab("INCOMING")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "INCOMING" && styles.tabTextActive,
            ]}
          >
            INCOMING (
            {combinedAlerts.filter((a) => a.status !== "DISPATCHED").length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "ACTIVE_OPS" && styles.tabButtonActive,
          ]}
          onPress={() => setActiveTab("ACTIVE_OPS")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "ACTIVE_OPS" && styles.tabTextActive,
            ]}
          >
            ACTIVE OPS (
            {combinedAlerts.filter((a) => a.status === "DISPATCHED").length})
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <Text style={{ fontSize: 10, marginRight: 5, alignSelf: "center" }}>
          FILTER LEVEL:
        </Text>
        {["ALL", "HIGH", "MEDIUM", "LOW"].map((level) => (
          <TouchableOpacity
            key={level}
            style={[
              styles.filterBtn,
              filterLevel === level && styles.filterActive,
            ]}
            onPress={() => setFilterLevel(level)}
          >
            <Text
              style={[
                styles.filterText,
                filterLevel === level && { color: "white" },
              ]}
            >
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredAlerts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>
            {activeTab === "INCOMING"
              ? "No Pending Requests"
              : "No Active Operations"}
          </Text>
        }
      />

      <Modal visible={!!selectedAlert} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View
              style={[
                styles.modalHeader,
                { backgroundColor: getBorderColor(selectedAlert?.level) },
              ]}
            >
              <Text style={styles.modalTitle}>
                URGENCY: {selectedAlert?.level}
              </Text>
              {selectedAlert?.urgencyReason === "CONDITIONS" && (
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: "bold",
                    marginTop: 5,
                  }}
                >
                  ⚠️ URGENCY LEVEL {selectedAlert?.level} due to CONDITIONS
                </Text>
              )}
            </View>
            {selectedAlert && (
              <View style={{ padding: 20 }}>
                <Text style={styles.modalText}>
                  👤 Name: {selectedAlert.name}
                </Text>
                {selectedAlert.source === "ONLINE" &&
                selectedAlert.household ? (
                  <View style={styles.householdBox}>
                    <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
                      🏠 Household Members ({selectedAlert.totalPax}):
                    </Text>
                    <Text>• {selectedAlert.name} (Head)</Text>
                    {selectedAlert.household.map((m, i) => (
                      <Text key={i}>
                        • {m.name} ({m.age}yo) -{" "}
                        {m.condition !== "None" ? m.condition : "OK"}
                      </Text>
                    ))}
                  </View>
                ) : (
                  <Text
                    style={[
                      styles.modalText,
                      { fontWeight: "bold", color: "#D32F2F" },
                    ]}
                  >
                    🏠 Household: {selectedAlert.familyInfo}
                  </Text>
                )}
                <Text style={styles.modalText}>
                  📞 Phone: {selectedAlert.phone}
                </Text>
                <Text style={styles.modalText}>
                  📍 Loc: {selectedAlert.address || selectedAlert.location}
                </Text>
                <Text style={styles.modalText}>
                  🏥 Cond: {selectedAlert.condition}
                </Text>

                <TouchableOpacity
                  style={styles.btnMap}
                  onPress={() =>
                    openMap(selectedAlert.latitude, selectedAlert.longitude)
                  }
                >
                  <Text style={styles.btnTextBlue}>🌍 VIEW ON MAP</Text>
                </TouchableOpacity>

                {/* DYNAMIC ACTION BUTTONS */}
                {activeTab === "INCOMING" ? (
                  <TouchableOpacity
                    style={styles.btnDispatch}
                    onPress={() => handleDispatch(selectedAlert)}
                  >
                    <Text style={styles.btnTextWhite}>DISPATCH TEAM</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[styles.btnDispatch, { backgroundColor: "green" }]}
                    onPress={() => handleResolve(selectedAlert)}
                  >
                    <Text style={styles.btnTextWhite}>
                      MARK RESOLVED / COMPLETE
                    </Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  style={styles.btnComcen}
                  onPress={() => handlePushToComcen(selectedAlert)}
                >
                  <Text style={styles.btnTextWhite}>📡 PUSH TO COMCEN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btnClose}
                  onPress={() => setSelectedAlert(null)}
                >
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F2F2" },
  header: { backgroundColor: "#B71C1C", padding: 20, alignItems: "center" },
  headerTitle: { color: "#FFF", fontSize: 20, fontWeight: "bold" },
  subHeader: { color: "#FFEBEE", fontSize: 12 },

  mainTabs: { flexDirection: "row", backgroundColor: "#FFF", elevation: 2 },
  tabButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  tabButtonActive: { borderBottomColor: "#B71C1C" },
  tabText: { fontWeight: "bold", color: "#999" },
  tabTextActive: { color: "#B71C1C" },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  filterBtn: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 4,
    backgroundColor: "white",
  },
  filterActive: { backgroundColor: "#333", borderColor: "#333" },
  filterText: { fontSize: 10, fontWeight: "bold", color: "#555" },

  list: { padding: 15 },
  empty: { textAlign: "center", marginTop: 50, color: "#999" },

  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: { fontWeight: "bold", fontSize: 16 },
  badge: { paddingVertical: 2, paddingHorizontal: 8, borderRadius: 4 },
  badgeText: { color: "white", fontSize: 10, fontWeight: "bold" },
  time: { color: "#888", fontSize: 12, marginBottom: 5 },
  locationText: { color: "#D32F2F", fontWeight: "bold", marginVertical: 4 },
  activeTag: { color: "green", fontWeight: "bold", fontSize: 10, marginTop: 5 },
  smsBadge: {
    color: "#E65100",
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 5,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
  },
  modalHeader: { padding: 15, alignItems: "center" },
  modalTitle: { fontSize: 18, fontWeight: "bold", color: "white" },
  modalText: { fontSize: 16, marginBottom: 10, color: "#333" },
  householdBox: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  btnDispatch: {
    backgroundColor: "#D32F2F",
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  btnComcen: {
    backgroundColor: "#1565C0",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  btnMap: {
    backgroundColor: "#E3F2FD",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2196F3",
  },
  btnTextWhite: { color: "#FFF", fontWeight: "bold" },
  btnTextBlue: { color: "#1976D2", fontWeight: "bold" },
  btnClose: { marginTop: 10, alignItems: "center", padding: 10 },
});
