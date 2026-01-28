import svgPaths from "./svg-wjuznj59td";
import imgRectangle1 from "figma:asset/ddaae69bc8d9d54dfd0ae02f4797f4fbbae65e00.png";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
import imgReports from "figma:asset/b8d5a36a1d7d52967f5e054ab644c0094ca5b269.png";

function Bg() {
  return (
    <div className="absolute contents left-[-48px] top-[-29px]" data-name="bg">
      <div className="absolute h-[1053px] left-[-48px] top-[-29px] w-[1585px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-10 pointer-events-none size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}

function MaterialSymbolsEmergencyShareOutlineRounded() {
  return (
    <div className="absolute left-[93px] size-[65px] top-[20px]" data-name="material-symbols:emergency-share-outline-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
        <g filter="url(#filter0_i_11_4325)" id="material-symbols:emergency-share-outline-rounded">
          <path d={svgPaths.p1f77d280} fill="var(--fill-0, #3FA9F5)" id="Vector" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="69" id="filter0_i_11_4325" width="65" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_11_4325" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute contents left-[93px] top-[20px]" data-name="BADGE">
      <MaterialSymbolsEmergencyShareOutlineRounded />
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_8px_4px] absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[218px] text-[#3fa9f5] text-[40px] text-center text-nowrap top-[47.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[25px] whitespace-pre">NAGA</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[217.5px] text-[#163b56] text-[14px] text-center text-nowrap top-[68.5px] tracking-[8.4px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[25px] whitespace-pre">RESCUE</p>
      </div>
    </div>
  );
}

function GravityUiHouse() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="gravity-ui:house">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="gravity-ui:house">
          <path clipRule="evenodd" d={svgPaths.p9358770} fill="var(--fill-0, #3FA9F5)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="content-stretch flex gap-[7px] items-center p-[5px] relative rounded-[2px] shrink-0" data-name="HOME">
      <GravityUiHouse />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3fa9f5] text-[20px] text-nowrap">
        <p className="leading-[25px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function IconoirCommunity() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="iconoir:community">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="iconoir:community">
          <path d={svgPaths.p88e0b80} id="Vector" stroke="var(--stroke-0, #3FA9F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Barangay() {
  return (
    <div className="content-stretch flex gap-[7px] items-center p-[5px] relative shrink-0" data-name="BARANGAY">
      <IconoirCommunity />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3fa9f5] text-[20px] text-center text-nowrap">
        <p className="leading-[25px] whitespace-pre">Barangay</p>
      </div>
    </div>
  );
}

function StreamlineMedicalBagRemix() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="streamline:medical-bag-remix">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g clipPath="url(#clip0_11_4771)" id="streamline:medical-bag-remix">
          <path clipRule="evenodd" d={svgPaths.p249e8920} fill="var(--fill-0, #3FA9F5)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_11_4771">
            <rect fill="white" height="25" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Saru() {
  return (
    <div className="content-stretch flex gap-[7px] items-center p-[5px] relative shrink-0" data-name="SARU">
      <StreamlineMedicalBagRemix />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3fa9f5] text-[20px] text-center text-nowrap">
        <p className="leading-[25px] whitespace-pre">S.A.R.U</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-4.8%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
          <g id="Group">
            <path d={svgPaths.p101ab280} id="Vector" stroke="var(--stroke-0, #3FA9F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pab4a200} id="Vector_2" stroke="var(--stroke-0, #3FA9F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LucideMapPinHouse() {
  return (
    <div className="overflow-clip relative shrink-0 size-[25px]" data-name="lucide:map-pin-house">
      <Group />
    </div>
  );
}

function Evacuation() {
  return (
    <div className="content-stretch flex gap-[2px] items-center overflow-clip p-[5px] relative shrink-0" data-name="EVACUATION">
      <LucideMapPinHouse />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3fa9f5] text-[20px] text-center text-nowrap">
        <p className="leading-[25px] whitespace-pre">Evacuation</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_12.5%_0.78%_16.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 22">
        <g id="Group">
          <g id="Vector"></g>
          <path clipRule="evenodd" d={svgPaths.p12a5da80} fill="var(--fill-0, #163B56)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteDocumentsLine() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mingcute:documents-line">
      <Group1 />
    </div>
  );
}

