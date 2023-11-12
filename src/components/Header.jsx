"use client";
import useAuthContext from "@/hooks/useAuthContext";
import CustomImage from "./CustomImage";
import { useRouter } from "next/navigation";

function Header() {
  const {user, logout} = useAuthContext();
  const route = useRouter();

  const getFirstLetter = () => {
    const email = user?.email;
    const firstLetter = email?.charAt(0).toUpperCase();
    return firstLetter;
  }

  const logoutUser = async () => {
    await logout();
    route.push("/");
  };

  return (
    <div
      className="fixed top-0 inset-x-0 container mx-auto flex justify-between items-center"
    >
      {/* Imagen */}
      <div className="w-24">
        <CustomImage
          src="/avatar/task_1_1.jpg"
          alt="mario image"
          priority={true}
        />
      </div>
      {/* 
        Logo + button
       */}
      <div className="grid justify-items-center gap-y-2">
        <div
          className="w-16 h-16 bg-yellow-900 rounded-full flex justify-center items-center"
        >{getFirstLetter()}</div>
        <button
          onClick={() => logoutUser()}
          className="px-4 py-2 bg-blue-800"
        >Logout</button>
      </div>
    </div>
  );
}

export default Header;