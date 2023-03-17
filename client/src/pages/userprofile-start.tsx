import UserMenu from "@/components/user-header-menu/user-header-menu";
import UserSideBar from "@/components/user-sidebar/user-sidebar"
import UserMain from "@/components/user-main/user-main";
import EditProject from "@/components/edit-project/edit-project";

export default function Userprofile() {
  return (
    <>
      <div className="flex mx-auto max-w-4xl mt-3 justify-between">
        <UserSideBar />
        <div className="flex flex-col max-w-xl w-full">
          <UserMenu />
          <EditProject/>
          {/* <UserMain /> */}
        </div>
      </div>
    </>
  );
}
