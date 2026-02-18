import svgPaths from "../imports/svg-x56ytxvktc";
import imgRectangle1 from "figma:asset/ddaae69bc8d9d54dfd0ae02f4797f4fbbae65e00.png";
import { useState } from "react";
import RegistrationNotif from "./RegistrationNotif";
import { ChevronDown, Eye, EyeOff, Loader2 } from "lucide-react";
import { ref, set, get, query, orderByChild, equalTo } from "firebase/database";
import { db } from "../firebaseConfig";

function Bg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        src={imgRectangle1}
      />
    </div>
  );
}

function MaterialSymbolsEmergencyShareOutlineRounded() {
  return (
    <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] mx-auto mb-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 392.728 392.728"
      >
        <g filter="url(#filter0_i_554_41)">
          <path d={svgPaths.pb867d80} fill="#0B5ED0" />
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="396.728"
            id="filter0_i_554_41"
            width="392.728"
            x="0"
            y="0"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite
              in2="hardAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_554_41"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="text-center mb-6 md:mb-8">
      <MaterialSymbolsEmergencyShareOutlineRounded />
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_8px_4px] font-['Poppins',sans-serif] font-bold text-[#0b5ed0] mb-0">
        <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight">
          NAGA
        </p>
      </div>
      <div className="font-['Poppins',sans-serif] font-bold text-[#2f7fb8]">
        <p className="text-3xl sm:text-4xl md:text-5xl">
          RESCUE
        </p>
      </div>
    </div>
  );
}

