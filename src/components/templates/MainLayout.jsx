import React from "react";

const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
    <div className="max-w-4xl mx-auto p-4">{children}</div>
  </div>
);

export default MainLayout;
