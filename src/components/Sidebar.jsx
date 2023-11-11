import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
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
        to="/cart"
        className={({ isActive, isPending }) =>
          isPending ? "btn w-full" : isActive ? " btn w-full" : "btn w-full"
        }
      >
        <AiOutlineShoppingCart className="text-2xl bg-green-600 m-2 rounded-full p-1" />
      </NavLink>
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
    </div>
  );
};

export default Sidebar;
