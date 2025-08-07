import axios from "axios";
import { toast } from "sonner";
import { AUTH_ROUTES } from "../routes/auth";
import { getSession } from "next-auth/react";

const baseURL = "https://api-sissl.onrender.com/api/v1";

const AxiosWithToken = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

let retryCount = 0;

AxiosWithToken.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    const token = session?.user?.accessToken;

    if (!token && retryCount < 3) {
      console.log(`Token retry attempt ${retryCount + 1}`);
      retryCount++;
      await new Promise((resolve) => setTimeout(resolve, 100));
      return AxiosWithToken.request(config);
    }

    if (!token && retryCount >= 3) {
      console.log("Max retries reached, no token available");
      retryCount = 0;
      return config;
    }

    config.headers.Authorization = `Bearer ${token}`;
    retryCount = 0;
    return config;
  },
  (error) => Promise.reject(error)
);

AxiosWithToken.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const currentPath = window.location.pathname;
      if (currentPath !== "/auth/login") {
        localStorage.setItem("redirectAfterLogin", currentPath);
      }

      console.log("Unauthorized:", error);
      toast.success("Login session expired");
      window.location.href = AUTH_ROUTES.LOGIN;
    }

    return Promise.reject(error);
  }
);

export default AxiosWithToken;
