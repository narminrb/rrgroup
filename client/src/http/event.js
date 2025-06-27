import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getAboutValues = () => AxiosInstance.get('/v1/values');
export const getAboutValue = (id) => AxiosInstance.get(`/v1/values/${id}`);
export const createAboutValue = (data) => AxiosInstance.post('/v1/values', data);
export const updateAboutValue = (id, data) => AxiosInstance.put(`/v1/values/${id}`, data);
export const deleteAboutValue = (id) => AxiosInstance.delete(`/v1/values/${id}`);


  