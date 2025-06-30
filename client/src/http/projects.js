import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getProjects = () => AxiosInstance.get('v1/projects/getAll');
export const getProject = (id) => AxiosInstance.get(`/v1/projects/get/${id}`);
export const createProject = (data) => AxiosInstance.post('/v1/projects/add', data);
export const updateProject = (id, data) => AxiosInstance.put(`/v1/projects/update/${id}`, data);
export const deleteProject = (id) => AxiosInstance.delete(`/v1/projects/delete/${id}`);


  