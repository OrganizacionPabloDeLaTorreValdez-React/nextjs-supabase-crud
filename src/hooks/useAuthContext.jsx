import { AuthContext } from "@/app/context/AuthProvider";
import { useContext } from "react";

function useAuthContext() {
  const {user, logout} = useContext(AuthContext);
  return {
    user,
    logout,
  }
}

export default useAuthContext;