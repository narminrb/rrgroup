import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getAboutTeams = () => AxiosInstance.get('/v1/team/getAll');
export const getAboutTeam = (id) => AxiosInstance.get(`/v1/team/get/${id}`);
export const createAboutTeam = (data) => AxiosInstance.post('/v1/team/add', data);
export const updateAboutTeam = (id, data) => AxiosInstance.put(`/v1/team/update/${id}`, data);
export const deleteAboutTeam = (id) => AxiosInstance.delete(`/v1/team/delete/${id}`);


  