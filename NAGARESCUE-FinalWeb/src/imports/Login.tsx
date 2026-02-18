import svgPaths from "./svg-k0wjo8164k";
import imgRectangle1 from "figma:asset/ddaae69bc8d9d54dfd0ae02f4797f4fbbae65e00.png";

function Bg() {
  return (
    <div className="absolute contents left-0 top-0" data-name="bg">
      <div className="absolute h-[1024px] left-0 top-0 w-[1440px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-10 pointer-events-none size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}

function MaterialSymbolsEmergencyShareOutlineRounded() {
  return (
    <div className="absolute left-[162.64px] size-[392.728px] top-[192px]" data-name="material-symbols:emergency-share-outline-rounded">
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
    <div className="absolute contents left-[75px] top-[192px]" data-name="LOGO">
      <MaterialSymbolsEmergencyShareOutlineRounded />
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_8px_4px] absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold h-[178.199px] justify-center leading-[0] left-[359px] text-[#3fa9f5] text-[128px] text-center top-[668.06px] translate-x-[-50%] translate-y-[-50%] w-[568px]">
        <p className="leading-[75px]">NAGA</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold h-[59px] justify-center leading-[0] left-[358.5px] text-[#2f7fb8] text-[48px] text-center top-[774.5px] translate-x-[-50%] translate-y-[-50%] w-[343px]">
        <p className="leading-[25px]">RESCUE</p>
      </div>
    </div>
  );
}

function LoginButton() {
  return (
    <div className="absolute content-stretch flex h-[76.481px] items-center justify-center left-[calc(57.14%+0.14px)] px-[37px] py-[13px] rounded-[5px] top-[873.48px] w-[355px]" data-name="LOGIN BUTTON">
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
    <div className="absolute bg-[#3fa9f5] content-stretch flex h-[76.481px] items-center justify-center left-[calc(57.14%+0.14px)] px-[37px] py-[13px] rounded-[5px] top-[775px] w-[355px]" data-name="LOGIN BUTTON">
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-center text-nowrap text-white tracking-[6.4px]">
        <p className="leading-[8px] whitespace-pre">LOGIN</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-4px_4px_6.9px_-3px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(57.14%+0.14px)] top-[775px]">
      <LoginButton />
      {[...Array(2).keys()].map((_, i) => (
        <LoginButton1 key={i} />
      ))}
    </div>
  );
}

function PhUserBold() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="ph:user-bold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="ph:user-bold">
          <path d={svgPaths.p8d61e80} fill="var(--fill-0, #163B56)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LoginButton2() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex gap-[10px] h-[81px] items-center left-[calc(42.86%+121.86px)] opacity-80 px-[15px] py-[5px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[506px] w-[524px]" data-name="LOGIN BUTTON">
      <PhUserBold />
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[20px] text-center text-nowrap tracking-[2px]">
        <p className="leading-[8px] whitespace-pre">Username</p>
      </div>
    </div>
  );
}

function MdiPasswordOutline() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="mdi:password-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="mdi:password-outline">
          <path d={svgPaths.p2f76400} fill="var(--fill-0, #163B56)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LoginButton3() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex gap-[10px] h-[81px] items-center left-[calc(42.86%+121.86px)] opacity-80 px-[15px] py-[5px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[619px] w-[524px]" data-name="LOGIN BUTTON">
      <MdiPasswordOutline />
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[20px] text-center text-nowrap tracking-[2px]">
        <p className="leading-[8px] whitespace-pre">Password</p>
      </div>
    </div>
  );
}

function MdiUserGroupOutline() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="mdi:user-group-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g clipPath="url(#clip0_5_141)" id="mdi:user-group-outline">
          <path d={svgPaths.pc71d000} fill="var(--fill-0, #ECF6FE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_5_141">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="chevron-down 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="chevron-down 1">
          <path d={svgPaths.p31b11f80} fill="var(--fill-0, #ECF6FE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LoginAs() {
  return (
    <div className="absolute bg-[#3fa9f5] content-stretch flex gap-[15px] items-center left-[calc(42.86%+121.86px)] px-[15px] py-[22px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[392px] w-[524px]" data-name="LOGIN AS">
      <MdiUserGroupOutline />
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ecf6fe] text-[20px] tracking-[2px] w-[381px]">
        <p className="leading-[25px]">Log In As</p>
      </div>
      <ChevronDown />
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-white relative size-full" data-name="LOGIN">
      <Bg />
      <Logo />
      <Group />
      <LoginButton2 />
      <LoginButton3 />
      <LoginAs />
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold h-[77px] justify-center leading-[0] left-[calc(42.86%+136.86px)] text-[#163b56] text-[65px] top-[306.5px] tracking-[6.5px] translate-y-[-50%] w-[342px]">
        <p className="leading-[8px]">Log In</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(42.86%+142.86px)] text-[15px] text-black text-nowrap top-[356px] tracking-[1.5px] translate-y-[-50%]">
        <p className="leading-[8px] whitespace-pre">Please Select a User first.</p>
      </div>
    </div>
  );
}