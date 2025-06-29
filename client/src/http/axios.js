import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export const fetchCsrfToken = async () => {
  const { data } = await api.get('/auth/csrf-token');
  return data.token; 
};

export default api;
