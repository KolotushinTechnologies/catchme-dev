import UserMenu from "@/components/UserMenu/UserMenu";
import UserSideBar from "@/components/UserSideBar/UserSideBar";

export default function Userprofile() {
  return (
    
      <div className="flex mx-auto max-w-4xl mt-3 justify-between">
        <UserSideBar />
        <UserMenu />
      </div>
    
  );
}