function Reports() {
  return (
    <div className="bg-[#3fa9f5] content-stretch flex items-start p-[10px] relative rounded-[5px] shrink-0 w-[135px]" data-name="REPORTS">
      <MingcuteDocumentsLine />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[20px] text-center text-nowrap">
        <p className="leading-[25px] whitespace-pre">Reports</p>
      </div>
    </div>
  );
}

function GridiconsDropdown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="gridicons:dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="gridicons:dropdown">
          <path d="M7 10L12 15L17 10H7Z" fill="var(--fill-0, #3FA9F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ProfileDropd() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[799px] top-[5px]" data-name="PROFILE DROPD">
      <div className="relative shrink-0 size-[35px]">
        <img alt="" className="block max-w-none size-full" height="35" src={imgEllipse2} width="35" />
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3fa9f5] text-[20px] text-nowrap">
        <p className="leading-[25px] whitespace-pre">Daryl B.</p>
      </div>
      <GridiconsDropdown />
    </div>
  );
}

function Navbars() {
  return (
    <div className="absolute content-stretch flex gap-[35px] items-center left-[447px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="NAVBARS">
      <Home />
      <Barangay />
      <Saru />
      <Evacuation />
      <Reports />
      <ProfileDropd />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-white h-[100px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[1440px]" data-name="NAVBAR">
      <Badge />
      <Navbars />
    </div>
  );
}

function UilSearch() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="uil:search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="uil:search">
          <path d={svgPaths.p230f7f00} fill="var(--fill-0, #163B56)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex gap-[15px] h-[60px] items-center left-[44px] p-[15px] rounded-[10px] shadow-[0px_1px_2.9px_0px_rgba(0,0,0,0.25)] top-[33px] w-[600px]">
      <UilSearch />
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.3)] text-nowrap tracking-[2.55px]">
        <p className="leading-[25px] whitespace-pre">Search Anything</p>
      </div>
    </div>
  );
}

function MageCalendar() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="mage:calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="mage:calendar">
          <path d={svgPaths.p3c4dbef0} id="Vector" stroke="var(--stroke-0, #163B56)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
        </g>
      </svg>
    </div>
  );
}

function WeuiArrowFilled() {
  return (
    <div className="h-[24px] relative w-[12px]" data-name="weui:arrow-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="weui:arrow-filled">
          <path clipRule="evenodd" d={svgPaths.p1093a180} fill="var(--fill-0, #163B56)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex gap-[15px] h-[60px] items-center justify-center left-[709px] p-[15px] rounded-[10px] shadow-[0px_1px_2.9px_0px_rgba(0,0,0,0.25)] top-[33px] w-[150px]">
      <MageCalendar />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[15px] text-nowrap tracking-[2.55px]">
        <p className="leading-[25px] whitespace-pre">Date</p>
      </div>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <WeuiArrowFilled />
        </div>
      </div>
    </div>
  );
}

function MageCalendar1() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="mage:calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="mage:calendar">
          <path d={svgPaths.p3c4dbef0} id="Vector" stroke="var(--stroke-0, #163B56)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
        </g>
      </svg>
    </div>
  );
}

function WeuiArrowFilled1() {
  return (
    <div className="h-[24px] relative w-[12px]" data-name="weui:arrow-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="weui:arrow-filled">
          <path clipRule="evenodd" d={svgPaths.p1093a180} fill="var(--fill-0, #163B56)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex gap-[15px] h-[60px] items-center justify-center left-[874px] p-[15px] rounded-[10px] shadow-[0px_1px_2.9px_0px_rgba(0,0,0,0.25)] top-[33px] w-[185px]">
      <MageCalendar1 />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[15px] text-nowrap tracking-[2.55px]">
        <p className="leading-[25px] whitespace-pre">Barangay</p>
      </div>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <WeuiArrowFilled1 />
        </div>
      </div>
    </div>
  );
}

function RiExportLine() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="ri:export-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="ri:export-line">
          <path d={svgPaths.p5c52500} fill="var(--fill-0, #163B56)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex gap-[15px] h-[60px] items-center justify-center left-[1074px] p-[15px] rounded-[10px] shadow-[0px_1px_2.9px_0px_rgba(0,0,0,0.25)] top-[33px] w-[170px]">
      <RiExportLine />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[15px] text-nowrap tracking-[2.55px]">
        <p className="leading-[25px] whitespace-pre">Export</p>
      </div>
    </div>
  );
}

