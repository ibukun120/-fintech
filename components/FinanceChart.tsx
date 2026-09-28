"use client";

import { Filter, ChevronDown } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { analytics } from "@/data/mock";

type CustomTooltipProps = {
  active?: boolean;
  payload?: ReadonlyArray<{
    dataKey?: string | number;
    value?: number | string;
  }>;
  label?: string | number;
};

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;
  const income = payload.find((p) => p.dataKey === "income")?.value;
  const expenses = payload.find((p) => p.dataKey === "expenses")?.value;

  return (
    <div className="min-w-[190px] rounded-xl border border-border bg-surface p-3 shadow-lg">
      <p className="mb-2 text-sm font-semibold text-ink-900">{label} 2025</p>
      <div className="flex divide-x divide-border">
        <div className="flex-1 pr-3">
          <p className="text-xs text-ink-500">Income</p>
          <p className="mt-0.5 text-sm font-semibold text-ink-900">${income}</p>
        </div>
        <div className="flex-1 pl-3">
          <p className="text-xs text-ink-500">Expenses</p>
          <p className="mt-0.5 text-sm font-semibold text-ink-900">${expenses}</p>
        </div>
      </div>
    </div>
  );
}

export default function FinanceChart() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-ink-900">Finance Analytics</h2>
          <p className="mt-0.5 text-xs text-ink-500">Short subtitle</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-ink-700">
            Yearly
            <ChevronDown size={15} className="text-ink-500" />
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-ink-700">
            <Filter size={15} className="text-ink-500" />
            Filter
          </button>
        </div>
      </div>

      <div className="mt-4 h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={analytics}
            margin={{ top: 10, right: 8, left: -8, bottom: 0 }}
            barGap={4}
          >
            <CartesianGrid vertical={false} strokeDasharray="4 6" stroke="#E7E9EF" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8A8FA3", fontSize: 12 }}
            />
            <YAxis
              domain={[0, 2000]}
              ticks={[0, 100, 200, 400, 600, 800, 1000, 2000]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8A8FA3", fontSize: 12 }}
              tickFormatter={(v) => `$${v}`}
            />
            <Tooltip
              cursor={false}
              content={(props) => <CustomTooltip {...(props as unknown as CustomTooltipProps)} />}
            />
            <Bar dataKey="income" radius={[6, 6, 6, 6]} maxBarSize={10}>
              {analytics.map((entry, i) => (
                <Cell key={`income-${i}`} fill={entry.highlight ? "#F4801F" : "#3A3F52"} />
              ))}
            </Bar>
            <Bar dataKey="expenses" radius={[6, 6, 6, 6]} maxBarSize={10}>
              {analytics.map((entry, i) => (
                <Cell key={`expenses-${i}`} fill={entry.highlight ? "#FBC796" : "#D8DAE2"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
