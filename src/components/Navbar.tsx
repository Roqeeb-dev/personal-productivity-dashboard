import { useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "dark" | "light";

export default function Navbar() {
  const [tasks, setTasks] = useState<number>(7);
  const [theme, setTheme] = useState<Theme>("light");
  const currentDate: string = new Date().toDateString();

  function toggleTheme() {
    setTheme((prev: Theme) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <header className="bg-[#111417] text-white p-5 px-5 mb-10 flex items-center justify-between">
      {/* Logo and subtitle */}

      <div>
        <h1 className="text-3xl font-bold mb-1">Productivity Hub</h1>
        <p className="text-gray-300 text-sm">Stay focused and organized</p>
      </div>

      {/* Text and theme toggle */}
      <div className="flex items-center space-x-3">
        <section className="text-[#7A828E]">
          <p>{currentDate}</p>
          <p className={tasks > 0 ? "text-green-500" : "text-red-500"}>
            {tasks} {tasks > 0 ? "tasks" : "task"} remaining
          </p>
        </section>

        <button className="bg-[#0F1F18] p-2 rounded-md" onClick={toggleTheme}>
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
}
