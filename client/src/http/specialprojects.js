import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getSpecialProjects = () => AxiosInstance.get('v1/specials/getAll');
export const getSpecialProject = (id) => AxiosInstance.get(`/v1/specials/get/${id}`);
export const createSpecialProject = (data) => AxiosInstance.post('/v1/specials/add', data);
export const updateSpecialProject = (id, formData) =>
  AxiosInstance.put(`/v1/specials/update/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteSpecialProject = (id) => AxiosInstance.delete(`/v1/specials/delete/${id}`);


  