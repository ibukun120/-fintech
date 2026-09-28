import { MoreHorizontal } from "lucide-react";

export default function GoalsWidget() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-ink-900">Goals</h2>
          <p className="mt-0.5 text-xs text-ink-500">Short subtitle</p>
        </div>
        <button aria-label="More options" className="text-ink-400 hover:text-ink-700">
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}
