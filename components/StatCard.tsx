import { ArrowUp, MoreHorizontal } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string;
  delta: string;
  caption: string;
};

export default function StatCard({ label, value, delta, caption }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-semibold text-ink-900">{label}</span>
        <button aria-label="More options" className="text-ink-400 hover:text-ink-700">
          <MoreHorizontal size={18} />
        </button>
      </div>
      <div className="mt-4 text-[28px] font-bold text-ink-900">{value}</div>
      <div className="mt-2 flex items-center gap-1 text-sm">
        <span className="flex items-center gap-0.5 font-medium text-success">
          <ArrowUp size={14} />
          {delta}
        </span>
        <span className="text-ink-500">{caption}</span>
      </div>
    </div>
  );
}