export default function Register({
  onLoginClick,
  onNextClick,
}: {
  onLoginClick?: () => void;
  onNextClick?: () => void;
}) {
  const [registrationNotif, setRegistrationNotif] =
    useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [role, setRole] = useState("");
  const [showRoleDropdown, setShowRoleDropdown] =
    useState(false);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const roles = ["CDRRMO Officer", "ComCen Staff"];

  const handleRegister = async () => {
    // Validation
    if (!username || !password || !confirmPassword || !role || !fullName || !phoneNumber || !emailAddress) {
      setError("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Check if username already exists
      const adminsRef = ref(db, "web_admins");
      const usernameQuery = query(
        adminsRef,
        orderByChild("username"),
        equalTo(username)
      );

      const usernameSnapshot = await get(usernameQuery);
      if (usernameSnapshot.exists()) {
        setError("Username is already taken. Please choose another.");
        setLoading(false);
        return;
      }

      // Check if email already exists
      const emailQuery = query(
        adminsRef,
        orderByChild("email"),
        equalTo(emailAddress)
      );

      const emailSnapshot = await get(emailQuery);
      if (emailSnapshot.exists()) {
        setError("Email is already registered.");
        setLoading(false);
        return;
      }

      // Create admin data
      const adminId = `admin_${Date.now()}`;
      const adminData = {
        id: adminId,
        username,
        password, // Note: In production, this should be hashed!
        fullName,
        email: emailAddress,
        phoneNumber,
        role,
        status: "pending", // Pending approval
        createdAt: new Date().toISOString(),
      };

      // Save to Firebase
      await set(ref(db, `web_admins/${adminId}`), adminData);

      // Show success notification
      setRegistrationNotif(true);

      // Clear form
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setFullName("");
      setPhoneNumber("");
      setEmailAddress("");
      setRole("");
    } catch (err) {
      console.error("Registration error:", err);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white relative w-full min-h-screen overflow-auto">
      <Bg />
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen lg:gap-8 lg:px-8">
        {/* Left side - Logo */}
        <div className="w-full lg:w-[45%] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:min-h-screen">
          <Logo />
        </div>

        {/* Right side - Registration form */}
        <div className="w-full lg:w-[45%] flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-[480px]">
            <div className="mb-6">
              <h1 className="font-['Poppins',sans-serif] font-bold text-[#163b56] text-3xl lg:text-4xl leading-tight tracking-[0.1em] mb-2">
                Registration
              </h1>
              <p className="font-['Poppins',sans-serif] text-[#163b56] text-[13px] tracking-[0.05em]">
                Please fill Up to register.
              </p>
            </div>

            {/* Account Information Section */}
            <div className="mb-6">
              <h2 className="font-['Poppins',sans-serif] font-bold text-black text-[24px] tracking-[0.1em] mb-6">
                ACCOUNT INFORMATION
              </h2>

              <div className="space-y-[16px]">
                {/* Full Name and Username Row */}
                <div className="grid grid-cols-2 gap-[16px]">
                  <div className="relative">
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) =>
                        setFullName(e.target.value)
                      }
                      placeholder=" "
                      className="w-full h-[44px] bg-[#ECF6FE] px-[16px] pt-[18px] pb-[6px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] outline-none focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all peer"
                    />
                    <label className="absolute left-[16px] top-[6px] text-[#163b56] text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[0.1em] pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[14px] peer-focus:top-[6px] peer-focus:translate-y-0 peer-focus:text-[10px]">
                      Full Name *
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) =>
                        setUsername(e.target.value)
                      }
                      placeholder=" "
                      className="w-full h-[44px] bg-[#ECF6FE] px-[16px] pt-[18px] pb-[6px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] outline-none focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all peer"
                    />
                    <label className="absolute left-[16px] top-[6px] text-[#163b56] text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[0.1em] pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[14px] peer-focus:top-[6px] peer-focus:translate-y-0 peer-focus:text-[10px]">
                      Username *
                    </label>
                  </div>
                </div>

                {/* Phone Number and Email Address Row */}
                <div className="grid grid-cols-2 gap-[16px]">
                  <div className="relative">
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) =>
                        setPhoneNumber(e.target.value)
                      }
                      placeholder=" "
                      className="w-full h-[44px] bg-[#ECF6FE] px-[16px] pt-[18px] pb-[6px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] outline-none focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all peer font-bold font-normal"
                    />
                    <label className="absolute left-[16px] top-[6px] text-[#163b56] text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[0.1em] pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[14px] peer-focus:top-[6px] peer-focus:translate-y-0 peer-focus:text-[10px]">
                      Phone Number
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      value={emailAddress}
                      onChange={(e) =>
                        setEmailAddress(e.target.value)
                      }
                      placeholder=" "
                      className="w-full h-[44px] bg-[#ECF6FE] px-[16px] pt-[18px] pb-[6px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] outline-none focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all peer"
                    />
                    <label className="absolute left-[16px] top-[6px] text-[#163b56] text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[0.1em] pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[14px] peer-focus:top-[6px] peer-focus:translate-y-0 peer-focus:text-[10px]">
                      Email Address
                    </label>
                  </div>
                </div>

                {/* Password and Confirm Password Row */}
                <div className="grid grid-cols-2 gap-[16px]">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      placeholder=" "
                      className="w-full h-[44px] bg-[#ECF6FE] px-[16px] pt-[18px] pb-[6px] pr-[45px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] outline-none focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all peer"
                    />
                    <label className="absolute left-[16px] top-[6px] text-[#163b56] text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[0.1em] pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[14px] peer-focus:top-[6px] peer-focus:translate-y-0 peer-focus:text-[10px]">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#163b56] hover:text-[#0b5ed0] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                      placeholder=" "
                      className="w-full h-[44px] bg-[#ECF6FE] px-[16px] pt-[18px] pb-[6px] pr-[45px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] outline-none focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all peer"
                    />
                    <label className="absolute left-[16px] top-[6px] text-[#163b56] text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[0.1em] pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[14px] peer-focus:top-[6px] peer-focus:translate-y-0 peer-focus:text-[10px]">
                      Confirm Password
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword,
                        )
                      }
                      className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#163b56] hover:text-[#0b5ed0] transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Role Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setShowRoleDropdown(!showRoleDropdown)
                    }
                    className="w-full h-[44px] bg-[#ECF6FE] px-[16px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] outline-none flex items-center justify-between focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all text-left"
                  >
                    <div className="flex flex-col">
                      {role && (
                        <span className="text-[#163b56] text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[0.1em]">
                          Role
                        </span>
                      )}
                      <span
                        className={
                          role ? "text-[14px]" : "text-[14px]"
                        }
                      >
                        {role || "Role"}
                      </span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-[#163b56]" />
                  </button>

                  {showRoleDropdown && (
                    <div className="absolute top-full mt-1 w-full bg-white rounded-lg shadow-lg overflow-hidden z-10 border border-gray-100">
                      {roles.map((roleOption) => (
                        <button
                          key={roleOption}
                          onClick={() => {
                            setRole(roleOption);
                            setShowRoleDropdown(false);
                          }}
                          className="w-full px-4 py-3 text-left font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] hover:bg-[#dae7f8] transition-colors"
                        >
                          {roleOption}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm font-['Poppins',sans-serif]">
                {error}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-[14px] mt-8">
              <button
                onClick={onLoginClick}
                className="flex-1 h-[44px] px-[40px] bg-white border border-[#0b5ed0] border-solid rounded-[10px] font-['Poppins',sans-serif] font-bold text-[#0b5ed0] text-[14px] tracking-[0.2em] hover:bg-[#0b5ed0] hover:text-white transition-colors shadow-[0px_2px_8px_0px_rgba(11,94,208,0.3)]"
              >
                Cancel
              </button>
              <button
                onClick={handleRegister}
                disabled={loading}
                className={`flex-1 h-[44px] px-[40px] rounded-[10px] font-['Poppins',sans-serif] text-white text-[14px] tracking-[0.2em] transition-colors shadow-[0px_2px_8px_0px_rgba(11,94,208,0.3)] font-bold flex items-center justify-center gap-2 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#0b5ed0] hover:bg-[#094ba8]"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Registering...
                  </>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {registrationNotif && (
        <RegistrationNotif
          onClose={() => {
            setRegistrationNotif(false);
            onLoginClick?.();
          }}
        />
      )}
    </div>
  );
}