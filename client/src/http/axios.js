// // import axios from 'axios';

// // const api = axios.create({
// //   baseURL: import.meta.env.VITE_API_BASE_URL,
// //   withCredentials: true,
// // });

// // export const fetchCsrfToken = async () => {
// //   const { data } = await api.get('/auth/csrf-token');
// //   return data.token; 
// // };

// // export default api;
// // http/auth.js
// import axios from "axios";

// const AxiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
//   withCredentials: true, // Important for CSRF cookie
// });

// export const getCsrfToken = () => AxiosInstance.get("/v1/auth/csrf-token");

// export const login = (credentials) =>
//   AxiosInstance.post("/v1/auth/login", credentials); // { email, password }
// export const logout = () =>
//   AxiosInstance.post("/v1/auth/logout");
// export const register = (userData) =>
//   AxiosInstance.post("/v1/auth/register", userData);
// export const verify = (data) =>
//   AxiosInstance.post("/v1/auth/verify", data);

// export const resetPassword = (data) =>
//   AxiosInstance.post("/v1/auth/reset", data);

// export const forgetPassword = (data) =>
//   AxiosInstance.post("/v1/auth/forgetPassword", data);

// src/http/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  withCredentials: true, 
});

export default api;
