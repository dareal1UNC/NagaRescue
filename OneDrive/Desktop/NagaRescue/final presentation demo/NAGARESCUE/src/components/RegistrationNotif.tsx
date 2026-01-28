import svgPaths from "../imports/svg-vep0rxgnsz";

function MaterialSymbolsEmergencyShareOutlineRounded() {
  return (
    <div className="w-[45px] h-[45px] mx-auto">
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
    <div className="flex flex-col items-center mb-6">
      <MaterialSymbolsEmergencyShareOutlineRounded />
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_8px_4px] font-['Poppins',sans-serif] font-bold text-[#3fa9f5] text-2xl text-center mt-2">
        <p className="leading-tight">NAGA</p>
      </div>
      <div className="font-['Poppins',sans-serif] font-semibold text-[#163b56] text-xs text-center tracking-[4.8px]">
        <p className="leading-tight">RESCUE</p>
      </div>
    </div>
  );
}

export default function RegistrationNotif({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.25)] w-full max-w-[604px] p-12">
        <Badge />
        
        <h1 className="font-['Poppins',sans-serif] font-bold text-black text-2xl text-center mb-8">
          REGISTRATION SUCCESSFUL
        </h1>

        <div className="bg-[#fffdfd] rounded-[10px] shadow-[0px_2px_7.8px_0px_inset_rgba(0,0,0,0.25)] p-8 mb-8">
          <div className="font-['Poppins',sans-serif] font-medium text-[#163b56] text-base text-center leading-relaxed">
            <p>Congratulations! You have successfully registered to the</p>
            <p>NAGARESCUE application!</p>
            <p>&nbsp;</p>
            <p>Please wait for the email in your email address which</p>
            <p>contains the username that you can use to login.</p>
            <p>&nbsp;</p>
            <p>Thank You!</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onClose}
            className="w-full max-w-[355px] h-[76px] bg-[#0b5ed0] rounded-[5px] font-['Poppins',sans-serif] font-bold text-white text-xl tracking-[6.4px] shadow-[-4px_4px_6.9px_-3px_inset_rgba(0,0,0,0.25)] hover:bg-[#094a9e] transition-colors"
          >
            RETURN
          </button>
        </div>
      </div>
    </div>
  );
}