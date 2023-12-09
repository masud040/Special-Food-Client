import { AiFillDelete } from "react-icons/ai";
import SectionTitle from "../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

import { FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });
  const handleMakeAdmin = async (id) => {
    Swal.fire({
      title: "Are you sure want to make admin to the user",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const update = await axiosSecure.patch(`/users/admin/${id}`);
        if (update.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Success!",
            text: "Change user to admin.",
            icon: "success",
          });
        }
      }
    });
  };

  const handleDelete = (id) => {
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
        const deleteUser = await axiosSecure.delete(`/users/${id}`);
        if (deleteUser.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle
        title={"Manage all Users"}
        subtitle="How Many"
        center={true}
      />
      <div>
        <h1 className="text-2xl font-semibold mt-4">
          Total Users: {users.length}{" "}
        </h1>

        <div className=" overflow-x-auto rounded-xl mt-4">
          <table className="table w-full ">
            {/* head */}
            <thead className="bg-yellow-600 ">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, ind) => (
                <tr key={user._id}>
                  <td>{ind + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <button className="bg-red-700 p-1 rounded-md">
                        <FaUser className="text-2xl  text-white" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="bg-red-700 p-1 rounded-md"
                      >
                        <FaUsers className="text-2xl  text-white" />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
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
      </div>
    </div>
  );
};

export default AllUsers;
