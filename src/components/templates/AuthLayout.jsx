import React, { useContext } from "react";
import { DarkMode } from "../../context/DarkModeContext";
const AuthLayout = ({ children }) => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-100 ${isDarkMode && "bg-slate-700"}`}>
      <div className="w-full max-w-md bg-white  shadow-md rounded-lg p-6">{children}</div>
    </div>
  );
};

export default AuthLayout;
