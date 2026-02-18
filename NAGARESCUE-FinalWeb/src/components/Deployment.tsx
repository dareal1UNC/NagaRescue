import { useState, useEffect, useRef } from "react";
import { ref, onValue, update } from "firebase/database";
import { db } from "../firebaseConfig";
import clsx from "clsx";
import { Search, X } from "lucide-react";
import svgPaths from "../imports/svg-iqzqnzyk53";
import svgPathsModal from "../imports/svg-j3ipm2yjo6";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
import imgDashboardCdrrmo from "figma:asset/b8d5a36a1d7d52967f5e054ab644c0094ca5b269.png";
import Navbar from "./Navbar";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// COMCEN Request interface for Firebase data
interface ComcenRequest {
  id: string;
  originalAlertId: string;
  barangay: string;
  name: string;
  phone: string;
  location: string;
  fullAddress?: string; // Detailed address from mobile app
  condition: string;
  level: "HIGH" | "MEDIUM" | "LOW";
  urgencyReason: string;
  latitude: number;
  longitude: number;
  source: string;
  totalPax: number;
  household: Array<{ name: string; age: number; condition: string; gender?: string }> | null;
  familyInfo: string;
  status: "PENDING" | "DISPATCHED" | "RESOLVED";
  pushedAt: number;
  pushedBy: string;
  date: string;
  time: string;
}

interface DeploymentProps {
  onNavigate?: (tab: string) => void;
  onLogout?: () => void;
}

// Custom marker icons based on urgency level
const createCustomIcon = (level: string) => {
  const color = level === "HIGH" ? "#FF0000" : level === "MEDIUM" ? "#FFA500" : "#FFFF00";
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        width: 30px;
        height: 30px;
        background-color: ${color};
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        cursor: pointer;
        pointer-events: auto;
      ">
        <div style="
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(45deg);
          color: white;
          font-weight: bold;
          font-size: 12px;
          pointer-events: none;
        ">!</div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
};

// Map controller component to handle flying to selected location
function MapController({ selectedRequest }: { selectedRequest: ComcenRequest | null }) {
  const map = useMap();
  
  useEffect(() => {
    if (selectedRequest && selectedRequest.latitude && selectedRequest.longitude) {
      map.flyTo([selectedRequest.latitude, selectedRequest.longitude], 16, {
        duration: 1.5,
      });
    }
  }, [selectedRequest, map]);
  
  return null;
}

type DropdownVictimsRed2Props = {
  additionalClassNames?: string;
};

function DropdownVictimsRed2({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<DropdownVictimsRed2Props>) {
  return (
    <div
      className={clsx(
        "bg-white relative rounded-[15px] shrink-0 w-full",
        additionalClassNames,
      )}
    >
      <div className="overflow-clip relative rounded-[inherit] size-full">
        {children}
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[orange] border-solid inset-0 pointer-events-none rounded-[15px]"
      />
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("size-[25px]", additionalClassNames)}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        {children}
      </svg>
    </div>
  );
}

function IconoirCommunity({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[30px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="iconoir:community">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames="absolute">
      <g id="MAP">{children}</g>
    </Wrapper1>
  );
}
type DeploymentVectorProps = {
  additionalClassNames?: string;
};

function DeploymentVector({
  additionalClassNames = "",
}: DeploymentVectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <path
          d={svgPaths.p320df900}
          fill="var(--fill-0, #003B33)"
          id="Vector"
        />
      </svg>
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div
      className={clsx(
        "absolute h-[177px] w-[173px]",
        additionalClassNames,
      )}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 173 177"
      >
        <g id="Group 16">
          <ellipse
            cx="86.5"
            cy="88.5"
            fill="var(--fill-0, #8C000F)"
            fillOpacity="0.16"
            id="Ellipse 3"
            rx="86.5"
            ry="88.5"
          />
          <g id="radio-tower 1">
            <path
              d={svgPaths.p1e53b900}
              fill="var(--fill-0, #8C000F)"
              id="Vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div
      className={clsx(
        "absolute border border-solid h-[21px] rounded-[5px] top-[206px] w-[72px]",
        additionalClassNames,
      )}
    >
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[35px] not-italic text-[8px] text-black text-center top-[9.5px] translate-x-[-50%] translate-y-[-50%] w-[72px]">
        <p className="leading-[8px]">{text}</p>
      </div>
    </div>
  );
}

function OuiArrowUp() {
  return (
    <div className="relative size-[15px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="oui:arrow-up">
          <path
            d={svgPaths.p2820f780}
            fill="var(--fill-0, #676767)"
            fillOpacity="0.3"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}
type PendingTextProps = {
  text: string;
};

function PendingText({ text }: PendingTextProps) {
  return (
    <div className="absolute bg-[#dae7f8] content-stretch flex h-[20px] items-center justify-center left-[302px] p-[10px] rounded-[5px] top-[29px] w-[65px]">
      <div
        aria-hidden="true"
        className="absolute border-[#0b5ed0] border-[0.3px] border-solid inset-[-0.15px] pointer-events-none rounded-[5.15px]"
      />
      <p className="font-['Poppins:Regular',sans-serif] leading-[8px] not-italic relative shrink-0 text-[#0b5ed0] text-[8px] text-nowrap">
        {text}
      </p>
    </div>
  );
}
type DetailsProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  additionalClassNames?: string;
};

