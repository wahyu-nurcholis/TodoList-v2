const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-100 dark:text-white text-black dark:bg-slate-700">
    <div className="max-w-4xl mx-auto p-4">{children}</div>
  </div>
);

export default MainLayout;
