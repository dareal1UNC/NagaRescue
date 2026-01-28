import { useState } from "react";
import svgPaths from "./imports/svg-c29a8srkdw";
import imgRectangle1 from "figma:asset/ddaae69bc8d9d54dfd0ae02f4797f4fbbae65e00.png";
import Login from "./components/Login";
import Register from "./components/Register";
import DashboardCdrrmo from "./components/DashboardCdrrmo";
import BarangayEwsMonitoring from "./components/BarangayEwsMonitoring";
import SaruMonitoring from "./components/SaruMonitoring";
import SaruComcen from "./components/SaruComcen";
import EvacuationMonitoring from "./components/EvacuationMonitoring";
import Reports from "./components/Reports";
import ReportsComcen from "./components/ReportsComcen";
import Deployment from "./components/Deployment";

function Bg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" src={imgRectangle1} />
    </div>
  );
}

function MaterialSymbolsEmergencyShareOutlineRounded() {
  return (
    <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] mx-auto mb-4">
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
    <div className="text-center mb-8 md:mb-12">
      <MaterialSymbolsEmergencyShareOutlineRounded />
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_8px_4px] font-['Poppins',sans-serif] font-bold text-[#0b5ed0] mb-2">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">NAGA</p>
      </div>
      <div className="font-['Poppins',sans-serif] font-bold text-[#2f7fb8]">
        <p className="text-xl sm:text-2xl md:text-3xl">RESCUE</p>
      </div>
    </div>
  );
}

