import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? "https://pointify-hki2.onrender.com/api/user"
    : "/api/user";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
