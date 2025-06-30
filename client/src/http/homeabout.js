import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getHomeAbout= () => AxiosInstance.get('/v1/home/about/get');
export const createAboutMission = (data) => AxiosInstance.post('/v1/home/about/add', data);
export const updateHomeAbout = (id, formData) =>
  AxiosInstance.put(`/v1/home/about/update/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteHomeAbout = (id) => AxiosInstance.delete(`/v1/home/about/delete/${id}`);





  