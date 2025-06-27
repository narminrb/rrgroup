// import axios from "axios";

// // const AxiosInstance = axios.create({
// //     baseURL: "http://localhost:4000/", // now using JSON Server
// //     timeout: 1000,
// //   });
  
// const AxiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL, // ✅ use your real backend URL from .env
//   timeout: 5000,
// });



// // AxiosInstance.interceptors.request.use((config) => {
// //   config.headers["TOKEN_BASE"] = "sadasdasd";
// //   return config;
// // });

// export const getAPiData = async (url, ...config) => {
//   return await AxiosInstance.get(url, ...config).then((res) => res?.data);
// };

// export const postApiData = async (url, data, ...config) => {
//   return await AxiosInstance.post(url, data, ...config).then((res) => res?.data);
// };

import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});

// export const getAPiData = async (url, ...config) => {
//   return await AxiosInstance.get(url, ...config).then(res => res.data);
// };
export const getAPiData = async (url, ...config) => {
  return await AxiosInstance.get(url, ...config).then(res => res.data);
};


export const postApiData = async (url, data, ...config) => {
  return await AxiosInstance.post(url, data, ...config).then(res => res.data);
};
