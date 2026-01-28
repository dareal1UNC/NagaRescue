import svgPaths from "../imports/svg-k0wjo8164k";
import loginSvgPaths from "../imports/svg-c29a8srkdw";
import imgRectangle1 from "figma:asset/ddaae69bc8d9d54dfd0ae02f4797f4fbbae65e00.png";
import { useState } from "react";

function Bg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" src={imgRectangle1} />
    </div>
  );
}

function MaterialSymbolsEmergencyShareOutlineRounded() {
  return (
    <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] mx-auto mb-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 393">
        <g filter="url(#filter0_i_5_26)" id="material-symbols:emergency-share-outline-rounded">
          <path d={loginSvgPaths.pb867d80} fill="var(--fill-0, #0B5ED0)" id="Vector" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="396.728" id="filter0_i_5_26" width="392.728" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_5_26" />
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
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_8px_4px] font-['Poppins',sans-serif] font-bold text-[#0b5ed0] mb-2">
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">NAGA</p>
      </div>
      <div className="font-['Poppins',sans-serif] font-bold text-[#2f7fb8]">
        <p className="text-2xl sm:text-3xl md:text-4xl">RESCUE</p>
      </div>
    </div>
  );
}

function PhUserBold() {
  return (
    <div className="shrink-0 size-[28px] sm:size-[32px] md:size-[38px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="ph:user-bold">
          <path d={svgPaths.p8d61e80} fill="var(--fill-0, #163B56)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiPasswordOutline() {
  return (
    <div className="shrink-0 size-[28px] sm:size-[32px] md:size-[38px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="mdi:password-outline">
          <path d={svgPaths.p2f76400} fill="var(--fill-0, #163B56)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiUserGroupOutline() {
  return (
    <div className="shrink-0 size-[28px] sm:size-[32px] md:size-[38px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g clipPath="url(#clip0_5_141)" id="mdi:user-group-outline">
          <path d={svgPaths.pc71d000} fill="var(--fill-0, #ECF6FE)" id="Vector" />
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
    <div className={`shrink-0 size-[24px] sm:size-[28px] md:size-[34px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="chevron-down 1">
          <path d={svgPaths.p31b11f80} fill="var(--fill-0, #ECF6FE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Login({ onRegisterClick, onLoginSuccess }: { onRegisterClick?: () => void; onLoginSuccess?: (role: string) => void }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setIsDropdownOpen(false);
  };

  const handleLogin = () => {
    if (selectedRole && onLoginSuccess) {
      onLoginSuccess(selectedRole);
    }
  };

  return (
    <div className="bg-white relative w-full min-h-screen overflow-auto">
      <Bg />
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left side - Logo */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:min-h-screen">
          <Logo />
        </div>

        {/* Right side - Login form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:min-h-screen">
          <div className="w-full max-w-[524px]">
            <div className="mb-4 sm:mb-6">
              <h1 className="font-['Poppins',sans-serif] font-bold text-[#163b56] text-3xl sm:text-4xl md:text-5xl tracking-[4px] sm:tracking-[5.5px] md:tracking-[6.5px] mb-2">
                Log In
              </h1>
              <p className="font-['Poppins',sans-serif] text-black text-xs sm:text-sm tracking-[1px] sm:tracking-[1.5px]">
                Please Select a User first.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {/* Login As Dropdown */}
              <div className="relative">
                <button
                  className="w-full bg-[#0b5ed0] flex gap-3 sm:gap-4 items-center px-3 sm:px-4 py-3 sm:py-4 md:py-5 rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] hover:bg-[#2f7fb8] transition-colors"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <MdiUserGroupOutline />
                  <div className="flex-1 text-left font-['Poppins',sans-serif] font-semibold text-[#ecf6fe] text-base sm:text-lg tracking-[1.5px] sm:tracking-[2px]">
                    {selectedRole ? selectedRole : "Log In As"}
                  </div>
                  <ChevronDown isOpen={isDropdownOpen} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 right-0 top-[calc(100%+25px)] flex flex-col rounded-[10px] overflow-hidden z-10">
                    <button
                      className="w-full bg-[#0b5ed0] flex gap-3 sm:gap-4 items-center px-3 sm:px-4 py-3 sm:py-4 md:py-5 shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] hover:bg-[#2f7fb8] transition-colors rounded-t-[10px]"
                      onClick={() => handleRoleSelect("CDRRMO Officer")}
                    >
                      <MdiUserGroupOutline />
                      <div className="flex-1 text-left font-['Poppins',sans-serif] font-semibold text-[#ecf6fe] text-base sm:text-lg tracking-[1.5px] sm:tracking-[2px]">
                        CDRRMO Officer
                      </div>
                    </button>
                    <button
                      className="w-full bg-[#0b5ed0] flex gap-3 sm:gap-4 items-center px-3 sm:px-4 py-3 sm:py-4 md:py-5 shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] hover:bg-[#2f7fb8] transition-colors rounded-b-[10px]"
                      onClick={() => handleRoleSelect("ComCen Staff")}
                    >
                      <MdiUserGroupOutline />
                      <div className="flex-1 text-left font-['Poppins',sans-serif] font-semibold text-[#ecf6fe] text-base sm:text-lg tracking-[1.5px] sm:tracking-[2px]">
                        ComCen Staff
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Username Input */}
              <div className="w-full bg-[#ecf6fe] flex gap-2 sm:gap-3 items-center opacity-80 px-3 sm:px-4 py-3 sm:py-4 md:py-5 rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)]">
                <PhUserBold />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="flex-1 bg-transparent font-['Poppins',sans-serif] font-semibold text-[#163b56] text-base sm:text-lg tracking-[1.5px] sm:tracking-[2px] outline-none placeholder:text-[#163b56]"
                />
              </div>

              {/* Password Input */}
              <div className="w-full bg-[#ecf6fe] flex gap-2 sm:gap-3 items-center opacity-80 px-3 sm:px-4 py-3 sm:py-4 md:py-5 rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)]">
                <MdiPasswordOutline />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 bg-transparent font-['Poppins',sans-serif] font-semibold text-[#163b56] text-base sm:text-lg tracking-[1.5px] sm:tracking-[2px] outline-none placeholder:text-[#163b56]"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:gap-6 items-center">
              <button
                className={`w-full max-w-[355px] h-[60px] sm:h-[68px] md:h-[76px] rounded-[5px] font-['Poppins',sans-serif] font-bold text-white text-lg sm:text-xl md:text-2xl tracking-[4px] sm:tracking-[5.2px] md:tracking-[6.4px] shadow-[-4px_4px_6.9px_-3px_inset_rgba(0,0,0,0.25)] transition-colors ${
                  selectedRole 
                    ? 'bg-[#0b5ed0] hover:bg-[#2f7fb8] cursor-pointer' 
                    : 'bg-gray-400 cursor-not-allowed opacity-60'
                }`}
                onClick={handleLogin}
                disabled={!selectedRole}
              >
                LOGIN
              </button>
              <button
                className="w-full max-w-[355px] h-[60px] sm:h-[68px] md:h-[76px] border border-[#0b5ed0] border-solid rounded-[5px] font-['Poppins',sans-serif] font-bold text-[#0b5ed0] text-lg sm:text-xl md:text-2xl tracking-[4px] sm:tracking-[5.2px] md:tracking-[6.4px] shadow-[-4px_4px_6.9px_-3px_inset_rgba(0,0,0,0.25)] hover:bg-[#0b5ed0] hover:text-white transition-colors"
                onClick={onRegisterClick}
              >
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}