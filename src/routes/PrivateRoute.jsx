import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import FadeLoader from "react-spinners/ClipLoader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex justify-center h-[78vh] items-center">
        <FadeLoader
          color="red"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivateRoute;
// if (loading) {
//     return (
//
//     )
// }
