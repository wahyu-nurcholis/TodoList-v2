import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/pages/Login";
import TodoPage from "./components/pages/Todo";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { isAuthenticated, initAuth } = useAuth();
  // init token if present
  initAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={isAuthenticated() ? <TodoPage /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/todo" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
