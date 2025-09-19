import { useCallback } from "react";
import { api, setAuthToken } from "../utils/api";

export function useAuth() {
  // login
  const login = useCallback(async (username, password) => {
    try {
      if (!username || !password) {
        return { ok: false, message: "Username atau password belum di isi" };
      }

      const res = await api.post("/auth/login", { username, password });
      const { token } = res.data;

      if (token) {
        localStorage.setItem("token", token);
        setAuthToken(token);
        return { ok: true };
      }

      return { ok: false, message: "Tidak ada Token yang diterima" };
    } catch (err) {
      console.error(err.response?.data || err.message);
      if (err.response?.status === 401) {
        return { ok: false, message: "Username atau Password salah" };
      }

      return { ok: false, message: err.response?.data || err.message };
    }
  }, []);

  // logout
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setAuthToken(null);
    window.location.href = "/login";
  }, []);

  const isAuthenticated = useCallback(() => !!localStorage.getItem("token"), []);

  const initAuth = useCallback(() => {
    const token = localStorage.getItem("token");
    if (token) setAuthToken(token);
  }, []);

  return { login, logout, isAuthenticated, initAuth };
}
