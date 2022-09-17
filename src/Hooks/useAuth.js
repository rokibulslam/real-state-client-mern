import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";

// use auth
const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
