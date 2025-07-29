import axios from "axios";

const baseURL = "https://pointify-hki2.onrender.com/api/user";
// import.meta.env.MODE === "development"
//   ? "https://pointify-hki2.onrender.com/api/user"
//   : "/api/user";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
