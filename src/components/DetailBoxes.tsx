import { CheckCircle, Clock, FileText, TrendingUp } from "lucide-react";

export default function DetailBoxes() {
  const details = [
    {
      icon: CheckCircle,
      count: 12,
      text: "COMPLETED",
      delta: "+3",
    },
    {
      icon: Clock,
      count: 5,
      text: "PENDING",
      delta: "Today",
    },
    {
      icon: FileText,
      count: 8,
      text: "NOTES",
      delta: "+2",
    },
    {
      icon: TrendingUp,
      count: "85%",
      text: "FOCUS SCORE",
      delta: "+5%",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 my-6">
      {details.map((detail, i) => {
        const Icon = detail.icon;

        return (
          <div
            key={i}
            className="relative h-[170px] rounded-3xl border border-[#1F242A]
            bg-gradient-to-br from-[#14181C] to-[#0E1114]
            p-6 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
          >
            {/* Top-right delta */}
            <span className="absolute top-5 right-6 text-xs text-[#16C784]">
              {detail.delta}
            </span>

            {/* Icon badge */}
            <div
              className="mb-6 w-fit rounded-xl p-2.5
              bg-[#0F1F1A] border border-[#163D2D]"
            >
              <Icon className="w-6 h-6 text-[#16C784]" />
            </div>

            {/* Value */}
            <p className="text-3xl font-semibold tracking-tight">
              {detail.count}
            </p>

            {/* Label */}
            <p className="mt-1 text-xs tracking-widest text-gray-400">
              {detail.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
