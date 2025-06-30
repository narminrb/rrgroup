import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getCv = () => AxiosInstance.get('v1/vacancy/applicant/getAll');
export const deleteCv = (id) => AxiosInstance.delete(`/v1/vacancy/applicant/delete/${id}`);


  