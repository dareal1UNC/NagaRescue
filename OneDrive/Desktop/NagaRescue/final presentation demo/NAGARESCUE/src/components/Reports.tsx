import svgPaths from "../imports/svg-wjuznj59td";
import svgPathsTeam from "../imports/svg-yow2sejwbe";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
import imgDashboardCdrrmo from "figma:asset/b8d5a36a1d7d52967f5e054ab644c0094ca5b269.png";
import imgCertificate from "figma:asset/eceb4f03c3984c0a9beb713cfaff5dcfd22fee1c.png";
import { useState } from "react";
import { Search, X } from "lucide-react";
import Navbar from "./Navbar";

interface NavbarProps {
  onNavigate?: (tab: string) => void;
  onLogout?: () => void;
}

type ReportTab = "evacuation" | "rescue" | "user" | "unit";

interface ReportCard {
  id: string;
  name: string;
  barangay: string;
  family: string;
  individual: string;
}

interface RescueOperationRow {
  rescuerId: string;
  name: string;
  date: string;
  requestTime: string;
  address: string;
  transferTime: string;
  evacuationCenter: string;
}

interface UserApprovalRow {
  id: string;
  name: string;
  date: string;
  position: string;
  office: string;
  employeeId: string;
}

interface UnitRow {
  team: string;
  name: string;
  dateCreated: string;
  position: string;
  rescuerId: string;
  contactNo: string;
}

