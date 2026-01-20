import { Plus } from "lucide-react";
import { useState } from "react";

interface Task {
  id: number;
  task: string;
  priority: "high" | "med" | "low";
  status: "active" | "completed" | "pending";
}

const defaultTask: Task = {
  id: 0,
  task: "Hello and Welcome",
  priority: "med",
  status: "pending",
};

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([defaultTask]);
  const [taskText, setTaskText] = useState("");

  function showActiveTasks(tasks: Task[]) {
    return tasks.filter((t) => t.status === "active");
  }

  function showCompletedTasks(tasks: Task[]) {
    return tasks.filter((t) => t.status === "completed");
  }

  function addNewTask(e: React.FormEvent) {
    e.preventDefault();
    if (!taskText.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 0,
        task: taskText,
        priority: "high",
        status: "pending",
      },
    ]);

    setTaskText("");
  }

  return (
    <main className="rounded-3xl bg-gradient-to-br from-[#14181C] to-[#0E1114] px-8 py-6 text-white shadow-xl">
      {/* Header */}
      <h1 className="text-2xl font-semibold tracking-tight">Task Manager</h1>

      <p className="mt-2 flex items-center gap-2 text-sm text-gray-400">
        <span>{showActiveTasks(tasks).length} active</span>
        <span className="h-1 w-1 rounded-full bg-gray-500" />
        <span>{showCompletedTasks(tasks).length} completed</span>
      </p>

      {/* Tabs */}
      <div className="mt-6 flex overflow-hidden rounded-xl border border-white/5 bg-[#0B0E10] text-sm font-medium text-[#A1A8B3]">
        {["All", "Active", "Completed"].map((tab) => (
          <button
            key={tab}
            className="flex-1 py-3 transition hover:bg-black/40 hover:text-white"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Add task */}
      <form onSubmit={addNewTask} className="mt-5 flex items-center gap-2">
        <input
          type="text"
          className="flex-1 rounded-xl bg-[#15191D] px-4 py-3 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500/40 focus:bg-black"
          placeholder="Add a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />

        <button
          type="submit"
          className="flex items-center gap-1 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-green-600"
        >
          <Plus size={16} />
          Add
        </button>
      </form>

      {/* Task list */}
      <section className="mt-4 space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-4 rounded-xl border border-green-500/10 bg-black/40 px-4 py-3 transition hover:border-green-500/30"
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              className="
                h-5 w-5 cursor-pointer appearance-none rounded-md
                border border-green-500/40 bg-black
                checked:border-green-500 checked:bg-green-500
                checked:bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22black%22 stroke-width=%223%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpolyline points=%2220 6 9 17 4 12%22/%3E%3C/svg%3E')]
                checked:bg-center checked:bg-no-repeat checked:bg-[length:14px_14px]
                transition
              "
            />

            {/* Priority */}
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-medium uppercase tracking-wide
                ${
                  task.priority === "low"
                    ? "bg-red-500/10 text-red-400"
                    : task.priority === "med"
                      ? "bg-yellow-500/10 text-yellow-400"
                      : "bg-green-500/10 text-green-400"
                }`}
            >
              {task.priority}
            </span>

            {/* Task text */}
            <p
              className={`flex-1 text-sm text-gray-300 ${
                task.status === "completed" ? "line-through text-gray-500" : ""
              }`}
            >
              {task.task}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
