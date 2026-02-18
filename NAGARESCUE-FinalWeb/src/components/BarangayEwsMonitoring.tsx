import svgPaths from "../imports/svg-ssf89hyup6";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
import imgDashboardCdrrmo from "figma:asset/b8d5a36a1d7d52967f5e054ab644c0094ca5b269.png";
import { useState } from "react";
import Navbar from "./Navbar";

interface NavbarProps {
  onNavigate: (tab: string) => void;
  onLogout?: () => void;
}

function BarangayCard({
  type,
  area,
  zone,
  color,
  textColor,
}: ZoneAlertProps) {
  return (
    <div className="relative flex-shrink-0 h-[145px] w-full bg-[#dae7f8] rounded-[10px] pt-[16px] pb-[16px] pl-[24px] pr-[20px] flex gap-[16px]">
      {/* Left Section - Alert Level - Fixed Width */}
      <div className="flex flex-col items-center justify-center w-[100px] flex-shrink-0 gap-[6px]">
        <div
          className={`font-['Poppins',sans-serif] font-bold ${textColor} text-[30px] leading-[40px] text-center`}
        >
          {type}
        </div>
        <div className="font-['Poppins',sans-serif] text-[#163b56] text-[11px] leading-[14px] text-center tracking-[0.3px]">
          Alert Level
        </div>
      </div>

      {/* Right Section - Details and Button - Fixed Left Alignment */}
      <div className="flex-1 flex flex-col justify-between min-w-0 pt-[2px]">
        {/* Text Content */}
        <div className="flex flex-col gap-[10px]">
          <div className="font-['Poppins',sans-serif] font-semibold text-[15px] leading-[20px] tracking-[0.5px] text-black">
            {area}
          </div>
          <div className="font-['Poppins',sans-serif] text-[13px] leading-[18px] tracking-[0.3px] text-black break-words">
            {zone}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-start pb-[2px]">
          <button className="bg-[#0b5ed0] h-[28px] px-[18px] rounded-[5px] shadow-[0px_3px_8.4px_0px_rgba(0,0,0,0.25)] hover:bg-[#094a9e] transition-colors cursor-pointer flex items-center justify-center">
            <span className="font-['Poppins',sans-serif] text-[10px] text-white tracking-[0.8px] leading-[16px] whitespace-nowrap">
              VIEW LOCATION
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BarangayEwsMonitoring({
  onNavigate,
  onLogout,
}: NavbarProps & { onLogout?: () => void }) {
  const [barangayFilter, setBarangayFilter] =
    useState("Barangay");
  const [showDropdown, setShowDropdown] = useState(false);

  const nagaBarangays = [
    "Abella",
    "Bagumbayan Norte",
    "Bagumbayan Sur",
    "Balatas",
    "Bobadilla",
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

  const alerts = [
    {
      type: "RED",
      area: "Flooded Area",
      zone: "Zone 1, San Rafael, Cararayan",
      color: "bg-[#8c000f]",
      textColor: "text-[#8c000f]",
    },
    {
      type: "Yellow",
      area: "Low Area",
      zone: "Zone 2, San Rafael, Cararayan",
      color: "bg-[#f7d000]",
      textColor: "text-[#f7d000]",
    },
    {
      type: "Orange",
      area: "Flooded Area - Low Area",
      zone: "Zone 3, San Rafael, Cararayan",
      color: "bg-[orange]",
      textColor: "text-[orange]",
    },
    {
      type: "RED",
      area: "Flooded Area",
      zone: "Zone 4, San Rafael, Cararayan",
      color: "bg-[#8c000f]",
      textColor: "text-[#8c000f]",
    },
    {
      type: "Orange",
      area: "Flooded Area - Low Area",
      zone: "Zone 5, San Rafael, Cararayan",
      color: "bg-[orange]",
      textColor: "text-[orange]",
    },
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="absolute w-full h-full object-cover opacity-50"
          src={imgDashboardCdrrmo}
        />
      </div>

      <Navbar
        userRole="cdrrmo"
        activeTab="barangay"
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      <div className="relative z-10 flex gap-4 px-[30px] pt-[30px] pb-[30px] h-[calc(100vh-80px)]">
        {/* Map Section - Full Width with Scroll */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30px] left-[30px] right-[30px] bottom-[30px] overflow-hidden rounded-[10px]">
            <style>
              {`
                iframe[title="Naga City Map - Barangay EWS Monitoring"] {
                  pointer-events: auto;
                }
              `}
            </style>
            <div className="absolute inset-0 rounded-[10px] overflow-hidden">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=122.200,11.150,122.355,11.240&layer=mapnik&marker=11.1949,122.2778`}
                className="absolute inset-0 w-full h-full rounded-[10px] border-0"
                title="Naga City Map - Barangay EWS Monitoring"
              />
            </div>



            {/* Map markers */}
            <div className="absolute left-[33%] top-[22%] size-[20px]">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path d={svgPaths.p793a380} fill="#FFA500" />
              </svg>
            </div>

            <div className="absolute left-[22%] top-[43%] size-[20px]">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path d={svgPaths.p793a380} fill="#FF0000" />
              </svg>
            </div>

            <div className="absolute left-[21%] top-[42%] size-[20px]">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path d={svgPaths.p793a380} fill="#FF0000" />
              </svg>
            </div>

            <div className="absolute left-[9%] top-[23%] size-[20px]">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path d={svgPaths.p793a380} fill="#676767" />
              </svg>
            </div>

            <div className="absolute left-[31%] top-[25%] size-[20px]">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path d={svgPaths.p793a380} fill="#676767" />
              </svg>
            </div>

            <div className="absolute left-[21%] top-[30%] size-[20px]">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path d={svgPaths.p793a380} fill="#FFFF00" />
              </svg>
            </div>

            {/* Radio towers */}
            <div className="absolute left-[44%] top-[28%] h-[120px] w-[120px]">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 173 177"
              >
                <ellipse
                  cx="86.5"
                  cy="88.5"
                  fill="#8C000F"
                  fillOpacity="0.16"
                  rx="86.5"
                  ry="88.5"
                />
                <path d={svgPaths.p1e53b900} fill="#8C000F" />
              </svg>
            </div>

            <div className="absolute left-[42%] top-[58%] h-[120px] w-[120px]">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 173 177"
              >
                <ellipse
                  cx="86.5"
                  cy="88.5"
                  fill="#8C000F"
                  fillOpacity="0.16"
                  rx="86.5"
                  ry="88.5"
                />
                <path d={svgPaths.p1e53b900} fill="#8C000F" />
              </svg>
            </div>

            <div className="absolute left-[76%] top-[42%] h-[120px] w-[120px]">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 173 177"
              >
                <ellipse
                  cx="86.5"
                  cy="88.5"
                  fill="#FFFF00"
                  fillOpacity="0.19"
                  rx="86.5"
                  ry="88.5"
                />
                <path d={svgPaths.p1e53b900} fill="#E6C700" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Panel - Zone Alerts as Overlay */}
        <div className="absolute left-[30px] top-[58px] bottom-[30px] bg-white rounded-[10px] shadow-[1px_4px_11.5px_0px_rgba(0,0,0,0.25)] w-[440px] flex flex-col pointer-events-auto z-20">
          <div className="relative">
            <div
              className="bg-[#dae7f8] flex items-center justify-center gap-[15px] h-[70px] px-[28px] py-[12px] rounded-t-[10px] cursor-pointer hover:bg-[#cfdcf0] transition-colors"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <svg
                className="w-[26px] h-[26px]"
                fill="none"
                viewBox="0 0 30 30"
              >
                <path
                  d={svgPaths.p88e0b80}
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
              </svg>
              <div className="flex-1 font-['Poppins',sans-serif] text-[20px] text-black tracking-[3px]">
                {barangayFilter}
              </div>
              <svg
                className={`w-[28px] h-[28px] transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 35 35"
              >
                <path d={svgPaths.p1666cd00} fill="black" />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg max-h-[300px] overflow-y-auto z-30 border border-gray-200">
                {/* Select All Option */}
                <button
                  onClick={() => {
                    setBarangayFilter("All Barangays");
                    setShowDropdown(false);
                  }}
                  className="w-full px-[28px] py-[12px] text-left font-['Poppins',sans-serif] text-[16px] text-black tracking-[1px] hover:bg-[#dae7f8] transition-colors border-b border-gray-200"
                >
                  All Barangays
                </button>
                
                {/* Individual Barangays */}
                {nagaBarangays.map((brgy) => (
                  <button
                    key={brgy}
                    onClick={() => {
                      setBarangayFilter(brgy);
                      setShowDropdown(false);
                    }}
                    className="w-full px-[28px] py-[12px] text-left font-['Poppins',sans-serif] text-[16px] text-black tracking-[1px] hover:bg-[#dae7f8] transition-colors"
                  >
                    {brgy}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-[3px] border-[#dae7f8] border-t-0 mx-[18px] rounded-b-[10px] p-[15px] flex flex-col flex-1 overflow-y-auto gap-[10px] custom-scrollbar">
            {alerts.map((alert, index) => (
              <BarangayCard key={index} {...alert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}