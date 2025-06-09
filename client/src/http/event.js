import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

export const getAboutValues = () => API.get("/aboutvalues");
export const deleteAboutValue = (id) => API.delete(`/aboutvalues/${id}`);
export const createAboutValue = (data) => API.post("/aboutvalues", data);
export const updateAboutValue = (id, data) => API.put(`/aboutvalues/${id}`, data);

  