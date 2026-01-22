import { Plus, Check } from "lucide-react";
import { useState, useEffect } from "react";

interface Task {
  id: number;
  task: string;
  priority: "high" | "med" | "low";
  status: "active" | "completed";
}

interface TasksProps {
  onStatsChange: (stats: { completed: number; active: number }) => void;
}

type Filter = "all" | "active" | "completed";

const defaultTask: Task = {
  id: Date.now(),
  task: "Hello and welcome 👋",
  priority: "med",
  status: "active",
};

export default function Tasks({ onStatsChange }: TasksProps) {
  const [tasks, setTasks] = useState<Task[]>([defaultTask]);
  const [taskText, setTaskText] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const activeTasks = tasks.filter((t) => t.status === "active").length;
  const completedTasks = tasks.filter((t) => t.status === "completed").length;

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  function addNewTask(e: React.FormEvent) {
    e.preventDefault();
    if (!taskText.trim()) return;

    setTasks((prev) => [
      {
        id: Date.now(),
        task: taskText.trim(),
        priority: "high",
        status: "active",
      },
      ...prev,
    ]);

    setTaskText("");
  }

  function markAsCompleted(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: "completed" } : task,
      ),
    );
  }

  useEffect(() => {
    const completed = tasks.filter((t) => t.status === "completed").length;
    const active = tasks.filter((t) => t.status === "active").length;

    onStatsChange({ completed, active });
  }, [tasks, onStatsChange]);

  return (
    <main className="rounded-3xl bg-gradient-to-br from-[#14181C] to-[#0E1114] px-8 py-6 text-white shadow-xl">
      {/* Header */}
      <h1 className="text-2xl font-semibold tracking-tight">Task Manager</h1>

      <p className="mt-2 flex items-center gap-2 text-sm text-gray-400">
        <span>{activeTasks} active</span>
        <span className="h-1 w-1 rounded-full bg-gray-500" />
        <span>{completedTasks} completed</span>
      </p>

      {/* Tabs */}
      <div className="mt-6 flex overflow-hidden rounded-xl border border-white/5 bg-[#0B0E10] text-sm font-medium">
        {(["all", "active", "completed"] as Filter[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`flex-1 py-3 transition
              ${
                filter === tab
                  ? "bg-black/60 text-white"
                  : "text-[#A1A8B3] hover:bg-black/40 hover:text-white"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Add task */}
      <form onSubmit={addNewTask} className="mt-5 flex items-center gap-2">
        <input
          type="text"
          className="flex-1 rounded-xl bg-[#15191D] px-4 py-3 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500/40"
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
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-4 rounded-xl border border-green-500/10 bg-black/40 p-4 transition hover:border-green-500/30"
          >
            {/* Priority */}
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium uppercase
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
            <div className="flex-1">
              <p
                className={`text-sm font-medium ${
                  task.status === "completed"
                    ? "line-through text-gray-500"
                    : "text-gray-100"
                }`}
              >
                {task.task}
              </p>
              <p className="mt-1 text-xs uppercase text-green-500/80">
                {task.status}
              </p>
            </div>

            {/* Action */}
            {task.status === "active" && (
              <button
                onClick={() => markAsCompleted(task.id)}
                className="flex items-center gap-1 rounded-full border border-green-500/30 px-3 py-1 text-xs text-green-400 transition hover:bg-green-500/10"
              >
                <Check size={12} />
                Done
              </button>
            )}
          </div>
        ))}

        {filteredTasks.length === 0 && (
          <p className="py-6 text-center text-sm text-gray-500">
            No tasks here 👀
          </p>
        )}
      </section>
    </main>
  );
}
