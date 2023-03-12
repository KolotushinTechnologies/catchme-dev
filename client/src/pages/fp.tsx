import Main from "@/components/main/Main";
import AuthBG from "@/components/bg/AuthBG";
import Button from "@/components/button/Button";

export default function Fp() {
  return (
    <>
      <Main>
        <AuthBG>
          <h1 className="font-bold text-xl">Восстановление пароля</h1>
          <form action="" className="mt-7 mb-14 flex flex-col items-center">
            <Button className="mt-3 text-white">Email</Button>
            <span className="mt-2">или</span>
            <Button className="mt-3 text-white">Имя Пользователя</Button>
          </form>
        </AuthBG>
      </Main>
    </>
  );
}
