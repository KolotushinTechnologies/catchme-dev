import Image from "next/image";

export default function UserMain() {
  return (
    <>
      <div className="max-w-xl w-full h-[151px] mt-2 border border-alto-500 rounded-3xl">
        <div className="flex py-[22px] px-[26px] items-center">
          <Image src="/pirates.webp" width={201} height={106} alt="" className="mr-[16px]" />
          <div>
            <h2 className="font-bold leading-[18px]">Pirates of the Caribbean</h2>
            <span className="text-[14px] text-[#616161] font-normal">
              Pirates of the Caribbean is a series of adventure films about
              pirates in the Caribbean directed by Gore Verbinski, Rob Marshal,
              Espen Sandberg and Joakim Rönning...
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
