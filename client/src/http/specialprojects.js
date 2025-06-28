import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getSpecialProjects = () => AxiosInstance.get('v1/specials');
export const getSpecialProject = (id) => AxiosInstance.get(`/v1/specials/${id}`);
export const createSpecialProject = (data) => AxiosInstance.post('/v1/specials', data);
export const updateSpecialProject = (id, formData) =>
  AxiosInstance.put(`/v1/specials/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteSpecialProject = (id) => AxiosInstance.delete(`/v1/specials/${id}`);


  