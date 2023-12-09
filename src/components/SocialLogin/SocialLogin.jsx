import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();
  const handleSocialLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div
      onClick={handleSocialLogin}
      className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
    >
      <FcGoogle size={32} />

      <p>Continue with Google</p>
    </div>
  );
};

export default SocialLogin;
