import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getContactsMessages = () => AxiosInstance.get('v1/contact/getAll/contactMessages');
export const deleteContactMessages = (id) => AxiosInstance.delete(`/v1/contact/delete/contactMessages/${id}`);


  