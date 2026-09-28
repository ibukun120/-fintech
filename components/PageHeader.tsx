"use client";

import { Calendar, ChevronDown, Upload } from "lucide-react";

export default function PageHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-ink-900">Good Morning, Tuukay!</h1>
        <p className="mt-1 text-sm text-ink-500">Welcome to your Dashboard</p>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-ink-700 shadow-soft">
          Daily
          <ChevronDown size={16} className="text-ink-500" />
        </button>
        <button className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-ink-700 shadow-soft">
          <Calendar size={16} className="text-ink-500" />
          16 January 2025
        </button>
        <button className="flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-brand/90">
          <Upload size={16} />
          Export
        </button>
      </div>
    </div>
  );
}
