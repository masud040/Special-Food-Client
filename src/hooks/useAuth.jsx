import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
  const autInfo = useContext(AuthContext);
  return autInfo;
};

export default useAuth;
