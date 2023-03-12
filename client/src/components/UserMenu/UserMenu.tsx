import Image from "next/image";
import Logo from "@/assets/logo.svg";

export default function UserName() {
  return (
    <>
      <div className="flex mx-auto max-w-4xl mt-3 justify-between">
        <div className="flex flex-col items-center pl-20 pr-20 pt-6 pb-6 border border-alto-500 rounded-3xl">
          <div className="flex w-full">
            <Image src={Logo} alt="" />
          </div>
        </div>
        <div className="max-w-xl w-full border border-alto-500 rounded-3xl">
          <ul className="flex justify-between items-center p-4">
            <div className="flex flex-col items-center">
              <Image src="/portfolio.svg" width={25} height={23} alt="" />
              <li className="text-turquoise-blue-500 font-bold">Портфолио </li>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/experience.svg" width={23} height={25} alt="" />
              <li className="font-bold">Опыт</li>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/education.svg" width={27} height={22} alt="" />
              <li className="font-bold">Образование</li>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/target.svg" width={18} height={21} alt="" />
              <li className="font-bold">Цели</li>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/records.svg" width={25} height={23} alt="" />
              <li className="font-bold">Записи</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
