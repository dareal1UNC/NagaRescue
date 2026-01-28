import { useState } from "react";
import clsx from "clsx";
import { Search } from "lucide-react";
import svgPaths from "../imports/svg-iqzqnzyk53";
import svgPathsModal from "../imports/svg-j3ipm2yjo6";
import imgMap from "figma:asset/f0dce76e64433df20143f7889f554a52c6c8cb01.png";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
import Navbar from "./Navbar";

interface DeploymentProps {
  onNavigate?: (tab: string) => void;
  onLogout?: () => void;
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
  >(new Set(["#H-123456"])); // First item expanded by default
  const [searchQuery, setSearchQuery] = useState("");
  const [openTooltip, setOpenTooltip] = useState<string | null>(
    null,
  ); // Track which tooltip is open (format: "requestId-memberIndex")
  const [tooltipPosition, setTooltipPosition] = useState({
    x: 0,
    y: 0,
  }); // Track tooltip position for fixed positioning
  const [isDeployModalOpen, setIsDeployModalOpen] =
    useState(false);
  const [selectedRequest, setSelectedRequest] = useState<
    (typeof requests)[0] | null
  >(null);

  // Map dragging state
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

  // Mock data for requests
  const requests = [
    {
      id: "#H-123456",
      date: "Sep. 23, 2025",
      time: "2:15 PM",
      timeAgo: "2m ago",
      totalMembers: 5,
      address:
        "6th Street, Cokeville Zone 6, San Felipe, Naga City",
      toConsider: "3 Elder",
      status: "Pending",
      borderColor: "border-[orange]",
      members: [
        {
          name: "Rachelle Abada",
          age: 25,
          gender: "Female",
          specialNeeds: "None",
        },
        {
          name: "John Doe",
          age: 67,
          gender: "Male",
          specialNeeds: "Diabetes",
        },
        {
          name: "Maria Santos",
          age: 72,
          gender: "Female",
          specialNeeds: "Wheelchair",
        },
      ],
    },
    {
      id: "#H-789012",
      date: "Sep. 23, 2025",
      time: "2:30 PM",
      timeAgo: "5m ago",
      totalMembers: 3,
      address:
        "12th Street, Downtown Zone 2, San Felipe, Naga City",
      toConsider: "1 Infant",
      status: "Pending",
      borderColor: "border-[orange]",
      members: [
        {
          name: "Pedro Cruz",
          age: 32,
          gender: "Male",
          specialNeeds: "None",
        },
        {
          name: "Ana Cruz",
          age: 28,
          gender: "Female",
          specialNeeds: "None",
        },
        {
          name: "Baby Cruz",
          age: 1,
          gender: "Male",
          specialNeeds: "Infant",
        },
      ],
    },
    {
      id: "#H-345678",
      date: "Sep. 23, 2025",
      time: "2:45 PM",
      timeAgo: "8m ago",
      totalMembers: 4,
      address:
        "5th Avenue, Riverside Zone 4, San Felipe, Naga City",
      toConsider: "2 Children",
      status: "Pending",
      borderColor: "border-[#f7d000]",
      members: [
        {
          name: "Roberto Garcia",
          age: 40,
          gender: "Male",
          specialNeeds: "None",
        },
        {
          name: "Linda Garcia",
          age: 38,
          gender: "Female",
          specialNeeds: "None",
        },
        {
          name: "Sofia Garcia",
          age: 8,
          gender: "Female",
          specialNeeds: "None",
        },
        {
          name: "Miguel Garcia",
          age: 5,
          gender: "Male",
          specialNeeds: "Asthma",
        },
      ],
    },
    {
      id: "#H-901234",
      date: "Sep. 23, 2025",
      time: "3:00 PM",
      timeAgo: "12m ago",
      totalMembers: 6,
      address:
        "3rd Street, Uptown Zone 1, San Felipe, Naga City",
      toConsider: "1 Pregnant",
      status: "Pending",
      borderColor: "border-[#8c000f]",
      members: [
        {
          name: "Carlos Reyes",
          age: 45,
          gender: "Male",
          specialNeeds: "None",
        },
        {
          name: "Teresa Reyes",
          age: 42,
          gender: "Female",
          specialNeeds: "Pregnant",
        },
        {
          name: "Juan Reyes",
          age: 18,
          gender: "Male",
          specialNeeds: "None",
        },
        {
          name: "Carmen Reyes",
          age: 15,
          gender: "Female",
          specialNeeds: "None",
        },
        {
          name: "Luis Reyes",
          age: 12,
          gender: "Male",
          specialNeeds: "None",
        },
        {
          name: "Emma Reyes",
          age: 8,
          gender: "Female",
          specialNeeds: "None",
        },
      ],
    },
    {
      id: "#H-567890",
      date: "Sep. 23, 2025",
      time: "3:15 PM",
      timeAgo: "18m ago",
      totalMembers: 2,
      address:
        "8th Boulevard, Lakeside Zone 3, San Felipe, Naga City",
      toConsider: "None",
      status: "Pending",
      borderColor: "border-[orange]",
      members: [
        {
          name: "David Lee",
          age: 29,
          gender: "Male",
          specialNeeds: "None",
        },
        {
          name: "Sarah Lee",
          age: 27,
          gender: "Female",
          specialNeeds: "None",
        },
      ],
    },
  ];

