import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getAboutMissions = () => AxiosInstance.get('/v1/missions/getAll');
export const getAboutMission = (id) => AxiosInstance.get(`/v1/missions/get/${id}`);
export const createAboutMission = (data) => AxiosInstance.post('/v1/missions/add', data);
export const updateAboutMission = (id, data) => AxiosInstance.put(`/v1/missions/update/${id}`, data);
export const deleteAboutMission = (id) => AxiosInstance.delete(`/v1/missions/delete/${id}`);


  