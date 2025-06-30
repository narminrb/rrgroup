import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getAboutHistory = () => AxiosInstance.get('/v1/history/get');
export const updateAboutHistory = (data) => AxiosInstance.post('/v1/history/edit', data); 



  