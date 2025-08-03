import axios from "axios";

const baseURL = "https://api-sissl.onrender.com/api/v1";

const Axios = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

export default Axios;