function WeuiArrowFilled2() {
  return (
    <div className="h-[24px] relative w-[12px]" data-name="weui:arrow-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="weui:arrow-filled">
          <path clipRule="evenodd" d={svgPaths.p1093a180} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function WeuiArrowFilled3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[12px]" data-name="weui:arrow-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="weui:arrow-filled">
          <path clipRule="evenodd" d={svgPaths.p1093a180} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex gap-[25px] items-center justify-center left-[526px] p-[10px] top-[826px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <WeuiArrowFilled2 />
        </div>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center text-nowrap tracking-[2.55px]">
        <p className="leading-[25px] whitespace-pre">1</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center text-nowrap tracking-[2.55px]">
        <p className="leading-[25px] whitespace-pre">2</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center text-nowrap tracking-[3.4px]">
        <p className="leading-[25px] whitespace-pre">3</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center text-nowrap tracking-[2.55px]">
        <p className="leading-[25px] whitespace-pre">4</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center text-nowrap tracking-[2.55px]">
        <p className="leading-[25px] whitespace-pre">5</p>
      </div>
      <WeuiArrowFilled3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Josefin_Sans:Bold',sans-serif] font-bold gap-[75px] items-center leading-[0] pl-[53px] pr-[31px] py-[10px] relative text-[15px] text-black tracking-[2.55px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 w-[199px]">
            <p className="leading-[25px]">ID</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[236px]">
            <p className="leading-[25px]">Name</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[141px]">
            <p className="leading-[25px]">Barangay</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[74px]">
            <p className="leading-[25px]">Family</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
            <p className="leading-[25px] whitespace-pre">Individual</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[66px] items-center px-0 py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center tracking-[2.55px] w-[124px]">
        <p className="leading-[25px]">01</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[375px]">
        <p className="leading-[25px]">Camarines Sur National High School</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[174px]">
        <p className="leading-[25px]">Penafrancia</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[97px]">
        <p className="leading-[25px]">135</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[75px]">
        <p className="leading-[25px]">503</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[66px] items-center px-0 py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center tracking-[2.55px] w-[124px]">
        <p className="leading-[25px]">02</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[375px]">
        <p className="leading-[25px]">Camarines Sur National High School</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[174px]">
        <p className="leading-[25px]">Penafrancia</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[97px]">
        <p className="leading-[25px]">135</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[75px]">
        <p className="leading-[25px]">503</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[66px] items-center px-0 py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center tracking-[2.55px] w-[124px]">
        <p className="leading-[25px]">03</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[375px]">
        <p className="leading-[25px]">Camarines Sur National High School</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[174px]">
        <p className="leading-[25px]">Penafrancia</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[97px]">
        <p className="leading-[25px]">135</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[75px]">
        <p className="leading-[25px]">503</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[66px] items-center px-0 py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center tracking-[2.55px] w-[124px]">
        <p className="leading-[25px]">04</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[375px]">
        <p className="leading-[25px]">Camarines Sur National High School</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[174px]">
        <p className="leading-[25px]">Penafrancia</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[97px]">
        <p className="leading-[25px]">135</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[75px]">
        <p className="leading-[25px]">503</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[66px] items-center px-0 py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center tracking-[2.55px] w-[124px]">
        <p className="leading-[25px]">05</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[375px]">
        <p className="leading-[25px]">Camarines Sur National High School</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[174px]">
        <p className="leading-[25px]">Penafrancia</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[97px]">
        <p className="leading-[25px]">135</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[75px]">
        <p className="leading-[25px]">503</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[66px] items-center px-0 py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center tracking-[2.55px] w-[124px]">
        <p className="leading-[25px]">06</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[375px]">
        <p className="leading-[25px]">Camarines Sur National High School</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[174px]">
        <p className="leading-[25px]">Penafrancia</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[97px]">
        <p className="leading-[25px]">135</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[75px]">
        <p className="leading-[25px]">503</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[66px] items-center px-0 py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center tracking-[2.55px] w-[124px]">
        <p className="leading-[25px]">07</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[375px]">
        <p className="leading-[25px]">Camarines Sur National High School</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[174px]">
        <p className="leading-[25px]">Penafrancia</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[97px]">
        <p className="leading-[25px]">135</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[75px]">
        <p className="leading-[25px]">503</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[66px] items-center px-0 py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center tracking-[2.55px] w-[124px]">
        <p className="leading-[25px]">08</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[375px]">
        <p className="leading-[25px]">Camarines Sur National High School</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[174px]">
        <p className="leading-[25px]">Penafrancia</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[97px]">
        <p className="leading-[25px]">135</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[75px]">
        <p className="leading-[25px]">503</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[66px] items-center px-0 py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center tracking-[2.55px] w-[124px]">
        <p className="leading-[25px]">09</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[375px]">
        <p className="leading-[25px]">Camarines Sur National High School</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[174px]">
        <p className="leading-[25px]">Penafrancia</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[97px]">
        <p className="leading-[25px]">135</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[75px]">
        <p className="leading-[25px]">503</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[66px] items-center px-0 py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center tracking-[2.55px] w-[124px]">
        <p className="leading-[25px]">10</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[375px]">
        <p className="leading-[25px]">Camarines Sur National High School</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[174px]">
        <p className="leading-[25px]">Penafrancia</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[97px]">
        <p className="leading-[25px]">135</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[75px]">
        <p className="leading-[25px]">503</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[66px] items-center px-0 py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center tracking-[2.55px] w-[124px]">
        <p className="leading-[25px]">11</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[375px]">
        <p className="leading-[25px]">Camarines Sur National High School</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[174px]">
        <p className="leading-[25px]">Penafrancia</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[97px]">
        <p className="leading-[25px]">135</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[75px]">
        <p className="leading-[25px]">503</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[66px] items-center px-0 py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center tracking-[2.55px] w-[124px]">
        <p className="leading-[25px]">12</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[375px]">
        <p className="leading-[25px]">Camarines Sur National High School</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[174px]">
        <p className="leading-[25px]">Penafrancia</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[97px]">
        <p className="leading-[25px]">135</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[75px]">
        <p className="leading-[25px]">503</p>
      </div>
    </div>
  );
}

function EcData() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1184px]" data-name="EC DATA">
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="size-full">
        <div className="content-stretch flex font-['Josefin_Sans:Bold',sans-serif] font-bold gap-[25px] items-start leading-[0] px-[25px] py-[10px] relative text-[12px] text-black tracking-[2.04px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 w-[158px]">
            <p className="leading-[25px]">Rescuer ID</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[134px]">
            <p className="leading-[25px]">Name</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[66px]">
            <p className="leading-[25px]">Date</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[159px]">
            <p className="leading-[25px]">Request Time</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[118px]">
            <p className="leading-[25px]">Address</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[156px]">
            <p className="leading-[25px]">Transfer Time</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
            <p className="leading-[25px] whitespace-pre">Evacuation Center</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Recued() {
  return (
    <div className="relative shrink-0 w-full" data-name="RECUED">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[25px] items-center leading-[0] px-[25px] py-[10px] relative text-black w-full">
          <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[10px] tracking-[1.7px] w-[123px]">
            <p className="leading-[25px]">RP - 001</p>
          </div>
          <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px] tracking-[2.04px] w-[160px]">
            <p className="leading-[25px]">Daryl Adrian Bo</p>
          </div>
          <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px] tracking-[2.04px] w-[95px]">
            <p className="leading-[25px]">09/14/25</p>
          </div>
          <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px] tracking-[2.04px] w-[90px]">
            <p className="leading-[25px]">11:00PM</p>
          </div>
          <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px] tracking-[2.04px] w-[199px]">
            <p className="leading-[25px]">San Rafael, Cararayan</p>
          </div>
          <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px] tracking-[2.04px] w-[79px]">
            <p className="leading-[25px]">11:23</p>
          </div>
          <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px] text-nowrap tracking-[2.04px]">
            <p className="leading-[25px] whitespace-pre">Don Manuel Elementary School</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportsRescue() {
  return (
    <div className="absolute content-stretch flex flex-col h-[601px] items-end left-[1325px] top-0 w-[1188px]" data-name="REPORTS RESCUE">
      <Frame20 />
      {[...Array(5).keys()].map((_, i) => (
        <Recued key={i} />
      ))}
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="size-full">
        <div className="content-stretch flex font-['Josefin_Sans:Bold',sans-serif] font-bold gap-[25px] items-start leading-[0] px-[25px] py-[10px] relative text-[12px] text-black tracking-[2.04px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 w-[98px]">
            <p className="leading-[25px]">ID</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[141px]">
            <p className="leading-[25px]">Name</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[131px]">
            <p className="leading-[25px]">Date</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[159px]">
            <p className="leading-[25px]">Position</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[118px]">
            <p className="leading-[25px]">Office</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[214px]">
            <p className="leading-[25px]">Employee ID</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-[152px]">
            <p className="leading-[25px]">Action</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#b6dab2] h-[25px] relative rounded-[5px] shrink-0 w-[87px]">
      <div className="absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[21px] text-[8px] text-black text-nowrap top-[12.5px] tracking-[1.36px] translate-y-[-50%]">
        <p className="leading-[25px] whitespace-pre">APPROVE</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#fe4848] h-[25px] relative rounded-[5px] shrink-0 w-[87px]">
      <div className="absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[21px] text-[8px] text-black text-nowrap top-[12.5px] tracking-[1.36px] translate-y-[-50%]">
        <p className="leading-[25px] whitespace-pre">DELETE</p>
      </div>
    </div>
  );
}

