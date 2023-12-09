import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import { imageUpload } from "../../api/utils";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddItem = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const uploadImage = await imageUpload(data.image[0]);
    const imgUrl = uploadImage.data.display_url;
    const menuItem = {
      name: data.name,
      recipe: data.recipe,
      price: parseFloat(data.price),
      category: data.category,
      image: imgUrl,
    };
    const res = await axiosSecure.post("/menu", menuItem);

    if (res.data.insertedId) {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <SectionTitle title="Add an Item" subtitle="What's new?" center={true} />
      <div className="bg-base-200 p-5 rounded-lg mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="label">
              <span className="label-text text-lg font-bold">Recipe name*</span>
            </label>
            <input
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
                defaultValue="default"
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
              placeholder="Recipe Details"
              className="textarea focus:outline-none  textarea-lg w-full "
              {...register("recipe", { required: true })}
            ></textarea>
          </div>

          <div>
            <input
              type="file"
              name=""
              id=""
              {...register("image", { required: true })}
            />
          </div>
          <input
            type="submit"
            value="Add Item"
            className="text-white hover:text-black bg-yellow-800 btn  mt-4 px-6"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
