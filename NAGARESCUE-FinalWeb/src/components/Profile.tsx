import { useState, useEffect } from "react";
import { X, Upload, Eye, EyeOff } from "lucide-react";
import Navbar from "./Navbar";
import darylprofile from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
import { ref, update } from "firebase/database";
import { db } from "../firebaseConfig";

interface ProfileProps {
  onNavigate?: (tab: string) => void;
  onLogout?: () => void;
  userRole?: string;
}

interface UserData {
  id?: string;
  username?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  role?: string;
  status?: string;
  createdAt?: string;
}

export default function Profile({
  onNavigate,
  onLogout,
  userRole = "cdrrmo",
}: ProfileProps) {
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [profilePicture, setProfilePicture] = useState(darylprofile);
  const [userData, setUserData] = useState<UserData | null>(null);
  
  // Load user data from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("webAdmin");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserData(parsedUser);
      
      // Parse full name into first and last name
      const nameParts = (parsedUser.fullName || "").split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";
      
      setPersonalInfo({
        firstName,
        lastName,
        email: parsedUser.email || "",
        phone: parsedUser.phoneNumber || "",
        role: parsedUser.role || "CDRRMO Officer",
        birthday: "",
        barangay: "",
        username: parsedUser.username || "",
      });
      
      setEditedInfo({
        firstName,
        lastName,
        email: parsedUser.email || "",
        phone: parsedUser.phoneNumber || "",
        role: parsedUser.role || "CDRRMO Officer",
        birthday: "",
        barangay: "",
        username: parsedUser.username || "",
      });
    }
  }, []);
  
  // Personal Info State
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "CDRRMO Officer",
    birthday: "",
    barangay: "",
    username: "",
  });

  const [editedInfo, setEditedInfo] = useState(personalInfo);

  // Password State
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const barangayList = [
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
    "Igualdad Interior",
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

  const handleSavePersonalInfo = async () => {
    setPersonalInfo(editedInfo);
    setIsEditingPersonalInfo(false);
    
    // Update Firebase and localStorage if we have user data
    if (userData?.id) {
      try {
        const updatedData = {
          fullName: `${editedInfo.firstName} ${editedInfo.lastName}`.trim(),
          email: editedInfo.email,
          phoneNumber: editedInfo.phone,
        };
        
        // Update Firebase
        await update(ref(db, `web_admins/${userData.id}`), updatedData);
        
        // Update localStorage
        const updatedUser = { ...userData, ...updatedData };
        localStorage.setItem("webAdmin", JSON.stringify(updatedUser));
        setUserData(updatedUser);
        
        alert("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("Failed to update profile. Please try again.");
      }
    }
  };

  const handleCancelEdit = () => {
    setEditedInfo(personalInfo);
    setIsEditingPersonalInfo(false);
  };

  const handleChangePassword = () => {
    // Validate passwords
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    if (passwordData.newPassword.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }
    
    // Here you would make an API call to change the password
    alert("Password changed successfully!");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setIsChangingPassword(false);
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-auto">
      <Navbar
        userRole={userRole}
        activeTab="profile"
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      <div className="relative z-10 px-[30px] pt-[28px] pb-[40px] max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-[32px]">
          <h1 className="font-['Poppins',sans-serif] font-bold text-[32px] text-black">
            Profile Settings
          </h1>
          <p className="font-['Poppins',sans-serif] text-[14px] text-[#00000080] mt-1">
            Manage your account information and security
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[24px]">
          {/* Left Column - Profile Picture */}
          <div className="lg:col-span-1">
            <div className="bg-[#dae7f8] rounded-[20px] p-[24px] sticky top-[108px]">
              <div className="flex flex-col items-center">
                <div className="relative mb-[16px]">
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="w-[140px] h-[140px] rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <label
                    htmlFor="profile-upload"
                    className="absolute bottom-0 right-0 w-[40px] h-[40px] bg-[#0B5ED0] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#094a9e] transition-colors shadow-lg"
                  >
                    <Upload className="w-[20px] h-[20px] text-white" />
                    <input
                      id="profile-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleProfilePictureChange}
                    />
                  </label>
                </div>
                <h2 className="font-['Poppins',sans-serif] font-bold text-[20px] text-black text-center">
                  {personalInfo.firstName || personalInfo.lastName 
                    ? `${personalInfo.firstName} ${personalInfo.lastName}`.trim() 
                    : userData?.fullName || "User"}
                </h2>
                <p className="font-['Poppins',sans-serif] text-[13px] text-[#00000080] text-center mt-1">
                  {personalInfo.role || "No Role Assigned"}
                </p>
                <p className="font-['Poppins',sans-serif] text-[12px] text-[#00000080] text-center mt-2">
                  @{personalInfo.username || "username"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Information & Settings */}
          <div className="lg:col-span-3 space-y-[24px]">
            {/* Personal Information Card */}
            <div className="bg-white rounded-[20px] border border-[#00000020] p-[32px]">
              <div className="flex items-center justify-between mb-[24px]">
                <h3 className="font-['Poppins',sans-serif] font-bold text-[20px] text-black">
                  Personal Information
                </h3>
                {!isEditingPersonalInfo && (
                  <button
                    onClick={() => setIsEditingPersonalInfo(true)}
                    className="px-[20px] h-[36px] bg-[#0B5ED0] text-white rounded-[8px] font-['Poppins',sans-serif] text-[14px] font-medium hover:bg-[#094a9e] transition-colors"
                  >
                    Edit
                  </button>
                )}
              </div>

              {isEditingPersonalInfo ? (
                <div className="space-y-[20px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[13px] text-[#00000080] mb-[8px]">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={editedInfo.firstName}
                        onChange={(e) =>
                          setEditedInfo({ ...editedInfo, firstName: e.target.value })
                        }
                        className="w-full h-[44px] px-[16px] bg-[#dae7f8] rounded-[10px] font-['Poppins',sans-serif] text-[14px] text-black outline-none focus:ring-2 focus:ring-[#0B5ED0]"
                      />
                    </div>
                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[13px] text-[#00000080] mb-[8px]">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={editedInfo.lastName}
                        onChange={(e) =>
                          setEditedInfo({ ...editedInfo, lastName: e.target.value })
                        }
                        className="w-full h-[44px] px-[16px] bg-[#dae7f8] rounded-[10px] font-['Poppins',sans-serif] text-[14px] text-black outline-none focus:ring-2 focus:ring-[#0B5ED0]"
                      />
                    </div>
                  </div>

                  {/* Email and Phone Number Row */}
                  <div className="grid grid-cols-2 gap-[16px]">
                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[13px] text-[#00000080] mb-[8px]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={editedInfo.email}
                        onChange={(e) =>
                          setEditedInfo({ ...editedInfo, email: e.target.value })
                        }
                        className="w-full h-[44px] px-[16px] bg-[#dae7f8] rounded-[10px] font-['Poppins',sans-serif] text-[14px] text-black outline-none focus:ring-2 focus:ring-[#0B5ED0]"
                      />
                    </div>

                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[13px] text-[#00000080] mb-[8px]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={editedInfo.phone}
                        onChange={(e) =>
                          setEditedInfo({ ...editedInfo, phone: e.target.value })
                        }
                        className="w-full h-[44px] px-[16px] bg-[#dae7f8] rounded-[10px] font-['Poppins',sans-serif] text-[14px] text-black outline-none focus:ring-2 focus:ring-[#0B5ED0]"
                      />
                    </div>
                  </div>

                  {/* Birthday and Barangay Row */}
                  <div className="grid grid-cols-2 gap-[16px]">
                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[13px] text-[#00000080] mb-[8px]">
                        Birthday
                      </label>
                      <input
                        type="date"
                        value={editedInfo.birthday}
                        onChange={(e) =>
                          setEditedInfo({ ...editedInfo, birthday: e.target.value })
                        }
                        className="w-full h-[44px] px-[16px] bg-[#dae7f8] rounded-[10px] font-['Poppins',sans-serif] text-[14px] text-black outline-none focus:ring-2 focus:ring-[#0B5ED0]"
                      />
                    </div>

                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[13px] text-[#00000080] mb-[8px]">
                        Barangay
                      </label>
                      <select
                        value={editedInfo.barangay}
                        onChange={(e) =>
                          setEditedInfo({ ...editedInfo, barangay: e.target.value })
                        }
                        className="w-full h-[44px] px-[16px] bg-[#dae7f8] rounded-[10px] font-['Poppins',sans-serif] text-[14px] text-black outline-none focus:ring-2 focus:ring-[#0B5ED0]"
                      >
                        {barangayList.map((brgy) => (
                          <option key={brgy} value={brgy}>
                            {brgy}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-[12px] pt-[8px]">
                    <button
                      onClick={handleSavePersonalInfo}
                      className="flex-1 h-[44px] bg-[#0B5ED0] text-white rounded-[10px] font-['Poppins',sans-serif] text-[14px] font-medium hover:bg-[#094a9e] transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="flex-1 h-[44px] bg-[#00000010] text-black rounded-[10px] font-['Poppins',sans-serif] text-[14px] font-medium hover:bg-[#00000020] transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-[16px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                    <div>
                      <p className="font-['Poppins',sans-serif] text-[13px] text-[#00000080]">
                        First Name
                      </p>
                      <p className="font-['Poppins',sans-serif] text-[15px] text-black font-medium mt-[4px]">
                        {personalInfo.firstName || "Not set"}
                      </p>
                    </div>
                    <div>
                      <p className="font-['Poppins',sans-serif] text-[13px] text-[#00000080]">
                        Last Name
                      </p>
                      <p className="font-['Poppins',sans-serif] text-[15px] text-black font-medium mt-[4px]">
                        {personalInfo.lastName || "Not set"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="font-['Poppins',sans-serif] text-[13px] text-[#00000080]">
                      Username
                    </p>
                    <p className="font-['Poppins',sans-serif] text-[15px] text-black font-medium mt-[4px]">
                      {personalInfo.username || "Not set"}
                    </p>
                  </div>

                  <div>
                    <p className="font-['Poppins',sans-serif] text-[13px] text-[#00000080]">
                      Email Address
                    </p>
                    <p className="font-['Poppins',sans-serif] text-[15px] text-black font-medium mt-[4px]">
                      {personalInfo.email || "Not set"}
                    </p>
                  </div>

                  <div>
                    <p className="font-['Poppins',sans-serif] text-[13px] text-[#00000080]">
                      Phone Number
                    </p>
                    <p className="font-['Poppins',sans-serif] text-[15px] text-black font-medium mt-[4px]">
                      {personalInfo.phone || "Not set"}
                    </p>
                  </div>

                  <div>
                    <p className="font-['Poppins',sans-serif] text-[13px] text-[#00000080]">
                      Role
                    </p>
                    <p className="font-['Poppins',sans-serif] text-[15px] text-black font-medium mt-[4px]">
                      {personalInfo.role || "Not set"}
                    </p>
                  </div>

                  <div>
                    <p className="font-['Poppins',sans-serif] text-[13px] text-[#00000080]">
                      Account Status
                    </p>
                    <p className={`font-['Poppins',sans-serif] text-[15px] font-medium mt-[4px] ${
                      userData?.status === "active" ? "text-green-600" : "text-yellow-600"
                    }`}>
                      {userData?.status === "active" ? "✓ Active" : "⏳ Pending Approval"}
                    </p>
                  </div>

                  <div>
                    <p className="font-['Poppins',sans-serif] text-[13px] text-[#00000080]">
                      Member Since
                    </p>
                    <p className="font-['Poppins',sans-serif] text-[15px] text-black font-medium mt-[4px]">
                      {userData?.createdAt 
                        ? new Date(userData.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "Not available"}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Change Password Card */}
            <div className="bg-white rounded-[20px] border border-[#00000020] p-[32px]">
              <div className="flex items-center justify-between mb-[24px]">
                <div>
                  <h3 className="font-['Poppins',sans-serif] font-bold text-[20px] text-black">
                    Security
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-[13px] text-[#00000080] mt-1">
                    Update your password to keep your account secure
                  </p>
                </div>
                {!isChangingPassword && (
                  <button
                    onClick={() => setIsChangingPassword(true)}
                    className="px-[20px] h-[36px] bg-[#0B5ED0] text-white rounded-[8px] font-['Poppins',sans-serif] text-[14px] font-medium hover:bg-[#094a9e] transition-colors"
                  >
                    Change Password
                  </button>
                )}
              </div>

              {isChangingPassword && (
                <div className="space-y-[20px]">
                  <div>
                    <label className="block font-['Poppins',sans-serif] text-[13px] text-[#00000080] mb-[8px]">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPasswords.current ? "text" : "password"}
                        value={passwordData.currentPassword}
                        onChange={(e) =>
                          setPasswordData({
                            ...passwordData,
                            currentPassword: e.target.value,
                          })
                        }
                        className="w-full h-[44px] px-[16px] pr-[48px] bg-[#dae7f8] rounded-[10px] font-['Poppins',sans-serif] text-[14px] text-black outline-none focus:ring-2 focus:ring-[#0B5ED0]"
                        placeholder="Enter current password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowPasswords({
                            ...showPasswords,
                            current: !showPasswords.current,
                          })
                        }
                        className="absolute right-[12px] top-1/2 -translate-y-1/2"
                      >
                        {showPasswords.current ? (
                          <EyeOff className="w-[20px] h-[20px] text-[#00000080]" />
                        ) : (
                          <Eye className="w-[20px] h-[20px] text-[#00000080]" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block font-['Poppins',sans-serif] text-[13px] text-[#00000080] mb-[8px]">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPasswords.new ? "text" : "password"}
                        value={passwordData.newPassword}
                        onChange={(e) =>
                          setPasswordData({
                            ...passwordData,
                            newPassword: e.target.value,
                          })
                        }
                        className="w-full h-[44px] px-[16px] pr-[48px] bg-[#dae7f8] rounded-[10px] font-['Poppins',sans-serif] text-[14px] text-black outline-none focus:ring-2 focus:ring-[#0B5ED0]"
                        placeholder="Enter new password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowPasswords({
                            ...showPasswords,
                            new: !showPasswords.new,
                          })
                        }
                        className="absolute right-[12px] top-1/2 -translate-y-1/2"
                      >
                        {showPasswords.new ? (
                          <EyeOff className="w-[20px] h-[20px] text-[#00000080]" />
                        ) : (
                          <Eye className="w-[20px] h-[20px] text-[#00000080]" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block font-['Poppins',sans-serif] text-[13px] text-[#00000080] mb-[8px]">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPasswords.confirm ? "text" : "password"}
                        value={passwordData.confirmPassword}
                        onChange={(e) =>
                          setPasswordData({
                            ...passwordData,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="w-full h-[44px] px-[16px] pr-[48px] bg-[#dae7f8] rounded-[10px] font-['Poppins',sans-serif] text-[14px] text-black outline-none focus:ring-2 focus:ring-[#0B5ED0]"
                        placeholder="Confirm new password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowPasswords({
                            ...showPasswords,
                            confirm: !showPasswords.confirm,
                          })
                        }
                        className="absolute right-[12px] top-1/2 -translate-y-1/2"
                      >
                        {showPasswords.confirm ? (
                          <EyeOff className="w-[20px] h-[20px] text-[#00000080]" />
                        ) : (
                          <Eye className="w-[20px] h-[20px] text-[#00000080]" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-[12px] pt-[8px]">
                    <button
                      onClick={handleChangePassword}
                      className="flex-1 h-[44px] bg-[#0B5ED0] text-white rounded-[10px] font-['Poppins',sans-serif] text-[14px] font-medium hover:bg-[#094a9e] transition-colors"
                    >
                      Update Password
                    </button>
                    <button
                      onClick={() => {
                        setPasswordData({
                          currentPassword: "",
                          newPassword: "",
                          confirmPassword: "",
                        });
                        setIsChangingPassword(false);
                      }}
                      className="flex-1 h-[44px] bg-[#00000010] text-black rounded-[10px] font-['Poppins',sans-serif] text-[14px] font-medium hover:bg-[#00000020] transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}