function UserApproval() {
  return (
    <div className="relative shrink-0 w-full" data-name="USER APPROVAL">
      <div aria-hidden="true" className="absolute border-[#163b56] border-[0px_0px_0.5px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[25px] items-center px-[25px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[65px]">
            <p className="leading-[25px]">01</p>
          </div>
          <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[152px]">
            <p className="leading-[25px]">Daryl Adrian</p>
          </div>
          <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[115px]">
            <p className="leading-[25px]">08/08/25</p>
          </div>
          <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[183px]">
            <p className="leading-[25px]">ComCen Head</p>
          </div>
          <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[124px]">
            <p className="leading-[25px]">ComCen</p>
          </div>
          <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[2.55px] w-[145px]">
            <p className="leading-[25px]">CC 12345678</p>
          </div>
          <Frame18 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function UserApprovalList() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[27px] items-start left-[2618px] top-0 w-[1188px]" data-name="USER APPROVAL LIST">
      <Frame21 />
      {[...Array(4).keys()].map((_, i) => (
        <UserApproval key={i} />
      ))}
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute h-[601px] left-0 top-[63px] w-[3806px]" data-name="TABS">
      <EcData />
      <ReportsRescue />
      <UserApprovalList />
    </div>
  );
}

function EvacCenterTabs() {
  return (
    <div className="absolute border-[#2f7fb8] border-[0px_0px_3px] border-solid h-[25px] left-[14px] top-0 w-[174px]" data-name="EVAC CENTER TABS">
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#2f7fb8] text-[15px] text-nowrap top-[12.5px] tracking-[2.55px] translate-y-[-50%]">
        <p className="leading-[25px] whitespace-pre">Evacuation Center</p>
      </div>
    </div>
  );
}

