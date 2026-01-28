import svgPaths from "./svg-6cemgnjhvw";
import clsx from "clsx";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[15px] items-center px-[15px] py-[22px] relative w-full">{children}</div>
    </div>
  );
}
type LoginButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LoginButtonText({ text, additionalClassNames = "" }: LoginButtonTextProps) {
  return (
    <div className={clsx("bg-[#3fa9f5] relative shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] shrink-0 w-full", additionalClassNames)}>
      <Wrapper>
        <MdiUserGroupOutline />
        <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ecf6fe] text-[20px] tracking-[2px] w-[381px]">
          <p className="leading-[25px]">{text}</p>
        </div>
      </Wrapper>
    </div>
  );
}

function MdiUserGroupOutline() {
  return (
    <div className="relative shrink-0 size-[38px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g clipPath="url(#clip0_40_139)" id="mdi:user-group-outline">
          <path d={svgPaths.pc71d000} fill="var(--fill-0, #ECF6FE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_40_139">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function LoginAs() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative size-full" data-name="LOGIN AS">
      <div className="bg-[#3fa9f5] relative rounded-[10px] shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="LOGIN AS DD">
        <Wrapper>
          <MdiUserGroupOutline />
          <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ecf6fe] text-[20px] tracking-[2px] w-[381px]">
            <p className="leading-[25px]">Log In As</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <div className="relative size-[34px]" data-name="chevron-down 1">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                  <g id="chevron-down 1">
                    <path d={svgPaths.p31b11f80} fill="var(--fill-0, #ECF6FE)" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="content-stretch flex flex-col items-start relative rounded-[10px] shrink-0 w-full" data-name="OPTIONS">
        <LoginButtonText text="CDRRMO Officer" additionalClassNames="rounded-tl-[10px] rounded-tr-[10px]" />
        <LoginButtonText text="ComCen Staff" additionalClassNames="rounded-bl-[10px] rounded-br-[10px]" />
      </div>
    </div>
  );
}