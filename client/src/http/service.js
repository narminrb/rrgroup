import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 5000,
});


export const getCards = () => AxiosInstance.get('/v1/service/card/getAll');
export const getCard = (id) => AxiosInstance.get(`/v1/service/card/get/${id}`);
export const createCard = (data) => AxiosInstance.post('/v1/service/card/create/add', data);
export const updateCard = (id, formData) =>
  AxiosInstance.put(`/v1/service/card/update/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteCard = (id) => AxiosInstance.delete(`/v1/service/card/delete/${id}`);

export const getHeads = () => AxiosInstance.get('/v1/service/head-category/getAll');
export const getHead = (id) => AxiosInstance.get(`/v1/service/head-category/get/${id}`);
export const createHead = (data) => AxiosInstance.post('/v1/service/head-category/create/add', data);
export const updateHead = (id, formData) =>
  AxiosInstance.put(`/v1/service/head-category/update/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteHead = (id) => AxiosInstance.delete(`/v1/service/head-category/delete/${id}`);


export const getSubs = () => AxiosInstance.get('/v1/service/sub-category/getAll');
export const getSub = (id) => AxiosInstance.get(`/v1/service/sub-category/get/${id}`);
export const createSub = (data) => AxiosInstance.post('/v1/service/sub-category/create/add', data);
export const updateSub = (id, formData) =>
  AxiosInstance.put(`/v1/service/sub-category/update/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteSub = (id) => AxiosInstance.delete(`/v1/service/sub-category/delete/${id}`);


  