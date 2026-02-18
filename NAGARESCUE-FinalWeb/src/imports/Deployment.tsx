import { useEffect, useState } from "react";
import { ref, onValue, update } from "firebase/database";
import { db } from "../firebaseConfig";
import svgPaths from "./svg-iqzqnzyk53";
import clsx from "clsx";
import imgMap from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";

// COMCEN Request interface
interface ComcenRequest {
  id: string;
  originalAlertId: string;
  barangay: string;
  name: string;
  phone: string;
  location: string;
  condition: string;
  level: "HIGH" | "MEDIUM" | "LOW";
  urgencyReason: string;
  latitude: number;
  longitude: number;
  source: string;
  totalPax: number;
  household: Array<{ name: string; age: number; condition: string }> | null;
  familyInfo: string;
  status: "PENDING" | "DISPATCHED" | "RESOLVED";
  pushedAt: number;
  pushedBy: string;
  date: string;
  time: string;
}

type DropdownVictimsRed2Props = {
  additionalClassNames?: string;
};

function DropdownVictimsRed2({ children, additionalClassNames = "" }: React.PropsWithChildren<DropdownVictimsRed2Props>) {
  return (
    <div className={clsx("bg-white relative rounded-[15px] shrink-0 w-full", additionalClassNames)}>
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[orange] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("size-[25px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        {children}
      </svg>
    </div>
  );
}

function IconoirCommunity({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[30px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
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

function DeploymentVector({ additionalClassNames = "" }: DeploymentVectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <path d={svgPaths.p320df900} fill="var(--fill-0, #003B33)" id="Vector" />
      </svg>
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("absolute h-[177px] w-[173px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 173 177">
        <g id="Group 16">
          <ellipse cx="86.5" cy="88.5" fill="var(--fill-0, #8C000F)" fillOpacity="0.16" id="Ellipse 3" rx="86.5" ry="88.5" />
          <g id="radio-tower 1">
            <path d={svgPaths.p1e53b900} fill="var(--fill-0, #8C000F)" id="Vector" />
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
    <div className={clsx("absolute border border-solid h-[21px] rounded-[5px] top-[206px] w-[72px]", additionalClassNames)}>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[35px] not-italic text-[8px] text-black text-center top-[9.5px] translate-x-[-50%] translate-y-[-50%] w-[72px]">
        <p className="leading-[8px]">{text}</p>
      </div>
    </div>
  );
}

function OuiArrowUp() {
  return (
    <div className="relative size-[15px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="oui:arrow-up">
          <path d={svgPaths.p2820f780} fill="var(--fill-0, #676767)" fillOpacity="0.3" id="Vector" />
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
    <div className="absolute bg-[#e2f2fe] content-stretch flex h-[20px] items-center justify-center left-[302px] p-[10px] rounded-[5px] top-[29px] w-[65px]">
      <div aria-hidden="true" className="absolute border-[#3fa9f5] border-[0.3px] border-solid inset-[-0.15px] pointer-events-none rounded-[5.15px]" />
      <p className="font-['Poppins:Regular',sans-serif] leading-[8px] not-italic relative shrink-0 text-[#3fa9f5] text-[8px] text-nowrap">{text}</p>
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

function Details({ text, text1, text2, text3, text4, additionalClassNames = "" }: DetailsProps) {
  return (
    <div className={clsx("absolute content-stretch flex flex-col gap-[5px] h-[78px] items-start justify-center not-italic text-black top-[16px] w-[192px]", additionalClassNames)}>
      <p className="font-['Poppins:Bold',sans-serif] leading-[8px] min-w-full relative shrink-0 text-[20px] w-[min-content]">{text}</p>
      <div className="font-['Poppins:Regular',sans-serif] h-[8px] leading-[8px] relative shrink-0 text-[12px] w-full">
        <p className="mb-0">{`Total members:  5`}</p>
        <p>{text1}</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] h-[25px] leading-[0] relative shrink-0 text-[0px] w-[181px]">
        <p className="mb-0">
          <span className="leading-[8px] text-[#515151] text-[8px]">{text2}</span>
          <span className="leading-[8px] text-[8px]"></span>
          <span className="leading-[12px] text-[10px]">{`6th Street, Cokeville  `}</span>
        </p>
        <p className="leading-[12px] mb-0 text-[10px]">{`              Zone 6, San Felipe, Naga City`}</p>
        <p className="leading-[8px] text-[8px]">{text3}</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] relative shrink-0 text-[0px] text-[14px] w-full">
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <g id="material-symbols:family-group">
            <path d={svgPaths.pd36e200} fill="var(--fill-0, #3FA9F5)" id="Vector" />
          </g>
        </svg>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[8px] min-w-full not-italic relative shrink-0 text-[#515151] text-[6px] w-[min-content]">{text}</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[8px] min-w-full not-italic relative shrink-0 text-[#515151] text-[6px] text-center w-[min-content]">{text1}</p>
    </div>
  );
}
type Map3Props = {
  additionalClassNames?: string;
};

function Map3({ additionalClassNames = "" }: Map3Props) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path d={svgPaths.p793a380} fill="var(--fill-0, #FFFF00)" id="Vector" />
    </Wrapper>
  );
}
type Map2Props = {
  additionalClassNames?: string;
};

function Map2({ additionalClassNames = "" }: Map2Props) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path d={svgPaths.p793a380} fill="var(--fill-0, #676767)" id="Vector" />
    </Wrapper>
  );
}
type Map1Props = {
  additionalClassNames?: string;
};

function Map1({ additionalClassNames = "" }: Map1Props) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path d={svgPaths.p793a380} fill="var(--fill-0, #FF0000)" id="Vector" />
    </Wrapper>
  );
}
type MapProps = {
  additionalClassNames?: string;
};

