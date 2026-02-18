import image_e3c49f856c9d6a7917bdac0c4621ff321dddf846 from 'figma:asset/e3c49f856c9d6a7917bdac0c4621ff321dddf846.png';
import svgPaths from "../imports/svg-wjuznj59td";
import svgPathsTeam from "../imports/svg-yow2sejwbe";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
import imgDashboardCdrrmo from "figma:asset/b8d5a36a1d7d52967f5e054ab644c0094ca5b269.png";
import imgCertificate from "figma:asset/eceb4f03c3984c0a9beb713cfaff5dcfd22fee1c.png";
import { useState } from "react";
import { Search, X, Edit2 } from "lucide-react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] =
    useState<UserApprovalRow | null>(null);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isAddUnitModalOpen, setIsAddUnitModalOpen] =
    useState(false);
  const [selectedUnit, setSelectedUnit] =
    useState<UnitRow | null>(null);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [showBarangayDropdown, setShowBarangayDropdown] =
    useState(false);
  const [barangayFilter, setBarangayFilter] =
    useState("Barangay");
  const [showDateDropdown, setShowDateDropdown] =
    useState(false);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  // Team Member form state
  const [teamMembers, setTeamMembers] = useState<
    Array<{
      id: string;
      firstName: string;
      lastName: string;
      position: string;
      contactNumber: string;
    }>
  >([]);
  const [memberFirstName, setMemberFirstName] = useState("");
  const [memberLastName, setMemberLastName] = useState("");
  const [memberPosition, setMemberPosition] = useState("");
  const [memberContactNumber, setMemberContactNumber] =
    useState("");
  const [editingMemberId, setEditingMemberId] = useState<
    string | null
  >(null);

  // Equipment form state
  const [equipmentList, setEquipmentList] = useState<
    Array<{
      id: string;
      category: string;
      name: string;
      quantity: string;
    }>
  >([]);
  const [equipmentCategory, setEquipmentCategory] =
    useState("");
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentQuantity, setEquipmentQuantity] =
    useState("");
  const [editingEquipmentId, setEditingEquipmentId] = useState<
    string | null
  >(null);

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

  const handleUserClick = (user: UserApprovalRow) => {
    setSelectedUser(user);
    setIsUserModalOpen(true);
  };

  const handleCloseUserModal = () => {
    setIsUserModalOpen(false);
    setSelectedUser(null);
  };

  const handleApproveUser = () => {
    // Handle approval logic here
    console.log("Approved user:", selectedUser);
    handleCloseUserModal();
  };

  const handleRejectUser = () => {
    // Handle rejection logic here
    console.log("Rejected user:", selectedUser);
    handleCloseUserModal();
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

  const handleAddTeamMember = () => {
    if (
      memberFirstName &&
      memberLastName &&
      memberPosition &&
      memberContactNumber
    ) {
      if (editingMemberId) {
        // Update existing member
        setTeamMembers(
          teamMembers.map((member) =>
            member.id === editingMemberId
              ? {
                  ...member,
                  firstName: memberFirstName,
                  lastName: memberLastName,
                  position: memberPosition,
                  contactNumber: memberContactNumber,
                }
              : member,
          ),
        );
        setEditingMemberId(null);
      } else {
        // Add new member
        const newMember = {
          id: Date.now().toString(),
          firstName: memberFirstName,
          lastName: memberLastName,
          position: memberPosition,
          contactNumber: memberContactNumber,
        };
        setTeamMembers([...teamMembers, newMember]);
      }
      // Clear form
      setMemberFirstName("");
      setMemberLastName("");
      setMemberPosition("");
      setMemberContactNumber("");
    }
  };

  const handleRemoveTeamMember = (id: string) => {
    setTeamMembers(
      teamMembers.filter((member) => member.id !== id),
    );
    if (editingMemberId === id) {
      setEditingMemberId(null);
      setMemberFirstName("");
      setMemberLastName("");
      setMemberPosition("");
      setMemberContactNumber("");
    }
  };

  const handleEditTeamMember = (id: string) => {
    const member = teamMembers.find((m) => m.id === id);
    if (member) {
      setMemberFirstName(member.firstName);
      setMemberLastName(member.lastName);
      setMemberPosition(member.position);
      setMemberContactNumber(member.contactNumber);
      setEditingMemberId(id);
    }
  };

  const handleAddOrUpdateEquipment = () => {
    if (
      equipmentCategory &&
      equipmentName &&
      equipmentQuantity
    ) {
      if (editingEquipmentId) {
        // Update existing equipment
        setEquipmentList(
          equipmentList.map((item) =>
            item.id === editingEquipmentId
              ? {
                  ...item,
                  category: equipmentCategory,
                  name: equipmentName,
                  quantity: equipmentQuantity,
                }
              : item,
          ),
        );
        setEditingEquipmentId(null);
      } else {
        // Add new equipment
        const newEquipment = {
          id: Date.now().toString(),
          category: equipmentCategory,
          name: equipmentName,
          quantity: equipmentQuantity,
        };
        setEquipmentList([...equipmentList, newEquipment]);
      }
      // Clear form
      setEquipmentCategory("");
      setEquipmentName("");
      setEquipmentQuantity("");
    }
  };

  const handleRemoveEquipment = (id: string) => {
    setEquipmentList(
      equipmentList.filter((item) => item.id !== id),
    );
    if (editingEquipmentId === id) {
      setEditingEquipmentId(null);
      setEquipmentCategory("");
      setEquipmentName("");
      setEquipmentQuantity("");
    }
  };

  const handleEditEquipment = (id: string) => {
    const equipment = equipmentList.find(
      (item) => item.id === id,
    );
    if (equipment) {
      setEquipmentCategory(equipment.category);
      setEquipmentName(equipment.name);
      setEquipmentQuantity(equipment.quantity);
      setEditingEquipmentId(id);
    }
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

      <Navbar
        userRole="cdrrmo"
        activeTab="reports"
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

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
                className="flex-1 bg-transparent font-['Poppins',sans-serif] text-[13px] text-black outline-none placeholder:text-[rgba(0,0,0,0.3)]"
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

            <div className="relative">
              <button
                onClick={() => {
                  setShowDateDropdown(!showDateDropdown);
                  setShowBarangayDropdown(false);
                }}
                className="bg-white h-[40px] px-[16px] rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] flex items-center gap-[10px] hover:bg-gray-50 transition-colors"
              >
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

              {/* Date Range Dropdown */}
              {showDateDropdown && (
                <div className="absolute top-full left-0 mt-[5px] bg-white shadow-lg rounded-[8px] z-50 border border-gray-200 p-[16px] min-w-[280px]">
                  <div className="space-y-[12px]">
                    {/* Date From */}
                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] text-[#163b56] mb-[6px] font-medium">
                        Date From
                      </label>
                      <input
                        type="date"
                        value={dateFrom}
                        onChange={(e) =>
                          setDateFrom(e.target.value)
                        }
                        className="w-full h-[36px] px-[12px] border border-gray-300 rounded-[6px] font-['Poppins',sans-serif] text-[13px] text-[#163b56] outline-none focus:border-[#0B5ED0] transition-colors"
                      />
                    </div>

                    {/* Date To */}
                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] text-[#163b56] mb-[6px] font-medium">
                        Date To
                      </label>
                      <input
                        type="date"
                        value={dateTo}
                        onChange={(e) =>
                          setDateTo(e.target.value)
                        }
                        className="w-full h-[36px] px-[12px] border border-gray-300 rounded-[6px] font-['Poppins',sans-serif] text-[13px] text-[#163b56] outline-none focus:border-[#0B5ED0] transition-colors"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-[8px] pt-[8px]">
                      <button
                        onClick={() => {
                          setDateFrom("");
                          setDateTo("");
                        }}
                        className="flex-1 h-[32px] bg-white border border-gray-300 rounded-[6px] font-['Poppins',sans-serif] text-[13px] text-[#163b56] hover:bg-gray-50 transition-colors"
                      >
                        Clear
                      </button>
                      <button
                        onClick={() =>
                          setShowDateDropdown(false)
                        }
                        className="flex-1 h-[32px] bg-[#0B5ED0] rounded-[6px] font-['Poppins',sans-serif] text-[13px] text-white hover:bg-[#094ba8] transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  setShowBarangayDropdown(
                    !showBarangayDropdown,
                  );
                  setShowDateDropdown(false);
                }}
                className="bg-white h-[40px] px-[16px] rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] flex items-center gap-[10px] hover:bg-gray-50 transition-colors"
              >
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
                  {barangayFilter}
                </span>
                <svg
                  className={`w-[16px] h-[16px] transition-transform ${showBarangayDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 10L12 15L17 10H7Z"
                    fill="#0B5ED0"
                  />
                </svg>
              </button>

              {/* Barangay Dropdown Menu */}
              {showBarangayDropdown && (
                <div className="absolute top-full left-0 mt-[5px] bg-white shadow-lg rounded-[8px] max-h-[300px] overflow-y-auto z-50 border border-gray-200 min-w-[200px]">
                  {/* All Barangays Option */}
                  <button
                    onClick={() => {
                      setBarangayFilter("All Barangays");
                      setShowBarangayDropdown(false);
                    }}
                    className="w-full px-[16px] py-[10px] text-left font-['Poppins',sans-serif] text-[14px] text-black hover:bg-[#dae7f8] transition-colors border-b border-gray-200"
                  >
                    All Barangays
                  </button>

                  {/* Individual Barangays */}
                  {nagaBarangays.map((brgy) => (
                    <button
                      key={brgy}
                      onClick={() => {
                        setBarangayFilter(brgy);
                        setShowBarangayDropdown(false);
                      }}
                      className="w-full px-[16px] py-[10px] text-left font-['Poppins',sans-serif] text-[14px] text-black hover:bg-[#dae7f8] transition-colors"
                    >
                      {brgy}
                    </button>
                  ))}
                </div>
              )}
            </div>

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
                  </tr>
                </thead>
                <tbody>
                  {userApprovalData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b-[0.5px] border-[#163b56] cursor-pointer hover:bg-[#f0f7ff] transition-colors"
                      onClick={() => handleUserClick(row)}
                    >
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[13px] text-black tracking-[2.2px]">
                        {row.id}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.name}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.date}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.position}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.office}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.employeeId}
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
                      className="border-b-[0.5px] border-[#163b56] cursor-pointer hover:bg-[#f0f7ff] transition-colors"
                      onClick={() => handleUnitClick(row)}
                    >
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.team}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.name}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.dateCreated}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.position}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
                        {row.rescuerId}
                      </td>
                      <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[13px] text-black tracking-[2.2px]">
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
            <button
              onClick={() =>
                setCurrentPage(
                  currentPage === 1 ? 5 : currentPage - 1,
                )
              }
              className="hover:opacity-70 transition-opacity"
            >
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

            <button
              onClick={() =>
                setCurrentPage(
                  currentPage === 5 ? 1 : currentPage + 1,
                )
              }
              className="hover:opacity-70 transition-opacity"
            >
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
                className="bg-[#0B5ED0] h-[45px] px-[40px] rounded-[8px] flex items-center justify-center hover:bg-[#094ba8] transition-colors shadow-[0px_2px_8px_0px_rgba(11,94,208,0.3)]"
                onClick={handleOpenAddUnitModal}
              >
                <span className="font-['Poppins',sans-serif] font-semibold text-[15px] text-white">
                  Add Unit
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add Unit Modal */}
      {isAddUnitModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(2px)",
          }}
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
              <div className="mb-[30px]">
                <label className="block font-['Poppins',sans-serif] font-semibold text-[14px] text-black mb-[10px]">
                  Team Leader
                </label>
                <div className="relative w-full max-w-[400px]">
                  <select className="w-full h-[45px] pl-[16px] pr-[40px] bg-white border border-[#00000040] rounded-[8px] font-['Poppins',sans-serif] text-[14px] text-black outline-none appearance-none cursor-pointer focus:border-[#0B5ED0] transition-colors">
                    <option value="">Select Team Leader</option>
                    <option value="leader1">John Doe</option>
                    <option value="leader2">Jane Smith</option>
                    <option value="leader3">
                      Mike Johnson
                    </option>
                  </select>
                  <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
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
                  </div>
                </div>
              </div>

              {/* Unit Name and Unit Type */}
              <div className="grid grid-cols-2 gap-[20px] mb-[30px]">
                <div>
                  <label className="block font-['Poppins',sans-serif] font-semibold text-[14px] text-black mb-[10px]">
                    Unit Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter unit name"
                    className="w-full h-[45px] px-[16px] bg-white border border-[#00000040] rounded-[8px] font-['Poppins',sans-serif] text-[14px] text-black outline-none placeholder:text-[#00000060] focus:border-[#0B5ED0] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-['Poppins',sans-serif] font-semibold text-[14px] text-black mb-[10px]">
                    Unit Type
                  </label>
                  <div className="relative">
                    <select className="w-full h-[45px] pl-[16px] pr-[40px] bg-white border border-[#00000040] rounded-[8px] font-['Poppins',sans-serif] text-[14px] text-black outline-none appearance-none cursor-pointer focus:border-[#0B5ED0] transition-colors">
                      <option value="">Select Unit Type</option>
                      <option value="rescue">
                        Rescue Unit
                      </option>
                      <option value="medical">
                        Medical Unit
                      </option>
                      <option value="support">
                        Support Unit
                      </option>
                    </select>
                    <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
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
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member Section */}
              <div className="mb-[30px]">
                <h3 className="font-['Poppins',sans-serif] font-bold text-[18px] text-black mb-[20px]">
                  Team Members
                </h3>

                {/* Team Member Input Fields */}
                <div className="grid grid-cols-2 gap-[16px] mb-[16px]">
                  <div>
                    <label className="block font-['Poppins',sans-serif] font-semibold text-[14px] text-black mb-[10px]">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      value={memberFirstName}
                      onChange={(e) =>
                        setMemberFirstName(e.target.value)
                      }
                      className="w-full h-[45px] px-[16px] bg-white border border-[#00000040] rounded-[8px] font-['Poppins',sans-serif] text-[14px] text-black outline-none placeholder:text-[#00000060] focus:border-[#0B5ED0] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-['Poppins',sans-serif] font-semibold text-[14px] text-black mb-[10px]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      value={memberLastName}
                      onChange={(e) =>
                        setMemberLastName(e.target.value)
                      }
                      className="w-full h-[45px] px-[16px] bg-white border border-[#00000040] rounded-[8px] font-['Poppins',sans-serif] text-[14px] text-black outline-none placeholder:text-[#00000060] focus:border-[#0B5ED0] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-['Poppins',sans-serif] font-semibold text-[14px] text-black mb-[10px]">
                      Position
                    </label>
                    <div className="relative">
                      <select
                        value={memberPosition}
                        onChange={(e) =>
                          setMemberPosition(e.target.value)
                        }
                        className="w-full h-[45px] pl-[16px] pr-[40px] bg-white border border-[#00000040] rounded-[8px] font-['Poppins',sans-serif] text-[14px] text-black outline-none appearance-none cursor-pointer focus:border-[#0B5ED0] transition-colors"
                      >
                        <option value="">
                          Select Position
                        </option>
                        <option value="Team Leader">
                          Team Leader
                        </option>
                        <option value="Rescuer">Rescuer</option>
                        <option value="Medic">Medic</option>
                        <option value="Driver">Driver</option>
                        <option value="Communications Officer">
                          Communications Officer
                        </option>
                        <option value="Logistics Officer">
                          Logistics Officer
                        </option>
                      </select>
                      <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
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
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block font-['Poppins',sans-serif] font-semibold text-[14px] text-black mb-[10px]">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter contact number"
                      value={memberContactNumber}
                      onChange={(e) =>
                        setMemberContactNumber(e.target.value)
                      }
                      className="w-full h-[45px] px-[16px] bg-white border border-[#00000040] rounded-[8px] font-['Poppins',sans-serif] text-[14px] text-black outline-none placeholder:text-[#00000060] focus:border-[#0B5ED0] transition-colors"
                    />
                  </div>
                </div>

                {/* Add/Update Member Button */}
                <button
                  onClick={handleAddTeamMember}
                  className="h-[40px] px-[24px] bg-white border-[1.5px] border-[#0B5ED0] rounded-[8px] flex items-center justify-center hover:bg-[#f0f7ff] transition-colors mb-[20px]"
                >
                  <span className="font-['Poppins',sans-serif] font-semibold text-[14px] text-[#0B5ED0]">
                    {editingMemberId
                      ? "Update Member"
                      : "+ Add Member"}
                  </span>
                </button>

                {/* Team Member List */}
                {teamMembers.length > 0 && (
                  <div className="space-y-[12px]">
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        className="bg-[#dae7f8] rounded-[8px] p-[16px]"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex gap-[20px] items-center flex-1">
                            <span className="font-['Poppins',sans-serif] text-[14px] text-black w-[200px]">
                              {member.firstName}{" "}
                              {member.lastName}
                            </span>
                            <span className="font-['Poppins',sans-serif] text-[14px] text-[#00000080] w-[150px]">
                              {member.position}
                            </span>
                            <span className="font-['Poppins',sans-serif] text-[14px] text-[#00000080] w-[140px]">
                              {member.contactNumber}
                            </span>
                          </div>
                          <div className="flex gap-[8px]">
                            <button
                              onClick={() =>
                                handleEditTeamMember(member.id)
                              }
                              className="hover:opacity-70 transition-opacity"
                            >
                              <Edit2 className="w-[18px] h-[18px] text-blue-600" />
                            </button>
                            <button
                              onClick={() =>
                                handleRemoveTeamMember(
                                  member.id,
                                )
                              }
                              className="hover:opacity-70 transition-opacity"
                            >
                              <X className="w-[20px] h-[20px] text-red-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Equipment Section */}
              <div className="mb-[30px]">
                <h3 className="font-['Poppins',sans-serif] font-bold text-[18px] text-black mb-[20px]">
                  Equipment
                </h3>

                {/* Equipment Form */}
                <div className="grid grid-cols-3 gap-[16px] mb-[16px]">
                  <div>
                    <label className="block font-['Poppins',sans-serif] font-semibold text-[14px] text-black mb-[10px]">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter equipment name"
                      value={equipmentName}
                      onChange={(e) =>
                        setEquipmentName(e.target.value)
                      }
                      className="w-full h-[45px] px-[16px] bg-white border border-[#00000040] rounded-[8px] font-['Poppins',sans-serif] text-[14px] text-black outline-none placeholder:text-[#00000060] focus:border-[#0B5ED0] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-['Poppins',sans-serif] font-semibold text-[14px] text-black mb-[10px]">
                      Category
                    </label>
                    <div className="relative">
                      <select
                        value={equipmentCategory}
                        onChange={(e) =>
                          setEquipmentCategory(e.target.value)
                        }
                        className="w-full h-[45px] pl-[16px] pr-[40px] bg-white border border-[#00000040] rounded-[8px] font-['Poppins',sans-serif] text-[14px] text-black outline-none appearance-none cursor-pointer focus:border-[#0B5ED0] transition-colors"
                      >
                        <option value="">
                          Select Category
                        </option>
                        <option value="Personal Protective Equipment">
                          Personal Protective Equipment
                        </option>
                        <option value="Medical Supplies">
                          Medical Supplies
                        </option>
                        <option value="Rescue Tools">
                          Rescue Tools
                        </option>
                        <option value="Communication Equipment">
                          Communication Equipment
                        </option>
                      </select>
                      <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
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
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block font-['Poppins',sans-serif] font-semibold text-[14px] text-black mb-[10px]">
                      Quantity
                    </label>
                    <input
                      type="number"
                      placeholder="Enter quantity"
                      value={equipmentQuantity}
                      onChange={(e) =>
                        setEquipmentQuantity(e.target.value)
                      }
                      className="w-full h-[45px] px-[16px] bg-white border border-[#00000040] rounded-[8px] font-['Poppins',sans-serif] text-[14px] text-black outline-none placeholder:text-[#00000060] focus:border-[#0B5ED0] transition-colors"
                    />
                  </div>
                </div>

                {/* Add/Update Equipment Button */}
                <button
                  onClick={handleAddOrUpdateEquipment}
                  className="h-[40px] px-[24px] bg-white border-[1.5px] border-[#0B5ED0] rounded-[8px] flex items-center justify-center hover:bg-[#f0f7ff] transition-colors mb-[20px]"
                >
                  <span className="font-['Poppins',sans-serif] font-semibold text-[14px] text-[#0B5ED0]">
                    {editingEquipmentId
                      ? "Update Equipment"
                      : "+ Add Equipment"}
                  </span>
                </button>

                {/* Equipment List */}
                {equipmentList.length > 0 && (
                  <div className="space-y-[12px]">
                    {equipmentList.map((equipment) => (
                      <div
                        key={equipment.id}
                        className="bg-[#dae7f8] rounded-[8px] p-[16px]"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex gap-[20px] items-center flex-1">
                            <span className="font-['Poppins',sans-serif] text-[14px] text-black w-[200px]">
                              {equipment.name}
                            </span>
                            <span className="font-['Poppins',sans-serif] text-[14px] text-[#00000080] w-[300px]">
                              {equipment.category}
                            </span>
                            <span className="font-['Poppins',sans-serif] text-[14px] text-[#00000080] w-[50px]">
                              Qty: {equipment.quantity}
                            </span>
                          </div>
                          <div className="flex gap-[8px]">
                            <button
                              onClick={() =>
                                handleEditEquipment(
                                  equipment.id,
                                )
                              }
                              className="hover:opacity-70 transition-opacity"
                            >
                              <Edit2 className="w-[18px] h-[18px] text-blue-600" />
                            </button>
                            <button
                              onClick={() =>
                                handleRemoveEquipment(
                                  equipment.id,
                                )
                              }
                              className="hover:opacity-70 transition-opacity"
                            >
                              <X className="w-[20px] h-[20px] text-red-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Add Unit Button */}
              <div className="flex justify-end pt-[20px] border-t border-[#00000020]">
                <button className="bg-[#0B5ED0] h-[45px] px-[40px] rounded-[8px] flex items-center justify-center hover:bg-[#094ba8] transition-colors shadow-[0px_2px_8px_0px_rgba(11,94,208,0.3)]">
                  <span className="font-['Poppins',sans-serif] font-semibold text-[15px] text-white">
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
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(2px)",
          }}
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
              <svg
                className="w-[25px] h-[25px]"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path d={svgPathsTeam.p33ab8400} fill="black" />
                <path d={svgPathsTeam.p3253000} fill="black" />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] p-[48px]">
              {/* Team Name Title */}
              <h2 className="font-['Poppins',sans-serif] font-bold text-[28px] text-black mb-[30px]">
                {selectedUnit.team}
              </h2>

              {/* Team Leader Info Card */}
              <div className="grid grid-cols-3 gap-[20px] mb-[40px]">
                <div>
                  <label className="block font-['Poppins',sans-serif] font-semibold text-[14px] text-black mb-[10px]">
                    Team Leader
                  </label>
                  <div className="h-[45px] px-[16px] bg-[#dae7f8] border border-[#00000020] rounded-[8px] font-['Poppins',sans-serif] text-[14px] text-black flex items-center">
                    {selectedUnit.name}
                  </div>
                </div>
                <div>
                  <label className="block font-['Poppins',sans-serif] font-semibold text-[14px] text-black mb-[10px]">
                    Rescuer ID
                  </label>
                  <div className="h-[45px] px-[16px] bg-[#dae7f8] border border-[#00000020] rounded-[8px] font-['Poppins',sans-serif] text-[14px] text-black flex items-center">
                    {selectedUnit.rescuerId}
                  </div>
                </div>
                <div>
                  <label className="block font-['Poppins',sans-serif] font-semibold text-[14px] text-black mb-[10px]">
                    Contact Number
                  </label>
                  <div className="h-[45px] px-[16px] bg-[#dae7f8] border border-[#00000020] rounded-[8px] font-['Poppins',sans-serif] text-[14px] text-black flex items-center">
                    {selectedUnit.contactNo}
                  </div>
                </div>
              </div>

              {/* Team Members Section */}
              <div className="mb-[40px]">
                <h3 className="font-['Poppins',sans-serif] font-bold text-[18px] text-black mb-[20px]">
                  Team Members
                </h3>

                {/* Team Member Table Header */}
                <div className="flex items-center gap-[20px] pb-[12px] mb-[8px] border-b-2 border-[#0B5ED0]">
                  <div className="font-['Poppins',sans-serif] font-semibold text-[13px] text-black w-[220px]">
                    NAME
                  </div>
                  <div className="font-['Poppins',sans-serif] font-semibold text-[13px] text-black w-[150px]">
                    RESCUER ID
                  </div>
                  <div className="font-['Poppins',sans-serif] font-semibold text-[13px] text-black w-[140px]">
                    POSITION
                  </div>
                  <div className="font-['Poppins',sans-serif] font-semibold text-[13px] text-black flex-1">
                    CONTACT NUMBER
                  </div>
                </div>

                {/* Team Member List */}
                <div>
                  {[1, 2, 3, 4].map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-[20px] py-[10px] border-b border-[#00000010] hover:bg-[#f5f9ff] transition-colors"
                    >
                      <div className="font-['Poppins',sans-serif] text-[14px] text-black w-[220px]">
                        Rachelle Abada
                      </div>
                      <div className="font-['Poppins',sans-serif] text-[14px] text-[#00000080] w-[150px]">
                        CC 12345678
                      </div>
                      <div className="font-['Poppins',sans-serif] text-[14px] text-[#00000080] w-[140px]">
                        Medic
                      </div>
                      <div className="font-['Poppins',sans-serif] text-[14px] text-[#00000080] flex-1">
                        09123456789
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment Section */}
              <div className="mb-[30px]">
                <h3 className="font-['Poppins',sans-serif] font-bold text-[18px] text-black mb-[20px]">
                  Equipment
                </h3>

                {/* Equipment Table Header */}
                <div className="flex items-center gap-[20px] pb-[12px] mb-[8px] border-b-2 border-[#0B5ED0]">
                  <div className="font-['Poppins',sans-serif] font-semibold text-[13px] text-black w-[280px]">
                    CATEGORY
                  </div>
                  <div className="font-['Poppins',sans-serif] font-semibold text-[13px] text-black w-[180px]">
                    NAME
                  </div>
                  <div className="font-['Poppins',sans-serif] font-semibold text-[13px] text-black w-[120px]">
                    STATUS
                  </div>
                  <div className="font-['Poppins',sans-serif] font-semibold text-[13px] text-black flex-1">
                    QUANTITY
                  </div>
                </div>

                {/* Equipment List */}
                <div>
                  {[
                    {
                      category: "Personal Protective Equipment",
                      name: "Helmets",
                      status: "Radios",
                      quantity: "5",
                    },
                    {
                      category: "Medical Supplies",
                      name: "Stretchers",
                      status: "In Use",
                      quantity: "5",
                    },
                    {
                      category: "Medical Supplies",
                      name: "Stretchers",
                      status: "Damaged",
                      quantity: "1",
                    },
                    {
                      category: "Rescue Tools",
                      name: "Ropes",
                      status: "Damaged",
                      quantity: "1",
                    },
                    {
                      category: "Rescue Tools",
                      name: "Cutting Tools",
                      status: "In Use",
                      quantity: "1",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-[20px] py-[10px] border-b border-[#00000010] hover:bg-[#f5f9ff] transition-colors"
                    >
                      <div className="font-['Poppins',sans-serif] text-[14px] text-black w-[280px]">
                        {item.category}
                      </div>
                      <div className="font-['Poppins',sans-serif] text-[14px] text-[#00000080] w-[180px]">
                        {item.name}
                      </div>
                      <div className="font-['Poppins',sans-serif] text-[14px] text-[#00000080] w-[120px]">
                        {item.status}
                      </div>
                      <div className="font-['Poppins',sans-serif] text-[14px] text-[#00000080] flex-1">
                        {item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Approval Modal */}
      {isUserModalOpen && selectedUser && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(2px)",
          }}
          onClick={handleCloseUserModal}
        >
          <div
            className="bg-white rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.25)] w-[1000px] max-w-[90vw] max-h-[90vh] relative overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute right-[25px] top-[22px] z-10 hover:opacity-70 transition-opacity bg-white rounded-full p-1"
              onClick={handleCloseUserModal}
            >
              <X className="w-[25px] h-[25px] text-black" />
            </button>

            {/* Modal Content */}
            <div className="p-[30px] pr-[60px]">
              {/* Title */}
              <h2 className="font-['Poppins',sans-serif] font-bold text-[20px] text-black mb-[20px]">
                Rescuer Approval
              </h2>

              {/* User Information */}
              <div className="bg-[#dae7f8] rounded-[8px] p-[18px] mb-[20px]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-[50px]">
                    <div>
                      <div className="font-['Poppins',sans-serif] font-bold text-[12px] text-[#163b56] mb-[6px] tracking-[2.04px]">
                        NAME
                      </div>
                      <div className="font-['Poppins',sans-serif] text-[13px] text-black">
                        {selectedUser.name}
                      </div>
                    </div>
                    <div>
                      <div className="font-['Poppins',sans-serif] font-bold text-[12px] text-[#163b56] mb-[6px] tracking-[2.04px]">
                        POSITION
                      </div>
                      <div className="font-['Poppins',sans-serif] text-[13px] text-black">
                        {selectedUser.position}
                      </div>
                    </div>
                    <div>
                      <div className="font-['Poppins',sans-serif] font-bold text-[12px] text-[#163b56] mb-[6px] tracking-[2.04px]">
                        OFFICE
                      </div>
                      <div className="font-['Poppins',sans-serif] text-[13px] text-black">
                        {selectedUser.office}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-[12px]">
                    <button
                      onClick={handleRejectUser}
                      className="bg-[rgb(202,30,30)] h-[42px] px-[35px] rounded-[8px] flex items-center justify-center hover:bg-[#dc2626] transition-colors shadow-[0px_2px_8px_0px_rgba(202,30,30,0.3)]"
                    >
                      <span className="font-['Poppins',sans-serif] font-bold text-[13px] text-white tracking-[2.21px]">
                        REJECT
                      </span>
                    </button>
                    <button
                      onClick={handleApproveUser}
                      className="bg-[rgb(47,128,47)] h-[42px] px-[35px] rounded-[8px] flex items-center justify-center hover:bg-[#059669] transition-colors shadow-[0px_2px_8px_0px_rgba(47,128,47,0.3)]"
                    >
                      <span className="font-['Poppins',sans-serif] font-bold text-[13px] text-white tracking-[2.21px]">
                        APPROVE
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Certificate Section */}
              <div className="mb-[20px]">
                <h3 className="font-['Poppins',sans-serif] font-bold text-[14px] text-black mb-[12px]">
                  Rescuer Certificate
                </h3>
                <div className="bg-[#f5f5f5] rounded-[8px] p-[15px] flex items-center justify-center">
                  <img
                    alt="Rescuer Certificate"
                    className="w-full h-auto object-contain max-h-[350px]"
                    src={image_e3c49f856c9d6a7917bdac0c4621ff321dddf846}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}