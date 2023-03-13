import Image from "next/image";
import Logo from "@/assets/logo.svg";

export default function UserSideBar() {
  return (
    <div className="flex flex-col pl-6 pr-6 pt-5 pb-[59px] w-full max-w-[293px] max-h-[526px] h-full border border-alto-500 rounded-3xl">
      {/* <div className="flex w-full flex-col"> */}
        <Image src={Logo} alt="" />
        <div className="flex">
          <div>
            <Image
              src="/fc97db329bd4482025eaa1e3961dc80e.jpeg"
              width={50}
              height={50}
              alt=""
              className="rounded-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Johnny Depp</span>
            <span className="text-grey">20 likes</span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col">
          <div className="flex">
            <Image src="/world.svg" width={13} height={13} alt="" />
            <span className="text-grey">USA</span>
          </div>
          <div className="flex">
            <Image src="/case.svg" width={13} height={13} alt="" />
            <span className="text-grey">Actor</span>
          </div>
          <div className="flex">
            <Image src="/language.svg" width={13} height={13} alt="" />
            <span className="text-grey">English</span>
          </div>
          <div className="flex">
            <Image src="/records.svg" width={13} height={13} alt="" />
            <span className="text-grey">20 posts</span>
          </div>
          <div className="flex">
            <Image src="/target.svg" width={13} height={13} alt="" />
            <span className="text-grey">15 goals</span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col">
          <div>
            <span className="text-[#616161]">Number of profile views</span>
            <span className="text-grey">200</span>
          </div>
          <div>
            <span className="text-[#616161]">Number of connections</span>
            <span className="text-grey">100</span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col">
          <span className="text-[#616161] font-bold">Social</span>
          <div className="flex">
            <Image src="/telegram.svg" width={13} height={13} alt="" />
            <span className="text-grey">@JohnnyDepp</span>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
