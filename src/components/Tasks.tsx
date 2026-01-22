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

  function showActiveTasks() {
    setTasks((prev) => prev.filter((t) => t.status === "active"));
  }

  function showCompletedTasks() {
    setTasks((prev) => prev.filter((t) => t.status === "completed"));
  }

  function showAllTasks() {
    return tasks;
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

  function markAsCompleted(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: "completed" } : task,
      ),
    );
  }

  return (
    <main className="rounded-3xl bg-gradient-to-br from-[#14181C] to-[#0E1114] px-8 py-6 text-white shadow-xl">
      {/* Header */}
      <h1 className="text-2xl font-semibold tracking-tight">Task Manager</h1>

      <p className="mt-2 flex items-center gap-2 text-sm text-gray-400">
        <span>0 active</span>
        <span className="h-1 w-1 rounded-full bg-gray-500" />
        <span>0 completed</span>
      </p>

      {/* Tabs */}
      <div className="mt-6 flex overflow-hidden rounded-xl border border-white/5 bg-[#0B0E10] text-sm font-medium text-[#A1A8B3]">
        {[
          { text: "All", action: showAllTasks },
          { text: "Active", action: showActiveTasks },
          { text: "Completed", action: showCompletedTasks },
        ].map((tab) => (
          <button
            key={tab.text}
            onClick={tab.action}
            className="flex-1 py-3 transition hover:bg-black/40 hover:text-white"
          >
            {tab.text}
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
            className="flex items-center justify-between gap-4 rounded-xl border border-green-500/10 bg-black/40 p-4 transition hover:border-green-500/30"
          >
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
            <div>
              <p
                className={`flex-1 text-xl font-medium ${
                  task.status === "completed"
                    ? "line-through text-gray-500"
                    : ""
                }`}
              >
                {task.task}
              </p>
              <p className="text-green-500 text-xs uppercase">{task.status}</p>
            </div>

            {!(task.status === "completed") && (
              <button
                onClick={() => markAsCompleted(task.id)}
                className="text-xs text-green-600 p-1 border rounded-3xl hover:bg-gray-700"
              >
                Mark as completed
              </button>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
