import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getCards = () => AxiosInstance.get('/v1/service/card/all');
export const getCard = (id) => AxiosInstance.get(`/v1/service/card/${id}`);
export const createCard = (data) => AxiosInstance.post('/v1/service/card/create', data);
export const updateCard = (id, formData) =>
  AxiosInstance.put(`/v1/service/card/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteCard = (id) => AxiosInstance.delete(`/v1/service/card/${id}`);

export const getHeads = () => AxiosInstance.get('/v1/service/head-category/all');
export const getHead = (id) => AxiosInstance.get(`/v1/service/head-category/${id}`);
export const createHead = (data) => AxiosInstance.post('/v1/service/head-category/create', data);
export const updateHead = (id, formData) =>
  AxiosInstance.put(`/v1/service/head-category/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteHead = (id) => AxiosInstance.delete(`/v1/service/head-category/${id}`);


export const getSubs = () => AxiosInstance.get('/v1/service/sub-category/all');
export const getSub = (id) => AxiosInstance.get(`/v1/service/sub-category/${id}`);
export const createSub = (data) => AxiosInstance.post('/v1/service/sub-category/create', data);
export const updateSub = (id, formData) =>
  AxiosInstance.put(`/v1/service/sub-category/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteSub = (id) => AxiosInstance.delete(`/v1/service/sub-category/${id}`);


  