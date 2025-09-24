import Button from "../atoms/Button";
import { LuLogOut } from "react-icons/lu";
import { GoMoon, GoSun } from "react-icons/go";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkModeContext";

const Navbar = ({ onLogout }) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <nav className="flex items-center justify-between p-4 border-b dark:border-gray-700">
      <h1 className="text-lg font-bold">Todo App</h1>
      <div className="flex items-center gap-2">
        <Button className="px-2 mx-5 rounded-2xl" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <GoSun /> : <GoMoon />}
        </Button>
        <Button onClick={onLogout} className="flex items-center gap-2 text-sm">
          <LuLogOut />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
