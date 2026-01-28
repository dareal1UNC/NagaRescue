import svgPaths from "../imports/svg-e2vgxlsqn9";
import imgMap from "figma:asset/f0dce76e64433df20143f7889f554a52c6c8cb01.png";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
import imgDashboardCdrrmo from "figma:asset/b8d5a36a1d7d52967f5e054ab644c0094ca5b269.png";
import svgPathsOrange from "../imports/svg-qgf4msy1hd";
import svgPathsRed from "../imports/svg-tzgm31xz2t";
import svgPathsYellow from "../imports/svg-lh30tskwr0";
import svgPathsEcDetails from "../imports/svg-2jh6l0snfi";
import { useState } from "react";
import Navbar from "./Navbar";

interface NavbarProps {
  onNavigate?: (tab: string) => void;
  onLogout?: () => void;
}

function BarangayCard({
  name,
  evacuation,
  rescuer,
  flooded,
  warningLevel,
  warningColor,
}: any) {
  return (
    <div className="bg-[#dae7f8] h-[95px] rounded-[10px] flex items-center px-4 relative">
      <div className="flex items-center gap-4 w-full">
        <div className="flex flex-col items-center min-w-[60px]">
          <div className="font-['Poppins',sans-serif] font-bold text-[36px] text-black leading-[36px]">
            {evacuation}
          </div>
          <div className="font-['Poppins',sans-serif] font-medium text-[#163b56] text-[12px] leading-[18px]">
            Evacuation
          </div>
        </div>

        <div className="flex flex-col items-center min-w-[60px]">
          <div className="font-['Poppins',sans-serif] font-bold text-[36px] text-black leading-[36px]">
            {rescuer}
          </div>
          <div className="font-['Poppins',sans-serif] font-medium text-[#163b56] text-[12px] leading-[18px]">
            Rescuer
          </div>
        </div>

        <div className="flex flex-col items-center min-w-[60px]">
          <div className="font-['Poppins',sans-serif] font-bold text-[36px] text-black leading-[36px]">
            {flooded}
          </div>
          <div className="font-['Poppins',sans-serif] font-medium text-[#163b56] text-[12px] leading-[18px]">
            Flooded
          </div>
        </div>

        <div className="flex flex-col flex-1 ml-2 gap-1">
          <div className="font-['Poppins',sans-serif] font-semibold text-black text-[11px] leading-[14px]">
            {name}
          </div>
          <div className="font-['Poppins',sans-serif] font-medium text-black text-[10px] leading-[14px]">
            Warning Level
          </div>
          <div
            className={`${warningColor} px-2 py-1 rounded-[5px] shadow-[0px_3px_8.4px_0px_rgba(0,0,0,0.25)] text-center`}
          >
            <div className="font-['Poppins',sans-serif] font-semibold text-[9px] text-black leading-[14px]">
              {warningLevel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ECDetailsProps {
  name: string;
  familyCapacity: number;
  individualCapacity: number;
  showerToilet: number;
  sleepingQuarter: number;
  healthCare: number;
  onClose: () => void;
}

function ECDetailsPopup({
  name,
  familyCapacity,
  individualCapacity,
  showerToilet,
  sleepingQuarter,
  healthCare,
  onClose,
}: ECDetailsProps) {
  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={onClose}
    >
      <div
        className="relative w-[340px] rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.3)] p-[24px] bg-[#dae7f8]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="font-['Poppins',sans-serif] font-semibold text-[20px] text-[#163b56] mb-[16px]">
          {name}
        </div>

        <div className="flex flex-col gap-[10px] mb-[16px]">
          <div className="flex justify-between items-center">
            <span className="font-['Poppins',sans-serif] text-[15px] text-[#163b56]">
              Family Capacity:
            </span>
            <span className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#163b56]">
              {familyCapacity}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-['Poppins',sans-serif] text-[15px] text-[#163b56]">
              Individual Capacity:
            </span>
            <span className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#163b56]">
              {individualCapacity}
            </span>
          </div>
        </div>

        <div className="border-t-2 border-[#163b56]/20 pt-[12px] flex flex-col gap-[8px]">
          <div className="flex justify-between items-center">
            <span className="font-['Poppins',sans-serif] text-[14px] text-[#163b56]">
              Shower & Toilet:
            </span>
            <span className="font-['Poppins',sans-serif] font-semibold text-[17px] text-[#163b56]">
              {showerToilet}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-['Poppins',sans-serif] text-[14px] text-[#163b56]">
              Sleeping Quarter:
            </span>
            <span className="font-['Poppins',sans-serif] font-semibold text-[17px] text-[#163b56]">
              {sleepingQuarter}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-['Poppins',sans-serif] text-[14px] text-[#163b56]">
              Health Care:
            </span>
            <span className="font-['Poppins',sans-serif] font-semibold text-[17px] text-[#163b56]">
              {healthCare}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AlertDetailsProps {
  location: string;
  households: number;
  individuals: number;
  alertLevel: string;
  status: string;
  onClose: () => void;
}

function AlertDetailsPopup({
  location,
  households,
  individuals,
  alertLevel,
  status,
  onClose,
}: AlertDetailsProps) {
  const bgColor =
    alertLevel === "RED"
      ? "#FFC6C6"
      : alertLevel === "ORANGE"
        ? "#FFE5CC"
        : "#FFFACD";

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={onClose}
    >
      <div
        className="relative w-[340px] rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.3)] p-[24px]"
        style={{ backgroundColor: bgColor }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="font-['Poppins',sans-serif] font-semibold text-[20px] text-[#163b56] mb-[16px]">
          {location}
        </div>

        <div className="flex flex-col gap-[10px] mb-[16px]">
          <div className="flex justify-between items-center">
            <span className="font-['Poppins',sans-serif] text-[15px] text-[#163b56]">
              Households:
            </span>
            <span className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#163b56]">
              {households}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-['Poppins',sans-serif] text-[15px] text-[#163b56]">
              Individuals:
            </span>
            <span className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#163b56]">
              {individuals}
            </span>
          </div>
        </div>

        <div className="border-t-2 border-[#163b56]/20 pt-[12px] flex justify-between items-center">
          <span className="font-['Poppins',sans-serif] text-[14px] text-[#163b56]">
            Alert Level:
          </span>
          <span className="font-['Poppins',sans-serif] font-semibold text-[17px] text-[#163b56]">
            {alertLevel}
          </span>
        </div>

        <div className="flex justify-between items-center mt-[8px]">
          <span className="font-['Poppins',sans-serif] text-[14px] text-[#163b56]">
            Status:
          </span>
          <span className="font-['Poppins',sans-serif] font-semibold text-[17px] text-[#163b56]">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function DashboardCdrrmo({
  onNavigate,
  onLogout,
}: NavbarProps) {
  const [mapFilter, setMapFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedEC, setSelectedEC] = useState<{
    name: string;
    familyCapacity: number;
    individualCapacity: number;
    showerToilet: number;
    sleepingQuarter: number;
    healthCare: number;
  } | null>(null);
  const [selectedAlert, setSelectedAlert] = useState<{
    location: string;
    households: number;
    individuals: number;
    alertLevel: string;
    status: string;
  } | null>(null);
  const [mapPosition, setMapPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - mapPosition.x,
      y: e.clientY - mapPosition.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    // Calculate new position
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    // Set boundaries to prevent dragging too far
    // Allow dragging within reasonable limits (25% of container size)
    const maxOffset = 140; // Maximum pixels to drag in any direction
    const minOffset = -140;

    setMapPosition({
      x: Math.max(minOffset, Math.min(maxOffset, newX)),
      y: Math.max(minOffset, Math.min(maxOffset, newY)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const evacuationCenters = [
    {
      id: 1,
      name: "CSNHS",
      familyCapacity: 150,
      individualCapacity: 25,
      showerToilet: 5,
      sleepingQuarter: 15,
      healthCare: 2,
    },
    {
      id: 2,
      name: "BNHS",
      familyCapacity: 120,
      individualCapacity: 30,
      showerToilet: 4,
      sleepingQuarter: 12,
      healthCare: 3,
    },
    {
      id: 3,
      name: "Elem School",
      familyCapacity: 100,
      individualCapacity: 20,
      showerToilet: 3,
      sleepingQuarter: 10,
      healthCare: 1,
    },
  ];

  const alerts = [
    {
      id: 1,
      location: "Purok 1, San Felipe",
      households: 12,
      individuals: 45,
      alertLevel: "YELLOW",
      status: "Monitoring",
    },
    {
      id: 2,
      location: "Zone 1, San Felipe",
      households: 25,
      individuals: 95,
      alertLevel: "ORANGE",
      status: "Alert",
    },
    {
      id: 3,
      location: "Flood Zone A, Dayangdang",
      households: 42,
      individuals: 158,
      alertLevel: "RED",
      status: "Evacuating",
    },
    {
      id: 4,
      location: "Critical Area 1, San Felipe",
      households: 38,
      individuals: 145,
      alertLevel: "RED",
      status: "Evacuating",
    },
  ];

  const barangays = [
    {
      name: "Barangay San Felipe",
      evacuation: 21,
      rescuer: 22,
      flooded: 2,
      warningLevel: "YELLOW",
      warningColor: "bg-[#fdf0b0]",
    },
    {
      name: "Barangay Cararayan",
      evacuation: 11,
      rescuer: 12,
      flooded: 3,
      warningLevel: "YELLOW",
      warningColor: "bg-[#fdf0b0]",
    },
    {
      name: "Barangay Del Rosario",
      evacuation: 12,
      rescuer: 15,
      flooded: 1,
      warningLevel: "GREEN",
      warningColor: "bg-[#b6dab2]",
    },
    {
      name: "Barangay Dayangdang",
      evacuation: 7,
      rescuer: 13,
      flooded: 6,
      warningLevel: "RED",
      warningColor: "bg-[#ffc6c6]",
    },
    {
      name: "Barangay Concepcion",
      evacuation: 15,
      rescuer: 18,
      flooded: 3,
      warningLevel: "YELLOW",
      warningColor: "bg-[#fdf0b0]",
    },
    {
      name: "Barangay Concepcion",
      evacuation: 15,
      rescuer: 18,
      flooded: 3,
      warningLevel: "YELLOW",
      warningColor: "bg-[#fdf0b0]",
    },
    {
      name: "Barangay Del Rosario",
      evacuation: 12,
      rescuer: 15,
      flooded: 1,
      warningLevel: "GREEN",
      warningColor: "bg-[#b6dab2]",
    },
    {
      name: "Barangay Del Rosario",
      evacuation: 12,
      rescuer: 15,
      flooded: 1,
      warningLevel: "GREEN",
      warningColor: "bg-[#b6dab2]",
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
        activeTab="home"
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      <div className="relative z-10 flex gap-4 pl-[30px] pr-[54px] pt-[28px] pb-[28px] h-[calc(100vh-80px)]">
        {/* Left Panel - Barangay List */}
        <div className="bg-white rounded-[10px] shadow-[1px_4px_11.5px_0px_rgba(0,0,0,0.25)] w-[440px] flex flex-col p-[15px]">
          <div className="bg-[#dae7f8] flex items-center gap-[10px] h-[40px] px-[15px] rounded-[10px] mb-[10px]">
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              viewBox="0 0 20 23"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p39328600}
                fill="black"
                fillRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search Anything"
              className="flex-1 bg-transparent font-['Poppins',sans-serif] text-[13px] text-[rgba(0,0,0,0.3)] outline-none placeholder:text-[rgba(0,0,0,0.3)]"
            />
          </div>

          <div className="border-[3px] border-[#dae7f8] rounded-[10px] p-[15px] flex-1 overflow-y-auto">
            <div className="flex flex-col gap-[10px]">
              {barangays.map((barangay, index) => (
                <BarangayCard key={index} {...barangay} />
              ))}
            </div>
          </div>
        </div>

        {/* Center - Map */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">
          <div className="relative bg-white rounded-[10px] border-2 border-[#0b5ed0] h-[560px] overflow-hidden">
            {/* Map Filter Dropdown - Fixed outside draggable area */}
            <div className="absolute top-[20px] left-[20px] z-50">
              <div className="relative">
                <button
                  onClick={() =>
                    setIsDropdownOpen(!isDropdownOpen)
                  }
                  className="bg-white h-[40px] px-[16px] rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] flex items-center gap-[10px] hover:bg-gray-50 transition-colors"
                >
                  <span className="font-['Poppins',sans-serif] text-[14px] text-[#163b56]">
                    {mapFilter}
                  </span>
                  <svg
                    className={`w-[16px] h-[16px] transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 10L12 15L17 10H7Z"
                      fill="#0B5ED0"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-[calc(100%+8px)] left-0 w-[200px] bg-white rounded-[8px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] overflow-hidden z-40">
                    <button
                      onClick={() => {
                        setMapFilter("All");
                        setIsDropdownOpen(false);
                      }}
                      className="w-full h-[40px] px-[16px] text-left font-['Poppins',sans-serif] text-[14px] text-[#163b56] hover:bg-[#dae7f8] transition-colors"
                    >
                      All
                    </button>
                    <button
                      onClick={() => {
                        setMapFilter("Evacuation Centers");
                        setIsDropdownOpen(false);
                      }}
                      className="w-full h-[40px] px-[16px] text-left font-['Poppins',sans-serif] text-[14px] text-[#163b56] hover:bg-[#dae7f8] transition-colors"
                    >
                      Evacuation Centers
                    </button>
                    <button
                      onClick={() => {
                        setMapFilter("Requests");
                        setIsDropdownOpen(false);
                      }}
                      className="w-full h-[40px] px-[16px] text-left font-['Poppins',sans-serif] text-[14px] text-[#163b56] hover:bg-[#dae7f8] transition-colors"
                    >
                      Requests
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Draggable Map Container */}
            <div
              className="absolute w-full h-full cursor-grab active:cursor-grabbing"
              style={{
                transform: `translate(${mapPosition.x}px, ${mapPosition.y}px)`,
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="absolute w-full h-full"
              >
                <style>
                  {`
                    iframe[title="Naga City Map"] {
                      pointer-events: auto;
                    }
                  `}
                </style>
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=122.200,11.150,122.355,11.240&layer=mapnik&marker=11.1949,122.2778"
                  className="absolute inset-0 w-full h-full rounded-[10px] border-0"
                  title="Naga City Map"
                />

                {/* Evacuation Centers - Blue House Icons (show when filter is "All" or "Evacuation Centers") */}
                {(mapFilter === "All" ||
                  mapFilter === "Evacuation Centers") && (
                  <>
                    <button
                      onClick={() =>
                        setSelectedEC(evacuationCenters[0])
                      }
                      className="absolute left-[20%] top-[25%] w-[28px] h-[28px] cursor-pointer hover:scale-110 transition-transform z-20 pointer-events-auto"
                    >
                      <svg
                        className="block size-full drop-shadow-lg"
                        fill="none"
                        viewBox="0 0 30 30"
                      >
                        <path
                          d={svgPaths.p88e0b80}
                          fill="#0B5ED0"
                          stroke="#0B5ED0"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>

                    <button
                      onClick={() =>
                        setSelectedEC(evacuationCenters[1])
                      }
                      className="absolute left-[45%] top-[35%] w-[28px] h-[28px] cursor-pointer hover:scale-110 transition-transform z-20 pointer-events-auto"
                    >
                      <svg
                        className="block size-full drop-shadow-lg"
                        fill="none"
                        viewBox="0 0 30 30"
                      >
                        <path
                          d={svgPaths.p88e0b80}
                          fill="#0B5ED0"
                          stroke="#0B5ED0"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>

                    <button
                      onClick={() =>
                        setSelectedEC(evacuationCenters[2])
                      }
                      className="absolute left-[70%] top-[30%] w-[28px] h-[28px] cursor-pointer hover:scale-110 transition-transform z-20 pointer-events-auto"
                    >
                      <svg
                        className="block size-full drop-shadow-lg"
                        fill="none"
                        viewBox="0 0 30 30"
                      >
                        <path
                          d={svgPaths.p88e0b80}
                          fill="#0B5ED0"
                          stroke="#0B5ED0"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {/* Request Pins - Yellow, Orange, Red (show when filter is "All" or "Requests") */}
                {(mapFilter === "All" ||
                  mapFilter === "Requests") && (
                  <>
                    {/* Yellow Alert Pin */}
                    <button
                      onClick={() => setSelectedAlert(alerts[0])}
                      className="absolute left-[35%] top-[50%] w-[25px] h-[25px] cursor-pointer hover:scale-110 transition-transform z-20 pointer-events-auto"
                    >
                      <svg
                        className="block size-full drop-shadow-lg"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 25 25"
                      >
                        <path
                          d={svgPathsYellow.p793a380}
                          fill="#FFFF00"
                        />
                      </svg>
                    </button>

                    {/* Orange Alert Pin */}
                    <button
                      onClick={() => setSelectedAlert(alerts[1])}
                      className="absolute left-[60%] top-[45%] w-[25px] h-[25px] cursor-pointer hover:scale-110 transition-transform z-20 pointer-events-auto"
                    >
                      <svg
                        className="block size-full drop-shadow-lg"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 25 25"
                      >
                        <path
                          d={svgPathsOrange.p793a380}
                          fill="#FFA500"
                        />
                      </svg>
                    </button>

                    {/* Red Alert Pins */}
                    <button
                      onClick={() => setSelectedAlert(alerts[2])}
                      className="absolute left-[15%] top-[65%] w-[25px] h-[25px] cursor-pointer hover:scale-110 transition-transform z-20 pointer-events-auto"
                    >
                      <svg
                        className="block size-full drop-shadow-lg"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 25 25"
                      >
                        <path
                          d={svgPathsRed.p793a380}
                          fill="#FF0000"
                        />
                      </svg>
                    </button>

                    <button
                      onClick={() => setSelectedAlert(alerts[3])}
                      className="absolute left-[50%] top-[70%] w-[25px] h-[25px] cursor-pointer hover:scale-110 transition-transform z-20 pointer-events-auto"
                    >
                      <svg
                        className="block size-full drop-shadow-lg"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 25 25"
                      >
                        <path
                          d={svgPathsRed.p793a380}
                          fill="#FF0000"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Show EC Details Popup */}
              {selectedEC && (
                <ECDetailsPopup
                  name={selectedEC.name}
                  familyCapacity={selectedEC.familyCapacity}
                  individualCapacity={
                    selectedEC.individualCapacity
                  }
                  showerToilet={selectedEC.showerToilet}
                  sleepingQuarter={selectedEC.sleepingQuarter}
                  healthCare={selectedEC.healthCare}
                  onClose={() => setSelectedEC(null)}
                />
              )}

              {/* Show Alert Details Popup */}
              {selectedAlert && (
                <AlertDetailsPopup
                  location={selectedAlert.location}
                  households={selectedAlert.households}
                  individuals={selectedAlert.individuals}
                  alertLevel={selectedAlert.alertLevel}
                  status={selectedAlert.status}
                  onClose={() => setSelectedAlert(null)}
                />
              )}
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <div className="bg-[#dae7f8] flex-1 h-[145px] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)] p-[18px]">
              <div className="font-['Poppins',sans-serif] font-bold text-[20px] text-[#163b56] mb-4">
                Evacuation Center Monitoring
              </div>
              <div className="flex items-center gap-6 justify-around">
                <div className="text-center">
                  <div className="font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[30px] leading-[30px]">
                    1,234
                  </div>
                  <div className="font-['Poppins',sans-serif] text-[15px] text-[#163b56] leading-[20px] mt-1">
                    <div>Evacuation Site</div>
                  </div>
                </div>
                <div className="h-[70px] w-[2px] bg-black/20" />
                <div className="text-center">
                  <div className="font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[30px] leading-[30px]">
                    711
                  </div>
                  <div className="font-['Poppins',sans-serif] text-[#163b56] text-[15px] leading-[20px] mt-1">
                    Household
                  </div>
                </div>
                <div className="h-[70px] w-[2px] bg-black/20" />
                <div className="text-center">
                  <div className="font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[30px] leading-[30px]">
                    1211
                  </div>
                  <div className="font-['Poppins',sans-serif] text-[#163b56] text-[15px] leading-[20px] mt-1">
                    Individual
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#dae7f8] flex-1 h-[145px] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)] p-[18px]">
              <div className="font-['Poppins',sans-serif] font-bold text-[20px] text-[#163b56] mb-4">
                S.A.R.U Operation
              </div>
              <div className="flex items-center gap-6 justify-around">
                <div className="text-center">
                  <div className="font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[30px] leading-[30px]">
                    123
                  </div>
                  <div className="font-['Poppins',sans-serif] text-[15px] text-[#163b56] leading-[20px] mt-1">
                    <div>Success Operation</div>
                  </div>
                </div>
                <div className="h-[70px] w-[2px] bg-black/20" />
                <div className="text-center">
                  <div className="font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[30px] leading-[30px]">
                    132
                  </div>
                  <div className="font-['Poppins',sans-serif] text-[#163b56] text-[15px] leading-[20px] mt-1">
                    Request
                  </div>
                </div>
                <div className="h-[70px] w-[2px] bg-black/20" />
                <div className="text-center">
                  <div className="font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[30px] leading-[30px]">
                    12
                  </div>
                  <div className="font-['Poppins',sans-serif] text-[#163b56] text-[15px] leading-[20px] mt-1">
                    Pending
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}