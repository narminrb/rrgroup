import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getSetems = () => AxiosInstance.get('v1/setem/getAll');
export const getSetem = (id) => AxiosInstance.get(`/v1/setem/get/${id}`);
export const createSetem = (data) => AxiosInstance.post('/v1/setem/add', data);
export const updateSetem = (id, formData) =>
  AxiosInstance.put(`/v1/setem/update/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteSetem = (id) => AxiosInstance.delete(`/v1/setem/delete/${id}`);


  