function Details({
  text,
  text1,
  text2,
  text3,
  text4,
  additionalClassNames = "",
}: DetailsProps) {
  return (
    <div
      className={clsx(
        "absolute content-stretch flex flex-col gap-[5px] h-[78px] items-start justify-center not-italic text-black top-[16px] w-[192px]",
        additionalClassNames,
      )}
    >
      <p className="font-['Poppins:Bold',sans-serif] leading-[8px] min-w-full relative shrink-0 text-[20px] w-[min-content]">
        {text}
      </p>
      <div className="font-['Poppins:Regular',sans-serif] h-[8px] leading-[8px] relative shrink-0 text-[12px] w-full">
        <p className="mb-0">{`Total members:  5`}</p>
        <p>{text1}</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] h-[25px] leading-[0] relative shrink-0 text-[0px] w-[181px]">
        <p className="mb-0">
          <span className="leading-[8px] text-[#515151] text-[8px]">
            {text2}
          </span>
          <span className="leading-[8px] text-[8px]"></span>
          <span className="leading-[12px] text-[10px]">{`6th Street, Cokeville  `}</span>
        </p>
        <p className="leading-[12px] mb-0 text-[10px]">{`              Zone 6, San Felipe, Naga City`}</p>
        <p className="leading-[8px] text-[8px]">{text3}</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] relative shrink-0 text-[0px] text-[15px] w-full">
        <span className="text-[#515151]">{text4}</span>
        <span>{` 3 Elder`}</span>
      </p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-center left-[19px] top-[13px] w-[41px]">
      <div className="relative shrink-0 size-[33px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 33 33"
        >
          <g id="material-symbols:family-group">
            <path
              d={svgPaths.pd36e200}
              fill="var(--fill-0, #3FA9F5)"
              id="Vector"
            />
          </g>
        </svg>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[8px] min-w-full not-italic relative shrink-0 text-[#515151] text-[6px] w-[min-content]">
        {text}
      </p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[8px] min-w-full not-italic relative shrink-0 text-[#515151] text-[6px] text-center w-[min-content]">
        {text1}
      </p>
    </div>
  );
}
type Map3Props = {
  additionalClassNames?: string;
};

function Map3({ additionalClassNames = "" }: Map3Props) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path
        d={svgPaths.p793a380}
        fill="var(--fill-0, #FFFF00)"
        id="Vector"
      />
    </Wrapper>
  );
}
type Map2Props = {
  additionalClassNames?: string;
};

function Map2({ additionalClassNames = "" }: Map2Props) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path
        d={svgPaths.p793a380}
        fill="var(--fill-0, #676767)"
        id="Vector"
      />
    </Wrapper>
  );
}
type Map1Props = {
  additionalClassNames?: string;
};

function Map1({ additionalClassNames = "" }: Map1Props) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path
        d={svgPaths.p793a380}
        fill="var(--fill-0, #FF0000)"
        id="Vector"
      />
    </Wrapper>
  );
}
type MapProps = {
  additionalClassNames?: string;
};

function Map({ additionalClassNames = "" }: MapProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path
        d={svgPaths.p793a380}
        fill="var(--fill-0, #FFA500)"
        id="Vector"
      />
    </Wrapper>
  );
}

