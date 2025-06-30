// src/http/auth.js
import api from "./axios";
import { getCsrfToken } from "./getCsrfToken";

export const login = async (email, password) => {
  const csrfToken = await getCsrfToken();
  return api.post(
    "/v1/auth/login",
    { email, password },
    { headers: { "X-CSRF-TOKEN": csrfToken } }
  );
};

export const forgetPassword = async (email) => {
  const csrfToken = await getCsrfToken();
  return api.post(
    "/v1/auth/forgetPassword",
    { email },
    { headers: { "X-CSRF-TOKEN": csrfToken } }
  );
};

export const resetPassword = async ({ token, newPassword }) => {
  const csrfToken = await getCsrfToken();
  return api.post(
    "/v1/auth/reset",
    { token, newPassword },
    { headers: { "X-CSRF-TOKEN": csrfToken } }
  );
};

// ✅ PUT THIS HERE
export const verifySession = async () => {
  try {
    const res = await api.post("/v1/auth/verify");
    if (res.data?.valid) {
      localStorage.setItem("adminLoggedIn", "true");
    } else {
      localStorage.removeItem("adminLoggedIn");
    }
  } catch (error) {
    localStorage.removeItem("adminLoggedIn");
  }
};

// ✅ PUT THIS HERE
export const logout = async () => {
  const csrfToken = await getCsrfToken();
  await api.post(
    "/v1/auth/logout",
    {},
    {
      headers: {
        "X-CSRF-TOKEN": csrfToken,
      },
    }
  );
  localStorage.removeItem("adminLoggedIn");
};
