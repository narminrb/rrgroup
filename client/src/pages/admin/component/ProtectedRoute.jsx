import { getAccessToken } from "@/http/auth/token";
import { Navigate } from "react-router-dom";
// import { getAccessToken } from "../utils/token";

export default function ProtectedRoute({ children }) {
  const token = getAccessToken();
  return token ? children : <Navigate to="/login" />;
}
