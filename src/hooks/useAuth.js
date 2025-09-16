import { useCallback } from "react";
import { api, setAuthToken } from "../utils/api";

export function useAuth() {
  const login = useCallback(async (username, password) => {
    try {
      const res = await api.post("/auth/login", { username, password });
      const { token } = res.data;
      if (token) {
        localStorage.setItem("token", token);
        setAuthToken(token);
        return { ok: true };
      }
      return { ok: false, message: "No token received" };
    } catch (err) {
      console.error(err?.response?.data || err.message);
      return { ok: false, message: err?.response?.data || err.message };
    }
  }, []);

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