function Landing({ onLoginClick, onRegisterClick }: { onLoginClick: () => void, onRegisterClick: () => void }) {
  return (
    <div className="bg-white relative w-full h-screen overflow-hidden flex items-center justify-center">
      <Bg />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8 md:py-12 w-full max-w-lg">
        <Logo />
        <div className="flex flex-col gap-4 sm:gap-6 w-full items-center">
          <button 
            onClick={onLoginClick}
            className="w-full max-w-[355px] h-[60px] sm:h-[68px] md:h-[76px] bg-[#0b5ed0] rounded-[5px] font-['Poppins',sans-serif] font-bold text-white text-lg sm:text-xl md:text-2xl tracking-[4px] sm:tracking-[5.2px] md:tracking-[6.4px] shadow-[-4px_4px_6.9px_-3px_inset_rgba(0,0,0,0.25)] hover:bg-[#2f7fb8] transition-colors"
          >
            LOGIN
          </button>
          <button 
            onClick={onRegisterClick}
            className="w-full max-w-[355px] h-[60px] sm:h-[68px] md:h-[76px] border border-[#0b5ed0] border-solid rounded-[5px] font-['Poppins',sans-serif] font-bold text-[#0b5ed0] text-lg sm:text-xl md:text-2xl tracking-[4px] sm:tracking-[5.2px] md:tracking-[6.4px] shadow-[-4px_4px_6.9px_-3px_inset_rgba(0,0,0,0.25)] hover:bg-[#0b5ed0] hover:text-white transition-colors"
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"landing" | "login" | "register" | "dashboardCdrrmo" | "barangayEws" | "saruMonitoring" | "saruComcen" | "evacuationMonitoring" | "reports" | "reportsComcen" | "deployment">("landing");
  const [userRole, setUserRole] = useState<string | null>(null);

  const handleLoginSuccess = (role: string) => {
    setUserRole(role);
    // Route based on selected role
    if (role === "ComCen Staff") {
      setCurrentPage("deployment");
    } else if (role === "CDRRMO Officer") {
      setCurrentPage("dashboardCdrrmo");
    }
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentPage("login");
  };

  if (currentPage === "login") {
    return <Login onRegisterClick={() => setCurrentPage("register")} onLoginSuccess={handleLoginSuccess} />;
  }

  if (currentPage === "register") {
    return <Register onLoginClick={() => setCurrentPage("login")} />;
  }

  if (currentPage === "dashboardCdrrmo") {
    return <DashboardCdrrmo onNavigate={(tab) => {
      if (tab === "home") setCurrentPage("dashboardCdrrmo");
      if (tab === "barangay") setCurrentPage("barangayEws");
      if (tab === "saru") setCurrentPage("saruMonitoring");
      if (tab === "evacuation") setCurrentPage("evacuationMonitoring");
      if (tab === "reports") setCurrentPage("reports");
      if (tab === "deployment") setCurrentPage("deployment");
    }} onLogout={handleLogout} />;
  }

  if (currentPage === "barangayEws") {
    return <BarangayEwsMonitoring onNavigate={(tab) => {
      if (tab === "home") setCurrentPage("dashboardCdrrmo");
      if (tab === "barangay") setCurrentPage("barangayEws");
      if (tab === "saru") setCurrentPage("saruMonitoring");
      if (tab === "evacuation") setCurrentPage("evacuationMonitoring");
      if (tab === "reports") setCurrentPage("reports");
      if (tab === "deployment") setCurrentPage("deployment");
    }} onLogout={handleLogout} />;
  }

  if (currentPage === "saruMonitoring") {
    return <SaruMonitoring onNavigate={(tab) => {
      if (tab === "home") setCurrentPage("dashboardCdrrmo");
      if (tab === "barangay") setCurrentPage("barangayEws");
      if (tab === "saru") setCurrentPage("saruMonitoring");
      if (tab === "evacuation") setCurrentPage("evacuationMonitoring");
      if (tab === "reports") setCurrentPage("reports");
      if (tab === "deployment") setCurrentPage("deployment");
    }} onLogout={handleLogout} />;
  }

  if (currentPage === "saruComcen") {
    return <SaruComcen onNavigate={(tab) => {
      if (tab === "barangay") setCurrentPage("deployment");
      if (tab === "saru") setCurrentPage("saruComcen");
      if (tab === "reports") setCurrentPage("reportsComcen");
      if (tab === "deployment") setCurrentPage("deployment");
    }} onLogout={handleLogout} />;
  }

  if (currentPage === "evacuationMonitoring") {
    return <EvacuationMonitoring onNavigate={(tab) => {
      if (tab === "home") setCurrentPage("dashboardCdrrmo");
      if (tab === "barangay") setCurrentPage("barangayEws");
      if (tab === "saru") setCurrentPage("saruMonitoring");
      if (tab === "evacuation") setCurrentPage("evacuationMonitoring");
      if (tab === "reports") setCurrentPage("reports");
      if (tab === "deployment") setCurrentPage("deployment");
    }} onLogout={handleLogout} />;
  }

  if (currentPage === "reports") {
    return <Reports onNavigate={(tab) => {
      if (tab === "home") setCurrentPage("dashboardCdrrmo");
      if (tab === "barangay") setCurrentPage("barangayEws");
      if (tab === "saru") setCurrentPage("saruMonitoring");
      if (tab === "evacuation") setCurrentPage("evacuationMonitoring");
      if (tab === "reports") setCurrentPage("reports");
      if (tab === "deployment") setCurrentPage("deployment");
    }} onLogout={handleLogout} />;
  }

  if (currentPage === "reportsComcen") {
    return <ReportsComcen onNavigate={(tab) => {
      if (tab === "barangay") setCurrentPage("deployment");
      if (tab === "saru") setCurrentPage("saruComcen");
      if (tab === "reports") setCurrentPage("reportsComcen");
      if (tab === "deployment") setCurrentPage("deployment");
    }} onLogout={handleLogout} />;
  }

  if (currentPage === "deployment") {
    return <Deployment onNavigate={(tab) => {
      if (tab === "barangay") setCurrentPage("deployment");
      if (tab === "saru") setCurrentPage("saruComcen");
      if (tab === "reports") setCurrentPage("reportsComcen");
      if (tab === "deployment") setCurrentPage("deployment");
    }} onLogout={handleLogout} />;
  }

  return <Landing onLoginClick={() => setCurrentPage("login")} onRegisterClick={() => setCurrentPage("register")} />;
}