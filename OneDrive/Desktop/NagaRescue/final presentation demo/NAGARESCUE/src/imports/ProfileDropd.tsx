import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";

export default function ProfileDropd() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative size-full" data-name="PROFILE DROPD">
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="USER">
        <div className="relative shrink-0 size-[35px]">
          <img alt="" className="block max-w-none size-full" height="35" src={imgEllipse2} width="35" />
        </div>
        <div className="flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3fa9f5] text-[20px] text-nowrap">
          <p className="leading-[25px]">Daryl B.</p>
        </div>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-[180deg]">
            <div className="relative size-[24px]" data-name="gridicons:dropdown">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="gridicons:dropdown">
                  <path d="M7 10L12 15L17 10H7Z" fill="var(--fill-0, #3FA9F5)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="OPTIONS">
        <div className="bg-[#e2f2fe] h-[35px] shrink-0 w-full" />
        <div className="bg-[#e2f2fe] h-[35px] shrink-0 w-full" />
        <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold h-[25px] justify-center leading-[0] left-[47px] text-[#3fa9f5] text-[20px] top-[17.5px] translate-y-[-50%] w-[62px]">
          <p className="leading-[25px]">Profile</p>
        </div>
        <div className="absolute flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold h-[25px] justify-center leading-[0] left-[47px] text-[#3fa9f5] text-[20px] top-[57.5px] translate-y-[-50%] w-[68px]">
          <p className="leading-[25px]">Logout</p>
        </div>
      </div>
    </div>
  );
}