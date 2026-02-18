import svgPaths from "../imports/svg-fl2gz0s2vc";
import imgRectangle1 from "figma:asset/ddaae69bc8d9d54dfd0ae02f4797f4fbbae65e00.png";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import RegistrationNotif from "./RegistrationNotif";

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

export default function RProfile({
  onBackClick,
  onLoginClick,
}: {
  onBackClick?: () => void;
  onLoginClick?: () => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [barangay, setBarangay] = useState("");
  const [showBarangayDropdown, setShowBarangayDropdown] =
    useState(false);
  const [registrationNotif, setRegistrationNotif] =
    useState(false);

  const barangays = [
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
    "Sta. Cruz",
    "Tabuco",
    "Tinago",
    "Triangulo",
  ];

  return (
    <div className="bg-white relative w-full min-h-screen overflow-auto">
      <Bg />
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen lg:gap-8 lg:px-8">
        {/* Left side - Logo */}
        <div className="w-full lg:w-[45%] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:min-h-screen">
          <Logo />
        </div>

        {/* Right side - Profile form */}
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

            {/* Personal Profile Section */}
            <div className="mb-6">
              <h2 className="font-['Poppins',sans-serif] font-bold text-black text-[24px] tracking-[0.1em] mb-6">
                PERSONAL PROFILE
              </h2>

              <div className="space-y-[16px]">
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-2 gap-[16px]">
                  <div className="relative">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) =>
                        setFirstName(e.target.value)
                      }
                      placeholder=" "
                      className="w-full h-[44px] bg-[#ECF6FE] px-[16px] pt-[18px] pb-[6px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] outline-none focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all peer"
                    />
                    <label className="absolute left-[16px] top-[6px] text-[#163b56] text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[0.1em] pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[14px] peer-focus:top-[6px] peer-focus:translate-y-0 peer-focus:text-[10px]">
                      First Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) =>
                        setLastName(e.target.value)
                      }
                      placeholder=" "
                      className="w-full h-[44px] bg-[#ECF6FE] px-[16px] pt-[18px] pb-[6px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] outline-none focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all peer"
                    />
                    <label className="absolute left-[16px] top-[6px] text-[#163b56] text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[0.1em] pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[14px] peer-focus:top-[6px] peer-focus:translate-y-0 peer-focus:text-[10px]">
                      Last Name
                    </label>
                  </div>
                </div>

                {/* Birthdate and Gender Row */}
                <div className="grid grid-cols-2 gap-[16px]">
                  <div className="relative">
                    <input
                      type="date"
                      value={birthdate}
                      onChange={(e) =>
                        setBirthdate(e.target.value)
                      }
                      placeholder=" "
                      aria-label="Birthdate"
                      title="Birthdate"
                      className="w-full h-[44px] bg-[#ECF6FE] px-[16px] pt-[18px] pb-[6px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] outline-none focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all [color-scheme:light] peer"
                    />
                    <label className="absolute left-[16px] top-[6px] text-[#163b56] text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[0.1em] pointer-events-none">
                      Birthdate
                    </label>
                  </div>

                  {/* Gender Radio Buttons */}
                  <div className="flex flex-col gap-1">
                    <label className="font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[10px] tracking-[0.1em] px-[16px]">
                      Gender
                    </label>
                    <div className="flex gap-4 px-[16px]">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={(e) =>
                              setGender(e.target.value)
                            }
                            className="appearance-none w-[20px] h-[20px] border-2 border-[#163b56] rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50"
                          />
                          {gender === "Male" && (
                            <div className="absolute w-[12px] h-[12px] bg-[#163b56] rounded-full pointer-events-none" />
                          )}
                        </div>
                        <span className="font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[13px] tracking-[0.1em]">
                          Male
                        </span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={(e) =>
                              setGender(e.target.value)
                            }
                            className="appearance-none w-[20px] h-[20px] border-2 border-[#163b56] rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50"
                          />
                          {gender === "Female" && (
                            <div className="absolute w-[12px] h-[12px] bg-[#163b56] rounded-full pointer-events-none" />
                          )}
                        </div>
                        <span className="font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[13px] tracking-[0.1em]">
                          Female
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Barangay Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setShowBarangayDropdown(
                        !showBarangayDropdown,
                      )
                    }
                    className="w-full h-[44px] bg-[#ECF6FE] px-[16px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] outline-none flex items-center justify-between focus:ring-2 focus:ring-[#0b5ed0] focus:ring-opacity-50 transition-all text-left"
                  >
                    <div className="flex flex-col">
                      {barangay && (
                        <span className="text-[#163b56] text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[0.1em]">
                          Barangay
                        </span>
                      )}
                      <span
                        className={
                          barangay
                            ? "text-[14px]"
                            : "text-[14px]"
                        }
                      >
                        {barangay || "Barangay"}
                      </span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-[#163b56]" />
                  </button>

                  {showBarangayDropdown && (
                    <div className="absolute top-full mt-1 w-full bg-white rounded-lg shadow-lg max-h-[300px] overflow-y-auto z-10 border border-gray-100">
                      {barangays.map((brgy) => (
                        <button
                          key={brgy}
                          onClick={() => {
                            setBarangay(brgy);
                            setShowBarangayDropdown(false);
                          }}
                          className="w-full px-4 py-3 text-left font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[14px] tracking-[0.1em] hover:bg-[#dae7f8] transition-colors"
                        >
                          {brgy}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-[14px] mt-8">
              <button
                onClick={onBackClick}
                className="flex-1 h-[44px] px-[40px] bg-white border border-[#0b5ed0] border-solid rounded-[10px] font-['Poppins',sans-serif] font-bold text-[#0b5ed0] text-[14px] tracking-[0.2em] hover:bg-[#0b5ed0] hover:text-white transition-colors shadow-[0px_2px_8px_0px_rgba(11,94,208,0.3)]"
              >
                Back
              </button>
              <button
                onClick={() => setRegistrationNotif(true)}
                className="flex-1 h-[44px] px-[40px] bg-[#0b5ed0] rounded-[10px] font-['Poppins',sans-serif] font-bold text-white text-[14px] tracking-[0.2em] hover:bg-[#094ba8] transition-colors shadow-[0px_2px_8px_0px_rgba(11,94,208,0.3)]"
              >
                Submit
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