import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getAboutCertificates = () => AxiosInstance.get('/v1/certificates/getAll');
export const getAboutCertificate = (id) => AxiosInstance.get(`/v1/certificates/get/${id}`);
export const createAboutCertificate = (data) => AxiosInstance.post('/v1/certificates/add', data);
export const updateAboutCertificate = (id, data) => AxiosInstance.put(`/v1/certificates/update/${id}`, data);
export const deleteAboutCertificate = (id) => AxiosInstance.delete(`/v1/certificates/delete/${id}`);


  