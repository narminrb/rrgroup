import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getSocials = () => AxiosInstance.get('v1/social/getAll');
export const getSocial = (id) => AxiosInstance.get(`/v1/social/get/${id}`);
export const createSocial = (data) => AxiosInstance.post('/v1/social/add', data);
export const updateSocial = (id, formData) =>
  AxiosInstance.put(`/v1/social/update/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteSocial = (id) => AxiosInstance.delete(`/v1/social/delete/${id}`);


  