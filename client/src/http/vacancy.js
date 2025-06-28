import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getVacancies = () => AxiosInstance.get('v1/vacancy');
export const getVacancy = (id) => AxiosInstance.get(`/v1/vacancy/${id}`);
export const createVacancy = (data) => AxiosInstance.post('/v1/vacancy', data);
export const updateVacancy = (id, formData) =>
  AxiosInstance.put(`/v1/vacancy/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteVacancy = (id) => AxiosInstance.delete(`/v1/vacancy/${id}`);


  