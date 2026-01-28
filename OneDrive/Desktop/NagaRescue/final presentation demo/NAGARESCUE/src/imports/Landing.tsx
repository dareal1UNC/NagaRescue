import svgPaths from "./svg-c29a8srkdw";
import imgRectangle1 from "figma:asset/ddaae69bc8d9d54dfd0ae02f4797f4fbbae65e00.png";

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
    <div className="absolute left-[523.64px] size-[392.728px] top-[99px]" data-name="material-symbols:emergency-share-outline-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 393">
        <g filter="url(#filter0_i_5_26)" id="material-symbols:emergency-share-outline-rounded">
          <path d={svgPaths.pb867d80} fill="var(--fill-0, #3FA9F5)" id="Vector" />
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
    <div className="absolute contents left-[436px] top-[99px]" data-name="LOGO">
      <MaterialSymbolsEmergencyShareOutlineRounded />
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_8px_4px] absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold h-[178.199px] justify-center leading-[0] left-[720px] text-[#3fa9f5] text-[128px] text-center top-[575.06px] translate-x-[-50%] translate-y-[-50%] w-[568px]">
        <p className="leading-[75px]">NAGA</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold h-[59px] justify-center leading-[0] left-[719.5px] text-[#2f7fb8] text-[48px] text-center top-[681.5px] translate-x-[-50%] translate-y-[-50%] w-[343px]">
        <p className="leading-[25px]">RESCUE</p>
      </div>
    </div>
  );
}

function LoginButton() {
  return (
    <div className="absolute content-stretch flex h-[76.481px] items-center justify-center left-[542px] px-[37px] py-[13px] rounded-[5px] top-[876.48px] w-[355px]" data-name="LOGIN BUTTON">
      <div aria-hidden="true" className="absolute border border-[#3fa9f5] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3fa9f5] text-[32px] text-center text-nowrap tracking-[6.4px]">
        <p className="leading-[8px] whitespace-pre">REGISTER</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-4px_4px_6.9px_-3px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function LoginButton1() {
  return (
    <div className="absolute bg-[#3fa9f5] content-stretch flex h-[76.481px] items-center justify-center left-[542px] px-[37px] py-[13px] rounded-[5px] top-[778px] w-[355px]" data-name="LOGIN BUTTON">
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-center text-nowrap text-white tracking-[6.4px]">
        <p className="leading-[8px] whitespace-pre">LOGIN</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-4px_4px_6.9px_-3px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[542px] top-[778px]">
      <LoginButton />
      {[...Array(2).keys()].map((_, i) => (
        <LoginButton1 key={i} />
      ))}
    </div>
  );
}

export default function Landing() {
  return (
    <div className="bg-white relative size-full" data-name="LANDING">
      <Bg />
      <Logo />
      <Group />
    </div>
  );
}