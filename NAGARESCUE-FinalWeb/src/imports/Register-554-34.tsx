import svgPaths from "./svg-z5melvfvwa";
import imgRectangle1 from "figma:asset/ddaae69bc8d9d54dfd0ae02f4797f4fbbae65e00.png";

function Bg() {
  return (
    <div className="absolute contents left-0 top-0" data-name="bg">
      <div className="absolute h-[1024px] left-0 top-0 w-[1440px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-10 pointer-events-none size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}

function MaterialSymbolsEmergencyShareOutlineRounded() {
  return (
    <div className="absolute left-[162.64px] size-[392.728px] top-[192px]" data-name="material-symbols:emergency-share-outline-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392.728 392.728">
        <g filter="url(#filter0_i_554_41)" id="material-symbols:emergency-share-outline-rounded">
          <path d={svgPaths.pb867d80} fill="var(--fill-0, #0A55BB)" id="Vector" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="396.728" id="filter0_i_554_41" width="392.728" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_554_41" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[75px] top-[192px]" data-name="LOGO">
      <MaterialSymbolsEmergencyShareOutlineRounded />
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold h-[178.199px] justify-center leading-[0] left-[359px] text-[#0a55bb] text-[128px] text-center text-shadow-[0px_8px_4px_rgba(0,0,0,0.25)] top-[668.06px] translate-x-[-50%] translate-y-[-50%] w-[568px]">
        <p className="css-4hzbpn leading-[75px]">NAGA</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold h-[59px] justify-center leading-[0] left-[358.5px] text-[#2f7fb8] text-[48px] text-center top-[774.5px] translate-x-[-50%] translate-y-[-50%] w-[343px]">
        <p className="css-4hzbpn leading-[25px]">RESCUE</p>
      </div>
    </div>
  );
}

function LoginButton() {
  return (
    <div className="absolute content-stretch flex h-[76px] items-center justify-center left-[calc(42.86%+74.86px)] px-[37px] py-[13px] rounded-[5px] top-[772px] w-[256px]" data-name="LOGIN BUTTON">
      <div aria-hidden="true" className="absolute border border-[#0a55bb] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="css-g0mm18 flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0a55bb] text-[32px] text-center tracking-[6.4px]">
        <p className="css-ew64yg leading-[8px]">CANCEL</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_4px_6.9px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(42.86%+74.86px)] top-[772px]">
      <LoginButton />
    </div>
  );
}

function LoginButton1() {
  return (
    <div className="absolute bg-[#0b5ed0] content-stretch flex h-[76px] items-center justify-center left-[calc(57.14%+147.14px)] px-[37px] py-[13px] rounded-[5px] top-[772px] w-[256px]" data-name="LOGIN BUTTON">
      <div className="css-g0mm18 flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-center text-white tracking-[6.4px]">
        <p className="css-ew64yg leading-[8px]">REGISTER</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_4px_6.9px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(42.86%+74.86px)] top-[772px]">
      <Group />
      <LoginButton1 />
    </div>
  );
}

function GridiconsDropdown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="gridicons:dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="gridicons:dropdown">
          <path d={svgPaths.p2c82e500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LoginButton2() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex gap-[10px] h-[65px] items-end left-[calc(42.86%+16.86px)] p-[15px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[627px] w-[230px]" data-name="LOGIN BUTTON">
      <div className="css-g0mm18 flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#163b56] text-[15px] text-center tracking-[1.5px]">
        <p className="css-ew64yg leading-[20px]">Role</p>
      </div>
      <GridiconsDropdown />
    </div>
  );
}

function LoginButton3() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex h-[65px] items-end left-[calc(42.86%+16.86px)] p-[15px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[438px] w-[630px]" data-name="LOGIN BUTTON">
      <div className="css-g0mm18 flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#163b56] text-[15px] text-center tracking-[1.5px]">
        <p className="css-ew64yg leading-[20px]">Phone Number</p>
      </div>
    </div>
  );
}

function LoginButton4() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex h-[65px] items-end left-[calc(42.86%+16.86px)] p-[15px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[528px] w-[630px]" data-name="LOGIN BUTTON">
      <div className="css-g0mm18 flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#163b56] text-[15px] text-center tracking-[1.5px]">
        <p className="css-ew64yg leading-[20px]">Address</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(42.86%+11.86px)] top-[208px]">
      <LoginButton2 />
      <LoginButton3 />
      <LoginButton4 />
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[77px] justify-center leading-[0] left-[calc(42.86%+11.86px)] not-italic text-[#163b56] text-[65px] top-[246.5px] tracking-[6.5px] translate-y-[-50%] w-[342px]">
        <p className="css-4hzbpn leading-[8px]">Register</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(42.86%+11.86px)] not-italic text-[15px] text-black top-[304px] tracking-[1.5px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[8px]">Please Fill Up to register.</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[calc(42.86%+11.86px)] not-italic text-[35px] text-black top-[381.5px] tracking-[3.5px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[45px]">Account Details</p>
      </div>
    </div>
  );
}

export default function Register() {
  return (
    <div className="bg-white relative size-full" data-name="REGISTER">
      <Bg />
      <Logo />
      <Group2 />
      <Group1 />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(42.86%+94.86px)] not-italic text-[12px] text-black top-[840px]">&nbsp;</p>
    </div>
  );
}