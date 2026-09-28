"use client";

import { ArrowUpDown, Filter, MoreHorizontal } from "lucide-react";
import { transactions } from "@/data/mock";

const columns = ["Transaction", "Date", "Category", "Amount", "Status", "Action"];

export default function TransactionTable() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-ink-900">Recent Transactions</h2>
          <p className="mt-0.5 text-xs text-ink-500">Short subtitle</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-ink-700">
            <ArrowUpDown size={15} className="text-ink-500" />
            Short
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-ink-700">
            <Filter size={15} className="text-ink-500" />
            Filter
          </button>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto scrollbar-thin">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-y border-border text-xs text-ink-500">
              <th className="w-10 py-3">
                <input type="checkbox" className="h-4 w-4 rounded border-ink-400" />
              </th>
              {columns.map((col) => (
                <th key={col} className="py-3 pr-4 font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.name + t.date} className="border-b border-border last:border-0">
                <td className="py-4">
                  <input type="checkbox" className="h-4 w-4 rounded border-ink-400" />
                </td>
                <td className="py-4 pr-4 text-sm font-medium text-ink-900">{t.name}</td>
                <td className="py-4 pr-4 text-sm text-ink-500">{t.date}</td>
                <td className="py-4 pr-4 text-sm text-ink-500">{t.category}</td>
                <td className="py-4 pr-4 text-sm text-ink-900">{t.amount}</td>
                <td className="py-4 pr-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    {t.status}
                  </span>
                </td>
                <td className="py-4">
                  <button aria-label="Row actions" className="text-ink-400 hover:text-ink-700">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
