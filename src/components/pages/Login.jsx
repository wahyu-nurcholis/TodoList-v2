import LoginForm from "../molecules/LoginForm";
import AuthLayout from "../templates/AuthLayout";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

const LoginPage = () => {
  const { login } = useAuth();
  const [Loginfailed, setLoginFailed] = useState("");

  const handleLogin = async (username, password) => {
    const res = await login(username, password);
    if (res.ok) {
      window.location.href = "/todo";
    } else {
      setLoginFailed(res.message || "Username atau password salah!");
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-4 ">Login</h2>
      <LoginForm onLogin={handleLogin} />
      {Loginfailed && <p className="text-red-600 text-sm text-center">{Loginfailed}</p>}
      <p className="mt-4 text-sm text-center text-gray-500">
        You can get username at :{" "}
        <span className="relative group">
          <a href="https://fakestoreapi.com/users" target="_blank" rel="noopener noreferrer" className="text-green-500">
            fakeStoreAPI.com
          </a>
        </span>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
