import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-e2vgxlsqn9";
import darylprofile from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";

function MaterialSymbolsEmergencyShareOutlineRounded() {
  return (
    <div className="w-[35px] h-[35px] md:w-[45px] md:h-[45px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 65 65"
      >
        <g
          filter="url(#filter0_i_5_1355)"
          id="material-symbols:emergency-share-outline-rounded"
        >
          <path
            d={svgPaths.p1f77d280}
            fill="var(--fill-0, #0B5ED0)"
            id="Vector"
          />
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="69"
            id="filter0_i_5_1355"
            width="65"
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
              result="effect1_innerShadow_5_1355"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="flex items-center gap-1.5 md:gap-2">
      <MaterialSymbolsEmergencyShareOutlineRounded />
      <div>
        <div className="[text-shadow:rgba(0,0,0,0.25)_0px_8px_4px] font-['Poppins',sans-serif] font-bold text-[#0b5ed0] text-[20px] md:text-[28px] leading-[16px] md:leading-[20px]">
          NAGA
        </div>
        <div className="font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[8px] md:text-[10px] tracking-[4px] md:tracking-[6px] leading-[14px] md:leading-[18px]">
          RESCUE
        </div>
      </div>
    </div>
  );
}

interface NavbarProps {
  userRole: "cdrrmo" | "comcen";
  activeTab: string;
  onNavigate?: (tab: string) => void;
  onLogout?: () => void;
}

