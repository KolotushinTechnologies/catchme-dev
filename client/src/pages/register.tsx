import AuthBG from '@/components/bg/AuthBG'
import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import Main from '@/components/main/Main'
import Head from 'next/head'
import Link from 'next/link'

export default function Register() {
  return (
    <>
      <Head>
        <title>CatchMe - Регистрация</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <AuthBG>
          <h1 className='font-bold text-xl'>Регистрация аккаунта</h1>
          <form action="" className='mt-7 flex flex-col items-center'>
            <Input type="text" placeholder="Email" />
            <span className='mt-2'>или</span>
            <Input className="mt-2" type="text" placeholder="Пароль" />
            <span className="text-sm mt-3">Забыли пароль? <Link href="/recover" className='text-turquoise-blue-500'>Восстановить</Link></span>
            <Button className='mt-3' disabled>Вход</Button>
            <span className="text-sm mt-3">Нет аккаунта? <Link href="/register" className='text-turquoise-blue-500'>Регистрация</Link></span>
          </form>
        </AuthBG>
      </Main>
    </>
  )
}
