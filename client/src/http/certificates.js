import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getAboutCertificates = () => AxiosInstance.get('/v1/certificate');
export const getAboutCertificate = (id) => AxiosInstance.get(`/v1/certificate/${id}`);
export const createAboutCertificate = (data) => AxiosInstance.post('/v1/certificate', data);
export const updateAboutCertificate = (id, data) => AxiosInstance.put(`/v1/certificate/${id}`, data);
export const deleteAboutCertificate = (id) => AxiosInstance.delete(`/v1/certificate/${id}`);


  