function RescueOpTabs() {
  return (
    <div className="absolute h-[25px] left-[240px] top-0 w-[174px]" data-name="RESCUE OP TABS">
      <div className="absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[15px] text-black text-nowrap top-[12.5px] tracking-[2.55px] translate-y-[-50%]">
        <p className="leading-[25px] whitespace-pre">Rescue Operation</p>
      </div>
    </div>
  );
}

function ApprovalTabs() {
  return (
    <div className="absolute h-[25px] left-[458px] top-0 w-[41px]" data-name="APPROVAL TABS">
      <div className="absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[15px] text-black text-nowrap top-[12.5px] tracking-[2.55px] translate-y-[-50%]">
        <p className="leading-[25px] whitespace-pre">User</p>
      </div>
    </div>
  );
}

function TabsForReport() {
  return (
    <div className="absolute h-[701px] left-[47px] overflow-clip top-[132px] w-[1196px]" data-name="TABS FOR REPORT">
      <Tabs />
      <div className="absolute h-0 left-0 top-[36px] w-[1196.01px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1197 1">
            <line id="Line 17" opacity="0.5" stroke="var(--stroke-0, #163B56)" strokeWidth="0.5" x2="1196.01" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <EvacCenterTabs />
      <RescueOpTabs />
      <ApprovalTabs />
    </div>
  );
}

function Reports1() {
  return (
    <div className="absolute h-[880px] left-[75px] top-[124px] w-[1290px]" data-name="REPORTS">
      <div className="absolute bg-white h-[880px] left-0 rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.25)] top-0 w-[1290px]" />
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame17 />
      <TabsForReport />
    </div>
  );
}

export default function Reports2() {
  return (
    <div className="relative size-full" data-name="REPORTS">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-50 size-full" src={imgReports} />
      </div>
      <Bg />
      <Navbar />
      <Reports1 />
    </div>
  );
}