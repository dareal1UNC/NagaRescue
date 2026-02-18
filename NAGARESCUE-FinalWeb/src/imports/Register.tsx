import svgPaths from "./svg-84s2yk3lph";
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
        <p className="leading-[8px] whitespace-pre">LOGIN</p>
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

function LoginButton2() {
  return (
    <div className="absolute bg-[#3fa9f5] content-stretch flex h-[76.481px] items-center justify-center left-[calc(57.14%+0.14px)] px-[37px] py-[13px] rounded-[5px] top-[775px] w-[355px]" data-name="LOGIN BUTTON">
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-center text-nowrap text-white tracking-[6.4px]">
        <p className="leading-[8px] whitespace-pre">REGISTER</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-4px_4px_6.9px_-3px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(57.14%+0.14px)] top-[775px]">
      <LoginButton />
      <LoginButton1 />
      <LoginButton2 />
    </div>
  );
}

function LoginButton3() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex h-[65px] items-end left-[calc(42.86%+38.86px)] p-[15px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[300px] w-[225px]" data-name="LOGIN BUTTON">
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[15px] text-center text-nowrap tracking-[1.5px]">
        <p className="leading-[20px] whitespace-pre">Firstname</p>
      </div>
    </div>
  );
}

function LoginButton4() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex h-[65px] items-end left-[calc(42.86%+38.86px)] p-[15px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[390px] w-[225px]" data-name="LOGIN BUTTON">
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[15px] text-center text-nowrap tracking-[1.5px]">
        <p className="leading-[20px] whitespace-pre">Contact Number</p>
      </div>
    </div>
  );
}

function LoginButton5() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex h-[65px] items-end left-[calc(42.86%+38.86px)] p-[15px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[635px] w-[225px]" data-name="LOGIN BUTTON">
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[15px] text-center text-nowrap tracking-[1.5px]">
        <p className="leading-[20px] whitespace-pre">Position</p>
      </div>
    </div>
  );
}

function LoginButton6() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex h-[65px] items-end left-[calc(57.14%+78.14px)] p-[15px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[632px] w-[339px]" data-name="LOGIN BUTTON">
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[15px] text-center text-nowrap tracking-[1.5px]">
        <p className="leading-[20px] whitespace-pre">Employee ID</p>
      </div>
    </div>
  );
}

function LoginButton7() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex h-[65px] items-end left-[calc(57.14%+78.14px)] p-[15px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[390px] w-[470px]" data-name="LOGIN BUTTON">
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[15px] text-center text-nowrap tracking-[1.5px]">
        <p className="leading-[20px] whitespace-pre">Email Address</p>
      </div>
    </div>
  );
}

function LoginButton8() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex h-[65px] items-end left-[calc(42.86%+38.86px)] p-[15px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[480px] w-[715px]" data-name="LOGIN BUTTON">
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[15px] text-center text-nowrap tracking-[1.5px]">
        <p className="leading-[20px] whitespace-pre">Address</p>
      </div>
    </div>
  );
}

function LoginButton9() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex h-[65px] items-end left-[calc(57.14%+78.14px)] p-[15px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[300px] w-[225px]" data-name="LOGIN BUTTON">
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[15px] text-center text-nowrap tracking-[1.5px]">
        <p className="leading-[20px] whitespace-pre">Middlename</p>
      </div>
    </div>
  );
}

function LoginButton10() {
  return (
    <div className="absolute bg-[#ecf6fe] content-stretch flex h-[65px] items-end left-[calc(71.43%+117.43px)] p-[15px] rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] top-[300px] w-[225px]" data-name="LOGIN BUTTON">
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#163b56] text-[15px] text-center text-nowrap tracking-[1.5px]">
        <p className="leading-[20px] whitespace-pre">Lastname</p>
      </div>
    </div>
  );
}

export default function Register() {
  return (
    <div className="bg-white relative size-full" data-name="REGISTER">
      <Bg />
      <Logo />
      <Group />
      <LoginButton3 />
      <LoginButton4 />
      <LoginButton5 />
      <LoginButton6 />
      <LoginButton7 />
      <LoginButton8 />
      <LoginButton9 />
      <LoginButton10 />
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold h-[77px] justify-center leading-[0] left-[calc(42.86%+25.86px)] text-[#163b56] text-[65px] top-[129.5px] tracking-[6.5px] translate-y-[-50%] w-[342px]">
        <p className="leading-[8px]">Register</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(42.86%+44.86px)] text-[15px] text-black text-nowrap top-[172px] tracking-[1.5px] translate-y-[-50%]">
        <p className="leading-[8px] whitespace-pre">Please Fill Up to register.</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(42.86%+181.36px)] text-[35px] text-black text-center text-nowrap top-[264.5px] tracking-[3.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[45px] whitespace-pre">Personal Details</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(42.86%+101.86px)] text-[35px] text-black text-center text-nowrap top-[599.5px] tracking-[3.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[45px] whitespace-pre">Position</p>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(42.86%+94.86px)] not-italic text-[12px] text-black text-nowrap top-[840px] whitespace-pre">&nbsp;</p>
    </div>
  );
}