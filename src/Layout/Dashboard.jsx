import {
  FaBook,
  FaCartArrowDown,
  FaHome,
  FaShoppingBag,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { MdRateReview } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex gap-8">
      <div className="w-72  h-screen bg-rose-400 pt-6">
        <ul className="menu  w-full text-lg ">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <FaHome className="text-2xl" />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItem"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <FaUtensils className="text-2xl" />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageItems"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <TiThMenu className="text-2xl" />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageBookings"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <FaBook className="text-2xl" />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allUsers"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <FaUsers className="text-2xl" />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/userHome"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <FaHome className="text-2xl" />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/reservation"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <MdDateRange className="text-2xl" />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <MdPayments className="text-2xl" />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/cart"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <FaCartArrowDown className="text-2xl" />
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addreview"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <MdRateReview className="text-2xl" />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/bookings"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <FaBook className="text-2xl" />
                  My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider "></div>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaHome className="text-2xl" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <TiThMenu className="text-2xl" />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaShoppingBag className="text-2xl" />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <IoMdMail className="text-2xl" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
