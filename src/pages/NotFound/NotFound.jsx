import { useRouteError } from "react-router-dom";
import notFound from "../../assets/404.gif";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <img src={notFound} alt="Page Not Found" className="w-full" />
    </div>
  );
};

export default NotFound;
