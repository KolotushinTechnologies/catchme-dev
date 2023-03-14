import Main from "@/components/main/Main";
import AuthBG from "@/components/bg/AuthBG";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";

export default function FpEmailStep1() {
  return (
    <>
      <Main>
        <AuthBG>
          <h1 className="font-bold text-xl">Восстановление пароля</h1>
          <form action="" className="mt-7 mb-16 flex flex-col">
            <Input type="text" placeholder="Email"></Input>
            <Button className="mt-3" disabled>
              Далее
            </Button>
          </form>
        </AuthBG>
      </Main>
    </>
  );
}
