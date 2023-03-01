import { TProps } from '@/types';
import Image from 'next/image'
import Logo from "@/assets/logo.svg";

export default function AuthBG({ children }: TProps) {
  return (
    <div className='flex flex-col items-center p-5 mt-9 w-full max-w-3xl border border-alto-500 rounded-2xl'>
      <div className='flex w-full mb-4'>
        <Image src={Logo} alt="" />
      </div>
      { children }
    </div>
  )
}
