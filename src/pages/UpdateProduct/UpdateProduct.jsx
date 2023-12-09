import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { _id, name, recipe, category, price } = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const updateItem = {
      name: data.name,
      category: data.category,
      price: data.price,
      recipe: data.recipe,
    };
    const res = await axiosSecure.patch(`/menu/${_id}`, updateItem);

    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${name} has been updated`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <SectionTitle title="Update Item" subtitle="" center={true} />
      <div className="bg-base-200 p-5 rounded-lg mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="label">
              <span className="label-text text-lg font-bold">Recipe name*</span>
            </label>
            <input
              defaultValue={name}
              className="input input-bordered w-full border-none focus:outline-none"
              {...register("name", { required: true })}
              placeholder="Recipe name"
            />
          </div>
          <div className="flex justify-between gap-6">
            <div className="flex-1">
              <label className="label">
                <span className="label-text text-lg font-bold">Category*</span>
              </label>

              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select  w-full max-w-xs"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desserts">Desserts </option>
                <option value="drinks">Drinks </option>
              </select>
            </div>
            <div className="flex-1">
              <label className="label">
                <span className="label-text text-lg font-bold">Price*</span>
              </label>
              <input
                defaultValue={price}
                className="input input-bordered border-none focus:outline-none"
                {...register("price")}
                placeholder="Price"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-lg font-bold">Price*</span>
            </label>
            <textarea
              defaultValue={recipe}
              placeholder="Recipe Details"
              className="textarea focus:outline-none  textarea-lg w-full "
              {...register("recipe", { required: true })}
            ></textarea>
          </div>

          <input
            type="submit"
            value="Update Item"
            className="text-white hover:text-black bg-yellow-800 btn  mt-4 px-6"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