  // Filter requests based on search query
  const filteredRequests = requests.filter((request) =>
    request.id
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

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
      {/* Navbar */}
      <Navbar
        userRole="comcen"
        activeTab="barangay"
        onNavigate={onNavigate}
        onLogout={onLogout}
      />
      {/* Map */}
      <div
        className="absolute h-[calc(100vh-80px)] left-0 overflow-hidden rounded-[30px] top-[80px] w-full"
        data-name="map"
      >
        {/* Draggable Map Container */}
        <div
          className="absolute w-[150%] h-[150%] cursor-grab active:cursor-grabbing"
          style={{
            transform: `translate(${mapPosition.x}px, ${mapPosition.y}px)`,
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=122.200,11.150,122.355,11.240&layer=mapnik"
            className="absolute inset-0 w-full h-full rounded-[30px] border-0 pointer-events-none"
            title="Naga City Map - Deployment"
          />

          {/* All map pins inside draggable container */}
          <Map additionalClassNames="left-[927px] top-[386px]" />
          <Map additionalClassNames="left-[480px] top-[200px]" />
          <div
            className="absolute aspect-[24/24] left-[46.25%] overflow-clip right-[52.01%] top-[183px]"
            data-name="MAP"
          >
            <div
              className="absolute inset-[8.33%_12.5%_1.13%_12.5%]"
              data-name="Vector"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 165, 0, 1)",
                  } as React.CSSProperties
                }
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 19 23"
                >
                  <path
                    d={svgPaths.p16541f00}
                    fill="var(--fill-0, #FFA500)"
                    id="Vector"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="absolute left-[605px] size-[74px] top-[296px]"
            data-name="MAP"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 74 74"
            >
              <g id="MAP">
                <path
                  d={svgPaths.p28cffd00}
                  fill="var(--fill-0, #FFA500)"
                  id="Vector"
                />
              </g>
            </svg>
          </div>
          <div
            className="absolute h-[25px] left-[326px] top-[397px] w-[26px]"
            data-name="MAP"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 26 25"
            >
              <g id="MAP">
                <path
                  d={svgPaths.p79e6200}
                  fill="var(--fill-0, #FF0000)"
                  id="Vector"
                />
              </g>
            </svg>
          </div>
          <Map1 additionalClassNames="left-[309px] top-[390px]" />
          <Map1 additionalClassNames="left-[314px] top-[405px]" />
          <Map1 additionalClassNames="left-[618px] top-[605px]" />
          <Map1 additionalClassNames="left-[631px] top-[632px]" />
          <Map2 additionalClassNames="left-[136px] top-[213px]" />
          <Map2 additionalClassNames="left-[450px] top-[234px]" />
          <Map2 additionalClassNames="left-[952px] top-[733px]" />
          <Map3 additionalClassNames="left-[533px] top-[372px]" />
          <Map3 additionalClassNames="left-[301px] top-[281px]" />
          <Map3 additionalClassNames="left-[776px] top-[320px]" />
          <Map3 additionalClassNames="left-[395px] top-[630px]" />
          <Map3 additionalClassNames="left-[370px] top-[696px]" />
          <Helper1 additionalClassNames="left-[915px] top-[663px]" />
          <Helper1 additionalClassNames="left-[644px] top-[701px]" />
          <Helper1 additionalClassNames="left-[631px] top-[247px]" />
          <Helper1 additionalClassNames="left-[594px] top-[529px]" />
          <div className="absolute h-[177px] left-[1088px] top-[378px] w-[173px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 173 177"
            >
              <g id="Group 15">
                <ellipse
                  cx="86.5"
                  cy="88.5"
                  fill="var(--fill-0, #FFFF00)"
                  fillOpacity="0.19"
                  id="Ellipse 3"
                  rx="86.5"
                  ry="88.5"
                />
                <g id="radio-tower 1">
                  <path
                    d={svgPaths.p1e53b900}
                    fill="var(--fill-0, #E6C700)"
                    id="Vector"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* Fixed overlay elements - not affected by drag */}
        <div
          className="absolute h-[calc(100vh-130px)] left-[40px] overflow-hidden top-[30px] w-[433px] flex flex-col"
          data-name="MONITOR"
        >
          <div className="absolute bg-white h-full left-0 rounded-[10px] shadow-[-12px_12px_25px_0px_rgba(0,0,0,0.25)] top-0 w-[433px]" />

          {/* Title */}
          <p className="absolute font-['Poppins',sans-serif] font-bold leading-[40px] left-[17px] text-[28px] text-black text-left text-nowrap top-[15px]">
            Barangay Request
          </p>

          {/* Search and Filter Row - Horizontally Aligned with 7:3 ratio */}
          <div className="absolute flex items-center gap-[10px] left-[17px] top-[60px] w-[399px]">
            {/* Search bar - 70% width */}
            <div className="bg-[#dae7f8] flex items-center gap-[10px] h-[40px] px-[15px] rounded-[10px] flex-[7]">
              <Search className="w-[18px] h-[18px]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Request..."
                className="flex-1 bg-transparent font-['Poppins',sans-serif] text-[13px] text-[rgba(0,0,0,0.3)] outline-none placeholder:text-[rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Barangay Filter - 30% width */}
            <button className="bg-white h-[40px] px-[12px] rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] flex items-center gap-[8px] hover:bg-gray-50 transition-colors flex-[3]">
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
              <span className="font-['Poppins',sans-serif] text-[13px] text-[#163b56]">
                Barangay
              </span>
              <svg
                className="w-[14px] h-[14px]"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M7 10L12 15L17 10H7Z" fill="#3FA9F5" />
              </svg>
            </button>
          </div>

          {/* Scrollable Request List */}
          <div className="absolute content-stretch flex flex-col gap-[17px] items-center left-[17px] overflow-y-auto top-[115px] bottom-[20px] w-[399px] pr-[8px]">
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

                    {/* Request ID - Prominent */}
                    <div className="absolute left-[90px] top-[20px]">
                      <p className="font-['Poppins',sans-serif] font-bold leading-[20px] text-[20px] text-[#163b56]">
                        {request.id}
                      </p>
                    </div>

                    {/* Time ago */}
                    <p className="absolute font-['Poppins',sans-serif] font-medium leading-[12px] right-[20px] not-italic text-[#9ca3af] text-[11px] text-nowrap text-right top-[20px]">
                      {request.timeAgo}
                    </p>

                    {/* Status Badge */}
                    <div className="absolute bg-[#dae7f8] content-stretch flex h-[26px] items-center justify-center right-[20px] px-[14px] rounded-[6px] top-[40px] w-auto shadow-sm">
                      <div
                        aria-hidden="true"
                        className="absolute border-[#0b5ed0] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none rounded-[6.25px]"
                      />
                      <p className="font-['Poppins',sans-serif] font-semibold leading-[12px] not-italic relative shrink-0 text-[#0b5ed0] text-[11px] text-nowrap">
                        {request.status}
                      </p>
                    </div>

                    {/* Request Details - Clean Layout */}
                    <div className="absolute flex flex-col gap-[8px] left-[90px] top-[48px] w-[220px]">
                      {/* Total Members */}
                      <div className="flex items-center gap-[6px]">
                        <span className="font-['Poppins',sans-serif] font-medium text-[#6b7280] text-[11px]">
                          Members:
                        </span>
                        <span className="font-['Poppins',sans-serif] font-semibold text-[#163b56] text-[13px]">
                          {request.totalMembers}
                        </span>
                      </div>

                      {/* Address */}
                      <div className="flex flex-col gap-[2px]">
                        <span className="font-['Poppins',sans-serif] font-semibold text-[#6b7280] text-[10px] uppercase tracking-wide">
                          Address
                        </span>
                        <p className="font-['Poppins',sans-serif] font-medium leading-[14px] text-[#163b56] text-[11px] m-0">
                          {request.address}
                        </p>
                      </div>

                      {/* To Consider */}
                      <div className="flex items-center gap-[6px]">
                        <span className="font-['Poppins',sans-serif] font-semibold text-[#d97706] text-[10px] uppercase tracking-wide">
                          ⚠️ Alert:
                        </span>
                        <span className="font-['Poppins',sans-serif] font-semibold text-[#d97706] text-[11px]">
                          {request.toConsider}
                        </span>
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
                      <div className="mt-[100px] flex flex-col gap-[16px]">
                        {/* Divider */}
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d1d5db] to-transparent opacity-50" />

                        {/* Member details section */}
                        <div
                          className="flex flex-col gap-[10px]"
                          data-name="more details"
                        >
                          {/* Table Header */}
                          <div className="grid grid-cols-[150px_40px_70px_1fr] gap-[10px] items-center pb-[6px] border-b-[1.5px] border-[#e5e7eb]">
                            <p className="font-['Poppins',sans-serif] font-bold text-[12px] text-[#374151] uppercase tracking-wide">
                              Member Name
                            </p>
                            <p className="font-['Poppins',sans-serif] font-bold text-[12px] text-[#374151] uppercase tracking-wide">
                              Age
                            </p>
                            <p className="font-['Poppins',sans-serif] font-bold text-[12px] text-[#374151] uppercase tracking-wide">
                              Gender
                            </p>
                            <p className="font-['Poppins',sans-serif] font-bold text-[12px] text-[#374151] uppercase tracking-wide">
                              Special Needs
                            </p>
                          </div>

                          {/* Table Rows - All members visible */}
                          {request.members.map((member, i) => {
                            const tooltipId = `${request.id}-${i}`;
                            const isTooltipOpen =
                              openTooltip === tooltipId;

                            return (
                              <div
                                key={i}
                                className="grid grid-cols-[150px_40px_70px_1fr] gap-[10px] items-center py-[4px] hover:bg-[#f9fafb] rounded-[4px] px-[4px] transition-colors"
                              >
                                <p className="font-['Poppins',sans-serif] font-medium text-[11px] text-[#163b56] truncate">
                                  {member.name}
                                </p>
                                <p className="font-['Poppins',sans-serif] font-semibold text-[11px] text-[#163b56]">
                                  {member.age}
                                </p>
                                <p className="font-['Poppins',sans-serif] font-medium text-[11px] text-[#6b7280] truncate">
                                  {member.gender}
                                </p>

                                {/* Special Needs Icon with Tooltip */}
                                <div className="relative flex items-center justify-center">
                                  <button
                                    onMouseEnter={(e) => {
                                      if (
                                        member.specialNeeds !==
                                        "None"
                                      ) {
                                        const rect =
                                          e.currentTarget.getBoundingClientRect();
                                        setTooltipPosition({
                                          x: rect.right + 8, // 8px to the right of badge
                                          y: rect.top - 4, // Slightly above to align nicely
                                        });
                                        setOpenTooltip(
                                          tooltipId,
                                        );
                                      }
                                    }}
                                    onMouseLeave={() => {
                                      setOpenTooltip(null);
                                    }}
                                    onClick={(e) =>
                                      e.stopPropagation()
                                    }
                                    className={clsx(
                                      "flex items-center justify-center w-[24px] h-[24px] rounded-full transition-all duration-200 cursor-pointer border-none",
                                      member.specialNeeds ===
                                        "None"
                                        ? "bg-[#f3f4f6] hover:bg-[#e5e7eb]"
                                        : "bg-[#fef3c7] hover:bg-[#fde68a]",
                                    )}
                                    title={
                                      member.specialNeeds ===
                                      "None"
                                        ? "No special needs"
                                        : "Hover for details"
                                    }
                                  >
                                    {member.specialNeeds ===
                                    "None" ? (
                                      <span className="text-[14px]">
                                        ✓
                                      </span>
                                    ) : (
                                      <span className="text-[14px]">
                                        ⚠️
                                      </span>
                                    )}
                                  </button>

                                  {/* Tooltip Popup - Fixed positioning */}
                                  {isTooltipOpen &&
                                    member.specialNeeds !==
                                      "None" && (
                                      <div
                                        className="fixed z-[9999] bg-white border-[1.5px] border-[#d97706] rounded-[6px] shadow-xl p-[10px] w-[200px]"
                                        style={{
                                          left: `${tooltipPosition.x}px`,
                                          top: `${tooltipPosition.y}px`,
                                        }}
                                        onMouseEnter={() =>
                                          setOpenTooltip(
                                            tooltipId,
                                          )
                                        }
                                        onMouseLeave={() =>
                                          setOpenTooltip(null)
                                        }
                                      >
                                        <div className="flex items-start gap-[6px]">
                                          <span className="text-[16px] flex-shrink-0">
                                            ⚠️
                                          </span>
                                          <div className="flex-1">
                                            <p className="font-['Poppins',sans-serif] font-bold text-[10px] text-[#d97706] uppercase tracking-wide mb-[4px]">
                                              Special Needs
                                            </p>
                                            <p className="font-['Poppins',sans-serif] font-semibold text-[11px] text-[#163b56] leading-[14px]">
                                              {
                                                member.specialNeeds
                                              }
                                            </p>
                                          </div>
                                        </div>
                                        {/* Triangle pointer */}
                                        <div className="absolute right-[100%] top-[8px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-[#d97706]" />
                                      </div>
                                    )}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Action Buttons - Always visible at bottom */}
                        <div className="flex gap-[12px] pt-[8px]">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRequest(request);
                              setIsDeployModalOpen(true);
                            }}
                            className="flex-1 h-[32px] rounded-[6px] bg-[#0b5ed0] hover:bg-[#094a9e] transition-all duration-200 shadow-sm hover:shadow-md border-none cursor-pointer"
                          >
                            <span className="font-['Poppins',sans-serif] font-bold text-[11px] text-white uppercase tracking-wide">
                              Deploy Unit
                            </span>
                          </button>
                          <button className="flex-1 h-[32px] rounded-[6px] bg-white hover:bg-[#f3f4f6] transition-all duration-200 border-[1.5px] border-[#d1d5db] cursor-pointer">
                            <span className="font-['Poppins',sans-serif] font-bold text-[11px] text-[#6b7280] uppercase tracking-wide">
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
                      request.borderColor,
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute h-[74px] left-[483px] top-[807px] w-[1100px]">
          <div className="absolute bg-[rgba(255,255,255,0.8)] h-[74px] left-0 rounded-[5px] top-0 w-[1100px]" />
          <p className="absolute font-['Poppins:Regular',sans-serif] leading-[15px] left-[40px] not-italic text-[#163b56] text-[14px] top-[42px] w-[1020px]">{`🔴 Red – Critical / Immediate Rescue   🟠 Orange – High Priority / Vulnerable 🟡 Yellow – Moderate Risk   ⚪ Grey – Low Priority`}</p>
          <p className="absolute font-['Josefin_Sans:Bold_Italic',sans-serif] font-bold italic leading-[15px] left-[40px] text-[25px] text-black top-[13px] w-[1020px]">
            Priority Color Coding
          </p>
        </div>
      </div>
      <div
        className="absolute contents left-[-48px] top-[-29px] pointer-events-none"
        data-name="bg"
      >
        <div className="absolute h-[1053px] left-[-48px] top-[-29px] w-[1585px] pointer-events-none" />
      </div>

      {/* Deployment Modal */}
      {isDeployModalOpen && selectedRequest && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          {/* Modal Container */}
          <div className="relative bg-white h-[670px] w-[1000px] rounded-[5px] shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsDeployModalOpen(false)}
              className="absolute right-[20px] top-[20px] z-50 w-[35px] h-[35px] rounded-full bg-[#f3f4f6] hover:bg-[#e5e7eb] flex items-center justify-center border-none cursor-pointer transition-colors"
            >
              <span className="text-[20px] text-[#374151]">
                ×
              </span>
            </button>

            {/* S.A.R.U LIST Title */}
            <div className="absolute left-[199.5px] top-[60px] translate-x-[-50%] translate-y-[-50%]">
              <p className="font-['Josefin_Sans',sans-serif] font-bold text-[45px] text-black text-center text-nowrap leading-[50px]">
                S.A.R.U LIST
              </p>
            </div>

            {/* Left Sidebar - S.A.R.U Units */}
            <div className="absolute bg-white h-[558px] left-[50px] overflow-y-auto rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[85px] w-[299px]">
              {/* Active Units Status */}
              <div className="absolute left-[22px] top-[37px] translate-y-[-50%]">
                <p className="font-['Poppins',sans-serif] font-medium text-[16px] text-black leading-[8px]">
                  Active Units
                </p>
              </div>
              <div className="absolute left-[227px] top-[35px]">
                <div className="w-[5px] h-[5px] rounded-full bg-[#73D05E]" />
              </div>
              <p className="absolute font-['Poppins',sans-serif] text-[10px] text-[#676767] text-right leading-[8px] left-[279px] top-[37px] translate-x-[-100%] translate-y-[-50%] w-[111px]">
                12 Active
              </p>

              {/* Search Bar */}
              <div className="absolute h-[26px] left-[19px] top-[57px] w-[258px]">
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
                <p className="absolute font-['Poppins',sans-serif] text-[10px] text-[#676767] leading-[8px] left-[35px] top-[13px] translate-y-[-50%]">
                  Search Units
                </p>
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
                  className={`absolute h-[114px] left-[21px] w-[257px]`}
                  style={{ top: `${93 + index * 160}px` }}
                >
                  <div className="absolute bg-white border border-[rgba(81,81,81,0.5)] h-[137px] left-0 rounded-[20px] top-0 w-[257px]" />

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
                  <p className="absolute font-['Poppins',sans-serif] font-bold text-[14px] text-black leading-[8px] left-[65px] top-[25.5px] translate-y-[-50%]">
                    {unit.id}
                  </p>

                  {/* Unit Type */}
                  <p className="absolute font-['Poppins',sans-serif] text-[8px] text-black leading-[8px] left-[65px] top-[40px]">
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
                  <p className="absolute font-['Poppins',sans-serif] text-[8px] text-black leading-[8px] left-[49px] top-[62px]">
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
                  <p className="absolute font-['Poppins',sans-serif] text-[8px] text-black leading-[8px] left-[48px] top-[84px]">
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
                  <p className="absolute font-['Poppins',sans-serif] text-[8px] text-black leading-[8px] left-[49px] top-[107px]">
                    {unit.deployed} Deployed
                  </p>

                  {/* Status Badge */}
                  <div className="absolute bg-[rgba(115,208,94,0.16)] border border-[#73D05E] h-[13px] left-[193px] rounded-[20px] top-[18px] w-[52px]">
                    <p className="absolute font-['Poppins',sans-serif] text-[10px] text-[#193B11] text-center leading-[8px] left-[25px] top-[5.5px] translate-x-[-50%] translate-y-[-50%] w-[52px]">
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
                    className="absolute bg-[#0b5ed0] border border-[#0b5ed0] h-[21px] left-[173px] rounded-[5px] top-[98px] w-[72px] cursor-pointer hover:bg-[#094a9e] transition-colors"
                  >
                    <p className="font-['Poppins',sans-serif] font-bold text-[8px] text-white text-center leading-[8px]">
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
                  className={`absolute h-[114px] left-[21px] w-[257px]`}
                  style={{ top: `${573 + index * 160}px` }}
                >
                  <div className="absolute bg-white border border-[rgba(81,81,81,0.5)] h-[137px] left-0 rounded-[20px] top-0 w-[257px]" />

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
                  <p className="absolute font-['Poppins',sans-serif] font-bold text-[14px] text-black leading-[8px] left-[65px] top-[25.5px] translate-y-[-50%]">
                    {unit.id}
                  </p>

                  {/* Unit Type */}
                  <p className="absolute font-['Poppins',sans-serif] text-[8px] text-black leading-[8px] left-[65px] top-[40px]">
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
                  <p className="absolute font-['Poppins',sans-serif] text-[8px] text-black leading-[8px] left-[49px] top-[62px]">
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
                  <p className="absolute font-['Poppins',sans-serif] text-[8px] text-black leading-[8px] left-[48px] top-[84px]">
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
                  <p className="absolute font-['Poppins',sans-serif] text-[8px] text-black leading-[8px] left-[49px] top-[107px]">
                    {unit.deployed} Deployed
                  </p>

                  {/* Status Badge */}
                  <div className="absolute bg-[rgba(206,208,94,0.16)] border border-[#d6d600] h-[13px] left-[193px] rounded-[20px] top-[18px] w-[52px]">
                    <p className="absolute font-['Poppins',sans-serif] text-[10px] text-[#d6d600] text-center leading-[8px] left-[25px] top-[5.5px] translate-x-[-50%] translate-y-[-50%] w-[52px]">
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
                    className="absolute bg-[#0b5ed0] border border-[#0b5ed0] h-[21px] left-[173px] rounded-[5px] top-[98px] w-[72px] cursor-pointer hover:bg-[#094a9e] transition-colors"
                  >
                    <p className="font-['Poppins',sans-serif] font-bold text-[8px] text-white text-center leading-[8px]">
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