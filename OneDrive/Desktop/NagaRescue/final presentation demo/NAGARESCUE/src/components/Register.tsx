import svgPaths from "../imports/svg-84s2yk3lph";
import imgRectangle1 from "figma:asset/ddaae69bc8d9d54dfd0ae02f4797f4fbbae65e00.png";
import { useState } from "react";
import RegistrationNotif from "./RegistrationNotif";

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
          <path d={svgPaths.pb867d80} fill="var(--fill-0, #0B5ED0)" id="Vector" />
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

export default function Register({ onLoginClick }: { onLoginClick?: () => void }) {
  const [registrationNotif, setRegistrationNotif] = useState(false);

  return (
    <div className="bg-white relative w-full min-h-screen overflow-auto">
      <Bg />
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left side - Logo */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:min-h-screen">
          <Logo />
        </div>

        {/* Right side - Registration form */}
        <div className="w-full lg:w-1/2 flex items-center justify-start p-4 sm:p-6 md:p-8 overflow-y-auto lg:min-h-screen">
          <div className="w-full max-w-[750px]">
            <div className="mb-4 sm:mb-6">
              <h1 className="font-['Poppins',sans-serif] font-bold text-[#163b56] text-3xl sm:text-4xl md:text-5xl tracking-[4px] sm:tracking-[5.5px] md:tracking-[6.5px] mb-2">
                Register
              </h1>
              <p className="font-['Poppins',sans-serif] text-black text-xs sm:text-sm tracking-[1px] sm:tracking-[1.5px]">
                Please Fill Up to register.
              </p>
            </div>

            {/* Personal Details Section */}
            <div className="mb-4 sm:mb-6">
              <h2 className="font-['Poppins',sans-serif] font-semibold text-black text-lg sm:text-xl md:text-2xl tracking-[2.5px] sm:tracking-[3px] md:tracking-[3.5px] mb-3 sm:mb-4">
                Personal Details
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {/* Firstname, Middlename, Lastname */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="Firstname"
                    className="bg-[#ecf6fe] px-3 sm:px-4 py-3 sm:py-4 md:py-5 rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-xs sm:text-sm tracking-[1px] sm:tracking-[1.5px] outline-none placeholder:text-[#163b56]"
                  />
                  <input
                    type="text"
                    placeholder="Middlename"
                    className="bg-[#ecf6fe] px-3 sm:px-4 py-3 sm:py-4 md:py-5 rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-xs sm:text-sm tracking-[1px] sm:tracking-[1.5px] outline-none placeholder:text-[#163b56]"
                  />
                  <input
                    type="text"
                    placeholder="Lastname"
                    className="bg-[#ecf6fe] px-3 sm:px-4 py-3 sm:py-4 md:py-5 rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-xs sm:text-sm tracking-[1px] sm:tracking-[1.5px] outline-none placeholder:text-[#163b56]"
                  />
                </div>

                {/* Contact Number, Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="bg-[#ecf6fe] px-3 sm:px-4 py-3 sm:py-4 md:py-5 rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-xs sm:text-sm tracking-[1px] sm:tracking-[1.5px] outline-none placeholder:text-[#163b56]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-[#ecf6fe] px-3 sm:px-4 py-3 sm:py-4 md:py-5 rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-xs sm:text-sm tracking-[1px] sm:tracking-[1.5px] outline-none placeholder:text-[#163b56]"
                  />
                </div>

                {/* Address */}
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full bg-[#ecf6fe] px-3 sm:px-4 py-3 sm:py-4 md:py-5 rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-xs sm:text-sm tracking-[1px] sm:tracking-[1.5px] outline-none placeholder:text-[#163b56]"
                />
              </div>
            </div>

            {/* Position Section */}
            <div className="mb-6 sm:mb-8">
              <h2 className="font-['Poppins',sans-serif] font-semibold text-black text-lg sm:text-xl md:text-2xl tracking-[2.5px] sm:tracking-[3px] md:tracking-[3.5px] mb-3 sm:mb-4">
                Position
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {/* Position, Employee ID */}
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="Position"
                    className="bg-[#ecf6fe] px-3 sm:px-4 py-3 sm:py-4 md:py-5 rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-xs sm:text-sm tracking-[1px] sm:tracking-[1.5px] outline-none placeholder:text-[#163b56]"
                  />
                  <input
                    type="text"
                    placeholder="Employee ID"
                    className="bg-[#ecf6fe] px-3 sm:px-4 py-3 sm:py-4 md:py-5 rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-xs sm:text-sm tracking-[1px] sm:tracking-[1.5px] outline-none placeholder:text-[#163b56]"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:gap-6 items-center mt-6 sm:mt-8">
              <button 
                onClick={() => setRegistrationNotif(true)}
                className="w-full max-w-[355px] h-[60px] sm:h-[68px] md:h-[76px] bg-[#0b5ed0] rounded-[5px] font-['Poppins',sans-serif] font-bold text-white text-lg sm:text-xl md:text-2xl tracking-[4px] sm:tracking-[5.2px] md:tracking-[6.4px] shadow-[-4px_4px_6.9px_-3px_inset_rgba(0,0,0,0.25)] hover:bg-[#2f7fb8] transition-colors">
                REGISTER
              </button>
              <button
                className="w-full max-w-[355px] h-[60px] sm:h-[68px] md:h-[76px] border border-[#0b5ed0] border-solid rounded-[5px] font-['Poppins',sans-serif] font-bold text-[#0b5ed0] text-lg sm:text-xl md:text-2xl tracking-[4px] sm:tracking-[5.2px] md:tracking-[6.4px] shadow-[-4px_4px_6.9px_-3px_inset_rgba(0,0,0,0.25)] hover:bg-[#0b5ed0] hover:text-white transition-colors"
                onClick={onLoginClick}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
      {registrationNotif && <RegistrationNotif onClose={() => {
        setRegistrationNotif(false);
        onLoginClick?.();
      }} />}
    </div>
  );
}