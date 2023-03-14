import UserMenu from "@/components/user-header-menu/User-header-menu";
import UserSideBar from "@/components/user-sidebar/User-sidebar";
import UserMain from "@/components/user-main/user-main";

export default function Userprofile() {
  return (
    <>
      <div className="flex mx-auto max-w-4xl mt-3 justify-between">
        <UserSideBar />
        <div>
          <UserMenu />
          <UserMain />
        </div>
      </div>
    </>
  );
}
