import { useState } from "react";

export default function Navbar() {
  const [tasks] = useState<number>(7);
  const currentDate: string = new Date().toDateString();

  return (
    <header className="bg-[#111417] text-white p-5 px-5 mb-10 flex items-center justify-between">
      {/* Logo and subtitle */}

      <div>
        <h1 className="text-2xl font-medium mb-1">Productivity Hub</h1>
        <p className="text-gray-300 text-sm">Stay focused and organized</p>
      </div>

      {/* Text and theme toggle */}
      <div className="flex items-center space-x-3 text-sm">
        <section className="text-[#7A828E]">
          <p>{currentDate}</p>
          <p className={`${tasks > 0 ? "text-green-500" : "text-red-500"}`}>
            {tasks} {tasks > 0 ? "tasks" : "task"} remaining
          </p>
        </section>
      </div>
    </header>
  );
}
