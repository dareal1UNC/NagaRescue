import svgPaths from "../imports/svg-k0wjo8164k";
import loginSvgPaths from "../imports/svg-c29a8srkdw";
import imgRectangle1 from "figma:asset/ddaae69bc8d9d54dfd0ae02f4797f4fbbae65e00.png";
import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { ref, get, query, orderByChild, equalTo } from "firebase/database";
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
        viewBox="0 0 393 393"
      >
        <g
          filter="url(#filter0_i_5_26)"
          id="material-symbols:emergency-share-outline-rounded"
        >
          <path
            d={loginSvgPaths.pb867d80}
            fill="var(--fill-0, #0B5ED0)"
            id="Vector"
          />
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="396.728"
            id="filter0_i_5_26"
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
              result="effect1_innerShadow_5_26"
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

function PhUserBold() {
  return (
    <div className="shrink-0 size-[28px] sm:size-[32px] md:size-[38px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 38 38"
      >
        <g id="ph:user-bold">
          <path
            d={svgPaths.p8d61e80}
            fill="var(--fill-0, #163B56)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function MdiPasswordOutline() {
  return (
    <div className="shrink-0 size-[28px] sm:size-[32px] md:size-[38px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 38 38"
      >
        <g id="mdi:password-outline">
          <path
            d={svgPaths.p2f76400}
            fill="var(--fill-0, #163B56)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function MdiUserGroupOutline() {
  return (
    <div className="shrink-0 size-[28px] sm:size-[32px] md:size-[38px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 38 38"
      >
        <g
          clipPath="url(#clip0_5_141)"
          id="mdi:user-group-outline"
        >
          <path
            d={svgPaths.pc71d000}
            fill="var(--fill-0, #ECF6FE)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_141">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ChevronDown({ isOpen = false }: { isOpen?: boolean }) {
  return (
    <div
      className={`shrink-0 size-[24px] sm:size-[28px] md:size-[34px] transition-transform ${isOpen ? "rotate-180" : ""}`}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 34 34"
      >
        <g id="chevron-down 1">
          <path
            d={svgPaths.p31b11f80}
            fill="var(--fill-0, #ECF6FE)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

export default function Login({
  onRegisterClick,
  onLoginSuccess,
}: {
  onRegisterClick?: () => void;
  onLoginSuccess?: (role: string) => void;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<
    string | null
  >(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setIsDropdownOpen(false);
    setError(null);
  };

  const handleLogin = async () => {
    if (!selectedRole) {
      setError("Please select a role first.");
      return;
    }

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Query Firebase for web admin with matching username
      const adminsRef = ref(db, "web_admins");
      const adminQuery = query(
        adminsRef,
        orderByChild("username"),
        equalTo(username)
      );

      const snapshot = await get(adminQuery);

      if (snapshot.exists()) {
        let matchedAdmin = null;

        // Check each result for matching password and role
        snapshot.forEach((childSnapshot) => {
          const data = childSnapshot.val();
          if (data.password === password && data.role === selectedRole) {
            matchedAdmin = data;
          }
        });

        if (matchedAdmin) {
          // Store user info in localStorage for session management
          localStorage.setItem("webAdmin", JSON.stringify(matchedAdmin));
          
          // Success! Call the callback
          if (onLoginSuccess) {
            onLoginSuccess(selectedRole);
          }
        } else {
          setError("Invalid password or role mismatch.");
        }
      } else {
        setError("Username not found in the system.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
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

        {/* Right side - Login form */}
        <div className="w-full lg:w-[45%] flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-[480px]">
            <div className="mb-6">
              <h1 className="font-['Poppins',sans-serif] font-bold text-[#163b56] text-3xl lg:text-4xl leading-tight tracking-[0.1em] mb-2">
                Log In
              </h1>
              <p className="font-['Poppins',sans-serif] text-[#163b56] text-[13px] tracking-[0.05em]">
                Please Select a User first.
              </p>
            </div>

            <div className="space-y-[16px] mb-6">
              {/* Login As Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setIsDropdownOpen(!isDropdownOpen)
                  }
                  className="w-full h-[44px] bg-[#0b5ed0] px-[16px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-white text-[14px] tracking-[0.1em] outline-none flex items-center gap-3 hover:bg-[#094ba8] focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all text-left"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex-1">
                    {selectedRole ? selectedRole : "Log In As"}
                  </span>
                  <svg
                    className={`w-4 h-4 text-white transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full mt-1 w-full bg-white rounded-lg shadow-lg overflow-hidden z-10 border border-gray-100">
                    <button
                      onClick={() =>
                        handleRoleSelect("CDRRMO Officer")
                      }
                      className="w-full px-4 py-3 text-left font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] hover:bg-[#dae7f8] transition-colors flex items-center gap-3"
                    >
                      <svg
                        className="w-5 h-5 text-[#163b56]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      CDRRMO Officer
                    </button>
                    <button
                      onClick={() =>
                        handleRoleSelect("ComCen Staff")
                      }
                      className="w-full px-4 py-3 text-left font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] hover:bg-[#dae7f8] transition-colors flex items-center gap-3"
                    >
                      <svg
                        className="w-5 h-5 text-[#163b56]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      ComCen Staff
                    </button>
                  </div>
                )}
              </div>

              {/* Username Input */}
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder=" "
                  className="w-full h-[44px] bg-[#ECF6FE] px-[16px] pl-[45px] pt-[18px] pb-[6px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] outline-none focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all peer"
                />
                <label className="absolute left-[45px] top-[6px] text-[#163b56] text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[0.1em] pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[14px] peer-focus:top-[6px] peer-focus:translate-y-0 peer-focus:text-[10px]">
                  Username
                </label>
                <svg
                  className="absolute left-[16px] top-1/2 -translate-y-1/2 w-5 h-5 text-[#163b56]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" "
                  className="w-full h-[44px] bg-[#ECF6FE] px-[16px] pl-[45px] pr-[45px] pt-[18px] pb-[6px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] outline-none focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all peer"
                />
                <label className="absolute left-[45px] top-[6px] text-[#163b56] text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[0.1em] pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[14px] peer-focus:top-[6px] peer-focus:translate-y-0 peer-focus:text-[10px]">
                  Password
                </label>
                <svg
                  className="absolute left-[16px] top-1/2 -translate-y-1/2 w-5 h-5 text-[#163b56]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#163b56] hover:text-[#0b5ed0] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
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
                onClick={onRegisterClick}
                className="flex-1 h-[44px] px-[40px] bg-white border border-[#0b5ed0] border-solid rounded-[10px] font-['Poppins',sans-serif] font-bold text-[#0b5ed0] text-[14px] tracking-[0.2em] hover:bg-[#0b5ed0] hover:text-white transition-colors shadow-[0px_2px_8px_0px_rgba(11,94,208,0.3)]"
              >
                Register
              </button>
              <button
                onClick={handleLogin}
                disabled={!selectedRole || loading}
                className={`flex-1 h-[44px] px-[40px] rounded-[10px] font-['Poppins',sans-serif] font-bold text-white text-[14px] tracking-[0.2em] transition-colors shadow-[0px_2px_8px_0px_rgba(11,94,208,0.3)] flex items-center justify-center gap-2 ${
                  selectedRole && !loading
                    ? "bg-[#0b5ed0] hover:bg-[#094ba8] cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed opacity-60"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}