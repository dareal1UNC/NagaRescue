import { equalTo, get, orderByChild, query, ref } from "firebase/database";
import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    FlatList,
    KeyboardAvoidingView,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../firebaseConfig";

// NAGA CITY BARANGAYS
const BARANGAY_LIST = [
  "Abella",
  "Bagumbayan Norte",
  "Bagumbayan Sur",
  "Balatas",
  "Calauag",
  "Cararayan",
  "Carolina",
  "Concepcion Grande",
  "Concepcion Pequeña",
  "Dayangdang",
  "Del Rosario",
  "Dinaga",
  "Igualdad",
  "Lerma",
  "Liboton",
  "Mabolo",
  "Pacol",
  "Panicuason",
  "Peñafrancia",
  "Sabang",
  "San Felipe",
  "San Francisco",
  "San Isidro",
  "Santa Cruz",
  "Tabuco",
  "Tinago",
  "Triangulo",
];

export default function BarangayLoginScreen({ navigation }) {
  const [barangay, setBarangay] = useState("");
  const [officialID, setOfficialID] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // 1. Validation
    if (!barangay || !officialID || !password) {
      Alert.alert(
        "Access Denied",
        "Please fill in all fields to verify your identity.",
      );
      return;
    }

    setLoading(true);

    try {
      // 2. Query Firebase for barangay official with matching officialID
      const officialsRef = ref(db, "barangay_officials");
      const officialQuery = query(
        officialsRef,
        orderByChild("officialID"),
        equalTo(officialID),
      );

      const snapshot = await get(officialQuery);

      if (snapshot.exists()) {
        let matchedOfficial = null;

        // Check each result for matching barangay and password
        snapshot.forEach((childSnapshot) => {
          const data = childSnapshot.val();
          if (data.barangay === barangay && data.password === password) {
            matchedOfficial = data;
          }
        });

        if (matchedOfficial) {
          // Success! Navigate to dashboard
          navigation.navigate("BarangayDashboard", {
            barangay: barangay,
            officialName: matchedOfficial.fullName,
            officialID: matchedOfficial.officialID,
          });
        } else {
          Alert.alert(
            "Login Failed",
            "Incorrect password or barangay mismatch.",
          );
        }
      } else {
        Alert.alert("Login Failed", "Official ID not found in the system.");
      }
    } catch (error) {
      console.error("Barangay login error:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        {/* LOGO / HEADER AREA */}
        <View style={styles.header}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>🛡️</Text>
          </View>
          <Text style={styles.title}>COMMAND CENTER</Text>
          <Text style={styles.subtitle}>Naga City Emergency Response</Text>
        </View>

        {/* LOGIN FORM */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Select Barangay HQ</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setModalVisible(true)}
          >
            <Text style={barangay ? styles.inputText : styles.placeholder}>
              {barangay || "Select Barangay..."}
            </Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Official ID Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex. BGY-2024-001"
            placeholderTextColor="#A0A0A0"
            value={officialID}
            onChangeText={setOfficialID}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.loginButtonText}>ENTER DASHBOARD</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerLink}
            onPress={() => navigation.navigate("BarangayRegister")}
          >
            <Text style={styles.registerText}>
              Don't have an account?{" "}
              <Text style={styles.registerBold}>Register Here</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backLink}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>← Back to Citizen App</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* MODAL FOR BARANGAY SELECTION */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Headquarters</Text>
            <FlatList
              data={BARANGAY_LIST}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setBarangay(item);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#002f6c" }, // Deep Blue Background
  keyboardView: { flex: 1, justifyContent: "center", padding: 25 },

  header: { alignItems: "center", marginBottom: 40 },
  logoCircle: {
    width: 80,
    height: 80,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  logoText: { fontSize: 40 },
  title: { fontSize: 28, fontWeight: "900", color: "#FFF", letterSpacing: 1 },
  subtitle: { fontSize: 14, color: "#B0C4DE", marginTop: 5 },

  formContainer: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 25,
    elevation: 5,
  },

  label: {
    fontSize: 12,
    fontWeight: "700",
    color: "#555",
    marginBottom: 8,
    marginTop: 10,
    textTransform: "uppercase",
  },

  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#EEE",
  },

  dropdown: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#EEE",
  },
  inputText: { fontSize: 16, color: "#333", fontWeight: "600" },
  placeholder: { fontSize: 16, color: "#999" },
  dropdownIcon: { color: "#666" },

  loginButton: {
    backgroundColor: "#D32F2F",
    borderRadius: 8,
    padding: 18,
    alignItems: "center",
    marginTop: 30,
    elevation: 3,
  },
  loginButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },

  backLink: { marginTop: 15, alignItems: "center" },
  backText: { color: "#666", fontSize: 14 },

  registerLink: { marginTop: 20, alignItems: "center" },
  registerText: { color: "#666", fontSize: 14 },
  registerBold: { color: "#1976D2", fontWeight: "bold" },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    maxHeight: "60%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  modalItem: { paddingVertical: 15, borderBottomWidth: 1, borderColor: "#EEE" },
  modalItemText: { fontSize: 16, color: "#333" },
  closeButton: { marginTop: 15, alignItems: "center", padding: 10 },
  closeText: { color: "#D32F2F", fontWeight: "bold" },
});
