import Main from "@/components/main/Main";
import AuthBG from "@/components/bg/AuthBG";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";

export default function FpStep3() {
  return (
    <>
      <Main>
        <AuthBG>
          <h1 className="font-bold text-xl">Восстановление пароля</h1>
          <span className="text-sm font-normal">Придумайте новый пароль</span>
          <form action="" className="mt-2 mb-16 flex flex-col">
            <Input type="text" placeholder="Новый пароль"></Input>
            <Input type="text" className="mt-2 bg-neutral-100" placeholder="Подтвердите пароль"></Input>
            <Button className="mt-3" disabled>
              Далее
            </Button>
          </form>
        </AuthBG>
      </Main>
    </>
  );
}
