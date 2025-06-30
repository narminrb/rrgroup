import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getForeigns = () => AxiosInstance.get('v1/foreign/getAll');
export const getForeign = (id) => AxiosInstance.get(`/v1/foreign/get/${id}`);
export const createForeign = (data) => AxiosInstance.post('/v1/foreign/add', data);
export const updateForeign = (id, formData) =>
  AxiosInstance.put(`/v1/foreign/update/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteForeign = (id) => AxiosInstance.delete(`/v1/foreign/delete/${id}`);


  