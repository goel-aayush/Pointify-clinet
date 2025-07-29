import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://pointify-hki2.onrender.com/api/user"
      : "/api/user",
  withCredentials: true,
});