function Map({ additionalClassNames = "" }: MapProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path d={svgPaths.p793a380} fill="var(--fill-0, #FFA500)" id="Vector" />
    </Wrapper>
  );
}

function DropdownVictimsRed() {
  return (
    <DropdownVictimsRed2 additionalClassNames="h-[95px]">
      <Helper text="Sep. 23, 2025" text1="2:15 PM" />
      <Details text="#H-123456" text1="&nbsp;" text2="Address:" text3="&nbsp;" text4="To Consider:" additionalClassNames="left-[72px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[8px] left-[366px] not-italic text-[#676767] text-[14px] text-nowrap text-right top-[13px] translate-x-[-100%]">2m ago</p>
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
    <div className="bg-white h-[95px] relative rounded-[15px] shrink-0 w-full" data-name="DROPDOWN VICTIMS RED">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Helper text="Sep. 23, 2025" text1="2:15 PM" />
        <Details text="#H-123456" text1="&nbsp;" text2="Address:" text3="&nbsp;" text4="To Consider:" additionalClassNames="left-[69px]" />
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[8px] left-[366px] not-italic text-[#676767] text-[14px] text-nowrap text-right top-[13px] translate-x-[-100%]">2m ago</p>
        <PendingText text="Pending" />
        <div className="absolute flex items-center justify-center left-[352px] size-[15px] top-[59px]">
          <div className="flex-none rotate-[180deg]">
            <OuiArrowUp />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f7d000] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

export default function Deployment() {
  const [comcenRequests, setComcenRequests] = useState<ComcenRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<ComcenRequest | null>(null);

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

  // Get border color based on urgency level
  const getBorderColor = (level: string) => {
    if (level === "HIGH") return "#8c000f";
    if (level === "MEDIUM") return "#f7d000";
    return "#FFA500";
  };

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

  // Handle deploy action
  const handleDeploy = (request: ComcenRequest) => {
    const requestRef = ref(db, `comcen_requests/${request.id}`);
    update(requestRef, { status: "DISPATCHED" });
    setSelectedRequest(null);
  };

  // Render a single request card
  const renderRequestCard = (request: ComcenRequest, isExpanded: boolean = false) => {
    const borderColor = getBorderColor(request.level);
    
    return (
      <div 
        key={request.id}
        className={`bg-white relative rounded-[15px] shrink-0 w-full cursor-pointer ${isExpanded ? 'h-[250px]' : 'h-[95px]'}`}
        onClick={() => setSelectedRequest(isExpanded ? null : request)}
      >
        <div className="overflow-clip relative rounded-[inherit] size-full">
          {/* Date/Time Helper */}
          <div className="absolute content-stretch flex flex-col gap-px items-center left-[19px] top-[13px] w-[41px]">
            <div className="relative shrink-0 size-[33px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
                <g id="material-symbols:family-group">
                  <path d={svgPaths.pd36e200} fill="var(--fill-0, #3FA9F5)" id="Vector" />
                </g>
              </svg>
            </div>
            <p className="font-['Poppins:Regular',sans-serif] leading-[8px] min-w-full not-italic relative shrink-0 text-[#515151] text-[6px] w-[min-content]">{request.date}</p>
            <p className="font-['Poppins:Regular',sans-serif] leading-[8px] min-w-full not-italic relative shrink-0 text-[#515151] text-[6px] text-center w-[min-content]">{request.time}</p>
          </div>
          
          {/* Details */}
          <div className="absolute content-stretch flex flex-col gap-[5px] h-[78px] items-start justify-center not-italic text-black top-[16px] w-[192px] left-[72px]">
            <p className="font-['Poppins:Bold',sans-serif] leading-[8px] min-w-full relative shrink-0 text-[16px] w-[min-content]">{request.name}</p>
            <div className="font-['Poppins:Regular',sans-serif] h-[8px] leading-[8px] relative shrink-0 text-[12px] w-full">
              <p className="mb-0">Total members: {request.totalPax || 1}</p>
            </div>
            <div className="font-['Poppins:Regular',sans-serif] h-[25px] leading-[0] relative shrink-0 text-[0px] w-[181px]">
              <p className="mb-0">
                <span className="leading-[8px] text-[#515151] text-[8px]">Address: </span>
                <span className="leading-[12px] text-[10px]">{request.location}</span>
              </p>
              <p className="leading-[8px] text-[8px]">&nbsp;</p>
            </div>
            <p className="font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] relative shrink-0 text-[0px] text-[14px] w-full">
              <span className="text-[#515151]">From: </span>
              <span>{request.barangay}</span>
            </p>
          </div>
          
          {/* Time ago */}
          <p className="absolute font-['Poppins:Regular',sans-serif] leading-[8px] left-[366px] not-italic text-[#676767] text-[14px] text-nowrap text-right top-[13px] translate-x-[-100%]">
            {getTimeAgo(request.pushedAt)}
          </p>
          
          {/* Status badge */}
          <div className={`absolute content-stretch flex h-[20px] items-center justify-center left-[302px] p-[10px] rounded-[5px] top-[29px] w-[65px] ${
            request.status === "PENDING" ? "bg-[#e2f2fe]" : 
            request.status === "DISPATCHED" ? "bg-[#e2fee2]" : "bg-[#f0f0f0]"
          }`}>
            <div aria-hidden="true" className={`absolute border-[0.3px] border-solid inset-[-0.15px] pointer-events-none rounded-[5.15px] ${
              request.status === "PENDING" ? "border-[#3fa9f5]" : 
              request.status === "DISPATCHED" ? "border-[#4caf50]" : "border-[#999]"
            }`} />
            <p className={`font-['Poppins:Regular',sans-serif] leading-[8px] not-italic relative shrink-0 text-[8px] text-nowrap ${
              request.status === "PENDING" ? "text-[#3fa9f5]" : 
              request.status === "DISPATCHED" ? "text-[#4caf50]" : "text-[#999]"
            }`}>{request.status}</p>
          </div>
          
          {/* Expand arrow */}
          <div className="absolute flex items-center justify-center left-[352px] size-[15px] top-[59px]">
            <div className={`flex-none ${isExpanded ? '' : 'rotate-[180deg]'}`}>
              <OuiArrowUp />
            </div>
          </div>
          
          {/* Expanded content */}
          {isExpanded && (
            <>
              <div className="absolute h-0 left-[19px] top-[101px] w-[348.006px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
                    <line stroke="black" strokeOpacity="0.05" x2="348.006" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
              
              {/* Household details */}
              <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[24px] top-[116px] w-[341px]">
                <div className="content-stretch flex gap-[15px] items-end leading-[8px] not-italic text-black text-nowrap w-full">
                  <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[12px]">Household Member</p>
                  <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px]">Age</p>
                  <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px]">Condition</p>
                </div>
                <div className="h-0 relative shrink-0 w-[341.001px]">
                  <div className="absolute inset-[-0.1px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 341 1">
                      <path d="M0 0.1H341.001" stroke="black" strokeOpacity="0.3" strokeWidth="0.2" />
                    </svg>
                  </div>
                </div>
                {request.household ? (
                  request.household.map((member, i) => (
                    <div key={i} className="content-stretch flex font-['Poppins:Regular',sans-serif] items-center leading-[8px] not-italic text-[10px] text-black">
                      <p className="relative shrink-0 w-[137px]">{member.name}</p>
                      <p className="h-[9px] relative shrink-0 w-[39px]">{member.age}</p>
                      <p className="relative shrink-0 w-[120px]">{member.condition || "None"}</p>
                    </div>
                  ))
                ) : (
                  <div className="content-stretch flex font-['Poppins:Regular',sans-serif] items-center leading-[8px] not-italic text-[10px] text-black">
                    <p className="relative shrink-0">{request.familyInfo}</p>
                  </div>
                )}
              </div>
              
              {/* Action buttons */}
              <div 
                className="absolute border border-solid h-[21px] rounded-[5px] top-[206px] w-[72px] bg-[#cdeefb] border-[#5fc9f3] left-[19px] cursor-pointer hover:bg-[#a8e0f7]"
                onClick={(e) => { e.stopPropagation(); handleDeploy(request); }}
              >
                <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[35px] not-italic text-[8px] text-black text-center top-[9.5px] translate-x-[-50%] translate-y-[-50%] w-[72px]">
                  <p className="leading-[8px]">DEPLOY UNIT</p>
                </div>
              </div>
              <div 
                className="absolute border border-solid h-[21px] rounded-[5px] top-[206px] w-[72px] bg-[rgba(255,255,255,0.1)] border-[rgba(0,0,0,0.25)] left-[112px] cursor-pointer hover:bg-[#f0f0f0]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[35px] not-italic text-[8px] text-black text-center top-[9.5px] translate-x-[-50%] translate-y-[-50%] w-[72px]">
                  <p className="leading-[8px]">ABANDON</p>
                </div>
              </div>
            </>
          )}
        </div>
        <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[15px]" style={{ borderColor }} />
      </div>
    );
  };

  return (
    <div className="bg-white relative size-full" data-name="DEPLOYMENT">
      <div className="absolute h-[924px] left-0 overflow-clip rounded-[30px] top-[100px] w-[1440px]" data-name="map">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgMap} />
        <Map additionalClassNames="left-[927px] top-[386px]" />
        <Map additionalClassNames="left-[480px] top-[200px]" />
        <div className="absolute aspect-[24/24] left-[46.25%] overflow-clip right-[52.01%] top-[183px]" data-name="MAP">
          <div className="absolute inset-[8.33%_12.5%_1.13%_12.5%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 165, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 23">
                <path d={svgPaths.p16541f00} fill="var(--fill-0, #FFA500)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute left-[605px] size-[74px] top-[296px]" data-name="MAP">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
            <g id="MAP">
              <path d={svgPaths.p28cffd00} fill="var(--fill-0, #FFA500)" id="Vector" />
            </g>
          </svg>
        </div>
        <div className="absolute h-[25px] left-[326px] top-[397px] w-[26px]" data-name="MAP">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 25">
            <g id="MAP">
              <path d={svgPaths.p79e6200} fill="var(--fill-0, #FF0000)" id="Vector" />
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
        <div className="absolute h-[842px] left-[40px] overflow-clip top-[41px] w-[433px]" data-name="MONITOR">
          <div className="absolute bg-white h-[842px] left-0 rounded-[10px] shadow-[-12px_12px_25px_0px_rgba(0,0,0,0.25)] top-0 w-[433px]" />
          <div className="absolute h-[26px] left-[55px] top-[106px] w-[258px]" data-name="Search bar">
            <div className="absolute bg-white border-[0.5px] border-[rgba(81,81,81,0.5)] border-solid h-[26px] left-[-3px] rounded-[9px] top-0 w-[263px]" />
            <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[35px] not-italic text-[#676767] text-[10px] top-[13px] translate-y-[-50%] w-[98px]">
              <p className="leading-[8px]">Search units...</p>
            </div>
            <div className="absolute left-[10px] size-[16px] top-[6px]" data-name="material-symbols-light:search">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="material-symbols-light:search">
                  <path d={svgPaths.p9283620} fill="var(--fill-0, #8A8A8A)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
          <p className="absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[40px] left-[192px] text-[20px] text-black text-center text-nowrap top-[6px] translate-x-[-50%]">Barangay Request</p>
          <div className="absolute bg-[#c3e4fc] content-stretch flex gap-[15px] h-[45px] items-center justify-center left-[59px] px-[25px] py-[10px] rounded-[5px] top-[46px] w-[250px]" data-name="Component 2">
            <IconoirCommunity>
              <path d={svgPaths.p88e0b80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </IconoirCommunity>
            <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[3.64px] w-[129px]">
              <p className="leading-[35px]">Barangay</p>
            </div>
            <div className="relative shrink-0 size-[35px]" data-name="gridicons:dropdown">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                <g id="gridicons:dropdown">
                  <path d={svgPaths.p1666cd00} fill="var(--fill-0, black)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[17px] items-center left-[17px] overflow-y-auto top-[147px] w-[399px]" style={{ maxHeight: '680px' }}>
            {/* Dynamic COMCEN Requests */}
            {comcenRequests.length > 0 ? (
              comcenRequests.map((request) => 
                renderRequestCard(request, selectedRequest?.id === request.id)
              )
            ) : (
              <div className="bg-white h-[95px] relative rounded-[15px] shrink-0 w-full flex items-center justify-center">
                <p className="font-['Poppins:Regular',sans-serif] text-[#676767] text-[14px]">No pending requests from Barangays</p>
              </div>
            )}
          </div>
        </div>
        <Helper1 additionalClassNames="left-[915px] top-[663px]" />
        <Helper1 additionalClassNames="left-[644px] top-[701px]" />
        <div className="absolute h-[74px] left-[483px] top-[807px] w-[936px]">
          <div className="absolute bg-[rgba(255,255,255,0.8)] h-[74px] left-0 rounded-[5px] top-0 w-[936px]" />
          <p className="absolute font-['Poppins:Regular',sans-serif] leading-[15px] left-[40px] not-italic text-[#163b56] text-[14px] top-[42px] w-[896px]">{`🔴 Red – Critical / Immediate Rescue   🟠 Orange – High Priority / Vulnerable 🟡 Yellow – Moderate Risk   ⚪ Grey – Low Priority`}</p>
          <p className="absolute font-['Josefin_Sans:Bold_Italic',sans-serif] font-bold italic leading-[15px] left-[40px] text-[25px] text-black top-[13px] w-[957px]">Priority Color Coding</p>
        </div>
        <Helper1 additionalClassNames="left-[631px] top-[247px]" />
        <Helper1 additionalClassNames="left-[594px] top-[529px]" />
        <div className="absolute h-[177px] left-[1088px] top-[378px] w-[173px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 173 177">
            <g id="Group 15">
              <ellipse cx="86.5" cy="88.5" fill="var(--fill-0, #FFFF00)" fillOpacity="0.19" id="Ellipse 3" rx="86.5" ry="88.5" />
              <g id="radio-tower 1">
                <path d={svgPaths.p1e53b900} fill="var(--fill-0, #E6C700)" id="Vector" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute contents left-[-48px] top-[-29px]" data-name="bg">
        <div className="absolute h-[1053px] left-[-48px] top-[-29px] w-[1585px]" />
      </div>
      <div className="absolute bg-white h-[100px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[1440px]" data-name="NAVBAR COMCEN">
        <div className="absolute contents left-[93px] top-[20px]" data-name="BADGE">
          <div className="absolute left-[93px] size-[65px] top-[20px]" data-name="material-symbols:emergency-share-outline-rounded">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
              <g filter="url(#filter0_i_41_757)" id="material-symbols:emergency-share-outline-rounded">
                <path d={svgPaths.p1f77d280} fill="var(--fill-0, #3FA9F5)" id="Vector" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="69" id="filter0_i_41_757" width="65" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="shape" mode="normal" result="effect1_innerShadow_41_757" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[218px] text-[#3fa9f5] text-[40px] text-center text-nowrap text-shadow-[0px_8px_4px_rgba(0,0,0,0.25)] top-[47.5px] translate-x-[-50%] translate-y-[-50%]">
            <p className="leading-[25px]">NAGA</p>
          </div>
          <div className="absolute flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[217.5px] text-[#163b56] text-[14px] text-center text-nowrap top-[68.5px] tracking-[8.4px] translate-x-[-50%] translate-y-[-50%]">
            <p className="leading-[25px]">RESCUE</p>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[35px] items-center justify-end left-[770px] top-1/2 translate-y-[-50%]" data-name="NAVBARS">
          <div className="bg-[#3fa9f5] content-stretch flex gap-[7px] items-center p-[10px] relative rounded-[5px] shrink-0" data-name="BARANGAY">
            <IconoirCommunity>
              <path d={svgPaths.p88e0b80} id="Vector" stroke="var(--stroke-0, #163B56)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </IconoirCommunity>
            <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[20px] text-center text-nowrap">
              <p className="leading-[25px]">Barangay</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[7px] items-center p-[5px] relative shrink-0" data-name="SARU">
            <Wrapper1 additionalClassNames="relative shrink-0">
              <g clipPath="url(#clip0_41_754)" id="streamline:medical-bag-remix">
                <path clipRule="evenodd" d={svgPaths.p249e8920} fill="var(--fill-0, #3FA9F5)" fillRule="evenodd" id="Vector" />
              </g>
              <defs>
                <clipPath id="clip0_41_754">
                  <rect fill="white" height="25" width="25" />
                </clipPath>
              </defs>
            </Wrapper1>
            <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3fa9f5] text-[20px] text-center text-nowrap">
              <p className="leading-[25px]">S.A.R.U</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] h-[30px] items-center p-[5px] relative shrink-0 w-[135px]" data-name="REPORTS">
            <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] left-[67.5px] text-[#3fa9f5] text-[20px] text-center top-[15px] translate-x-[-50%] translate-y-[-50%] w-[135px]">
              <p className="leading-[25px]">Reports</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mingcute:documents-line">
              <div className="absolute inset-[8.33%_12.5%_0.78%_16.67%]" data-name="Group">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 22">
                  <g id="Group">
                    <g id="Vector"></g>
                    <path clipRule="evenodd" d={svgPaths.p12a5da80} fill="var(--fill-0, #3FA9F5)" fillRule="evenodd" id="Vector_2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[10px] items-center left-[487px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="PROFILE DROPD">
            <div className="relative shrink-0 size-[35px]">
              <img alt="" className="block max-w-none size-full" height="35" src={imgEllipse2} width="35" />
            </div>
            <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3fa9f5] text-[20px] text-nowrap">
              <p className="leading-[25px]">Daryl B.</p>
            </div>
            <div className="relative shrink-0 size-[24px]" data-name="gridicons:dropdown">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="gridicons:dropdown">
                  <path d="M7 10L12 15L17 10H7Z" fill="var(--fill-0, #3FA9F5)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <DeploymentVector additionalClassNames="inset-[18.26%_52.84%_77.91%_44.44%]" />
      <DeploymentVector additionalClassNames="inset-[42.38%_31.66%_53.79%_65.63%]" />
      <DeploymentVector additionalClassNames="inset-[21.19%_24.57%_74.98%_72.71%]" />
      <DeploymentVector additionalClassNames="inset-[34.08%_7.49%_62.09%_89.79%]" />
    </div>
  );
}