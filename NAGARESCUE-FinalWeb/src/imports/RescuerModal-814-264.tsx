import imgImage2 from "figma:asset/eceb4f03c3984c0a9beb713cfaff5dcfd22fee1c.png";

function Frame() {
  return (
    <div className="absolute bg-[#2f802f] h-[25px] left-[770px] rounded-[5px] top-[10px] w-[87px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[21px] text-[8px] text-white top-[12.5px] tracking-[1.36px] whitespace-nowrap">
        <p className="leading-[25px]">APPROVE</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#ca1e1e] h-[25px] left-[882px] rounded-[5px] top-[10px] w-[87px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[21px] text-[8px] text-white top-[12.5px] tracking-[1.36px] whitespace-nowrap">
        <p className="leading-[25px]">REJECT</p>
      </div>
    </div>
  );
}

function UserApproval() {
  return (
    <div className="absolute h-[45px] left-0 top-[40px] w-[1188px]" data-name="USER APPROVAL">
      <div aria-hidden="true" className="absolute border-[#163b56] border-b-[0.5px] border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[236px] text-[15px] text-black top-[22.5px] tracking-[2.55px] w-[152px]">
        <p className="leading-[25px] whitespace-pre-wrap">Daryl Adrian</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[413px] text-[15px] text-black top-[22.5px] tracking-[2.55px] w-[183px]">
        <p className="leading-[25px] whitespace-pre-wrap">ComCen Head</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Josefin_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[621px] text-[15px] text-black top-[22.5px] tracking-[2.55px] w-[124px]">
        <p className="leading-[25px] whitespace-pre-wrap">ComCen</p>
      </div>
      <Frame />
      <Frame1 />
    </div>
  );
}

export default function RescuerModal() {
  return (
    <div className="relative size-full" data-name="RESCUER MODAL">
      <div className="absolute bg-white h-[670px] left-0 rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.25)] top-0 w-[1199px]" />
      <div className="-translate-x-1/2 absolute h-[553px] left-1/2 top-[91px] w-[797px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[151.76%] left-[-2.44%] max-w-none top-[-25.48%] w-[105.22%]" src={imgImage2} />
        </div>
      </div>
      <UserApproval />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[236px] text-[15px] text-black top-[27.5px] tracking-[2.55px] w-[152px]">
        <p className="leading-[25px] whitespace-pre-wrap">Name</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[413px] text-[15px] text-black top-[27.5px] tracking-[2.55px] w-[183px]">
        <p className="leading-[25px] whitespace-pre-wrap">Position</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[621px] text-[15px] text-black top-[27.5px] tracking-[2.55px] w-[124px]">
        <p className="leading-[25px] whitespace-pre-wrap">Office</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[1126px] text-[15px] text-black top-[36.5px] tracking-[2.55px] w-[124px]">
        <p className="leading-[25px] whitespace-pre-wrap">x</p>
      </div>
    </div>
  );
}