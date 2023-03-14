import Main from "@/components/main/Main";
import AuthBG from "@/components/bg/AuthBG";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";

export default function FpEmailStep2() {
  return (
    <>
      <Main>
        <AuthBG>
          <h1 className="font-bold text-xl">Восстановление пароля</h1>
          <span className="text-sm">На почту был отправлен код доступа, введите его</span>
          <form action="" className="mt-2 mb-16 flex flex-col">
            <Input type="text" placeholder="Введите код"></Input>
            <Button className="mt-3" disabled>
              Далее
            </Button>
          </form>
        </AuthBG>
      </Main>
    </>
  );
}
