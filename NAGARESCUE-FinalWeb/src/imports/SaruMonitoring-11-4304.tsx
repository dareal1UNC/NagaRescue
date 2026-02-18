import svgPaths from "./svg-yj7eu8etpg";
import imgRectangle1 from "figma:asset/ddaae69bc8d9d54dfd0ae02f4797f4fbbae65e00.png";
import imgMap from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
import imgSaruMonitoring from "figma:asset/b8d5a36a1d7d52967f5e054ab644c0094ca5b269.png";

function Bg() {
  return (
    <div className="absolute contents left-[-48px] top-[-29px]" data-name="bg">
      <div className="absolute h-[1053px] left-[-48px] top-[-29px] w-[1585px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-10 pointer-events-none size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}

function Ferry1() {
  return (
    <div className="absolute left-[30px] size-[50px] top-[17px]" data-name="ferry 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ferry 2">
          <path d={svgPaths.pe581980} fill="var(--fill-0, #5FC9F3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CircleDouble() {
  return (
    <div className="absolute left-[13px] size-[24px] top-[8px]" data-name="circle-double 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="circle-double 1">
          <path d={svgPaths.p2a637b00} fill="var(--fill-0, #73D05E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute h-[86px] left-[30px] top-[90px] w-[218px]" data-name="Card 1">
      <div className="absolute bg-[#eeeeee] h-[86px] left-0 rounded-[20px] top-0 w-[174px]" />
      <CircleDouble />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[42px] not-italic text-[14px] text-black top-[20px] translate-y-[-50%] w-[54px]">
        <p className="leading-[8px]">Status</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[28px] justify-center leading-[0] left-[15px] not-italic text-[14px] text-black top-[53px] translate-y-[-50%] w-[191px]">
        <p className="leading-[8px]">Active Mission</p>
      </div>
    </div>
  );
}

function AccountGroup() {
  return (
    <div className="absolute left-[15px] size-[24px] top-[6px]" data-name="account-group 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="account-group 1">
          <path d={svgPaths.p33a9dd00} fill="var(--fill-0, #5FC9F3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute h-[86px] left-[276px] top-[90px] w-[218px]" data-name="Card 2">
      <div className="absolute bg-[#eeeeee] h-[86px] left-0 rounded-[20px] top-0 w-[174px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[42px] not-italic text-[14px] text-black top-[20px] translate-y-[-50%] w-[109px]">
        <p className="leading-[8px]">Crew Member</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[28px] justify-center leading-[0] left-[15px] not-italic text-[14px] text-black top-[53px] translate-y-[-50%] w-[155px]">
        <p className="leading-[8px]">5 Members</p>
      </div>
      <AccountGroup />
    </div>
  );
}

function HeartOutline() {
  return (
    <div className="absolute left-[15px] size-[24px] top-[7px]" data-name="heart-outline 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heart-outline 1">
          <path d={svgPaths.p60bd380} fill="var(--fill-0, #FE4848)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute h-[86px] left-[523px] top-[90px] w-[218px]" data-name="Card 3">
      <div className="absolute bg-[#eeeeee] h-[86px] left-0 rounded-[20px] top-0 w-[174px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[42px] not-italic text-[14px] text-black top-[19px] translate-y-[-50%] w-[128px]">
        <p className="leading-[8px]">People Rescued</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[28px] justify-center leading-[0] left-[15px] not-italic text-[14px] text-black top-[53px] translate-y-[-50%] w-[155px]">
        <p className="leading-[8px]">5 People Rescued</p>
      </div>
      <HeartOutline />
    </div>
  );
}

function ClockTimeEightOutline() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[5px]" data-name="clock-time-eight-outline 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="clock-time-eight-outline 1">
          <path d={svgPaths.p592ae00} fill="var(--fill-0, #FFA500)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute h-[86px] left-[769px] top-[90px] w-[218px]" data-name="Card 4">
      <div className="absolute bg-[#eeeeee] h-[86px] left-0 rounded-[20px] top-0 w-[174px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[42px] not-italic text-[14px] text-black top-[19px] translate-y-[-50%] w-[128px]">
        <p className="leading-[8px]">{`Deployment `}</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[28px] justify-center leading-[0] left-[15px] not-italic text-[14px] text-black top-[53px] translate-y-[-50%] w-[155px]">
        <p className="leading-[8px]">2hr 30m</p>
      </div>
      <ClockTimeEightOutline />
    </div>
  );
}

function RescueDetails() {
  return (
    <div className="absolute h-[194px] left-[384px] top-[167px] w-[1008px]" data-name="Rescue Details">
      <div className="absolute bg-[rgba(255,255,255,0.8)] border border-[rgba(103,103,103,0.3)] border-solid h-[194px] left-0 rounded-[30px] top-0 w-[1008px]" />
      <Ferry1 />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[91px] not-italic text-[14px] text-black top-[52px] w-[136px]">Boat Unit</p>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[91px] not-italic text-[24px] text-black top-[33.5px] translate-y-[-50%] w-[230px]">
        <p className="leading-[8px]">#SARU-696969</p>
      </div>
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function DetailsInfo() {
  return <div className="absolute bg-white border border-[#8c000f] border-solid h-[412px] left-[410px] overflow-clip rounded-[15px] top-[423px] w-[534px]" data-name="Details Info 2" />;
}

function Map() {
  return (
    <div className="absolute left-[618px] size-[25px] top-[333px]" data-name="MAP">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="MAP">
          <path d={svgPaths.p793a380} fill="var(--fill-0, #FFA500)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Map1() {
  return (
    <div className="absolute left-[480px] size-[25px] top-[200px]" data-name="MAP">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="MAP">
          <path d={svgPaths.p793a380} fill="var(--fill-0, #FFA500)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Map2() {
  return (
    <div className="absolute h-[25px] left-[326px] top-[397px] w-[26px]" data-name="MAP">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 25">
        <g id="MAP">
          <path d={svgPaths.p79e6200} fill="var(--fill-0, #FF0000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Map3() {
  return (
    <div className="absolute left-[309px] size-[25px] top-[390px]" data-name="MAP">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="MAP">
          <path d={svgPaths.p793a380} fill="var(--fill-0, #FF0000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Map4() {
  return (
    <div className="absolute left-[314px] size-[25px] top-[405px]" data-name="MAP">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="MAP">
          <path d={svgPaths.p793a380} fill="var(--fill-0, #FF0000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Map5() {
  return (
    <div className="absolute left-[136px] size-[25px] top-[213px]" data-name="MAP">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="MAP">
          <path d={svgPaths.p793a380} fill="var(--fill-0, #676767)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Map6() {
  return (
    <div className="absolute left-[450px] size-[25px] top-[234px]" data-name="MAP">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="MAP">
          <path d={svgPaths.p793a380} fill="var(--fill-0, #676767)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Map7() {
  return (
    <div className="absolute left-[533px] size-[25px] top-[372px]" data-name="MAP">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="MAP">
          <path d={svgPaths.p793a380} fill="var(--fill-0, #FFFF00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[19.5px] left-[101px] top-[88px] w-[48px]">
      <div className="absolute bottom-[-8.12%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 22">
          <g id="Group 8">
            <path d={svgPaths.p1404a780} id="Vector 3" stroke="var(--stroke-0, #FF0000)" strokeWidth="3" />
            <g clipPath="url(#clip0_11_4331)" id="heroicons:map-pin-16-solid">
              <path clipRule="evenodd" d={svgPaths.p3faa80c0} fill="var(--fill-0, #FE4848)" fillRule="evenodd" id="Vector" />
            </g>
            <g clipPath="url(#clip1_11_4331)" id="EC 4">
              <path d={svgPaths.p26055c40} fill="var(--fill-0, #3287C4)" id="Vector_2" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_11_4331">
              <rect fill="white" height="9.73575" transform="translate(38.2643)" width="9.73575" />
            </clipPath>
            <clipPath id="clip1_11_4331">
              <rect fill="white" height="7.7886" transform="translate(0 4.99178)" width="9.73575" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Map8() {
  return (
    <div className="absolute h-[220px] left-[502px] overflow-clip rounded-[30px] top-[601px] w-[413px]" data-name="map">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgMap} />
      <Map />
      <Map1 />
      <Map2 />
      <Map3 />
      <Map4 />
      <Map5 />
      <Map6 />
      <Map7 />
      <Group3 />
    </div>
  );
}

function MaterialSymbolsFamilyGroup() {
  return (
    <div className="relative shrink-0 size-[69px]" data-name="material-symbols:family-group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 69">
        <g id="material-symbols:family-group">
          <path d={svgPaths.p2593fe80} fill="var(--fill-0, #3FA9F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px h-[98px] items-center left-[410px] top-[425px] w-[107px]">
      <MaterialSymbolsFamilyGroup />
      <p className="font-['Poppins:Regular',sans-serif] leading-[8px] min-w-full not-italic relative shrink-0 text-[#515151] text-[12px] text-center w-[min-content]">Sep. 23, 2025</p>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#515151] text-[12px] text-center w-[107px]">
        <p className="leading-[8px]">2:15 PM</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[410px] top-[423px]">
      <DetailsInfo />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[933px] not-italic text-[#676767] text-[8px] text-right top-[444px] translate-x-[-100%] w-[53px]">12m ago</p>
      <Map8 />
      <div className="absolute font-['Poppins:Regular',sans-serif] h-[15px] leading-[8px] left-[510px] not-italic text-[16px] text-black top-[463px] w-[375px]">
        <p className="mb-0 whitespace-pre-wrap">{`Total members:  15`}</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Poppins:Regular',sans-serif] h-[31px] leading-[8px] left-[510px] not-italic text-[0px] text-[16px] text-black top-[494px] w-[381px]">
        <p className="mb-0 whitespace-pre-wrap">
          <span className="text-[#515151]">Address:</span>
          <span>{` 6th Street, Cokeville  `}</span>
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0 whitespace-pre-wrap">{`                 Zone 6, San Felipe, Naga City`}</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[17px] leading-[8px] left-[510px] not-italic text-[0px] text-[16px] text-black top-[539px] w-[375px]">
        <span className="text-[#515151]">To Consider:</span>
        <span>{` 5 Pregnant`}</span>
      </p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[17px] leading-[8px] left-[510px] not-italic text-[0px] text-[16px] text-black top-[574px] w-[375px]">
        <span className="text-[#515151]">Phase:</span> <span className="font-['Poppins:Bold',sans-serif]">Transfer</span>
      </p>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[19px] justify-center leading-[0] left-[512px] not-italic text-[20px] text-black top-[443.5px] translate-y-[-50%] w-[136px]">
        <p className="leading-[8px]">#H-564565</p>
      </div>
      <Frame1 />
    </div>
  );
}

function DetailsInfo1() {
  return <div className="absolute bg-white border border-[#8c000f] border-solid h-[86px] left-[410px] overflow-clip rounded-[15px] top-[882px] w-[534px]" data-name="Details Info 2" />;
}

function OuiArrowUp() {
  return (
    <div className="relative size-[28px]" data-name="oui:arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="oui:arrow-up">
          <path d={svgPaths.p54ed500} fill="var(--fill-0, #676767)" fillOpacity="0.3" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaterialSymbolsFamilyGroup1() {
  return (
    <div className="relative shrink-0 size-[41px]" data-name="material-symbols:family-group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
        <g id="material-symbols:family-group">
          <path d={svgPaths.p1fe53c00} fill="var(--fill-0, #3FA9F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px h-[79px] items-center left-[410px] top-[890px] w-[107px]">
      <MaterialSymbolsFamilyGroup1 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[8px] min-w-full not-italic relative shrink-0 text-[#515151] text-[11px] text-center w-[min-content]">Sep. 23, 2025</p>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#515151] text-[10px] text-center w-[107px]">
        <p className="leading-[8px]">2:15 PM</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[410px] top-[882px]">
      <DetailsInfo1 />
      <div className="absolute flex items-center justify-center left-[901px] size-[28px] top-[936px]">
        <div className="flex-none rotate-[180deg]">
          <OuiArrowUp />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[18px] justify-center leading-[0] left-[510px] not-italic text-[20px] text-black top-[903px] translate-y-[-50%] w-[136px]">
        <p className="leading-[8px]">#H-123456</p>
      </div>
      <Frame2 />
      <div className="absolute font-['Poppins:Regular',sans-serif] h-[15px] leading-[8px] left-[510px] not-italic text-[16px] text-black top-[922px] w-[375px]">
        <p className="mb-0 whitespace-pre-wrap">{`Total members:  15`}</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Poppins:Regular',sans-serif] h-[31px] leading-[8px] left-[510px] not-italic text-[0px] text-[16px] text-black top-[953px] w-[381px]">
        <p className="mb-0 whitespace-pre-wrap">
          <span className="text-[#515151]">Address:</span>
          <span>{` 6th Street, Cokeville  `}</span>
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[937px] not-italic text-[#676767] text-[8px] text-right top-[902px] translate-x-[-100%] w-[53px]">20m ago</p>
    </div>
  );
}

function Operations() {
  return (
    <div className="absolute contents left-[384px] top-[376px]" data-name="OPERATIONS">
      <div className="absolute bg-white border border-[rgba(81,81,81,0.5)] border-solid h-[622px] left-[384px] rounded-[20px] top-[376px] w-[588px]" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[30px] justify-center leading-[0] left-[414px] not-italic text-[16px] text-black top-[401px] translate-y-[-50%] w-[217px]">
        <p className="leading-[8px]">Ongoing Operations</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[30px] justify-center leading-[0] left-[415px] not-italic text-[16px] text-black top-[861px] translate-y-[-50%] w-[217px]">
        <p className="leading-[8px]">Incoming Operations</p>
      </div>
      <Group4 />
      <Group5 />
    </div>
  );
}

function CrewAndEquipment() {
  return (
    <div className="absolute contents left-[1032px] top-[375.84px]" data-name="Crew and Equipment">
      <div className="absolute bg-white border border-[rgba(81,81,81,0.5)] border-solid h-[622.16px] left-[1032px] rounded-[20px] top-[375.84px] w-[360px]" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[29.816px] justify-center leading-[0] left-[1062px] not-italic text-[16px] text-black top-[402.67px] translate-y-[-50%] w-[217px]">
        <p className="leading-[8px]">{`Crew & Equipment`}</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold h-[29.816px] justify-center leading-[0] left-[1067px] text-[25px] text-black top-[710.91px] translate-y-[-50%] w-[150px]">
        <p className="leading-[35px]">Equipment</p>
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
        <g clipPath="url(#clip0_11_4341)" id="streamline:medical-bag-remix">
          <path clipRule="evenodd" d={svgPaths.p249e8920} fill="var(--fill-0, #163B56)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_11_4341">
            <rect fill="white" height="25" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Saru() {
  return (
    <div className="bg-[#3fa9f5] content-stretch flex gap-[7px] items-center p-[10px] relative rounded-[5px] shrink-0" data-name="SARU">
      <StreamlineMedicalBagRemix />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[20px] text-center text-nowrap">
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
          <path clipRule="evenodd" d={svgPaths.p12a5da80} fill="var(--fill-0, #3FA9F5)" fillRule="evenodd" id="Vector_2" />
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
    <div className="content-stretch flex gap-[10px] h-[30px] items-center p-[5px] relative shrink-0 w-[135px]" data-name="REPORTS">
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] left-[67.5px] text-[#3fa9f5] text-[20px] text-center top-[15px] translate-x-[-50%] translate-y-[-50%] w-[135px]">
        <p className="leading-[25px]">Reports</p>
      </div>
      <MingcuteDocumentsLine />
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
    <div className="absolute content-stretch flex gap-[10px] items-center left-[809px] top-[5px]" data-name="PROFILE DROPD">
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

function Group2() {
  return (
    <div className="absolute contents left-[167.98px] top-[22px]">
      <div className="absolute left-[227px] size-[5px] top-[35px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #73D05E)" id="Ellipse 1" r="2.5" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[30px] justify-center leading-[0] left-[279px] not-italic text-[#676767] text-[10px] text-right top-[37px] translate-x-[-100%] translate-y-[-50%] w-[111.017px]">
        <p className="leading-[8px]">12 Active</p>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="absolute contents left-[22px] top-[22px]" data-name="Status">
      <Group2 />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[30px] justify-center leading-[0] left-[22px] not-italic text-[16px] text-black top-[37px] translate-y-[-50%] w-[111px]">
        <p className="leading-[8px]">Active Units</p>
      </div>
    </div>
  );
}

function MaterialSymbolsLightSearch() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[6px]" data-name="material-symbols-light:search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols-light:search">
          <path d={svgPaths.p9283620} fill="var(--fill-0, #8A8A8A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="absolute h-[26px] left-[22px] top-[57px] w-[258px]" data-name="Search bar">
      <div className="absolute bg-white border-[0.5px] border-[rgba(81,81,81,0.5)] border-solid h-[26px] left-[-3px] rounded-[9px] top-0 w-[263px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[35px] not-italic text-[#676767] text-[10px] top-[13px] translate-y-[-50%] w-[98px]">
        <p className="leading-[8px]">Search units...</p>
      </div>
      <MaterialSymbolsLightSearch />
    </div>
  );
}

function Ferry() {
  return (
    <div className="absolute left-[20px] size-[35px] top-[15px]" data-name="ferry 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="ferry 1">
          <path d={svgPaths.p18660f80} fill="var(--fill-0, #5FC9F3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeartOutline1() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[80px]" data-name="heart-outline 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="heart-outline 1">
          <path d={svgPaths.p4817400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClockTimeEightOutline1() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[103px]" data-name="clock-time-eight-outline 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="clock-time-eight-outline 1">
          <path d={svgPaths.p275ab400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AccountGroup1() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[57px]" data-name="account-group 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="account-group 1">
          <path d={svgPaths.p7080c80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(115,208,94,0.16)] border border-[#73d05e] border-solid h-[13px] left-[203px] rounded-[20px] top-[18px] w-[42px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[13px] justify-center leading-[0] left-[20px] not-italic text-[#73d05e] text-[10px] text-center top-[5.5px] translate-x-[-50%] translate-y-[-50%] w-[42px]">
        <p className="leading-[8px]">Active</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute h-[137px] left-[23px] top-[110px] w-[257px]" data-name="Card">
      <div className="absolute bg-white border border-[#5fc9f3] border-solid h-[137px] left-0 rounded-[20px] top-0 w-[257px]" />
      <Ferry />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[65px] not-italic text-[12px] text-black top-[40px] w-[136px]">Boat Unit</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[49px] not-italic text-[14px] text-black top-[62px] w-[119px]">5 Crew Members</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[48px] not-italic text-[14px] text-black top-[84px] w-[119px]">5 Lives Rescued</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[8px] left-[49px] not-italic text-[14px] text-black text-nowrap top-[107px] whitespace-pre">2h 30m Deployed</p>
      <HeartOutline1 />
      <ClockTimeEightOutline1 />
      <AccountGroup1 />
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[65px] not-italic text-[14px] text-black top-[25.5px] translate-y-[-50%] w-[117px]">
        <p className="leading-[8px]">#SARU-696969</p>
      </div>
      <Frame />
    </div>
  );
}

function Ferry2() {
  return (
    <div className="absolute left-[20px] size-[35px] top-[15px]" data-name="ferry 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="ferry 1">
          <path d={svgPaths.p18660f80} fill="var(--fill-0, #5FC9F3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeartOutline2() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[80px]" data-name="heart-outline 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="heart-outline 1">
          <path d={svgPaths.p4817400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClockTimeEightOutline2() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[103px]" data-name="clock-time-eight-outline 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="clock-time-eight-outline 1">
          <path d={svgPaths.p275ab400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AccountGroup2() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[57px]" data-name="account-group 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="account-group 1">
          <path d={svgPaths.p7080c80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[rgba(115,208,94,0.16)] border border-[#73d05e] border-solid h-[13px] left-[203px] rounded-[20px] top-[18px] w-[42px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[13px] justify-center leading-[0] left-[20px] not-italic text-[#73d05e] text-[10px] text-center top-[5.5px] translate-x-[-50%] translate-y-[-50%] w-[42px]">
        <p className="leading-[8px]">Active</p>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute h-[137px] left-[23px] top-[274px] w-[257px]" data-name="Card">
      <div className="absolute bg-white border border-[rgba(81,81,81,0.5)] border-solid h-[137px] left-0 rounded-[20px] top-0 w-[257px]" />
      <Ferry2 />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[65px] not-italic text-[12px] text-black top-[40px] w-[136px]">Boat Unit</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[49px] not-italic text-[14px] text-black top-[62px] w-[119px]">2 Crew Members</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[48px] not-italic text-[14px] text-black top-[84px] w-[119px]">8 Lives Rescued</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[49px] not-italic text-[14px] text-black top-[107px] w-[119px]">20m Deployed</p>
      <HeartOutline2 />
      <ClockTimeEightOutline2 />
      <AccountGroup2 />
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[65px] not-italic text-[14px] text-black top-[25.5px] translate-y-[-50%] w-[117px]">
        <p className="leading-[8px]">#SARU-674524</p>
      </div>
      <Frame3 />
    </div>
  );
}

function Ferry3() {
  return (
    <div className="absolute left-[20px] size-[35px] top-[15px]" data-name="ferry 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="ferry 1">
          <path d={svgPaths.p18660f80} fill="var(--fill-0, #5FC9F3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeartOutline3() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[80px]" data-name="heart-outline 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="heart-outline 1">
          <path d={svgPaths.p4817400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClockTimeEightOutline3() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[103px]" data-name="clock-time-eight-outline 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="clock-time-eight-outline 1">
          <path d={svgPaths.p275ab400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AccountGroup3() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[57px]" data-name="account-group 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="account-group 1">
          <path d={svgPaths.p7080c80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[rgba(206,208,94,0.16)] border border-[#d6d600] border-solid h-[13px] left-[193px] rounded-[20px] top-[18px] w-[52px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[13px] justify-center leading-[0] left-[25px] not-italic text-[#d6d600] text-[10px] text-center top-[5.5px] translate-x-[-50%] translate-y-[-50%] w-[52px]">
        <p className="leading-[8px]">Stand By</p>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute h-[137px] left-[21px] top-[438px] w-[257px]" data-name="Card">
      <div className="absolute bg-white border border-[rgba(81,81,81,0.5)] border-solid h-[137px] left-0 rounded-[20px] top-0 w-[257px]" />
      <Ferry3 />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[65px] not-italic text-[12px] text-black top-[40px] w-[136px]">Boat Unit</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[49px] not-italic text-[14px] text-black top-[62px] w-[119px]">5 Crew Members</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[48px] not-italic text-[14px] text-black top-[84px] w-[119px]">0 Lives Rescued</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[8px] left-[49px] not-italic text-[14px] text-black text-nowrap top-[107px] whitespace-pre">2h 30m Deployed</p>
      <HeartOutline3 />
      <ClockTimeEightOutline3 />
      <AccountGroup3 />
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[65px] not-italic text-[14px] text-black top-[25.5px] translate-y-[-50%] w-[117px]">
        <p className="leading-[8px]">#SARU-864422</p>
      </div>
      <Frame4 />
    </div>
  );
}

function VanUtility() {
  return (
    <div className="absolute left-[14px] size-[35px] top-[15px]" data-name="van-utility 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="van-utility 1">
          <path d={svgPaths.p34536180} fill="var(--fill-0, #FFA500)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeartOutline4() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[80px]" data-name="heart-outline 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="heart-outline 1">
          <path d={svgPaths.p4817400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClockTimeEightOutline4() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[103px]" data-name="clock-time-eight-outline 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="clock-time-eight-outline 1">
          <path d={svgPaths.p275ab400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AccountGroup4() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[57px]" data-name="account-group 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="account-group 1">
          <path d={svgPaths.p7080c80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[rgba(206,208,94,0.16)] border border-[#d6d600] border-solid h-[13px] left-[193px] rounded-[20px] top-[18px] w-[52px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[13px] justify-center leading-[0] left-[25px] not-italic text-[#d6d600] text-[10px] text-center top-[5.5px] translate-x-[-50%] translate-y-[-50%] w-[52px]">
        <p className="leading-[8px]">Stand By</p>
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="absolute h-[137px] left-[21px] top-[602px] w-[257px]" data-name="Card">
      <div className="absolute bg-white border border-[rgba(81,81,81,0.5)] border-solid h-[137px] left-0 rounded-[20px] top-0 w-[257px]" />
      <VanUtility />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[65px] not-italic text-[12px] text-black top-[40px] w-[136px]">Ground Unit</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[49px] not-italic text-[14px] text-black top-[62px] w-[119px]">4 Crew Members</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[48px] not-italic text-[14px] text-black top-[84px] w-[119px]">0 Lives Rescued</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[49px] not-italic text-[14px] text-black top-[107px] w-[119px]">1h Deployed</p>
      <HeartOutline4 />
      <ClockTimeEightOutline4 />
      <AccountGroup4 />
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[65px] not-italic text-[14px] text-black top-[25.5px] translate-y-[-50%] w-[117px]">
        <p className="leading-[8px]">#SARU-076432</p>
      </div>
      <Frame7 />
    </div>
  );
}

function VanUtility1() {
  return (
    <div className="absolute left-[14px] size-[35px] top-[15px]" data-name="van-utility 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="van-utility 1">
          <path d={svgPaths.p34536180} fill="var(--fill-0, #FFA500)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeartOutline5() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[80px]" data-name="heart-outline 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="heart-outline 1">
          <path d={svgPaths.p4817400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClockTimeEightOutline5() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[103px]" data-name="clock-time-eight-outline 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="clock-time-eight-outline 1">
          <path d={svgPaths.p275ab400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AccountGroup5() {
  return (
    <div className="absolute left-[23px] size-[17px] top-[57px]" data-name="account-group 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="account-group 1">
          <path d={svgPaths.p7080c80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[rgba(206,208,94,0.16)] border border-[#d6d600] border-solid h-[13px] left-[193px] rounded-[20px] top-[18px] w-[52px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[13px] justify-center leading-[0] left-[25px] not-italic text-[#d6d600] text-[10px] text-center top-[5.5px] translate-x-[-50%] translate-y-[-50%] w-[52px]">
        <p className="leading-[8px]">Stand By</p>
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="absolute h-[114px] left-[21px] top-[766px] w-[257px]" data-name="Card">
      <div className="absolute bg-white border border-[rgba(81,81,81,0.5)] border-solid h-[137px] left-0 rounded-[20px] top-0 w-[257px]" />
      <VanUtility1 />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[65px] not-italic text-[8px] text-black top-[40px] w-[136px]">Ground Unit</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[49px] not-italic text-[8px] text-black top-[62px] w-[119px]">4 Crew Members</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[48px] not-italic text-[8px] text-black top-[84px] w-[119px]">0 Lives Rescued</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[8px] left-[49px] not-italic text-[8px] text-black top-[107px] w-[119px]">1h Deployed</p>
      <HeartOutline5 />
      <ClockTimeEightOutline5 />
      <AccountGroup5 />
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[65px] not-italic text-[14px] text-black top-[25.5px] translate-y-[-50%] w-[117px]">
        <p className="leading-[8px]">#SARU-764532</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white h-[779px] left-[40px] overflow-clip rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[219px] w-[299px]" data-name="Sidebar">
      <Status />
      <SearchBar />
      <Card />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Josefin_Sans:Medium',sans-serif] font-medium gap-[6px] items-start leading-[0] left-[16px] text-[#163b56] text-[20px] top-[36.46px] w-[156px]">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">Daryl Adrian Bo</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">Rachelle Abada</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">Bryann Francisco</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">Gabriel Diego</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Josefin_Sans:Medium',sans-serif] font-medium gap-[6px] items-start leading-[0] left-[186px] text-[#163b56] text-[15px] top-[36.46px] w-[123px]">
      <div className="flex flex-col justify-center relative shrink-0 w-[123px]">
        <p className="leading-[25px]">Team Leader</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[123px]">
        <p className="leading-[25px]">Medic</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[123px]">
        <p className="leading-[25px]">Emergencies</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[123px]">
        <p className="leading-[25px]">Transport</p>
      </div>
    </div>
  );
}

function CrewMember() {
  return (
    <div className="absolute h-[154.46px] left-[1062px] top-[437px] w-[309px]" data-name="CREW MEMBER">
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[25px] text-black text-nowrap top-[12.5px] translate-y-[-50%]">
        <p className="leading-[25px] whitespace-pre">Crew Members</p>
      </div>
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Equipment() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Josefin_Sans:Medium',sans-serif] font-medium gap-[6px] items-start leading-[0] left-[1078px] text-[#163b56] text-[20px] top-[739px] w-[156px]" data-name="EQUIPMENT">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">Portable Boat</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">Rope</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">Chainsaw</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">Medic Kit</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">Entonox</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">Rigging System</p>
      </div>
    </div>
  );
}

function Equipment1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Josefin_Sans:Medium',sans-serif] font-medium gap-[6px] items-start leading-[0] left-[1248px] text-[#163b56] text-[20px] top-[739px] w-[116px]" data-name="EQUIPMENT">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">2</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">5</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">2</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">4</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">2</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">1</p>
      </div>
    </div>
  );
}

export default function SaruMonitoring() {
  return (
    <div className="relative size-full" data-name="SARU MONITORING">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-50 size-full" src={imgSaruMonitoring} />
      </div>
      <Bg />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[167.5px] not-italic text-[45px] text-black text-center text-nowrap top-[192px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[50px] whitespace-pre">S.A.R.U LIST</p>
      </div>
      <RescueDetails />
      <Operations />
      <CrewAndEquipment />
      <Navbar />
      <Sidebar />
      <CrewMember />
      <Equipment />
      <Equipment1 />
    </div>
  );
}