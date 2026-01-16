import { useState } from "react";

export default function Navbar() {
  const [tasks, setTasks] = useState<number>(0);
  const currentDate: string = new Date().toDateString();

  return (
    <header className="bg-black text-white p-3 px-5 flex items-center justify-between">
      {/* Logo and subtitle */}

      <div>
        <h1 className="text-2xl mb-2">Productivity Hub</h1>
        <p className="text-gray-400 text-xs">Stay focused and organized</p>
      </div>

      {/* Text and theme toggle */}
      <div className="flex items-center space-x-3">
        <section className="text-sm">
          <p>{currentDate}</p>
          <p>{tasks} tasks remaining</p>
        </section>

        <button>Theme toggle</button>
      </div>
    </header>
  );
}
