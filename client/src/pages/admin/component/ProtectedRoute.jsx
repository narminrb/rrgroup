// components/ProtectedRoute.jsx
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { admin, loading } = useContext(AuthContext);

  if (loading) return <p>Checking authentication...</p>;
  if (!admin) return <Navigate to="/rrgroup/admin/login" />;
  return children;
};

export default ProtectedRoute;
