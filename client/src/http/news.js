import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getNews = () => AxiosInstance.get('v1/news/getAll');
export const getNew = (id) => AxiosInstance.get(`/v1/news/get/${id}`);
export const createNew = (data) => AxiosInstance.post('/v1/news/add', data);
export const updateNew = (id, formData) =>
  AxiosInstance.put(`/v1/news/update/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteNew = (id) => AxiosInstance.delete(`/v1/news/delete/${id}`);


  