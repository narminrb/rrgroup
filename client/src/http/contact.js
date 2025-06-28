import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getContacts = () => AxiosInstance.get('v1/contact');
export const getContact = (id) => AxiosInstance.get(`/v1/contact/${id}`);
export const createContact = (data) => AxiosInstance.post('/v1/contact', data);
export const updateContact = (id, formData) =>
  AxiosInstance.put(`/v1/contact/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteContact = (id) => AxiosInstance.delete(`/v1/contact/${id}`);


  