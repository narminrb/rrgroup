import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getAboutVision = () => AxiosInstance.get('/v1/vision/get');
export const updateAboutVision = (data) => AxiosInstance.post('/v1/vision/edit', data); 



  