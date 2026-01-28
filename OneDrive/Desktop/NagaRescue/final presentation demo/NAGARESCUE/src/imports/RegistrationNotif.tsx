import svgPaths from "./svg-vep0rxgnsz";

function MaterialSymbolsEmergencyShareOutlineRounded() {
  return (
    <div className="absolute left-[243px] size-[45px] top-[53px]" data-name="material-symbols:emergency-share-outline-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g filter="url(#filter0_i_5_250)" id="material-symbols:emergency-share-outline-rounded">
          <path d={svgPaths.p395add80} fill="var(--fill-0, #3FA9F5)" id="Vector" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="49" id="filter0_i_5_250" width="45" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_5_250" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute contents left-[243px] top-[53px]" data-name="BADGE">
      <MaterialSymbolsEmergencyShareOutlineRounded />
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_8px_4px] absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[322.5px] text-[#3fa9f5] text-[25px] text-center text-nowrap top-[75.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[25px] whitespace-pre">NAGA</p>
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[322.5px] text-[#163b56] text-[8px] text-center text-nowrap top-[89.5px] tracking-[4.8px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[25px] whitespace-pre">RESCUE</p>
      </div>
    </div>
  );
}

function LoginButton() {
  return (
    <div className="absolute bg-[#3fa9f5] content-stretch flex h-[76.481px] items-center justify-center left-[124px] px-[37px] py-[13px] rounded-[5px] top-[546px] w-[355px]" data-name="LOGIN BUTTON">
      <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-center text-nowrap text-white tracking-[6.4px]">
        <p className="leading-[35px] whitespace-pre">RETURN</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-4px_4px_6.9px_-3px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function RegistrationNotif() {
  return (
    <div className="relative rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.25)] size-full" data-name="REGISTRATION NOTIF">
      <div className="absolute bg-white h-[678px] left-0 rounded-[10px] top-0 w-[604px]" />
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[302px] text-[30px] text-black text-center text-nowrap top-[153.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[35px] whitespace-pre">REGISTRATION SUCCESSFUL</p>
      </div>
      <Badge />
      <div className="absolute bg-[#fffdfd] h-[306px] left-[77px] rounded-[10px] top-[195px] w-[449px]">
        <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_7.8px_0px_inset_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[35px] left-[301.5px] text-[#163b56] text-[12px] text-center text-nowrap top-[338.5px] tracking-[1.2px] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
        <p className="mb-0">{`Congratulations! You have successfully registered to the `}</p>
        <p className="mb-0">NAGARESCUE application!</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Please wait for the email in your email address which `}</p>
        <p className="mb-0">contains the username that you can use to login.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Thank You!</p>
      </div>
      <LoginButton />
    </div>
  );
}