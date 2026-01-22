interface NavProps {
  completed: number;
  active: number;
}

export default function Navbar({ completed, active }: NavProps) {
  const currentDate: string = new Date().toDateString();
  const totalTasks = completed + active;

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
          <p
            className={`${totalTasks > 0 ? "text-green-500" : "text-red-500"}`}
          >
            {totalTasks} {totalTasks === 1 ? "task" : "tasks"} remaining
          </p>
        </section>
      </div>
    </header>
  );
}
