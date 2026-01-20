import { Plus } from "lucide-react";
import { useState } from "react";

interface Task {
  id: number;
  task: string;
  priority: "high" | "med" | "low";
  status: "active" | "completed" | "pending";
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[] | []>([]);

  function showAllTasks(tasks: Array<Task>) {
    return tasks;
  }

  function showActiveTasks(tasks: Array<Task>) {
    return tasks.filter((t) => t.status === "active");
  }

  function showCompletedTasks(tasks: Array<Task>) {
    return tasks.filter((t) => t.status === "completed");
  }

  return (
    <main className="bg-gradient-to-br from-[#14181C] to-[#0E1114] text-white py-6 px-10 rounded-3xl">
      <h1 className="text-3xl font-bold">Task Manager</h1>
      <p className="text-gray-400 font-medium">4 active . 1 completed</p>

      {/* Tab switcher */}
      <div className="my-5 text-[#A1A8B3] flex items-center justify-between">
        <button
          onClick={() => {
            showAllTasks(tasks);
          }}
          className="hover:text-white hover:bg-[#0B0E10] flex-1 p-3 font-bold"
        >
          All
        </button>
        <button
          onClick={() => {
            showActiveTasks(tasks);
          }}
          className="hover:text-white hover:bg-[#0B0E10] flex-1 p-3 font-bold"
        >
          Active
        </button>
        <button
          onClick={() => {
            showActiveTasks(tasks);
          }}
          className="hover:text-white hover:bg-[#0B0E10] flex-1 p-3 font-bold"
        >
          Completed
        </button>
      </div>

      {/* Tasks addition input */}
      <form className="w-full flex items-center space-x-1">
        <input
          type="task"
          name="task"
          className="flex-1 bg-gray-700 p-2 text-sm focus:outline-none rounded-md"
          placeholder="Add a new task"
        />
        <select name="priority">
          <option value="">Low</option>
          <option value="">High</option>
          <option value="">Medium</option>
        </select>
        <button className="flex items-center p-3 bg-green-500 text-white text-md font-bold rounded-xl">
          <Plus />
          <span>Add</span>
        </button>
      </form>

      {/* Tasks list */}
      <section>
        {tasks.map((task) => (
          <div>
            <input type="checkbox" name="" id="" />
            <p>{task.priority}</p>
            <p>{task.task}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
