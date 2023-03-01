import { TProps } from "@/types";

export default function Main({ children }: TProps) {
  return (
    <main className='flex flex-col items-center px-5 bg-alabaster-500 w-full h-full'>
      { children }
    </main>
  )
}
