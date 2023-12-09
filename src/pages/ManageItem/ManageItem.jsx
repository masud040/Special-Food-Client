import { AiFillDelete } from "react-icons/ai";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { FadeLoader } from "react-spinners";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const ManageItem = () => {
  const { menu, loading, refetch } = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDelete = async (item) => {
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
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle
        title="Manage All Items"
        subtitle="Hurry Up!"
        center={true}
      />
      {loading ? (
        <div className="flex justify-center h-[78vh] items-center">
          <FadeLoader
            color="red"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, ind) => (
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
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="bg-yellow-700 p-1 rounded-md">
                        <FaEdit className="text-2xl  text-white" />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="bg-red-700 p-1 rounded-md"
                    >
                      <AiFillDelete className="text-2xl  text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageItem;
