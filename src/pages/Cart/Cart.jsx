import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
  const [cartItems, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cartItems.reduce(
    (total, current) => total + current.price,
    0
  );
  const handleItemDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/carts/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly items-center ">
        <h1 className="text-2xl font-semibold">
          Total Orders: {cartItems.length}{" "}
        </h1>
        <h1 className="text-2xl font-semibold">
          Total Price:${totalPrice.toFixed(1)}
        </h1>
        <Link>
          <button className="text-lg py-2 px-3 rounded-md bg-yellow-600 font-semibold">
            Pay
          </button>
        </Link>
      </div>
      <div className=" overflow-x-auto rounded-xl mt-7">
        <table className="table w-full ">
          {/* head */}
          <thead className="bg-yellow-600 ">
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item, ind) => (
              <tr key={item._id}>
                <td>{ind + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleItemDelete(item._id)}
                    className="bg-red-700 p-1 rounded-md"
                  >
                    <AiFillDelete className="text-2xl  text-white" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
