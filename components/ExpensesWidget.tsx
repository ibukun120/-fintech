import { MoreHorizontal } from "lucide-react";
import { expenseSummary } from "@/data/mock";

export default function ExpensesWidget() {
  const total = expenseSummary.breakdown.reduce((sum, b) => sum + b.value, 0);

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-ink-900">All Expenses</h2>
          <p className="mt-0.5 text-xs text-ink-500">Short subtitle</p>
        </div>
        <button aria-label="More options" className="text-ink-400 hover:text-ink-700">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <p className="mt-4 text-xs text-ink-500">Total</p>
      <p className="mt-1 text-2xl font-bold text-ink-900">{expenseSummary.total}</p>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div>
          <p className="text-xs text-ink-500">Daily</p>
          <p className="mt-0.5 text-[15px] font-semibold text-ink-900">
            {expenseSummary.daily}
          </p>
        </div>
        <div>
          <p className="text-xs text-ink-500">Weekly</p>
          <p className="mt-0.5 text-[15px] font-semibold text-ink-900">
            {expenseSummary.weekly}
          </p>
        </div>
        <div>
          <p className="text-xs text-ink-500">Monthly</p>
          <p className="mt-0.5 text-[15px] font-semibold text-ink-900">
            {expenseSummary.monthly}
          </p>
        </div>
      </div>

      <div className="mt-4 flex h-2.5 w-full overflow-hidden rounded-full">
        {expenseSummary.breakdown.map((b) => (
          <div
            key={b.label}
            style={{ width: `${(b.value / total) * 100}%`, backgroundColor: b.color }}
          />
        ))}
      </div>

      <ul className="mt-4 space-y-2.5">
        {expenseSummary.breakdown.map((b) => (
          <li key={b.label} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-ink-700">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: b.color }}
              />
              {b.label}
            </span>
            <span className="font-medium text-ink-900">{b.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
