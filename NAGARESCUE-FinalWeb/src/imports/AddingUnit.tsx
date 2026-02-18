import svgPaths from "./svg-uykapretnf";

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center left-[48px] px-[10px] py-0 rounded-[5px] top-[143px] w-[400px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#515151] text-[20px] text-nowrap tracking-[3.4px]">
        <p className="leading-[55px]">Unit Name</p>
      </div>
    </div>
  );
}

function WeuiArrowFilled() {
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

function Frame11() {
  return (
    <div className="absolute content-stretch flex gap-[74px] items-center left-[calc(40%+149px)] px-[10px] py-0 rounded-[5px] top-[143px] w-[240px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#515151] text-[20px] text-nowrap tracking-[3.4px]">
        <p className="leading-[55px]">Unit Type</p>
      </div>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[24px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <WeuiArrowFilled />
        </div>
      </div>
    </div>
  );
}

function WeuiArrowFilled1() {
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

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[45px] items-center left-[48px] px-[10px] py-0 rounded-[5px] top-[316px] w-[400px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#515151] text-[15px] tracking-[2.55px] w-[344px]">
        <p className="leading-[20px]">Team Member</p>
      </div>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[24px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <WeuiArrowFilled1 />
        </div>
      </div>
    </div>
  );
}

function CarbonCloseOutline() {
  return (
    <div className="absolute left-[calc(100%-50px)] size-[25px] top-[22px]" data-name="carbon:close-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="carbon:close-outline">
          <path d={svgPaths.p33ab8400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3253000} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function QlementineIconsMenuDots() {
  return (
    <div className="absolute left-[722px] size-[25px] top-0" data-name="qlementine-icons:menu-dots-16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="qlementine-icons:menu-dots-16">
          <path d={svgPaths.p1f8f1e70} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white h-[25px] left-[48px] top-[283px] w-[747px]">
      <div className="absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[15px] text-black text-nowrap top-[12.5px] tracking-[2.55px] translate-y-[-50%]">
        <p className="leading-[25px]">Rachelle Abada</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[208px] text-[15px] text-black text-nowrap top-[12.5px] tracking-[2.55px] translate-y-[-50%]">
        <p className="leading-[25px]">CC 12345678</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[386px] text-[15px] text-black text-nowrap top-[12.5px] tracking-[2.55px] translate-y-[-50%]">
        <p className="leading-[25px]">Medic</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[517px] text-[15px] text-black text-nowrap top-[12.5px] tracking-[2.55px] translate-y-[-50%]">
        <p className="leading-[25px]">09123456789</p>
      </div>
      <QlementineIconsMenuDots />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex h-[45px] items-center justify-center left-[48px] p-[10px] rounded-[5px] top-[430px]">
      <div aria-hidden="true" className="absolute border border-[#3fa9f5] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3fa9f5] text-[15px] text-center tracking-[2.55px] w-[150px]">
        <p className="leading-[35px]">Add Member</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex h-[45px] items-center justify-center left-[48px] p-[10px] rounded-[5px] top-[703px] w-[180px]">
      <div aria-hidden="true" className="absolute border border-[#3fa9f5] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3fa9f5] text-[15px] text-center tracking-[2.55px] w-[150px]">
        <p className="leading-[35px]">Add Equipment</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[#3fa9f5] content-stretch flex h-[45px] items-center justify-center left-[calc(60%+110px)] p-[10px] rounded-[5px] top-[824px] w-[180px]">
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[2.55px] w-[150px]">
        <p className="leading-[35px]">Add Unit</p>
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

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[60px] items-center left-[51px] px-[10px] py-0 rounded-[5px] top-[617px] w-[170px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#515151] text-[12px] text-center text-nowrap tracking-[2.04px]">
        <p className="leading-[35px]">Category</p>
      </div>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[24px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <WeuiArrowFilled2 />
        </div>
      </div>
    </div>
  );
}

function WeuiArrowFilled3() {
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

function Frame8() {
  return (
    <div className="absolute content-stretch flex gap-[145px] items-center left-[calc(20%+86px)] px-[10px] py-0 rounded-[5px] top-[617px] w-[236px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#515151] text-[12px] text-center text-nowrap tracking-[2.04px]">
        <p className="leading-[35px]">Name</p>
      </div>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[24px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <WeuiArrowFilled3 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex items-center left-[calc(60%+2px)] px-[10px] py-0 rounded-[5px] top-[617px] w-[134px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#515151] text-[12px] text-center text-nowrap tracking-[2.04px]">
        <p className="leading-[35px]">Quantity</p>
      </div>
    </div>
  );
}

function QlementineIconsMenuDots1() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="qlementine-icons:menu-dots-16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="qlementine-icons:menu-dots-16">
          <path d={svgPaths.p1f8f1e70} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[82px] items-center left-[51px] top-[567px] w-[744px]">
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-black text-nowrap tracking-[2.04px]">
        <p className="leading-[20px]">Personal Protective Equipment</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[2.04px] w-[110px]">
        <p className="leading-[20px]">Helmets</p>
      </div>
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[2.04px] w-[105px]">
        <p className="leading-[20px]">5</p>
      </div>
      <QlementineIconsMenuDots1 />
    </div>
  );
}

function WeuiArrowFilled4() {
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

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[48px] px-[10px] py-0 rounded-[5px] top-[56px] w-[400px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#515151] text-[20px] tracking-[3.4px] w-[344px]">
        <p className="leading-[55px]">Team Leader</p>
      </div>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[24px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <WeuiArrowFilled4 />
        </div>
      </div>
    </div>
  );
}

export default function AddingUnit() {
  return (
    <div className="relative size-full" data-name="ADDING UNIT">
      <div className="absolute bg-white h-[900px] left-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[850px]" />
      <Frame4 />
      <Frame11 />
      <Frame6 />
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[48px] text-[20px] text-black text-nowrap top-[524.5px] tracking-[3.4px] translate-y-[-50%]">
        <p className="leading-[35px]">EQUIPMENT</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[48px] text-[20px] text-black text-nowrap top-[247.5px] tracking-[3.4px] translate-y-[-50%]">
        <p className="leading-[35px]">Team Member</p>
      </div>
      <CarbonCloseOutline />
      <Frame />
      <Frame1 />
      <Frame3 />
      <Frame10 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <div className="absolute h-0 left-[51px] top-[551.5px] w-[749.001px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 749.001 1">
            <line id="Line 19" stroke="var(--stroke-0, black)" x2="749.001" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame2 />
      <Frame5 />
    </div>
  );
}