export default function Navbar({
  userRole,
  activeTab,
  onNavigate,
  onLogout,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
    useState(false);
  const [displayName, setDisplayName] = useState("User");

  // Load user data and format display name
  useEffect(() => {
    const storedUser = localStorage.getItem("webAdmin");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const fullName = userData.fullName || "";
      const nameParts = fullName.trim().split(" ");
      
      if (nameParts.length >= 2) {
        // First name + first letter of last name
        const firstName = nameParts[0];
        const lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
        setDisplayName(`${firstName} ${lastInitial}.`);
      } else if (nameParts.length === 1 && nameParts[0]) {
        setDisplayName(nameParts[0]);
      } else if (userData.username) {
        setDisplayName(userData.username);
      }
    }
  }, []);

  const handleTabClick = (tab: string) => {
    if (onNavigate) onNavigate(tab);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="bg-white h-[60px] md:h-[80px] w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] flex items-center justify-between px-4 md:px-8 lg:px-[60px]">
        <Badge />

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#0b5ed0"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-[20px]">
          {/* Home button - CDRRMO only */}
          {userRole === "cdrrmo" && (
            <button
              onClick={() => handleTabClick("home")}
              className={`flex items-center gap-1.5 px-[8px] py-[6px] rounded-[8px] ${
                activeTab === "home" ? "bg-[#0b5ed0]" : ""
              }`}
            >
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p9358770}
                  fill={
                    activeTab === "home" ? "#FFFFFF" : "#0B5ED0"
                  }
                  fillRule="evenodd"
                />
              </svg>
              <span
                className="font-['Poppins',sans-serif] text-[16px]"
                style={{
                  color:
                    activeTab === "home"
                      ? "#FFFFFF"
                      : "#0b5ed0",
                }}
              >
                Home
              </span>
            </button>
          )}

          {/* Barangay button - Both roles */}
          <button
            onClick={() => handleTabClick("barangay")}
            className={`flex items-center gap-1.5 px-[8px] py-[6px] rounded-[8px] ${
              activeTab === "barangay" ? "bg-[#0b5ed0]" : ""
            }`}
          >
            <svg
              className="w-[20px] h-[20px]"
              fill="none"
              viewBox="0 0 30 30"
            >
              <path
                d={svgPaths.p88e0b80}
                stroke={
                  activeTab === "barangay"
                    ? "#FFFFFF"
                    : "#0B5ED0"
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </svg>
            <span
              className="font-['Poppins',sans-serif] text-[16px]"
              style={{
                color:
                  activeTab === "barangay"
                    ? "#FFFFFF"
                    : "#0b5ed0",
              }}
            >
              Barangay
            </span>
          </button>

          {/* S.A.R.U button - Both roles */}
          <button
            onClick={() => handleTabClick("saru")}
            className={`flex items-center gap-1.5 px-[8px] py-[6px] rounded-[8px] ${
              activeTab === "saru" ? "bg-[#0b5ed0]" : ""
            }`}
          >
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              viewBox="0 0 25 25"
            >
              <g clipPath="url(#clip0_5_1361)">
                <path
                  clipRule="evenodd"
                  d={svgPaths.p249e8920}
                  fill={
                    activeTab === "saru" ? "#FFFFFF" : "#0B5ED0"
                  }
                  fillRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_1361">
                  <rect fill="white" height="25" width="25" />
                </clipPath>
              </defs>
            </svg>
            <span
              className="font-['Poppins',sans-serif] text-[16px]"
              style={{
                color:
                  activeTab === "saru" ? "#FFFFFF" : "#0b5ed0",
              }}
            >
              S.A.R.U
            </span>
          </button>

          {/* Evacuation button - CDRRMO only */}
          {userRole === "cdrrmo" && (
            <button
              onClick={() => handleTabClick("evacuation")}
              className={`flex items-center gap-1.5 px-[8px] py-[6px] rounded-[8px] ${
                activeTab === "evacuation" ? "bg-[#0b5ed0]" : ""
              }`}
            >
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                viewBox="0 0 23 23"
              >
                <path
                  d={svgPaths.p101ab280}
                  stroke={
                    activeTab === "evacuation"
                      ? "#FFFFFF"
                      : "#0B5ED0"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.pab4a200}
                  stroke={
                    activeTab === "evacuation"
                      ? "#FFFFFF"
                      : "#0B5ED0"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <span
                className="font-['Poppins',sans-serif] text-[16px]"
                style={{
                  color:
                    activeTab === "evacuation"
                      ? "#FFFFFF"
                      : "#0b5ed0",
                }}
              >
                Evacuation
              </span>
            </button>
          )}

          {/* Reports button - Both roles */}
          <button
            onClick={() => handleTabClick("reports")}
            className={`flex items-center gap-1.5 px-[8px] py-[6px] rounded-[8px] ${
              activeTab === "reports" ? "bg-[#0b5ed0]" : ""
            }`}
          >
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              viewBox="0 0 17 22"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p12a5da80}
                fill={
                  activeTab === "reports"
                    ? "#FFFFFF"
                    : "#0B5ED0"
                }
                fillRule="evenodd"
              />
            </svg>
            <span
              className="font-['Poppins',sans-serif] text-[16px]"
              style={{
                color:
                  activeTab === "reports"
                    ? "#FFFFFF"
                    : "#0b5ed0",
              }}
            >
              Reports
            </span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-[8px] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() =>
                setIsProfileDropdownOpen(!isProfileDropdownOpen)
              }
            >
              <img
                alt=""
                className="w-[28px] h-[28px] rounded-full"
                src={darylprofile}
              />
              <span className="font-['Poppins',sans-serif] text-[#0b5ed0] text-[16px]">
                {displayName}
              </span>
              <svg
                className={`w-[18px] h-[18px] transition-transform ${isProfileDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M7 10L12 15L17 10H7Z" fill="#0B5ED0" />
              </svg>
            </button>

            {isProfileDropdownOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-[200px] bg-white rounded-[10px] shadow-[0px_4px_10px_rgba(0,0,0,0.15)] overflow-hidden z-50 py-[8px]">
                <button
                  className="w-full h-[40px] hover:bg-[#dae7f8] transition-colors text-left px-[20px] font-['Poppins',sans-serif] text-[#333333] text-[14px] flex items-center gap-[12px]"
                  onClick={() => {
                    setIsProfileDropdownOpen(false);
                    onNavigate?.("profile");
                  }}
                >
                  <svg
                    className="w-[18px] h-[18px]"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                      fill="#0B5ED0"
                    />
                  </svg>
                  Profile
                </button>
                <button
                  className="w-full h-[40px] hover:bg-[#dae7f8] transition-colors text-left px-[20px] font-['Poppins',sans-serif] text-[#333333] text-[14px] flex items-center gap-[12px]"
                  onClick={() => {
                    setIsProfileDropdownOpen(false);
                    // Handle help center click if needed
                  }}
                >
                  <svg
                    className="w-[18px] h-[18px]"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z"
                      fill="#0B5ED0"
                    />
                  </svg>
                  Help Center
                </button>
                <div className="w-full h-[1px] bg-[#E0E0E0] my-[4px]" />
                <button
                  className="w-full h-[40px] hover:bg-[#dae7f8] transition-colors text-left px-[20px] font-['Poppins',sans-serif] text-[#333333] text-[14px] flex items-center gap-[12px]"
                  onClick={() => {
                    setIsProfileDropdownOpen(false);
                    if (onLogout) onLogout();
                  }}
                >
                  <svg
                    className="w-[18px] h-[18px]"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.59L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"
                      fill="#0B5ED0"
                    />
                  </svg>
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 right-0 bg-white shadow-lg z-50 p-4 flex flex-col gap-2">
          {userRole === "cdrrmo" && (
            <button
              onClick={() => handleTabClick("home")}
              className={`flex items-center gap-2 px-4 py-3 rounded-[8px] ${
                activeTab === "home" ? "bg-[#0b5ed0]" : ""
              }`}
            >
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p9358770}
                  fill={
                    activeTab === "home" ? "#FFFFFF" : "#0B5ED0"
                  }
                  fillRule="evenodd"
                />
              </svg>
              <span
                className="font-['Poppins',sans-serif] text-[16px]"
                style={{
                  color:
                    activeTab === "home"
                      ? "#FFFFFF"
                      : "#0b5ed0",
                }}
              >
                Home
              </span>
            </button>
          )}

          <button
            onClick={() => handleTabClick("barangay")}
            className={`flex items-center gap-2 px-4 py-3 rounded-[8px] ${
              activeTab === "barangay" ? "bg-[#0b5ed0]" : ""
            }`}
          >
            <svg
              className="w-[20px] h-[20px]"
              fill="none"
              viewBox="0 0 30 30"
            >
              <path
                d={svgPaths.p88e0b80}
                stroke={
                  activeTab === "barangay"
                    ? "#FFFFFF"
                    : "#0B5ED0"
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </svg>
            <span
              className="font-['Poppins',sans-serif] text-[16px]"
              style={{
                color:
                  activeTab === "barangay"
                    ? "#FFFFFF"
                    : "#0b5ed0",
              }}
            >
              Barangay
            </span>
          </button>

          <button
            onClick={() => handleTabClick("saru")}
            className={`flex items-center gap-2 px-4 py-3 rounded-[8px] ${
              activeTab === "saru" ? "bg-[#0b5ed0]" : ""
            }`}
          >
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              viewBox="0 0 25 25"
            >
              <g clipPath="url(#clip0_5_1361_mobile)">
                <path
                  clipRule="evenodd"
                  d={svgPaths.p249e8920}
                  fill={
                    activeTab === "saru" ? "#FFFFFF" : "#0B5ED0"
                  }
                  fillRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_1361_mobile">
                  <rect fill="white" height="25" width="25" />
                </clipPath>
              </defs>
            </svg>
            <span
              className="font-['Poppins',sans-serif] text-[16px]"
              style={{
                color:
                  activeTab === "saru" ? "#FFFFFF" : "#0b5ed0",
              }}
            >
              S.A.R.U
            </span>
          </button>

          {userRole === "cdrrmo" && (
            <button
              onClick={() => handleTabClick("evacuation")}
              className={`flex items-center gap-2 px-4 py-3 rounded-[8px] ${
                activeTab === "evacuation" ? "bg-[#0b5ed0]" : ""
              }`}
            >
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                viewBox="0 0 23 23"
              >
                <path
                  d={svgPaths.p101ab280}
                  stroke={
                    activeTab === "evacuation"
                      ? "#FFFFFF"
                      : "#0B5ED0"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.pab4a200}
                  stroke={
                    activeTab === "evacuation"
                      ? "#FFFFFF"
                      : "#0B5ED0"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <span
                className="font-['Poppins',sans-serif] text-[16px]"
                style={{
                  color:
                    activeTab === "evacuation"
                      ? "#FFFFFF"
                      : "#0b5ed0",
                }}
              >
                Evacuation
              </span>
            </button>
          )}

          <button
            onClick={() => handleTabClick("reports")}
            className={`flex items-center gap-2 px-4 py-3 rounded-[8px] ${
              activeTab === "reports" ? "bg-[#0b5ed0]" : ""
            }`}
          >
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              viewBox="0 0 17 22"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p12a5da80}
                fill={
                  activeTab === "reports"
                    ? "#FFFFFF"
                    : "#0B5ED0"
                }
                fillRule="evenodd"
              />
            </svg>
            <span
              className="font-['Poppins',sans-serif] text-[16px]"
              style={{
                color:
                  activeTab === "reports"
                    ? "#FFFFFF"
                    : "#0b5ed0",
              }}
            >
              Reports
            </span>
          </button>
        </div>
      )}
    </>
  );
}