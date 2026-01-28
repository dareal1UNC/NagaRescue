import svgPathsSaru from "../imports/svg-yj7eu8etpg";
import svgPaths from "../imports/svg-e2vgxlsqn9";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
import imgSaruMonitoring from "figma:asset/b8d5a36a1d7d52967f5e054ab644c0094ca5b269.png";
import { useState } from "react";
import Navbar from "./Navbar";

interface NavbarProps {
  onNavigate?: (tab: string) => void;
  onLogout?: () => void;
}

interface SAruCardProps {
  id: string;
  type: string;
  status: string;
  statusColor: string;
  crewMembers: number;
  livesRescued: number;
  timeDeployed: string;
  members: { name: string; role: string }[];
}

export default function SaruMonitoring({ onNavigate, onLogout }: NavbarProps) {
  const [selectedUnit, setSelectedUnit] = useState(0);
  const [expandedOngoing, setExpandedOngoing] = useState(true);
  const [expandedIncoming, setExpandedIncoming] = useState(false);

  const saruUnits: SAruCardProps[] = [
    {
      id: "SARU-696969",
      type: "Boat Unit",
      status: "ACTIVE",
      statusColor: "#73D05E",
      crewMembers: 5,
      livesRescued: 5,
      timeDeployed: "2h 30m",
      members: [
        { name: "Daryl Adrian Bo", role: "Team Leader" },
        { name: "Rachelle Abada", role: "Medic" },
        { name: "Bryann Francisco", role: "Emergencies" },
        { name: "Gabriel Diego", role: "Transport" },
      ]
    },
    {
      id: "SARU-674824",
      type: "Boat Unit",
      status: "ACTIVE",
      statusColor: "#73D05E",
      crewMembers: 2,
      livesRescued: 8,
      timeDeployed: "20m",
      members: [
        { name: "John Smith", role: "Team Leader" },
        { name: "Maria Santos", role: "Medic" },
      ]
    },
    {
      id: "SARU-R64422",
      type: "Boat Unit",
      status: "STANDBY",
      statusColor: "#FFA500",
      crewMembers: 5,
      livesRescued: 0,
      timeDeployed: "2h 30m",
      members: [
        { name: "Pedro Cruz", role: "Team Leader" },
        { name: "Ana Garcia", role: "Medic" },
        { name: "Rico Tan", role: "Navigator" },
        { name: "Lisa Wong", role: "Rescue Diver" },
        { name: "Carlos Reyes", role: "Communications" },
      ]
    },
    {
      id: "SARU-076432",
      type: "Ground Unit",
      status: "OFFLINE",
      statusColor: "#FFA500",
      crewMembers: 4,
      livesRescued: 0,
      timeDeployed: "1h",
      members: [
        { name: "Miguel Lopez", role: "Team Leader" },
        { name: "Sara Mendoza", role: "Medic" },
        { name: "Jose Rivera", role: "Driver" },
        { name: "Elena Diaz", role: "Logistics" },
      ]
    },
  ];

  const unit = saruUnits[selectedUnit];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute w-full h-full object-cover opacity-10" src={imgSaruMonitoring} />
      </div>

      <Navbar userRole="cdrrmo" activeTab="saru" onNavigate={onNavigate} onLogout={onLogout} />

      <div className="relative z-10 flex gap-[20px] px-[30px] pt-[28px] pb-[28px] h-[calc(100vh-80px)]">
        {/* Left Panel - S.A.R.U List */}
        <div className="bg-white rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[280px] flex flex-col p-[24px]">
          <div className="font-['Poppins',sans-serif] font-bold text-[28px] text-black mb-[18px] leading-[32px]">S.A.R.U LIST</div>
          
          <div className="flex items-center justify-between mb-[15px]">
            <span className="font-['Poppins',sans-serif] text-[14px] text-black">Active Units</span>
            <span className="font-['Poppins',sans-serif] text-[12px] text-[#00000080] flex items-center gap-[6px] before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:bg-[#73D05E]">12 Active</span>
          </div>

          <div className="bg-[#dae7f8] flex items-center gap-[10px] h-[40px] px-[15px] rounded-[10px] mb-[18px]">
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 20 23">
              <path clipRule="evenodd" d={svgPaths.p39328600} fill="black" fillRule="evenodd" />
            </svg>
            <input
              type="text"
              placeholder="Search units..."
              className="flex-1 bg-transparent font-['Poppins',sans-serif] text-[13px] text-[rgba(0,0,0,0.3)] outline-none placeholder:text-[rgba(0,0,0,0.3)]"
            />
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col gap-[15px] custom-scrollbar">
            {saruUnits.map((unit, index) => (
              <button
                key={unit.id}
                onClick={() => setSelectedUnit(index)}
                className={`bg-white border-[1.5px] rounded-[15px] p-[15px] text-left transition-all hover:border-[#0b5ed0] ${
                  selectedUnit === index ? "border-[#0b5ed0]" : "border-[#00000020]"
                }`}
              >
                <div className="flex items-center gap-3 mb-[10px]">
                  <svg className="w-[36px] h-[36px] flex-shrink-0" fill="none" viewBox="0 0 50 50">
                    <path d={svgPathsSaru.pe581980} fill={unit.type === "Boat Unit" ? "#5FC9F3" : "#FFB800"} />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <div className="font-['Poppins',sans-serif] font-bold text-[16px] text-black leading-[18px]">#{unit.id}</div>
                    <div className="font-['Poppins',sans-serif] text-[12px] text-[#00000080] leading-[16px]">{unit.type}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[12px] mb-[6px]">
                  <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPathsSaru.p33a9dd00} fill="#000000" />
                  </svg>
                  <span className="font-['Poppins',sans-serif] text-black">{unit.crewMembers} Crew Members</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] mb-[6px]">
                  <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPathsSaru.p60bd380} fill="#000000" />
                  </svg>
                  <span className="font-['Poppins',sans-serif] text-black">{unit.livesRescued} Lives Rescued</span>
                </div>
                <div className="flex items-center gap-2 text-[12px]">
                  <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPathsSaru.p592ae00} fill="#000000" />
                  </svg>
                  <span className="font-['Poppins',sans-serif] text-black">{unit.timeDeployed} Deployed</span>
                </div>
                <div 
                  className="mt-[10px] px-3 py-1.5 rounded-[5px] text-[11px] font-['Poppins',sans-serif] font-bold text-center uppercase"
                  style={{ 
                    backgroundColor: unit.status === "ACTIVE" ? "#d4f4dd" : unit.status === "STANDBY" ? "#fff4d4" : unit.status === "OFFLINE" ? "#ffdddd" : "#ffdddd",
                    color: unit.status === "ACTIVE" ? "#193B11" : unit.status === "STANDBY" ? "#523500" : unit.status === "OFFLINE" ? "#422B00" : "#FFA500"
                  }}
                >
                  {unit.status}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Center - Main Content */}
        <div className="flex-1 flex flex-col gap-[20px] min-w-0">
          {/* Unit Details Header */}
          <div className="bg-white/80 border border-[rgba(103,103,103,0.3)] rounded-[30px] p-[24px]">
            <div className="flex items-center gap-4 mb-[24px]">
              <svg className="w-[56px] h-[56px]" fill="none" viewBox="0 0 50 50">
                <path d={svgPathsSaru.pe581980} fill={unit.type === "Boat Unit" ? "#5FC9F3" : "#FFB800"} />
              </svg>
              <div>
                <div className="font-['Poppins',sans-serif] font-bold text-[28px] text-black leading-[28px]">#{unit.id}</div>
                <div className="font-['Poppins',sans-serif] text-[16px] text-black leading-[20px]">{unit.type}</div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-[18px]">
              <div className="bg-[#eeeeee] rounded-[20px] p-[16px]">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPathsSaru.p2a637b00} fill={unit.statusColor} />
                  </svg>
                  <span className="font-['Poppins',sans-serif] text-[13px] text-black">Status</span>
                </div>
                <div className="font-['Poppins',sans-serif] font-bold text-[16px] text-black">
                  {unit.status === "ACTIVE" ? "Active Mission" : unit.status}
                </div>
              </div>

              <div className="bg-[#eeeeee] rounded-[20px] p-[16px]">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPathsSaru.p33a9dd00} fill="#5FC9F3" />
                  </svg>
                  <span className="font-['Poppins',sans-serif] text-[13px] text-black">Crew Member</span>
                </div>
                <div className="font-['Poppins',sans-serif] font-bold text-[16px] text-black">{unit.crewMembers} Members</div>
              </div>

              <div className="bg-[#eeeeee] rounded-[20px] p-[16px]">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPathsSaru.p60bd380} fill="#FE4848" />
                  </svg>
                  <span className="font-['Poppins',sans-serif] text-[13px] text-black">People Rescued</span>
                </div>
                <div className="font-['Poppins',sans-serif] font-bold text-[16px] text-black">{unit.livesRescued} People</div>
              </div>

              <div className="bg-[#eeeeee] rounded-[20px] p-[16px]">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPathsSaru.p592ae00} fill="#FFA500" />
                  </svg>
                  <span className="font-['Poppins',sans-serif] text-[13px] text-black">Deployment</span>
                </div>
                <div className="font-['Poppins',sans-serif] font-bold text-[16px] text-black">{unit.timeDeployed}</div>
              </div>
            </div>
          </div>

          {/* Operations - Two Narrow Columns Side-by-Side */}
          <div className="flex-1 grid grid-cols-2 gap-[20px] min-h-0">
            {/* Ongoing Operations - LEFT NARROW COLUMN */}
            <div className="bg-white rounded-[15px] border border-[#8C000F] p-[20px] overflow-y-auto custom-scrollbar">
              <div className="font-['Poppins',sans-serif] font-bold text-[20px] text-black mb-[18px]">Ongoing Operations</div>
              
              <div className="bg-white rounded-[15px] border border-[#00000040] p-[18px]">
                <div className="flex items-start justify-between mb-[12px]">
                  <div className="flex items-center gap-2">
                    <svg className="w-[36px] h-[36px]" fill="none" viewBox="0 0 50 50">
                      <path d={svgPathsSaru.p85a01500} fill="#5FC9F3" />
                    </svg>
                    <div className="font-['Poppins',sans-serif] font-bold text-[18px] text-black leading-[20px]">#H-564565</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-['Poppins',sans-serif] text-[11px] text-[#00000080] whitespace-nowrap">12m ago</span>
                    <button 
                      onClick={() => setExpandedOngoing(!expandedOngoing)}
                      className="flex items-center justify-center w-[28px] h-[28px] hover:opacity-70 transition-opacity"
                    >
                      <svg 
                        className={`w-full h-full transition-transform ${expandedOngoing ? '' : 'rotate-180'}`}
                        fill="none" 
                        viewBox="0 0 28 28"
                      >
                        <path d="M5.12925 18.9753L13.328 10.906C13.5069 10.729 13.7484 10.6298 14 10.6298C14.2516 10.6298 14.4931 10.729 14.672 10.906L22.8708 18.9735C23.0507 19.1504 23.293 19.2495 23.5454 19.2495C23.7977 19.2495 24.04 19.1504 24.22 18.9735C24.3086 18.8871 24.3791 18.7838 24.4272 18.6698C24.4753 18.5557 24.5001 18.4332 24.5001 18.3094C24.5001 18.1856 24.4753 18.0631 24.4272 17.949C24.3791 17.8349 24.3086 17.7317 24.22 17.6452L16.023 9.57775C15.4831 9.04763 14.7567 8.75062 14 8.75062C13.2433 8.75062 12.5169 9.04763 11.977 9.57775L3.78 17.6452C3.6911 17.7317 3.62043 17.8351 3.57217 17.9493C3.52392 18.0635 3.49905 18.1863 3.49905 18.3102C3.49905 18.4342 3.52392 18.557 3.57217 18.6712C3.62043 18.7854 3.6911 18.8888 3.78 18.9753C3.96 19.1521 4.20226 19.2512 4.45463 19.2512C4.70699 19.2512 4.94925 19.1521 5.12925 18.9753Z" fill="#676767" fillOpacity="0.3" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="text-[13px] space-y-[6px]">
                  <div className="font-['Poppins',sans-serif] text-black">
                    <span className="text-[#00000080]">Total members:</span> <span className="font-bold">15</span>
                  </div>
                  <div className="font-['Poppins',sans-serif] text-black">
                    <span className="text-[#00000080]">Sep. 23, 2025</span> 2:15 PM
                  </div>
                  <div className="font-['Poppins',sans-serif] text-black">
                    <span className="text-[#00000080]">Address:</span> 6th Street, Cokeville
                  </div>
                  {!expandedOngoing && (
                    <div className="font-['Poppins',sans-serif] text-black ml-[60px]">
                      Zone 6, San Felipe, Naga City
                    </div>
                  )}
                </div>

                {expandedOngoing && (
                  <>
                    <div className="text-[13px] space-y-[6px] mt-[6px]">
                      <div className="font-['Poppins',sans-serif] text-black ml-[60px]">
                        Zone 6, San Felipe, Naga City
                      </div>
                      <div className="font-['Poppins',sans-serif] text-black">
                        <span className="text-[#00000080]">To Consider:</span> 5 Pregnant
                      </div>
                      <div className="font-['Poppins',sans-serif] text-black">
                        <span className="text-[#00000080]">Phase:</span> <span className="font-bold">Transfer</span>
                      </div>
                    </div>

                    <div className="relative h-[220px] rounded-[15px] overflow-hidden mt-[12px]">
                      <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=122.200,11.150,122.355,11.240&layer=mapnik&marker=11.1949,122.2778"
                        className="absolute inset-0 w-full h-full rounded-[15px] border-0"
                        title="Naga City Map - Ongoing Operation"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Incoming Operations - RIGHT NARROW COLUMN */}
            <div className="bg-white rounded-[15px] border border-[#00000040] p-[20px] overflow-y-auto custom-scrollbar">
              <div className="font-['Poppins',sans-serif] font-bold text-[20px] text-black mb-[18px]">Incoming Operations</div>
              
              <div className="bg-white rounded-[15px] border border-[#00000040] p-[18px]">
                <div className="flex items-start justify-between mb-[12px]">
                  <div className="flex items-center gap-2">
                    <svg className="w-[36px] h-[36px]" fill="none" viewBox="0 0 50 50">
                      <path d={svgPathsSaru.p85a01500} fill="#5FC9F3" />
                    </svg>
                    <div className="font-['Poppins',sans-serif] font-bold text-[18px] text-black leading-[20px]">#H-123456</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-['Poppins',sans-serif] text-[11px] text-[#00000080] whitespace-nowrap">30m ago</span>
                    <button 
                      onClick={() => setExpandedIncoming(!expandedIncoming)}
                      className="flex items-center justify-center w-[28px] h-[28px] hover:opacity-70 transition-opacity"
                    >
                      <svg 
                        className={`w-full h-full transition-transform ${expandedIncoming ? '' : 'rotate-180'}`}
                        fill="none" 
                        viewBox="0 0 28 28"
                      >
                        <path d="M5.12925 18.9753L13.328 10.906C13.5069 10.729 13.7484 10.6298 14 10.6298C14.2516 10.6298 14.4931 10.729 14.672 10.906L22.8708 18.9735C23.0507 19.1504 23.293 19.2495 23.5454 19.2495C23.7977 19.2495 24.04 19.1504 24.22 18.9735C24.3086 18.8871 24.3791 18.7838 24.4272 18.6698C24.4753 18.5557 24.5001 18.4332 24.5001 18.3094C24.5001 18.1856 24.4753 18.0631 24.4272 17.949C24.3791 17.8349 24.3086 17.7317 24.22 17.6452L16.023 9.57775C15.4831 9.04763 14.7567 8.75062 14 8.75062C13.2433 8.75062 12.5169 9.04763 11.977 9.57775L3.78 17.6452C3.6911 17.7317 3.62043 17.8351 3.57217 17.9493C3.52392 18.0635 3.49905 18.1863 3.49905 18.3102C3.49905 18.4342 3.52392 18.557 3.57217 18.6712C3.62043 18.7854 3.6911 18.8888 3.78 18.9753C3.96 19.1521 4.20226 19.2512 4.45463 19.2512C4.70699 19.2512 4.94925 19.1521 5.12925 18.9753Z" fill="#676767" fillOpacity="0.3" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="text-[13px] space-y-[6px]">
                  <div className="font-['Poppins',sans-serif] text-black">
                    <span className="text-[#00000080]">Total members:</span> <span className="font-bold">15</span>
                  </div>
                  <div className="font-['Poppins',sans-serif] text-black">
                    <span className="text-[#00000080]">Sep. 23, 2025</span> 2:15 PM
                  </div>
                  <div className="font-['Poppins',sans-serif] text-black">
                    <span className="text-[#00000080]">Address:</span> 6th Street, Cokeville
                  </div>
                </div>

                {expandedIncoming && (
                  <>
                    <div className="text-[13px] space-y-[6px] mt-[6px]">
                      <div className="font-['Poppins',sans-serif] text-black ml-[60px]">
                        Zone 6, San Felipe, Naga City
                      </div>
                      <div className="font-['Poppins',sans-serif] text-black">
                        <span className="text-[#00000080]">To Consider:</span> 3 Elderly
                      </div>
                      <div className="font-['Poppins',sans-serif] text-black">
                        <span className="text-[#00000080]">Phase:</span> <span className="font-bold">Rescue</span>
                      </div>
                    </div>

                    <div className="relative h-[220px] rounded-[15px] overflow-hidden mt-[12px]">
                      <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=122.200,11.150,122.355,11.240&layer=mapnik&marker=11.1949,122.2778"
                        className="absolute inset-0 w-full h-full rounded-[15px] border-0"
                        title="Naga City Map - Incoming Operation"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Crew & Equipment */}
        <div className="bg-white rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[280px] flex flex-col p-[24px]">
          <div className="font-['Poppins',sans-serif] font-bold text-[22px] text-black mb-[24px]">Crew & Equipment</div>
          
          <div className="mb-[28px]">
            <div className="font-['Poppins',sans-serif] font-bold text-[18px] text-black mb-[15px]">Crew Members</div>
            <div className="flex flex-col gap-[12px]">
              {unit.members.map((member, index) => (
                <div key={index} className="flex justify-between items-start gap-2">
                  <span className="font-['Poppins',sans-serif] text-[14px] text-black leading-[18px] flex-1">{member.name}</span>
                  <span className="font-['Poppins',sans-serif] text-[12px] text-[#00000080] leading-[18px] whitespace-nowrap">{member.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-['Poppins',sans-serif] font-bold text-[18px] text-black mb-[15px]">Equipment</div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between items-center">
                <span className="font-['Poppins',sans-serif] text-[14px] text-black">Portable Boat</span>
                <span className="font-['Poppins',sans-serif] font-bold text-[14px] text-black">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-['Poppins',sans-serif] text-[14px] text-black">Rope</span>
                <span className="font-['Poppins',sans-serif] font-bold text-[14px] text-black">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-['Poppins',sans-serif] text-[14px] text-black">Chainsaw</span>
                <span className="font-['Poppins',sans-serif] font-bold text-[14px] text-black">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-['Poppins',sans-serif] text-[14px] text-black">Medic Kit</span>
                <span className="font-['Poppins',sans-serif] font-bold text-[14px] text-black">4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-['Poppins',sans-serif] text-[14px] text-black">Entonox</span>
                <span className="font-['Poppins',sans-serif] font-bold text-[14px] text-black">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-['Poppins',sans-serif] text-[14px] text-black">Rigging System</span>
                <span className="font-['Poppins',sans-serif] font-bold text-[14px] text-black">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}