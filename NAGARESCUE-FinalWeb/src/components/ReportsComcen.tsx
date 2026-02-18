import svgPaths from "../imports/svg-wjuznj59td";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
import imgDashboardCdrrmo from "figma:asset/b8d5a36a1d7d52967f5e054ab644c0094ca5b269.png";
import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "./Navbar";

type ReportTab = "evacuation";

interface EvacuationCenterRow {
  id: string;
  name: string;
  barangay: string;
  family: string;
  individual: string;
}

interface ReportsComcenProps {
  onNavigate?: (tab: string) => void;
  onLogout?: () => void;
}

export default function ReportsComcen({
  onNavigate,
  onLogout,
}: ReportsComcenProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showBarangayDropdown, setShowBarangayDropdown] = useState(false);
  const [barangayFilter, setBarangayFilter] = useState("Barangay");
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

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

  const evacuationData: EvacuationCenterRow[] = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: String(i + 1).padStart(2, "0"),
      name: "Camarines Sur National High School",
      barangay: "Penafrancia",
      family: "135",
      individual: "503",
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
        userRole="comcen"
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
                  <path d="M7 10L12 15L17 10H7Z" fill="#0B5ED0" />
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
                        onChange={(e) => setDateFrom(e.target.value)}
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
                        onChange={(e) => setDateTo(e.target.value)}
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
                        onClick={() => setShowDateDropdown(false)}
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
                  setShowBarangayDropdown(!showBarangayDropdown);
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
                  <path d="M7 10L12 15L17 10H7Z" fill="#0B5ED0" />
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
              <div className="font-['Poppins',sans-serif] font-bold text-[15px] tracking-[2.55px] pb-[8px] text-[#2f7fb8] border-b-[3px] border-[#2f7fb8]">
                Rescue Operation
              </div>
            </div>
          </div>

          {/* Scrollable Table Container */}
          <div className="flex-1 overflow-auto">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-white z-10">
                <tr className="border-b-[0.5px] border-[#163b56]">
                  <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[15px] text-black tracking-[2.55px] bg-white">
                    ID
                  </th>
                  <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[15px] text-black tracking-[2.55px] bg-white">
                    Name
                  </th>
                  <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[15px] text-black tracking-[2.55px] bg-white">
                    Barangay
                  </th>
                  <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[15px] text-black tracking-[2.55px] bg-white">
                    Family
                  </th>
                  <th className="text-left py-[10px] px-[20px] font-['Poppins',sans-serif] font-bold text-[15px] text-black tracking-[2.55px] bg-white">
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
                    <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px]">
                      {row.id}
                    </td>
                    <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px]">
                      {row.name}
                    </td>
                    <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px]">
                      {row.barangay}
                    </td>
                    <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px]">
                      {row.family}
                    </td>
                    <td className="py-[10px] px-[20px] font-['Poppins',sans-serif] text-[15px] text-black tracking-[2.55px]">
                      {row.individual}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-[25px] mt-[20px] pt-[20px]">
            <button
              onClick={() =>
                setCurrentPage(currentPage === 1 ? 5 : currentPage - 1)
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
                setCurrentPage(currentPage === 5 ? 1 : currentPage + 1)
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
        </div>
      </div>
    </div>
  );
}