import { CheckCircle, Clock, FileText, TrendingUp } from "lucide-react";

interface DetailBoxesProps {
  completed: number;
  active: number;
  notes: number;
}

export default function DetailBoxes({
  completed,
  active,
  notes,
}: DetailBoxesProps) {
  const totalTasks = completed + active;

  const focusScore =
    totalTasks === 0 ? "0%" : `${Math.round((completed / totalTasks) * 100)}%`;

  const details = [
    {
      icon: CheckCircle,
      value: completed,
      label: "COMPLETED",
      delta: completed > 0 ? `+${completed}` : "—",
    },
    {
      icon: Clock,
      value: active,
      label: "ACTIVE",
      delta: active > 0 ? "Today" : "—",
    },
    {
      icon: FileText,
      value: notes,
      label: "NOTES",
      delta: notes > 0 ? `+${notes}` : "—",
    },
    {
      icon: TrendingUp,
      value: focusScore,
      label: "FOCUS SCORE",
      delta: totalTasks > 0 ? "Improving" : "—",
    },
  ];

  return (
    <div className="my-6 grid grid-cols-2 gap-4 px-4 lg:grid-cols-4">
      {details.map((detail, i) => {
        const Icon = detail.icon;

        return (
          <div
            key={i}
            className="relative h-[160px] rounded-3xl border border-[#1F242A]
            bg-gradient-to-br from-[#14181C] to-[#0E1114]
            p-5 text-white transition
            hover:border-[#16C784]/30"
          >
            {/* Delta */}
            <span className="absolute right-5 top-5 text-xs text-[#16C784]/80">
              {detail.delta}
            </span>

            {/* Icon */}
            <div className="mb-5 w-fit rounded-xl border border-[#163D2D] bg-[#0F1F1A] p-2.5">
              <Icon className="h-5 w-5 text-[#16C784]" />
            </div>

            {/* Value */}
            <p className="text-2xl font-semibold tracking-tight">
              {detail.value}
            </p>

            {/* Label */}
            <p className="mt-1 text-xs tracking-widest text-gray-400">
              {detail.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
