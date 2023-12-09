import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = async () => {
    await logOut();
    toast.success("Logged out");
  };
  return (
    <div className="flex flex-col w-full items-center font-bold text-[16px]">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn w-full"
            : isActive
            ? "text-yellow-400 btn w-full"
            : "btn w-full"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn w-full"
            : isActive
            ? "text-yellow-400 btn w-full"
            : "btn w-full"
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn w-full"
            : isActive
            ? "text-yellow-400 btn w-full"
            : "btn w-full"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn w-full"
            : isActive
            ? "text-yellow-400 btn w-full"
            : "btn w-full"
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to="/shop/SALAD"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn w-full"
            : isActive
            ? "text-yellow-400 btn w-full"
            : "btn w-full"
        }
      >
        Our Shop
      </NavLink>
      <NavLink
        to="/dashboard/cart"
        className={({ isActive, isPending }) =>
          isPending ? "btn w-full" : isActive ? " btn w-full" : "btn w-full"
        }
      >
        <AiOutlineShoppingCart className="text-2xl bg-green-600 m-2 rounded-full p-1" />
      </NavLink>
      {user ? (
        <button onClick={handleLogout} className="btn w-full">
          Logout
        </button>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "btn w-full"
              : isActive
              ? "text-yellow-400 btn w-full"
              : "btn w-full"
          }
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Sidebar;
