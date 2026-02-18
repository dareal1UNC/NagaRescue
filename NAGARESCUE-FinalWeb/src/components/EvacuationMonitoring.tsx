import svgPaths from "../imports/svg-zqepomte28";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
import imgEvacuationMonitoring from "figma:asset/b8d5a36a1d7d52967f5e054ab644c0094ca5b269.png";
import { useState } from "react";
import Navbar from "./Navbar";

interface NavbarProps {
  onNavigate?: (tab: string) => void;
  onLogout?: () => void;
}

interface EvacuationCenterData {
  name: string;
  zone: string;
  available: number;
  capacity: number;
  id: string;
  onViewLocation: (id: string) => void;
}

function EvacuationCenterCard({
  name,
  zone,
  available,
  capacity,
  id,
  onViewLocation,
}: EvacuationCenterData) {
  return (
    <div className="relative flex-shrink-0 h-[145px] w-full bg-[#dae7f8] rounded-[10px] flex gap-[12px] p-[16px]">
      <div className="flex gap-[12px]">
        <div className="flex flex-col items-center justify-center min-w-[60px]">
          <div className="font-['Poppins',sans-serif] font-bold text-[24px] text-black leading-[28px]">
            {available}
          </div>
          <div className="font-['Poppins',sans-serif] text-[#163b56] text-[11px] tracking-[0.5px] leading-[16px]">
            Available
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-w-[60px]">
          <div className="font-['Poppins',sans-serif] font-bold text-[24px] text-black leading-[28px]">
            {capacity}
          </div>
          <div className="font-['Poppins',sans-serif] text-[#163b56] text-[11px] tracking-[0.5px] leading-[16px]">
            Capacity
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-[10px] min-w-0 self-center">
        <div className="flex flex-col gap-[8px]">
          <div className="font-['Poppins',sans-serif] font-bold text-black text-[13px] tracking-[0.8px] leading-[18px] break-words">
            {name}
          </div>
          <div className="font-['Poppins',sans-serif] text-black text-[12px] tracking-[0.6px] leading-[17px] break-words">
            {zone}
          </div>
        </div>

        <div className="flex justify-start ">
          <button
            onClick={() => onViewLocation(id)}
            className="bg-[#0b5ed0] h-[28px] px-[16px] rounded-[5px] shadow-[0px_3px_8.4px_0px_rgba(0,0,0,0.25)] flex items-center justify-left hover:bg-[#094a9e] transition-colors"
          >
            <span className="font-['Poppins',sans-serif] text-white text-[10px] tracking-[1px] leading-[20px] whitespace-nowrap">
              VIEW LOCATION
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function EvacuationMonitoring({
  onNavigate,
  onLogout,
}: NavbarProps) {
  const [barangayFilter, setBarangayFilter] = useState("Barangay");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(
    null,
  );

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

  const handleViewLocation = (id: string) => {
    setSelectedLocation(id);
  };

  const evacuationCenters: EvacuationCenterData[] = [
    {
      name: "Sabang Elementary School",
      zone: "Zone 6, San Rafael, Sabang",
      available: 98,
      capacity: 120,
      id: "1",
      onViewLocation: handleViewLocation,
    },
    {
      name: "Sabang Barangay Hall",
      zone: "Zone 6, San Rafael, Sabang",
      available: 98,
      capacity: 120,
      id: "2",
      onViewLocation: handleViewLocation,
    },
    {
      name: "Multi-Purpose Hall",
      zone: "Zone 6, San Rafael, Sabang",
      available: 98,
      capacity: 120,
      id: "3",
      onViewLocation: handleViewLocation,
    },
    {
      name: "Sabang Elementary School",
      zone: "Zone 6, San Rafael, Sabang",
      available: 98,
      capacity: 120,
      id: "4",
      onViewLocation: handleViewLocation,
    },
    {
      name: "Sabang Elementary School",
      zone: "Zone 6, San Rafael, Sabang",
      available: 98,
      capacity: 120,
      id: "5",
      onViewLocation: handleViewLocation,
    },
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="absolute w-full h-full object-cover opacity-10"
          src={imgEvacuationMonitoring}
        />
      </div>

      <Navbar
        userRole="cdrrmo"
        activeTab="evacuation"
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      <div className="relative z-10 flex gap-4 px-[30px] pt-[28px] pb-[28px] h-[calc(100vh-80px)]">
        {/* Map Section - Full Width */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30px] left-[30px] right-[30px] bottom-[30px] overflow-hidden rounded-[10px]">
            <style>
              {`
                iframe[title="Naga City Map - Evacuation Monitoring"] {
                  pointer-events: auto;
                }
              `}
            </style>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=122.200,11.150,122.355,11.240&layer=mapnik&marker=11.1949,122.2778"
              className="absolute inset-0 w-full h-full rounded-[10px] border-0"
              title="Naga City Map - Evacuation Monitoring"
            />

            {/* Evacuation Center icons - Made larger for better visibility */}
            <div
              className={`absolute left-[25%] top-[20%] h-[35px] w-[42px] transition-all pointer-events-none z-10 ${selectedLocation === "1" ? "highlighted-pin" : ""}`}
            >
              <svg
                className="block size-full drop-shadow-lg"
                fill="none"
                viewBox="0 0 25 20"
              >
                <path d={svgPaths.p1fd86ef0} fill="#3287C4" />
              </svg>
            </div>

            <div
              className={`absolute left-[50%] top-[45%] h-[35px] w-[42px] transition-all pointer-events-none z-10 ${selectedLocation === "2" ? "highlighted-pin" : ""}`}
            >
              <svg
                className="block size-full drop-shadow-lg"
                fill="none"
                viewBox="0 0 25 20"
              >
                <path d={svgPaths.p1fd86ef0} fill="#3287C4" />
              </svg>
            </div>

            <div
              className={`absolute left-[60%] top-[65%] h-[35px] w-[42px] transition-all pointer-events-none z-10 ${selectedLocation === "3" ? "highlighted-pin" : ""}`}
            >
              <svg
                className="block size-full drop-shadow-lg"
                fill="none"
                viewBox="0 0 25 20"
              >
                <path d={svgPaths.p1fd86ef0} fill="#3287C4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Left Panel - Evacuation Info - Overlay */}
        <div className="absolute left-[30px] top-[58px] bottom-[30px] w-[440px] bg-white rounded-[10px] shadow-[-12px_12px_25px_0px_rgba(0,0,0,0.25)] flex flex-col z-20 pointer-events-auto">
          {/* Barangay Filter */}
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

          {/* Evacuation Centers List */}
          <div className="border-[3px] border-[#dae7f8] border-t-0 mx-[18px] rounded-b-[10px] p-[15px] flex flex-col flex-1 overflow-y-auto gap-[10px] custom-scrollbar">
            {evacuationCenters.map((center, index) => (
              <EvacuationCenterCard key={index} {...center} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}