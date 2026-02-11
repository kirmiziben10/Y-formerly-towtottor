import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";
import "./index.css";
import Sidebar from "./components/Sidebar";

export default function Profile() {
     const { theme, setTheme } = useContext(ThemeContext);

  function manageTheme() {
    theme === "dark" ? setTheme("") : setTheme("dark");
  }
  return (
    <div
      className={
        "bg-zinc-50 dark:bg-black text-black dark:text-white flex justify-center min-h-screen w-full transition-colors duration-300 " +
        theme
      }
    >
      <div className="w-316.25 flex flex-row min-h-screen">
        <Sidebar />
        <h1>Profile</h1>
      </div>

      {/*dark-mode toggle*/}
      <div className="bg-zinc-300 dark:bg-zinc-700 top-2 right-2 absolute flex place-items-center rounded p-1">
        <button className="p-1 rounded hover:bg-zinc-400" onClick={manageTheme}>
          {theme === "dark" ? (
            <Sun color="white" size={24} />
          ) : (
            <Moon color="black" size={24} />
          )}
        </button>
      </div>
    </div>
  )
}