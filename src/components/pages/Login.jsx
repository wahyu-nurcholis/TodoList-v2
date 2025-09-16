import React from "react";
import LoginForm from "../molecules/LoginForm";
import AuthLayout from "../templates/AuthLayout";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = async (username, password) => {
    const res = await login(username, password);
    if (res.ok) {
      window.location.href = "/todo";
    } else {
      alert("Login gagal: " + (res.message || "unknown"));
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <LoginForm onLogin={handleLogin} />
      <p className="mt-4 text-sm text-gray-500">
        Example: username <code>mor_2314</code>, password <code>83r5^_</code>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
