import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = async () => {
    await logOut();
    toast.success("Logged out");
  };
  return (
    <div className="flex gap-5 items-center text-white font-bold text-[16px]">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-yellow-400" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-yellow-400" : ""
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-yellow-400" : ""
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-yellow-400" : ""
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to="/shop/SALAD"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-yellow-400" : ""
        }
      >
        Our Shop
      </NavLink>
      <NavLink
        to="/dashboard/cart"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "" : ""
        }
      >
        <AiOutlineShoppingCart className="text-2xl bg-green-600 m-2 rounded-full p-1" />
      </NavLink>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border border-yellow-400" : ""
          }
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
