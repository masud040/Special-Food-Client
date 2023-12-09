import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://special-food-restaurant-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
