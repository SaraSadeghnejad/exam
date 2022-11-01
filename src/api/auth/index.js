import Axios from "../../utils/Axios";
import AuthAxios from "../../utils/AuthAxios";
import apiClient from "@/utils/ApiClient";

const SignIn = (data) => apiClient.post("/login", data, { withCredentials: true });
const getCookies = () => apiClient.get("/sanctum/csrf-cookie", { withCredentials: true }) 
const Register = (data) => apiClient.post("/register", data, { withCredentials: true });
const Validation = (data) => apiClient.post("/otp-notification", data, { withCredentials: true });

export {
    SignIn,
    Register,
    Validation,
    getCookies
};
