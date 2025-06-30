// src/pages/auth/ForgetPassword.jsx
import { useState } from "react";
import AuthLayout from "./AuthContext";
import { forgetPassword } from "@/http/auth";
// import { forgetPassword } from "@/http/auth";
// import AuthLayout from "@/components/AuthLayout";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgetPassword(email);
      alert("Check your email to reset password.");
    } catch (err) {
      alert("Failed to send reset email.");
    }
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold mb-4">Reset Your Password</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Your Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded"
        >
          Send Reset Email
        </button>
      </form>
    </AuthLayout>
  );
}