function DropdownVictimsRed() {
  return (
    <DropdownVictimsRed2 additionalClassNames="h-[95px]">
      <Helper text="Sep. 23, 2025" text1="2:15 PM" />
      <Details
        text="#H-123456"
        text1="&nbsp;"
        text2="Address:"
        text3="&nbsp;"
        text4="To Consider:"
        additionalClassNames="left-[72px]"
      />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[8px] left-[366px] not-italic text-[#676767] text-[14px] text-nowrap text-right top-[13px] translate-x-[-100%]">
        2m ago
      </p>
      <PendingText text="Pending" />
      <div className="absolute flex items-center justify-center left-[352px] size-[15px] top-[59px]">
        <div className="flex-none rotate-[180deg]">
          <OuiArrowUp />
        </div>
      </div>
    </DropdownVictimsRed2>
  );
}

function DropdownVictimsRed1() {
  return (
    <div
      className="bg-white h-[95px] relative rounded-[15px] shrink-0 w-full"
      data-name="DROPDOWN VICTIMS RED"
    >
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Helper text="Sep. 23, 2025" text1="2:15 PM" />
        <Details
          text="#H-123456"
          text1="&nbsp;"
          text2="Address:"
          text3="&nbsp;"
          text4="To Consider:"
          additionalClassNames="left-[69px]"
        />
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[8px] left-[366px] not-italic text-[#676767] text-[14px] text-nowrap text-right top-[13px] translate-x-[-100%]">
          2m ago
        </p>
        <PendingText text="Pending" />
        <div className="absolute flex items-center justify-center left-[352px] size-[15px] top-[59px]">
          <div className="flex-none rotate-[180deg]">
            <OuiArrowUp />
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f7d000] border-solid inset-0 pointer-events-none rounded-[15px]"
      />
    </div>
  );
}

export default function Deployment({
  onNavigate,
  onLogout,
}: DeploymentProps) {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
    useState(false);
  const [expandedItems, setExpandedItems] = useState<
    Set<string>
  >(new Set()); // No items expanded by default
  const [searchQuery, setSearchQuery] = useState("");
  const [barangayFilter, setBarangayFilter] =
    useState("All Barangays");
  const [showBarangayDropdown, setShowBarangayDropdown] =
    useState(false);
  const [openTooltip, setOpenTooltip] = useState<string | null>(
    null,
  ); // Track which tooltip is open (format: "requestId-memberIndex")
  const [tooltipPosition, setTooltipPosition] = useState({
    x: 0,
    y: 0,
  }); // Track tooltip position for fixed positioning
  const [isDeployModalOpen, setIsDeployModalOpen] =
    useState(false);
  const [selectedRequest, setSelectedRequest] = useState<ComcenRequest | null>(null);
  const [unitSearchQuery, setUnitSearchQuery] = useState("");
  
  // Firebase real-time data
  const [comcenRequests, setComcenRequests] = useState<ComcenRequest[]>([]);

  // Map dragging state
  const [mapPosition, setMapPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Fetch COMCEN requests from Firebase
  useEffect(() => {
    const comcenRef = ref(db, "comcen_requests");
    const unsubscribe = onValue(comcenRef, (snapshot) => {
      const data = snapshot.val();
      const requests: ComcenRequest[] = [];
      if (data) {
        Object.keys(data).forEach((key) => {
          requests.push({ id: key, ...data[key] });
        });
      }
      // Sort by pushedAt descending (newest first)
      requests.sort((a, b) => (b.pushedAt || 0) - (a.pushedAt || 0));
      setComcenRequests(requests);
    });
    return () => unsubscribe();
  }, []);

  // Get time ago string
  const getTimeAgo = (timestamp: number) => {
    if (!timestamp) return "Just now";
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  // Get border color based on urgency level
  const getBorderColor = (level: string) => {
    if (level === "HIGH") return "border-[#8c000f]";
    if (level === "MEDIUM") return "border-[#f7d000]";
    return "border-[orange]";
  };

  // Handle deploy action
  const handleDeploy = (request: ComcenRequest) => {
    const requestRef = ref(db, `comcen_requests/${request.id}`);
    update(requestRef, { status: "DISPATCHED" });
    setIsDeployModalOpen(false);
    setSelectedRequest(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - mapPosition.x,
      y: e.clientY - mapPosition.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    const maxOffset = 140;
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

  // Filter requests based on search query and barangay filter
  const filteredRequests = comcenRequests.filter((request) => {
    const matchesSearch = searchQuery === "" || 
      request.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.barangay?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesBarangay = barangayFilter === "All Barangays" || 
      request.barangay?.toLowerCase() === barangayFilter.toLowerCase() ||
      request.barangay?.toLowerCase().includes(barangayFilter.toLowerCase());
    
    return matchesSearch && matchesBarangay;
  });

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div
      className="relative w-full h-screen bg-white overflow-hidden"
      data-name="DEPLOYMENT"
    >
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="absolute w-full h-full object-cover opacity-10"
          src={imgDashboardCdrrmo}
        />
      </div>

      {/* Navbar */}
      <Navbar
        userRole="comcen"
        activeTab="barangay"
        onNavigate={onNavigate}
        onLogout={onLogout}
      />
      
      {/* Main Content - Flex layout for sidebar and map */}
      <div className="relative flex gap-[20px] px-[30px] pt-[20px] pb-[20px] h-[calc(100vh-80px)]">
        {/* Left Sidebar - Barangay Request Panel */}
        <div
          className="w-[420px] flex-shrink-0 flex flex-col z-20"
          data-name="MONITOR"
        >
          <div className="bg-white h-full rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden p-[17px]">

          {/* Title */}
          <p className="font-['Poppins',sans-serif] font-bold leading-[40px] text-[28px] text-black text-left text-nowrap mb-[10px]">
            Barangay Request
          </p>

          {/* Search and Filter Row - Horizontally Aligned with 7:3 ratio */}
          <div className="flex items-center gap-[10px] w-full mb-[15px]">
            {/* Search bar - 70% width */}
            <div className="bg-[#dae7f8] flex items-center gap-[10px] h-[40px] px-[15px] rounded-[10px] flex-[7]">
              <Search className="w-[18px] h-[18px]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Request..."
                className="flex-1 bg-transparent font-['Poppins',sans-serif] text-[13px] text-black outline-none placeholder:text-[rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Barangay Filter - 30% width */}
            <div className="relative flex-[3]">
              <button
                onClick={() =>
                  setShowBarangayDropdown(!showBarangayDropdown)
                }
                className="bg-white h-[40px] px-[12px] rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] flex items-center gap-[8px] hover:bg-gray-50 transition-colors w-full"
              >
                <svg
                  className="w-[18px] h-[18px]"
                  fill="none"
                  viewBox="0 0 30 30"
                >
                  <path
                    d={svgPaths.p88e0b80}
                    stroke="#163B56"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                </svg>
                <span className="font-['Poppins',sans-serif] text-[13px] text-[#163b56] truncate flex-1 text-left">
                  {barangayFilter}
                </span>
                {filteredRequests.length > 0 && (
                  <span className="bg-[#3fa9f5] text-white text-[10px] px-[6px] py-[2px] rounded-full">
                    {filteredRequests.length}
                  </span>
                )}
                <svg
                  className={`w-[14px] h-[14px] transition-transform ${showBarangayDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 10L12 15L17 10H7Z"
                    fill="#3FA9F5"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showBarangayDropdown && (
                <div className="absolute top-full left-0 right-0 mt-[2px] bg-white shadow-lg max-h-[300px] overflow-y-auto z-30 border border-gray-200 rounded-[8px]">
                  {/* Select All Option */}
                  <button
                    onClick={() => {
                      setBarangayFilter("All Barangays");
                      setShowBarangayDropdown(false);
                    }}
                    className={clsx(
                      "w-full px-[12px] py-[10px] text-left font-['Poppins',sans-serif] text-[13px] text-[#163b56] hover:bg-[#dae7f8] transition-colors border-b border-gray-200",
                      barangayFilter === "All Barangays" && "bg-[#dae7f8] font-semibold"
                    )}
                  >
                    All Barangays ({comcenRequests.length})
                  </button>

                  {/* Individual Barangays */}
                  {nagaBarangays.map((brgy) => {
                    const count = comcenRequests.filter(r => 
                      r.barangay?.toLowerCase() === brgy.toLowerCase() ||
                      r.barangay?.toLowerCase().includes(brgy.toLowerCase())
                    ).length;
                    return (
                      <button
                        key={brgy}
                        onClick={() => {
                          setBarangayFilter(brgy);
                          setShowBarangayDropdown(false);
                        }}
                        className={clsx(
                          "w-full px-[12px] py-[10px] text-left font-['Poppins',sans-serif] text-[13px] text-[#163b56] hover:bg-[#dae7f8] transition-colors flex justify-between items-center",
                          barangayFilter === brgy && "bg-[#dae7f8] font-semibold"
                        )}
                      >
                        <span>{brgy}</span>
                        {count > 0 && (
                          <span className="bg-[#3fa9f5] text-white text-[10px] px-[6px] py-[2px] rounded-full">
                            {count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Scrollable Request List */}
          <div className="flex flex-col gap-[17px] items-center overflow-y-auto flex-1 pr-[8px]">
            {filteredRequests.map((request) => {
              const isExpanded = expandedItems.has(request.id);

              return (
                <div
                  key={request.id}
                  onClick={() => toggleExpand(request.id)}
                  className={clsx(
                    "bg-white relative rounded-[15px] shrink-0 w-full cursor-pointer hover:shadow-lg transition-all duration-300",
                    isExpanded
                      ? "h-auto pb-[20px]"
                      : "h-[145px]",
                  )}
                >
                  <div
                    className={clsx(
                      "relative rounded-[inherit] w-full p-[20px]",
                      isExpanded ? "flex flex-col" : "h-full",
                    )}
                  >
                    {/* Family Icon with Date/Time */}
                    <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-[20px] top-[20px] w-[60px]">
                      <div className="relative shrink-0 size-[45px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 33 33"
                        >
                          <g id="material-symbols:family-group">
                            <path
                              d={svgPaths.pd36e200}
                              fill="var(--fill-0, #3FA9F5)"
                              id="Vector"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="font-['Poppins',sans-serif] font-medium leading-[11px] min-w-full not-italic relative shrink-0 text-[#2f7fb8] text-[9px] w-[min-content] text-center">
                        {request.date}
                      </p>
                      <p className="font-['Poppins',sans-serif] font-semibold leading-[11px] min-w-full not-italic relative shrink-0 text-[#2f7fb8] text-[9px] text-center w-[min-content]">
                        {request.time}
                      </p>
                    </div>

                    {/* Request Name - Prominent */}
                    <div className="absolute left-[90px] top-[20px]">
                      <p className="font-['Poppins',sans-serif] font-bold leading-[20px] text-[20px] text-[#163b56]">
                        {request.name}
                      </p>
                    </div>

                    {/* Time ago */}
                    <p className="absolute font-['Poppins',sans-serif] font-medium leading-[12px] right-[20px] not-italic text-[#9ca3af] text-[11px] text-nowrap text-right top-[20px]">
                      {getTimeAgo(request.pushedAt)}
                    </p>

                    {/* Status Badge */}
                    <div className={clsx(
                      "absolute content-stretch flex h-[26px] items-center justify-center right-[20px] px-[14px] rounded-[6px] top-[40px] w-auto shadow-sm",
                      request.status === "PENDING" ? "bg-[#dae7f8]" : "bg-[#d1fae5]"
                    )}>
                      <div
                        aria-hidden="true"
                        className={clsx(
                          "absolute border-[0.5px] border-solid inset-[-0.25px] pointer-events-none rounded-[6.25px]",
                          request.status === "PENDING" ? "border-[#0b5ed0]" : "border-[#059669]"
                        )}
                      />
                      <p className={clsx(
                        "font-['Poppins',sans-serif] font-semibold leading-[12px] not-italic relative shrink-0 text-[11px] text-nowrap",
                        request.status === "PENDING" ? "text-[#0b5ed0]" : "text-[#059669]"
                      )}>
                        {request.status}
                      </p>
                    </div>

                    {/* Request Details - Clean Layout */}
                    <div className="absolute flex flex-col gap-[8px] left-[90px] top-[48px] w-[280px]">
                      {/* Total Members and Alert - Side by side */}
                      <div className="flex items-center gap-[12px]">
                        <div className="flex items-center gap-[6px]">
                          <span className="font-['Poppins',sans-serif] font-medium text-[#6b7280] text-[11px]">
                            Members:
                          </span>
                          <span className="font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[13px]">
                            {request.totalPax || 1}
                          </span>
                        </div>

                        {/* Urgency Level */}
                        <div className="flex items-center gap-[6px]">
                          <span className={clsx(
                            "font-['Poppins',sans-serif] font-semibold text-[11px] uppercase tracking-wide",
                            request.level === "HIGH" ? "text-[#dc2626]" : 
                            request.level === "MEDIUM" ? "text-[#d97706]" : "text-[#059669]"
                          )}>
                            ⚠️ {request.level}
                          </span>
                        </div>
                      </div>

                      {/* Barangay */}
                      <div className="flex items-center gap-[6px]">
                        <span className="font-['Poppins',sans-serif] font-semibold text-[#6b7280] text-[10px] uppercase tracking-wide">
                          From:
                        </span>
                        <span className="font-['Poppins',sans-serif] font-medium text-[#163b56] text-[12px]">
                          {request.barangay}
                        </span>
                      </div>

                      {/* Address */}
                      <div className="flex flex-col gap-[2px]">
                        <span className="font-['Poppins',sans-serif] font-semibold text-[#6b7280] text-[10px] uppercase tracking-wide">
                          Address
                        </span>
                        <p className="font-['Poppins',sans-serif] font-medium leading-[14px] text-[#163b56] text-[12px] m-0 truncate">
                          {request.fullAddress || request.location}
                        </p>
                        {request.latitude && request.longitude && (
                          <p className="font-['Poppins',sans-serif] font-normal text-[#9ca3af] text-[9px] m-0">
                            📍 {request.latitude.toFixed(5)}, {request.longitude.toFixed(5)}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Expand/Collapse Arrow */}
                    <div className="absolute flex items-center justify-center right-[20px] size-[20px] top-[75px]">
                      <div
                        className={clsx(
                          "flex-none transition-transform duration-300",
                          isExpanded ? "" : "rotate-[180deg]",
                        )}
                      >
                        <div className="relative size-[20px]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 15 15"
                          >
                            <g id="oui:arrow-up">
                              <path
                                d={svgPaths.p2820f780}
                                fill="var(--fill-0, #6b7280)"
                                fillOpacity="0.5"
                                id="Vector"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content - Flows naturally */}
                    {isExpanded && (
                      <div className="mt-[120px] flex flex-col gap-[16px]">
                        {/* Divider */}
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d1d5db] to-transparent opacity-50" />

                        {/* Member details section */}
                        <div
                          className="flex flex-col gap-[10px]"
                          data-name="more details"
                        >
                          {/* Table Header */}
                          <div className="grid grid-cols-[150px_50px_1fr] gap-[10px] items-center pb-[6px] border-b-[1.5px] border-[#e5e7eb]">
                            <p className="font-['Poppins',sans-serif] font-bold text-[12px] text-[#374151] uppercase tracking-wide">
                              Member Name
                            </p>
                            <p className="font-['Poppins',sans-serif] font-bold text-[12px] text-[#374151] uppercase tracking-wide">
                              Age
                            </p>
                            <p className="font-['Poppins',sans-serif] font-bold text-[12px] text-[#374151] uppercase tracking-wide">
                              Condition
                            </p>
                          </div>

                          {/* Table Rows - Household members from Firebase */}
                          {request.household && request.household.length > 0 ? (
                            request.household.map((member, i) => {
                              const tooltipId = `${request.id}-${i}`;
                              const isTooltipOpen = openTooltip === tooltipId;

                              return (
                                <div
                                  key={i}
                                  className="grid grid-cols-[150px_50px_1fr] gap-[10px] items-center py-[4px] hover:bg-[#f9fafb] rounded-[4px] px-[4px] transition-colors"
                                >
                                  <p className="font-['Poppins',sans-serif] font-medium text-[12px] text-[#163b56] truncate">
                                    {member.name}
                                  </p>
                                  <p className="font-['Poppins',sans-serif] font-semibold text-[12px] text-[#163b56]">
                                    {member.age}
                                  </p>
                                  <p className={clsx(
                                    "font-['Poppins',sans-serif] font-medium text-[12px] truncate",
                                    member.condition && member.condition !== "None" 
                                      ? "text-[#d97706] font-semibold" 
                                      : "text-[#6b7280]"
                                  )}>
                                    {member.condition || "None"}
                                  </p>
                                </div>
                              );
                            })
                          ) : (
                            <div className="py-[8px] text-center">
                              <p className="font-['Poppins',sans-serif] text-[12px] text-[#6b7280]">
                                {request.familyInfo || "No household details available"}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Action Buttons - Always visible at bottom */}
                        <div className="flex gap-[12px] pt-[8px]">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRequest(request);
                              setIsDeployModalOpen(true);
                            }}
                            className="flex-1 h-[35px] px-[30px] rounded-[8px] bg-[#0b5ed0] hover:bg-[#094ba8] transition-colors shadow-[0px_2px_8px_0px_rgba(11,94,208,0.3)] border-none cursor-pointer flex items-center justify-center"
                          >
                            <span className="font-['Poppins',sans-serif] font-semibold text-[12px] text-white">
                              Deploy Unit
                            </span>
                          </button>
                          <button className="flex-1 h-[35px] px-[30px] rounded-[8px] bg-white hover:bg-[#f3f4f6] transition-colors shadow-[0px_2px_8px_0px_rgba(11,94,208,0.3)] border-[1.5px] border-[#d1d5db] cursor-pointer flex items-center justify-center">
                            <span className="font-['Poppins',sans-serif] font-semibold text-[12px] text-[#6b7280]">
                              Abandon
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    aria-hidden="true"
                    className={clsx(
                      "absolute border border-solid inset-0 pointer-events-none rounded-[15px]",
                      getBorderColor(request.level),
                    )}
                  />
                </div>
              );
            })}

            {/* Empty State */}
            {filteredRequests.length === 0 && (
              <div className="flex flex-col items-center justify-center h-[300px] gap-[16px]">
                <div className="text-[48px]">📭</div>
                <p className="font-['Poppins',sans-serif] text-[16px] text-[#6b7280] text-center">
                  No requests from Barangays yet
                </p>
                <p className="font-['Poppins',sans-serif] text-[12px] text-[#9ca3af] text-center">
                  Requests pushed from Barangay Dashboards will appear here
                </p>
              </div>
            )}
          </div>
          </div>
        </div>

        {/* Right Side - Map Container */}
        <div className="flex-1 relative rounded-[10px] overflow-hidden shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)]">
          <MapContainer
            center={[13.6218, 123.1948]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapController selectedRequest={selectedRequest} />
            {/* Markers for each request with valid coordinates */}
            {comcenRequests
              .filter(req => req.latitude && req.longitude)
              .map((request) => (
                <Marker
                  key={request.id}
                  position={[request.latitude, request.longitude]}
                  icon={createCustomIcon(request.level)}
                >
                  <Popup>
                    <div className="font-['Poppins',sans-serif]">
                      <p className="font-bold text-[14px] text-[#163b56]">{request.name}</p>
                      <p className="text-[12px] text-[#6b7280]">{request.barangay}</p>
                      <p className="text-[12px] text-[#6b7280]">{request.fullAddress || request.location}</p>
                      <p className="text-[10px] text-[#9ca3af]">
                        📍 {request.latitude.toFixed(5)}, {request.longitude.toFixed(5)}
                      </p>
                      <p className={`text-[11px] font-semibold mt-1 ${
                        request.level === 'HIGH' ? 'text-red-600' :
                        request.level === 'MEDIUM' ? 'text-orange-500' : 'text-yellow-600'
                      }`}>
                        Priority: {request.level}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>

          {/* Priority Color Coding Legend - Inside map area */}
          <div className="absolute bottom-[20px] left-[20px] right-[20px] z-[1000]">
            <div className="bg-[rgba(255,255,255,0.95)] rounded-[8px] p-[15px] shadow-lg">
              <p className="font-['Poppins',sans-serif] font-bold text-[18px] text-black mb-[8px]">
                Priority Color Coding
              </p>
              <p className="font-['Poppins',sans-serif] text-[12px] text-[#163b56]">
                🔴 Red – Critical / Immediate Rescue &nbsp;&nbsp; 🟠 Orange – High Priority / Vulnerable &nbsp;&nbsp; 🟡 Yellow – Moderate Risk &nbsp;&nbsp; ⚪ Grey – Low Priority
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment Modal */}
      {isDeployModalOpen && selectedRequest && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          {/* Modal Container */}
          <div className="relative bg-white h-[670px] w-[1000px] rounded-[5px] shadow-2xl">
            {/* Close Button */}
            <button
              className="absolute right-[25px] top-[22px] z-10 hover:opacity-70 transition-opacity bg-white rounded-full p-1"
              onClick={() => setIsDeployModalOpen(false)}
            >
              <X className="w-[25px] h-[25px] text-black" />
            </button>

            {/* S.A.R.U LIST Title */}
            <div className="absolute left-[199.5px] top-[60px] translate-x-[-50%] translate-y-[-50%]">
              <p className="font-['Josefin_Sans',sans-serif] font-bold text-[45px] text-black text-center text-nowrap leading-[50px]">
                S.A.R.U LIST
              </p>
            </div>

            {/* Left Sidebar - S.A.R.U Units */}
            <div className="absolute bg-white h-[558px] left-[50px] overflow-y-auto rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[85px] w-[320px]">
              {/* Active Units Status */}
              <div className="absolute left-[22px] top-[37px] translate-y-[-50%]">
                <p className="font-['Poppins',sans-serif] font-medium text-[16px] text-black leading-[11px]">
                  Active Units
                </p>
              </div>
              <div className="absolute left-[230px] top-[35px]">
                <div className="w-[5px] h-[5px] rounded-full bg-[#73D05E]" />
              </div>
              <p className="absolute font-['Poppins',sans-serif] text-[10px] text-[#676767] text-right leading-[11px] left-[296px] top-[37px] translate-x-[-100%] translate-y-[-50%] w-[111px]">
                12 Active
              </p>

              {/* Search Bar */}
              <div className="absolute h-[26px] left-[19px] top-[57px] w-[278px]">
                <div className="absolute bg-white border-[0.5px] border-[rgba(81,81,81,0.5)] h-[26px] left-0 rounded-[9px] top-0 w-full" />
                <div className="absolute left-[10px] top-[6px]">
                  <svg
                    className="w-[16px] h-[16px]"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d={svgPathsModal.p9283620}
                      fill="#8A8A8A"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={unitSearchQuery}
                  onChange={(e) =>
                    setUnitSearchQuery(e.target.value)
                  }
                  placeholder="Search Units"
                  className="absolute left-[35px] top-[50%] translate-y-[-50%] w-[calc(100%-45px)] bg-transparent font-['Poppins',sans-serif] text-[12px] text-black placeholder:text-[#676767] outline-none border-none"
                />
              </div>

              {/* Boat Unit Cards */}
              {[
                {
                  id: "#SARU-123456",
                  type: "Boat Unit",
                  crew: 5,
                  lives: 12,
                  deployed: "2h",
                  status: "Active",
                  statusColor: "#73D05E",
                },
                {
                  id: "#SARU-789012",
                  type: "Boat Unit",
                  crew: 4,
                  lives: 8,
                  deployed: "1.5h",
                  status: "Active",
                  statusColor: "#73D05E",
                },
                {
                  id: "#SARU-345678",
                  type: "Boat Unit",
                  crew: 6,
                  lives: 15,
                  deployed: "3h",
                  status: "Active",
                  statusColor: "#73D05E",
                },
              ].map((unit, index) => (
                <div
                  key={unit.id}
                  className={`absolute h-[114px] left-[21px] w-[278px]`}
                  style={{ top: `${93 + index * 160}px` }}
                >
                  <div className="absolute bg-white border border-[rgba(81,81,81,0.5)] h-[137px] left-0 rounded-[20px] top-0 w-[278px]" />

                  {/* Boat Icon */}
                  <div className="absolute left-[20px] top-[15px]">
                    <svg
                      className="w-[35px] h-[35px]"
                      fill="none"
                      viewBox="0 0 35 35"
                    >
                      <path
                        d={svgPathsModal.p18660f80}
                        fill="#5FC9F3"
                      />
                    </svg>
                  </div>

                  {/* Unit ID */}
                  <p className="absolute font-['Poppins',sans-serif] font-bold text-[14px] text-black leading-[11px] left-[65px] top-[25.5px] translate-y-[-50%]">
                    {unit.id}
                  </p>

                  {/* Unit Type */}
                  <p className="absolute font-['Poppins',sans-serif] text-[11px] text-black leading-[11px] left-[65px] top-[40px]">
                    {unit.type}
                  </p>

                  {/* Crew Members */}
                  <div className="absolute left-[23px] top-[57px]">
                    <svg
                      className="w-[17px] h-[17px]"
                      fill="none"
                      viewBox="0 0 17 17"
                    >
                      <path
                        d={svgPathsModal.p7080c80}
                        fill="black"
                      />
                    </svg>
                  </div>
                  <p className="absolute font-['Poppins',sans-serif] text-[11px] text-black leading-[11px] left-[49px] top-[62px]">
                    {unit.crew} Crew Members
                  </p>

                  {/* Lives Rescued */}
                  <div className="absolute left-[23px] top-[80px]">
                    <svg
                      className="w-[17px] h-[17px]"
                      fill="none"
                      viewBox="0 0 17 17"
                    >
                      <path
                        d={svgPathsModal.p4817400}
                        fill="black"
                      />
                    </svg>
                  </div>
                  <p className="absolute font-['Poppins',sans-serif] text-[11px] text-black leading-[11px] left-[48px] top-[84px]">
                    {unit.lives} Lives Rescued
                  </p>

                  {/* Deployment Time */}
                  <div className="absolute left-[23px] top-[103px]">
                    <svg
                      className="w-[17px] h-[17px]"
                      fill="none"
                      viewBox="0 0 17 17"
                    >
                      <path
                        d={svgPathsModal.p275ab400}
                        fill="black"
                      />
                    </svg>
                  </div>
                  <p className="absolute font-['Poppins',sans-serif] text-[11px] text-black leading-[11px] left-[49px] top-[107px]">
                    {unit.deployed} Deployed
                  </p>

                  {/* Status Badge */}
                  <div className="absolute bg-[rgba(115,208,94,0.16)] h-[18px] left-[200px] rounded-[6.25px] top-[18px] w-[60px] flex items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="absolute border-[#73D05E] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none rounded-[6.25px]"
                    />
                    <p className="font-['Poppins',sans-serif] font-semibold leading-[12px] not-italic relative shrink-0 text-[#193B11] text-[11px] text-nowrap">
                      {unit.status}
                    </p>
                  </div>

                  {/* Deploy Unit Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDeployModalOpen(false);
                      onNavigate?.("barangay");
                    }}
                    className="absolute bg-[#0b5ed0] border border-[#0b5ed0] h-[28px] left-[173px] rounded-[5px] top-[95px] w-[93px] cursor-pointer hover:bg-[#094a9e] transition-colors"
                  >
                    <p className="font-['Poppins',sans-serif] font-bold text-[11px] text-white text-center leading-[11px]">
                      DEPLOY UNIT
                    </p>
                  </button>
                </div>
              ))}

              {/* Ground Unit Cards */}
              {[
                {
                  id: "#SARU-764532",
                  type: "Ground Unit",
                  crew: 4,
                  lives: 0,
                  deployed: "1h",
                  status: "Stand By",
                  statusColor: "#d6d600",
                },
              ].map((unit, index) => (
                <div
                  key={unit.id}
                  className={`absolute h-[114px] left-[21px] w-[278px]`}
                  style={{ top: `${573 + index * 160}px` }}
                >
                  <div className="absolute bg-white h-[137px] left-0 rounded-[20px] top-0 w-[278px]">
                    <div
                      aria-hidden="true"
                      className="absolute border-[rgba(81,81,81,0.5)] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none rounded-[20px]"
                    />
                  </div>

                  {/* Van Icon */}
                  <div className="absolute left-[14px] top-[15px]">
                    <svg
                      className="w-[35px] h-[35px]"
                      fill="none"
                      viewBox="0 0 35 35"
                    >
                      <path
                        d={svgPathsModal.p34536180}
                        fill="#FFA500"
                      />
                    </svg>
                  </div>

                  {/* Unit ID */}
                  <p className="absolute font-['Poppins',sans-serif] font-bold text-[14px] text-black leading-[11px] left-[65px] top-[25.5px] translate-y-[-50%]">
                    {unit.id}
                  </p>

                  {/* Unit Type */}
                  <p className="absolute font-['Poppins',sans-serif] text-[11px] text-black leading-[11px] left-[65px] top-[40px]">
                    {unit.type}
                  </p>

                  {/* Crew Members */}
                  <div className="absolute left-[23px] top-[57px]">
                    <svg
                      className="w-[17px] h-[17px]"
                      fill="none"
                      viewBox="0 0 17 17"
                    >
                      <path
                        d={svgPathsModal.p7080c80}
                        fill="black"
                      />
                    </svg>
                  </div>
                  <p className="absolute font-['Poppins',sans-serif] text-[11px] text-black leading-[11px] left-[49px] top-[62px]">
                    {unit.crew} Crew Members
                  </p>

                  {/* Lives Rescued */}
                  <div className="absolute left-[23px] top-[80px]">
                    <svg
                      className="w-[17px] h-[17px]"
                      fill="none"
                      viewBox="0 0 17 17"
                    >
                      <path
                        d={svgPathsModal.p4817400}
                        fill="black"
                      />
                    </svg>
                  </div>
                  <p className="absolute font-['Poppins',sans-serif] text-[11px] text-black leading-[11px] left-[48px] top-[84px]">
                    {unit.lives} Lives Rescued
                  </p>

                  {/* Deployment Time */}
                  <div className="absolute left-[23px] top-[103px]">
                    <svg
                      className="w-[17px] h-[17px]"
                      fill="none"
                      viewBox="0 0 17 17"
                    >
                      <path
                        d={svgPathsModal.p275ab400}
                        fill="black"
                      />
                    </svg>
                  </div>
                  <p className="absolute font-['Poppins',sans-serif] text-[11px] text-black leading-[11px] left-[49px] top-[107px]">
                    {unit.deployed} Deployed
                  </p>

                  {/* Status Badge */}
                  <div className="absolute bg-[rgba(206,208,94,0.16)] h-[18px] left-[193px] rounded-[6.25px] top-[18px] w-[72px] flex items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="absolute border-[#d6d600] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none rounded-[6.25px]"
                    />
                    <p className="font-['Poppins',sans-serif] font-semibold leading-[12px] not-italic relative shrink-0 text-[#d6d600] text-[11px] text-nowrap">
                      {unit.status}
                    </p>
                  </div>

                  {/* Deploy Unit Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDeployModalOpen(false);
                      onNavigate?.("barangay");
                    }}
                    className="absolute bg-[#0b5ed0] border border-[#0b5ed0] h-[28px] left-[173px] rounded-[5px] top-[95px] w-[93px] cursor-pointer hover:bg-[#094a9e] transition-colors"
                  >
                    <p className="font-['Poppins',sans-serif] font-bold text-[11px] text-white text-center leading-[11px]">
                      DEPLOY UNIT
                    </p>
                  </button>
                </div>
              ))}
            </div>

            {/* Right Side - Destination Route with Map */}
            <div className="absolute left-[386px] top-[107px]">
              <p className="font-['Josefin_Sans',sans-serif] font-bold text-[25px] text-black text-nowrap leading-[35px]">
                Destination - Route
              </p>
            </div>

            {/* OpenStreetMap iframe */}
            <div className="absolute h-[500px] left-[386px] rounded-[5px] top-[143px] w-[573px] overflow-hidden">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=122.200,11.150,122.355,11.240&layer=mapnik&marker=11.1949,122.2778"
                className="absolute inset-0 w-full h-full rounded-[5px] border-0"
                title="Destination Route Map"
              />

              {/* Boat Icon on Map */}
              <div className="absolute left-[151px] top-[285px] pointer-events-none">
                <svg
                  className="w-[21px] h-[20px]"
                  fill="none"
                  viewBox="0 0 21 20"
                >
                  <path
                    d={svgPathsModal.p2b1c0700}
                    fill="#163B56"
                  />
                </svg>
              </div>

              {/* Red Location Pin on Map */}
              <div className="absolute left-[240px] top-[320px] pointer-events-none">
                <svg
                  className="w-[25px] h-[25px]"
                  fill="none"
                  viewBox="0 0 25 25"
                >
                  <path
                    d={svgPathsModal.p793a380}
                    fill="#FF0000"
                  />
                </svg>
              </div>

              {/* Route Line */}
              <div className="absolute left-[155.5px] top-[303.5px] w-[94.5px] h-[52.5px] pointer-events-none">
                <svg
                  className="block w-full h-full"
                  fill="none"
                  viewBox="0 0 96 54"
                >
                  <path
                    d={svgPathsModal.p29ab3880}
                    stroke="#FF0000"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}