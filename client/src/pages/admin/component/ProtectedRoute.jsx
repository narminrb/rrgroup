// import { getAccessToken } from "@/http/auth/token";
// import { Navigate } from "react-router-dom";
// // import { getAccessToken } from "../utils/token";

// export default function ProtectedRoute({ children }) {
//   const token = getAccessToken();
//   return token ? children : <Navigate to="/login" />;
// }

import { getAccessToken, getRefreshToken } from "@/http/auth/token";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  // If neither token exists, force login
  if (!accessToken && !refreshToken) {
    return <Navigate to="/login" />;
  }

  // If refreshToken exists, your apiClient will handle refreshing on API calls,
  // so allow access for now.
  return children;
}
