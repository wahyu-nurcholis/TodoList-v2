import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import Button from "../atoms/Button";
import { LuLogOut } from "react-icons/lu";

const Navbar = ({ onLogout }) => {
  const { dark, setDark } = useContext(DarkModeContext);

  return (
    <nav className="flex items-center justify-between p-4 border-b dark:border-gray-700">
      <h1 className="text-lg font-bold">Todo App</h1>
      <div className="flex items-center gap-2">
        <Button onClick={() => setDark(!dark)} className="bg-gray-200 dark:bg-gray-700">
          {dark ? "Light" : "Dark"}
        </Button>
        <Button onClick={onLogout} className="text-white flex items-center gap-2 text-sm">
          logout <LuLogOut />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
