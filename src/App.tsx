import { useState } from "react";
import "./index.css";
import { Sun, Moon } from "lucide-react";

function App() {
  const [theme, setTheme] = useState("");
  function manageTheme() {
    theme === "dark" ? setTheme("") : setTheme("dark");
  }

  return (
    <div
      className={
        "bg-zinc-50 dark:bg-zinc-950 grid place-items-center h-screen w-f " +
        theme
      }
    >
      <div className="bg-zinc-300 dark:bg-zinc-700 flex place-items-center rounded p-1">
          <button className="p-1 rounded hover:bg-zinc-400" onClick={manageTheme}>
            {theme === "dark" ? (
              <Sun color="white" size={24} />
            ) : (
              <Moon color="black" size={24} />
            )}
          </button>
      </div>
    </div>
  );
}

export default App;
