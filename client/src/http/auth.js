import axios from "axios";

const API = axios.create({
  baseURL: "http://217.18.210.188:8080/api/v1/auth",
});

export const register = async ({ username, password }) => {
  try {
    const res = await axios.post("http://217.18.210.188:8080/api/v1/auth/register", {
      username,
      password,
    });

    return res.data;
  } catch (err) {
    console.error("REGISTER ERROR:", err.response?.data || err.message);
    throw err;
  }
};

export const login = (data) => API.post("/login", data);
export const resetPassword = (data, config) => API.post("/reset", data, config);
export const verify = (data) => API.post("/verify", data);
export const forgetPassword = (body, config) => API.post("/forgetPassword", body, config);
// export const refreshToken = (data) => API.put("/reset/email", data);
export const refreshToken = (usernameOrEmail, newEmail) =>
  API.put("/reset/email", { newEmail }, { params: { param: usernameOrEmail } });




export const logout = (data) => API.post("/logout", data);
export const sendVerificationCode = (email) =>
  API.post("/sendVerificationCode", null, { params: { email } });

export const updateEmail = (accessToken, newEmail) => {
  console.log("Token in updateEmail:", accessToken);
  return API.put(
    "/reset/email",
    null,
    {
      params: { param: newEmail },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

// import apiClient from "./apiClient";

// export const login = (data) => apiClient.post("/auth/login", data);
// export const register = (data) => apiClient.post("/auth/register", data);
// export const logout = (data) => apiClient.post("/auth/logout", data);
// export const verify = (data) => apiClient.post("/auth/verify", data);
// export const forgetPassword = (body, config) => apiClient.post("/auth/forgetPassword", body, config);
// export const resetPassword = (data, config) => apiClient.post("/auth/reset", data, config);
// export const sendVerificationCode = (email) => apiClient.post("/auth/sendVerificationCode", null, { params: { email } });

// Refresh token call can be private inside apiClient, no need to export it

// And other functions similarly...
