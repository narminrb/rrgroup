// context/AuthContext.jsx
import api, { fetchCsrfToken } from '@/http/axios';
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      await fetchCsrfToken();
      const response = await api.post('/auth/login', { email, password });
      setAdmin(response.data);
    } catch (err) {
      throw new Error('Login failed');
    }
  };

  const logout = async () => {
    await api.post('/auth/logout');
    setAdmin(null);
  };

  const verify = async () => {
    try {
      await fetchCsrfToken();
      const response = await api.post('/auth/verify');
      setAdmin(response.data);
    } catch {
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <AuthContext.Provider value={{ admin, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
