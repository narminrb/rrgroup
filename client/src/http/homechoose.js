import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getHomeChoose= () => AxiosInstance.get('/v1/whyChooseUs/getAll');
export const createHomeChoose = (data) => AxiosInstance.post('/v1/whyChooseUs/add', data);
export const updateHomeChoose = (id, formData) =>
  AxiosInstance.put(`/v1/whyChooseUs/update/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteHomeChoose = (id) => AxiosInstance.delete(`/v1/whyChooseUs/delete/${id}`);





  