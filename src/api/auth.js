import axios from "axios";

export const saveUser = async (user) => {
  const userInfo = {
    name: user.displayName,
    email: user.email,
    role: "user",
  };
  const res = await axios.post(
    "https://special-food-restaurant-server.vercel.app/users",
    userInfo
  );
  return res.data;
};
