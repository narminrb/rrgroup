import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getHomeAbout= () => AxiosInstance.get('/v1/home/about');
export const createAboutMission = (data) => AxiosInstance.post('/v1/home/about', data);
export const updateHomeAbout = (data) => AxiosInstance.post('/v1/home/about', data);
export const deleteHomeAbout = (id) => AxiosInstance.delete(`/v1/home/about/${id}`);





  