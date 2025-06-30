// src/pages/auth/ResetPassword.jsx
import { resetPassword } from "@/http/auth";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import AuthLayout from "./AuthContext";
// import { resetPassword } from "@/http/auth";
// import AuthLayout from "@/components/AuthLayout";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [params] = useSearchParams();
  const token = params.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword({ token, newPassword });
      alert("Password reset successfully!");
    } catch (err) {
      alert("Reset failed");
    }
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold mb-4">Enter New Password</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="New Password"
          type="password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded"
        >
          Reset Password
        </button>
      </form>
    </AuthLayout>
  );
}
