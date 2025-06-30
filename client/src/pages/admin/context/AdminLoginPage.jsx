// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from './AuthContext';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       navigate('/rrgroup/admin'); // Redirect after successful login
//     } catch (err) {
//       alert('Login failed');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form onSubmit={handleLogin} className="p-6 bg-white shadow-md rounded w-full max-w-sm">
//         <h2 className="text-xl font-bold mb-4">Admin Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           className="mb-3 w-full p-2 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="mb-3 w-full p-2 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

// src/pages/auth/Login.jsx
import { useState } from "react";
// import { login } from "@/http/auth";
// import AuthLayout from "@/components/AuthLayout";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthContext";
import { login } from "@/http/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
      <p
        className="text-sm mt-4 text-blue-600 cursor-pointer"
        onClick={() => navigate("/admin/forget-password")}
      >
        Forgot Password?
      </p>
    </AuthLayout>
  );
}

