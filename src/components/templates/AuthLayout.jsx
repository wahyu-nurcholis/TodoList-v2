import React from "react";

const AuthLayout = ({ children }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
    <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">{children}</div>
  </div>
);

export default AuthLayout;