export default function Reports({
  onNavigate,
  onLogout,
}: NavbarProps) {
  const [activeReportTab, setActiveReportTab] =
    useState<ReportTab>("evacuation");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(3);
  const [selectedUser, setSelectedUser] = useState<UserApprovalRow | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddUnitModalOpen, setIsAddUnitModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<UnitRow | null>(null);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  const handleUserClick = (user: UserApprovalRow) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleOpenAddUnitModal = () => {
    setIsAddUnitModalOpen(true);
  };

  const handleCloseAddUnitModal = () => {
    setIsAddUnitModalOpen(false);
  };

  const handleUnitClick = (unit: UnitRow) => {
    setSelectedUnit(unit);
    setIsTeamModalOpen(true);
  };

  const handleCloseTeamModal = () => {
    setIsTeamModalOpen(false);
    setSelectedUnit(null);
  };

  const evacuationData: ReportCard[] = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: String(i + 1).padStart(2, "0"),
      name: "Camarines Sur National High School",
      barangay: "Penafrancia",
      family: "135",
      individual: "503",
    }));

  const rescueData: RescueOperationRow[] = Array(5)
    .fill(null)
    .map((_, i) => ({
      rescuerId: "RP - 001",
      name: "Daryl Adrian Bo",
      date: "09/14/25",
      requestTime: "11:00PM",
      address: "San Rafael, Cararayan",
      transferTime: "11:23",
      evacuationCenter: "Don Manuel Elementary School",
    }));

  const userApprovalData: UserApprovalRow[] = Array(4)
    .fill(null)
    .map((_, i) => ({
      id: String(i + 1).padStart(2, "0"),
      name: "Daryl Adrian",
      date: "08/08/25",
      position: "ComCen Head",
      office: "ComCen",
      employeeId: "CC 12345678",
    }));

  const unitData: UnitRow[] = Array(4)
    .fill(null)
    .map((_, i) => ({
      team: "Team Alpha",
      name: "Daryl Adrian Bo",
      dateCreated: "08/08/25",
      position: "Rescuer",
      rescuerId: "RP - 001",
      contactNo: "09123456789",
    }));

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden flex flex-col">
      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #9CC9E5 transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #9CC9E5;
          border-radius: 10px;
          transition: background-color 0.2s;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #7DB8D9;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="absolute w-full h-full object-cover opacity-10"
          src={imgDashboardCdrrmo}
        />
      </div>

      <Navbar userRole="cdrrmo" activeTab="reports" onNavigate={onNavigate} onLogout={onLogout} />

      <div className="relative z-10 px-[75px] pt-[44px] pb-[44px] h-[calc(100vh-80px)] flex flex-col">
        <div className="bg-white rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.25)] w-full h-full p-[40px] flex flex-col">
          {/* Search and Filters */}
          <div className="flex items-center gap-[15px] mb-[25px]">
            <div className="bg-[#dae7f8] flex items-center gap-[10px] px-[15px] h-[40px] rounded-[10px] shadow-[0px_1px_2.9px_0px_rgba(0,0,0,0.25)] flex-1 max-w-[600px]">
              <Search className="w-[18px] h-[18px]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search report"
                className="flex-1 bg-transparent font-['Poppins',sans-serif] text-[13px] text-[rgba(0,0,0,0.3)] outline-none placeholder:text-[rgba(0,0,0,0.3)]"
              />
              {searchQuery && (
                <button
                  className="bg-transparent"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="w-[18px] h-[18px] text-[rgba(0,0,0,0.3)]" />
                </button>
              )}
            </div>

            <button className="bg-white h-[40px] px-[16px] rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] flex items-center gap-[10px] hover:bg-gray-50 transition-colors">
              <svg
                className="w-[20px] h-[20px]"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path
                  d={svgPaths.p3c4dbef0}
                  stroke="#163B56"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5625"
                />
              </svg>
              <span className="font-['Poppins',sans-serif] text-[14px] text-[#163b56]">
                Date
              </span>
              <svg
                className="w-[16px] h-[16px]"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 10L12 15L17 10H7Z"
                  fill="#0B5ED0"
                />
              </svg>
            </button>

            <button className="bg-white h-[40px] px-[16px] rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] flex items-center gap-[10px] hover:bg-gray-50 transition-colors">
              <svg
                className="w-[20px] h-[20px]"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path
                  d={svgPaths.p3c4dbef0}
                  stroke="#163B56"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5625"
                />
              </svg>
              <span className="font-['Poppins',sans-serif] text-[14px] text-[#163b56]">
                Barangay
              </span>
              <svg
                className="w-[16px] h-[16px]"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 10L12 15L17 10H7Z"
                  fill="#0B5ED0"
                />
              </svg>
            </button>

            <button className="bg-white h-[40px] px-[16px] rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] flex items-center gap-[10px] hover:bg-gray-50 transition-colors">
              <svg
                className="w-[20px] h-[20px]"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path d={svgPaths.p5c52500} fill="#163B56" />
              </svg>
              <span className="font-['Poppins',sans-serif] text-[14px] text-[#163b56]">
                Export
              </span>
            </button>
          </div>

          {/* Report Tabs */}
          <div className="mb-[25px]">
            <div className="flex items-center gap-[52px] border-b-[0.5px] border-[#163b56] pb-[8px]">
              <button
                onClick={() => setActiveReportTab("evacuation")}
                className={`font-['Poppins',sans-serif] font-bold text-[14px] tracking-[2.4px] pb-[8px] ${
                  activeReportTab === "evacuation"
                    ? "text-[#2f7fb8] border-b-[3px] border-[#2f7fb8]"
                    : "text-black"
                }`}
              >
                Evacuation Center
              </button>
              <button
                onClick={() => setActiveReportTab("rescue")}
                className={`font-['Poppins',sans-serif] font-bold text-[14px] tracking-[2.4px] pb-[8px] ${
                  activeReportTab === "rescue"
                    ? "text-[#2f7fb8] border-b-[3px] border-[#2f7fb8]"
                    : "text-black"
                }`}
              >
                Rescue Operation
              </button>
              <button
                onClick={() => setActiveReportTab("user")}
                className={`font-['Poppins',sans-serif] font-bold text-[14px] tracking-[2.4px] pb-[8px] ${
                  activeReportTab === "user"
                    ? "text-[#2f7fb8] border-b-[3px] border-[#2f7fb8]"
                    : "text-black"
                }`}
              >
                Rescuer
              </button>
              <button
                onClick={() => setActiveReportTab("unit")}
                className={`font-['Poppins',sans-serif] font-bold text-[14px] tracking-[2.4px] pb-[8px] ${
                  activeReportTab === "unit"
                    ? "text-[#2f7fb8] border-b-[3px] border-[#2f7fb8]"
                    : "text-black"
                }`}
              >
                Unit
              </button>
            </div>
          </div>

          {/* Scrollable Table Container */}
          <div className="flex-1 overflow-auto">
            {activeReportTab === "evacuation" && (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-[0.5px] border-[#163b56]">
                    <th className="text-left pt-[0px] pb-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      ID
                    </th>
                    <th className="text-left pt-[0px] pb-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Name
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Barangay
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Family
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Individual
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {evacuationData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b-[0.5px] border-[#163b56]"
                    >
                      <td className="pt-[10px] pb-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.id}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.name}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.barangay}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.family}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.individual}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeReportTab === "rescue" && (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-[0.5px] border-[#163b56]">
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Rescuer ID
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Name
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Date
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Request Time
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Address
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Transfer Time
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Evacuation Center
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rescueData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b-[0.5px] border-[#163b56]"
                    >
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                        {row.rescuerId}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.name}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.date}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.requestTime}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.address}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.transferTime}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.evacuationCenter}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeReportTab === "user" && (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-[0.5px] border-[#163b56]">
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      ID
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Name
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Date
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Position
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Office
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Employee ID
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userApprovalData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b-[0.5px] border-[#163b56]"
                    >
                      <td 
                        className="py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px] cursor-pointer hover:bg-[#f0f7ff] transition-colors"
                        onClick={() => handleUserClick(row)}
                      >
                        {row.id}
                      </td>
                      <td 
                        className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px] cursor-pointer hover:bg-[#f0f7ff] transition-colors"
                        onClick={() => handleUserClick(row)}
                      >
                        {row.name}
                      </td>
                      <td 
                        className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px] cursor-pointer hover:bg-[#f0f7ff] transition-colors"
                        onClick={() => handleUserClick(row)}
                      >
                        {row.date}
                      </td>
                      <td 
                        className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px] cursor-pointer hover:bg-[#f0f7ff] transition-colors"
                        onClick={() => handleUserClick(row)}
                      >
                        {row.position}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.office}
                      </td>
                      <td 
                        className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px] cursor-pointer hover:bg-[#f0f7ff] transition-colors"
                        onClick={() => handleUserClick(row)}
                      >
                        {row.employeeId}
                      </td>
                      <td className="py-[10px] px-[20px]">
                        <div className="flex items-center gap-[10px]">
                          <button className="bg-[#b6dab2] h-[30px] px-[21px] rounded-[5px] flex items-center justify-center hover:bg-[#a5c9a1] transition-colors">
                            <span className="font-['Poppins',sans-serif] font-bold text-[11px] text-black tracking-[1.87px]">
                              APPROVE
                            </span>
                          </button>
                          <button className="bg-[#fe4848] h-[30px] px-[21px] rounded-[5px] flex items-center justify-center hover:bg-[#e43737] transition-colors">
                            <span className="font-['Poppins',sans-serif] font-bold text-[11px] text-black tracking-[1.87px]">
                              DELETE
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeReportTab === "unit" && (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-[0.5px] border-[#163b56]">
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Team
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Name
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Date Created
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Position
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Rescuer ID
                    </th>
                    <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                      Contact No.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {unitData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b-[0.5px] border-[#163b56]"
                    >
                      <td 
                        className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px] cursor-pointer hover:bg-[#f0f7ff] transition-colors"
                        onClick={() => handleUnitClick(row)}
                      >
                        {row.team}
                      </td>
                      <td 
                        className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px] cursor-pointer hover:bg-[#f0f7ff] transition-colors"
                        onClick={() => handleUnitClick(row)}
                      >
                        {row.name}
                      </td>
                      <td 
                        className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px] cursor-pointer hover:bg-[#f0f7ff] transition-colors"
                        onClick={() => handleUnitClick(row)}
                      >
                        {row.dateCreated}
                      </td>
                      <td 
                        className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px] cursor-pointer hover:bg-[#f0f7ff] transition-colors"
                        onClick={() => handleUnitClick(row)}
                      >
                        {row.position}
                      </td>
                      <td 
                        className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px] cursor-pointer hover:bg-[#f0f7ff] transition-colors"
                        onClick={() => handleUnitClick(row)}
                      >
                        {row.rescuerId}
                      </td>
                      <td 
                        className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px] cursor-pointer hover:bg-[#f0f7ff] transition-colors"
                        onClick={() => handleUnitClick(row)}
                      >
                        {row.contactNo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-[25px] mt-[20px] pt-[20px]">
            <button className="hover:opacity-70 transition-opacity">
              <svg
                className="w-[10px] h-[20px] rotate-180"
                fill="none"
                viewBox="0 0 12 24"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p1093a180}
                  fill="black"
                  fillRule="evenodd"
                />
              </svg>
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`font-['Poppins',sans-serif] ${page === currentPage ? "font-bold text-[20px] tracking-[3.4px]" : "font-semibold text-[15px] tracking-[2.55px]"} text-black hover:opacity-70 transition-opacity`}
              >
                {page}
              </button>
            ))}

            <button className="hover:opacity-70 transition-opacity">
              <svg
                className="w-[10px] h-[20px]"
                fill="none"
                viewBox="0 0 12 24"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p1093a180}
                  fill="black"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Add Unit Button - Only visible on Unit tab */}
          {activeReportTab === "unit" && (
            <div className="flex justify-end mt-[20px]">
              <button
                className="bg-[#0B5ED0] h-[55px] px-[40px] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center hover:bg-[#0a4fb8] transition-colors"
                onClick={handleOpenAddUnitModal}
              >
                <span className="font-['Poppins',sans-serif] text-[15px] text-white tracking-[2.55px]">
                  Add Unit
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(2px)' }}
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.25)] w-[1200px] max-w-[90vw] max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* User Info Row */}
            <div className="relative border-b-[0.5px] border-[#163b56] px-[25px] py-[10px]">
              <button
                className="absolute right-[15px] top-[15px] hover:opacity-70 transition-opacity"
                onClick={handleCloseModal}
              >
                <X className="w-[24px] h-[24px] text-black" />
              </button>
              
              <div className="flex items-center gap-[25px]">
                <div className="flex flex-col justify-center w-[65px]">
                  <span className="font-['Poppins',sans-serif] font-bold text-[15px] text-black tracking-[2.55px] leading-[25px]">
                    {selectedUser.id}
                  </span>
                </div>
                <div className="flex flex-col justify-center w-[152px]">
                  <span className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px] leading-[25px]">
                    {selectedUser.name}
                  </span>
                </div>
                <div className="flex flex-col justify-center w-[115px]">
                  <span className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px] leading-[25px]">
                    {selectedUser.date}
                  </span>
                </div>
                <div className="flex flex-col justify-center w-[183px]">
                  <span className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px] leading-[25px]">
                    {selectedUser.position}
                  </span>
                </div>
                <div className="flex flex-col justify-center w-[124px]">
                  <span className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px] leading-[25px]">
                    {selectedUser.office}
                  </span>
                </div>
                <div className="flex flex-col justify-center w-[145px]">
                  <span className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px] leading-[25px]">
                    {selectedUser.employeeId}
                  </span>
                </div>
                <div className="flex items-center gap-[10px] ml-auto">
                  <button className="bg-[#b6dab2] h-[25px] px-[21px] rounded-[5px] flex items-center justify-center hover:bg-[#a5c9a1] transition-colors">
                    <span className="font-['Poppins',sans-serif] font-bold text-[8px] text-black tracking-[1.36px] leading-[25px]">
                      APPROVE
                    </span>
                  </button>
                  <button className="bg-[#fe4848] h-[25px] px-[21px] rounded-[5px] flex items-center justify-center hover:bg-[#e43737] transition-colors">
                    <span className="font-['Poppins',sans-serif] font-bold text-[8px] text-black tracking-[1.36px] leading-[25px]">
                      DELETE
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Certificate Image */}
            <div className="flex items-center justify-center p-[40px] bg-white">
              <div className="relative w-[800px] h-[550px]">
                <img
                  alt="Rescuer Certificate"
                  className="w-full h-full object-contain"
                  src={imgCertificate}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Unit Modal */}
      {isAddUnitModalOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(2px)' }}
          onClick={handleCloseAddUnitModal}
        >
          <div 
            className="bg-white rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.25)] w-[850px] max-w-[90vw] max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed at top */}
            <button
              className="absolute right-[25px] top-[22px] z-10 hover:opacity-70 transition-opacity bg-white rounded-full p-1"
              onClick={handleCloseAddUnitModal}
            >
              <X className="w-[25px] h-[25px] text-black" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] p-[48px]">
              {/* Team Leader Dropdown */}
              <div className="mb-[25px]">
                <select className="w-[170px] h-[45px] pl-[10px] pr-[35px] bg-white border-[0.5px] border-black rounded-[5px] font-['Poppins',sans-serif] font-bold text-[12px] text-center text-[#515151] tracking-[2.04px] outline-none appearance-none cursor-pointer">
                      <option value="">Team Leader</option>
                      <option value="ppe">John Doe</option>
                      <option value="medical">Jane Smith</option>
                      <option value="rescue">Mike Johnson</option>
                    </select>
              </div>

              {/* Unit Name and Unit Type */}
              <div className="flex gap-[20px] mb-[35px]">
                <input
                  type="text"
                  placeholder="Unit Name"
                  className="w-[400px] h-[55px] px-[10px] bg-white border-[0.5px] border-black rounded-[5px] font-['Poppins',sans-serif] text-[20px] text-[#515151] tracking-[3.4px] outline-none placeholder:text-[#515151]"
                />
                <div className="relative">
                  <select className="w-[240px] h-[55px] pl-[10px] pr-[40px] bg-white border-[0.5px] border-black rounded-[5px] font-['Poppins',sans-serif] text-[20px] text-[#515151] tracking-[3.4px] outline-none appearance-none cursor-pointer">
                    <option value="">Unit Type</option>
                    <option value="rescue">Rescue Unit</option>
                    <option value="medical">Medical Unit</option>
                    <option value="support">Support Unit</option>
                  </select>
                  <div className="absolute right-[20px] top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-[12px] h-[24px] rotate-90" fill="none" viewBox="0 0 12 24">
                      <path clipRule="evenodd" d={svgPaths.p1093a180} fill="black" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Team Member Section */}
              <div className="mb-[35px]">
                <h3 className="font-['Poppins',sans-serif] font-bold text-[20px] text-black tracking-[3.4px] mb-[20px]">
                  Team Member
                </h3>

                {/* Team Member Dropdown */}
                <div className="relative mb-[20px]">
                  <select className="w-[170px] h-[45px] pl-[10px] pr-[35px] bg-white border-[0.5px] border-black rounded-[5px] font-['Poppins',sans-serif] font-bold text-[12px] text-center text-[#515151] tracking-[2.04px] outline-none appearance-none cursor-pointer">
                    <option value="">Team Member</option>
                    <option value="member1">Rachelle Abada</option>
                    <option value="member2">Mark Santos</option>
                    <option value="member3">Lisa Garcia</option>
                  </select>
                  <div className="absolute right-[20px] top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-[12px] h-[24px] rotate-90" fill="none" viewBox="0 0 12 24">
                      <path clipRule="evenodd" d={svgPaths.p1093a180} fill="black" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Team Member List */}
                <div className="mb-[20px]">
                  <div className="flex items-center justify-between py-[10px]">
                    <div className="flex gap-[30px] items-center">
                      <span className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px] w-[150px]">
                        Rachelle Abada
                      </span>
                      <span className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px] w-[130px]">
                        CC 12345678
                      </span>
                      <span className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px] w-[100px]">
                        Medic
                      </span>
                      <span className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px] w-[130px]">
                        09123456789
                      </span>
                    </div>
                    <button className="hover:opacity-70 transition-opacity">
                      <svg className="w-[25px] h-[25px]" fill="none" viewBox="0 0 25 25">
                        <circle cx="12.5" cy="6.25" r="1.5" fill="black" />
                        <circle cx="12.5" cy="12.5" r="1.5" fill="black" />
                        <circle cx="12.5" cy="18.75" r="1.5" fill="black" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Add Member Button */}
                <button className="h-[45px] px-[40px] bg-white border border-[#0B5ED0] rounded-[5px] flex items-center justify-center hover:bg-[#f0f7ff] transition-colors">
                  <span className="font-['Poppins',sans-serif] font-bold text-[15px] text-[#0B5ED0] tracking-[2.55px]">
                    Add Member
                  </span>
                </button>
              </div>

              {/* Equipment Section */}
              <div className="mb-[35px]">
                <h3 className="font-['Poppins',sans-serif] font-bold text-[20px] text-black tracking-[3.4px] mb-[10px]">
                  EQUIPMENT
                </h3>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-black mb-[20px]"></div>

                {/* Equipment List */}
                <div className="mb-[20px]">
                  <div className="flex items-center justify-between py-[10px]">
                    <div className="flex gap-[30px] items-center">
                      <span className="font-['Poppins',sans-serif] text-[12px] text-black tracking-[2.04px] w-[240px]">
                        Personal Protective Equipment
                      </span>
                      <span className="font-['Poppins',sans-serif] text-[12px] text-black tracking-[2.04px] w-[110px]">
                        Helmets
                      </span>
                      <span className="font-['Poppins',sans-serif] text-[12px] text-black tracking-[2.04px] w-[105px]">
                        5
                      </span>
                    </div>
                    <button className="hover:opacity-70 transition-opacity">
                      <svg className="w-[25px] h-[25px]" fill="none" viewBox="0 0 25 25">
                        <circle cx="12.5" cy="6.25" r="1.5" fill="black" />
                        <circle cx="12.5" cy="12.5" r="1.5" fill="black" />
                        <circle cx="12.5" cy="18.75" r="1.5" fill="black" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Equipment Dropdowns */}
                <div className="flex gap-[20px] mb-[20px]">
                  <div className="relative">
                    <select className="w-[170px] h-[45px] pl-[10px] pr-[35px] bg-white border-[0.5px] border-black rounded-[5px] font-['Poppins',sans-serif] font-bold text-[12px] text-center text-[#515151] tracking-[2.04px] outline-none appearance-none cursor-pointer">
                      <option value="">Category</option>
                      <option value="ppe">Personal Protective Equipment</option>
                      <option value="medical">Medical Supplies</option>
                      <option value="rescue">Rescue Tools</option>
                    </select>
                    <div className="absolute right-[10px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-[12px] h-[24px] rotate-90" fill="none" viewBox="0 0 12 24">
                        <path clipRule="evenodd" d={svgPaths.p1093a180} fill="black" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <select className="w-[236px] h-[45px] pl-[10px] pr-[35px] bg-white border-[0.5px] border-black rounded-[5px] font-['Poppins',sans-serif] font-bold text-[12px] text-[#515151] tracking-[2.04px] outline-none appearance-none cursor-pointer">
                      <option value="">Name</option>
                      <option value="helmet">Helmets</option>
                      <option value="vest">Safety Vests</option>
                      <option value="gloves">Gloves</option>
                    </select>
                    <div className="absolute right-[10px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-[12px] h-[24px] rotate-90" fill="none" viewBox="0 0 12 24">
                        <path clipRule="evenodd" d={svgPaths.p1093a180} fill="black" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="w-[134px] h-[45px] px-[10px] bg-white border-[0.5px] border-black rounded-[5px] font-['Poppins',sans-serif] font-bold text-[12px] text-center text-[#515151] tracking-[2.04px] outline-none placeholder:text-[#515151]"
                  />
                </div>

                {/* Add Equipment Button */}
                <button className="h-[45px] px-[40px] bg-white border border-[#0B5ED0] rounded-[5px] flex items-center justify-center hover:bg-[#f0f7ff] transition-colors">
                  <span className="font-['Poppins',sans-serif] font-bold text-[15px] text-[#0B5ED0] tracking-[2.55px]">
                    Add Equipment
                  </span>
                </button>
              </div>

              {/* Add Unit Button */}
              <div className="flex justify-end mt-[35px]">
                <button className="bg-[#0B5ED0] h-[45px] px-[40px] rounded-[5px] flex items-center justify-center hover:bg-[#0a4fb8] transition-colors">
                  <span className="font-['Poppins',sans-serif] font-bold text-[15px] text-white text-center tracking-[2.55px]">
                    Add Unit
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Team Modal */}
      {isTeamModalOpen && selectedUnit && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(2px)' }}
          onClick={handleCloseTeamModal}
        >
          <div 
            className="bg-white rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.25)] w-[1200px] max-w-[90vw] max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed at top */}
            <button
              className="absolute right-[25px] top-[22px] z-10 hover:opacity-70 transition-opacity"
              onClick={handleCloseTeamModal}
            >
              <svg className="w-[25px] h-[25px]" fill="none" viewBox="0 0 25 25">
                <path d={svgPathsTeam.p33ab8400} fill="black" />
                <path d={svgPathsTeam.p3253000} fill="black" />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] p-[48px]">
              {/* Team Name with Underline */}
              <div className="relative mb-[35px]">
                <h2 className="font-['Poppins',sans-serif] font-bold text-[45px] text-black tracking-[7.65px]">
                  {selectedUnit.team}
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[5px] border-b-[5px] border-[#0B5ED0]"></div>
              </div>

              {/* Team Leader, Rescuer ID, Contact Number Row */}
              <div className="flex gap-[80px] mb-[60px]">
                <div>
                  <div className="font-['Poppins',sans-serif] font-bold text-[25px] text-black tracking-[4.25px] mb-[8px]">
                    {selectedUnit.name}
                  </div>
                  <div className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px]">
                    Team Leader
                  </div>
                </div>
                <div>
                  <div className="font-['Poppins',sans-serif] font-bold text-[18px] text-black tracking-[3.06px] mb-[8px]">
                    {selectedUnit.rescuerId}
                  </div>
                  <div className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px]">
                    Rescuer ID
                  </div>
                </div>
                <div>
                  <div className="font-['Poppins',sans-serif] font-bold text-[18px] text-black tracking-[3.06px] mb-[8px]">
                    {selectedUnit.contactNo}
                  </div>
                  <div className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px]">
                    Contact Number
                  </div>
                </div>
              </div>

              {/* Team Member Header */}
              <div className="flex gap-[15px] items-center mb-[20px] pb-[10px] border-b border-black">
                <div className="font-['Poppins',sans-serif] font-bold text-[15px] text-black tracking-[2.55px] w-[195px]">
                  NAME
                </div>
                <div className="font-['Poppins',sans-serif] font-bold text-[15px] text-black tracking-[2.55px] w-[161px]">
                  RESCUER ID
                </div>
                <div className="font-['Poppins',sans-serif] font-bold text-[15px] text-black tracking-[2.55px] w-[115px]">
                  POSITION
                </div>
                <div className="font-['Poppins',sans-serif] font-bold text-[15px] text-black tracking-[2.55px]">
                  CONTACT
                </div>
              </div>

              {/* Team Member List */}
              <div className="mb-[30px]">
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="flex gap-[50px] items-center py-[10px]">
                    <div className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px] w-[195px]">
                      Rachelle Abada
                    </div>
                    <div className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px] w-[161px]">
                      CC 12345678
                    </div>
                    <div className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px] w-[115px]">
                      Medic
                    </div>
                    <div className="font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px] flex-1">
                      09123456789
                    </div>
                    <button className="hover:opacity-70 transition-opacity">
                      <svg className="w-[25px] h-[25px]" fill="none" viewBox="0 0 25 25">
                        <path d={svgPathsTeam.p1f8f1e70} fill="black" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Member Button */}
              <button className="bg-[#0B5ED0] h-[45px] px-[40px] rounded-[5px] flex items-center justify-center hover:bg-[#0a4fb8] transition-colors mb-[50px]">
                <span className="font-['Poppins',sans-serif] font-bold text-[15px] text-white tracking-[2.55px]">
                  Add Member
                </span>
              </button>

              {/* Equipment Section */}
              <h3 className="font-['Poppins',sans-serif] font-bold text-[20px] text-black tracking-[3.4px] mb-[20px]">
                EQUIPMENT
              </h3>

              {/* Equipment Header */}
              <div className="flex gap-[50px] items-center mb-[20px] pb-[10px] border-b border-black">
                <div className="font-['Poppins',sans-serif] font-bold text-[12px] text-black tracking-[2.04px] w-[224px]">
                  CATEGORY
                </div>
                <div className="font-['Poppins',sans-serif] font-bold text-[12px] text-black tracking-[2.04px] w-[110px]">
                  NAME
                </div>
                <div className="font-['Poppins',sans-serif] font-bold text-[12px] text-black tracking-[2.04px]">
                  STATUS
                </div>
                <div className="font-['Poppins',sans-serif] font-bold text-[12px] text-black tracking-[2.04px]">
                  QUANTITY
                </div>
              </div>

              {/* Equipment List */}
              <div className="mb-[30px]">
                {[
                  { category: "Personal Protective Equipment", name: "Helmets", status: "Radios", quantity: "5" },
                  { category: "Medical Supplies", name: "Stretchers", status: "In Use", quantity: "5" },
                  { category: "Medical Supplies", name: "Stretchers", status: "Damaged", quantity: "1" },
                  { category: "Rescue Tools", name: "Ropes", status: "Damaged", quantity: "1" },
                  { category: "Rescue Tools", name: "Cutting Tools", status: "In Use", quantity: "1" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-[50px] items-center py-[8px]">
                    <div className="font-['Poppins',sans-serif] text-[12px] text-black tracking-[2.04px] w-[224px]">
                      {item.category}
                    </div>
                    <div className="font-['Poppins',sans-serif] text-[12px] text-black tracking-[2.04px] w-[110px]">
                      {item.name}
                    </div>
                    <div className="font-['Poppins',sans-serif] text-[12px] text-black tracking-[2.04px] w-[85px]">
                      {item.status}
                    </div>
                    <div className="font-['Poppins',sans-serif] text-[12px] text-black tracking-[2.04px] w-[105px]">
                      {item.quantity}
                    </div>
                    <button className="hover:opacity-70 transition-opacity ml-auto">
                      <svg className="w-[25px] h-[25px]" fill="none" viewBox="0 0 25 25">
                        <path d={svgPathsTeam.p1f8f1e70} fill="black" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Equipment Button */}
              <button className="bg-[#0B5ED0] h-[45px] px-[40px] rounded-[5px] flex items-center justify-center hover:bg-[#0a4fb8] transition-colors">
                <span className="font-['Poppins',sans-serif] font-bold text-[15px] text-white tracking-[2.55px]">
                  Add Equipment
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}