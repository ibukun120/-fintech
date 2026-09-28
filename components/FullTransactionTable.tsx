"use client";

import {  Filter, MoreHorizontal, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Alltransactions } from "@/data/mock";

const columns = [
  "Transaction",
  "Date",
  "Category",
  "Amount",
  "Status",
  "Action",
];
const filterOptions = [
  "All",
  "transfer",
  "deposit",
  "withdrawal",
  "card payment",
  "airtime",
  "bill payment",
];

export default function FullTransactionTable() {
  const [selectedId, setSelectedId] = useState(Alltransactions[0]?.id ?? "");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState("");

  const visibleTransactions = useMemo(() => {
    const query = search.toLowerCase().trim();

    return Alltransactions.filter((transaction) => {
      const matchesFilter =
        activeFilter === "All" || transaction.type === activeFilter;

      const matchesSearch =
        !query ||
        transaction.description.toLowerCase().includes(query) ||
        transaction.reference.toLowerCase().includes(query) ||
        transaction.recipient.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  useEffect(() => {
    if (!visibleTransactions.some((transaction) => transaction.id === selectedId)) {
      setSelectedId(visibleTransactions[0]?.id ?? "");
    }
  }, [selectedId, visibleTransactions]);

  const selectedTransaction = useMemo(
    () =>
      Alltransactions.find((transaction) => transaction.id === selectedId) ??
      Alltransactions[0],
    [selectedId],
  );

  const handleFilterClick = (option: string) => {
    setActiveFilter(option);
    setShowFilters(false);
  };
  return (
    <div className="flex flex-col md:flex-row gap-6 ">
      <div className="relative rounded-2xl border border-border bg-surface p-5 shadow-soft flex-1">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-[15px] font-semibold text-ink-900">
              Transactions History
            </h2>
            <p className="mt-0.5 text-xs text-ink-500">Short subtitle</p>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-3">
            <label className="flex min-w-[180px] items-center gap-2 rounded-lg border border-border bg-canvas px-3 py-2 text-sm text-ink-600 shadow-sm">
              <Search size={15} className="text-ink-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search transactions"
                className="w-full bg-transparent outline-none placeholder:text-ink-400"
              />
            </label>

            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-ink-700 transition-all duration-300 hover:bg-gray-200"
              >
                <Filter size={15} className="text-ink-500" />
                {activeFilter}
              </button>

              {showFilters && (
                <div className="absolute right-0 top-12 z-20 w-48 rounded-xl border border-border bg-white p-2 shadow-lg">
                  {filterOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleFilterClick(option)}
                      className={`w-full rounded-lg px-3 py-2 text-left text-sm capitalize transition hover:bg-gray-100 ${
                        activeFilter === option ? "bg-black text-white" : "text-ink-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto scrollbar-thin">
          {visibleTransactions.length === 0 ? (
            <div className="flex min-h-[180px] items-center justify-center rounded-xl border border-dashed border-border bg-canvas px-4 text-center">
              <p className="text-sm text-ink-500">
                No transactions available for “{search || activeFilter}”.
              </p>
            </div>
          ) : (
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-y border-border text-xs text-ink-500">
                  <th className="w-10 py-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-ink-400"
                    />
                  </th>
                  {columns.map((col) => (
                    <th key={col} className="py-3 pr-4 font-bold tracking-wider">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleTransactions.map((t) => (
                  <tr
                    key={t.id}
                    onClick={() => setSelectedId(t.id)}
                    className={`cursor-pointer border-b border-border last:border-0 transition-colors hover:bg-canvas ${
                      selectedId === t.id ? "bg-canvas/80" : ""
                    }`}
                  >
                    <td className="py-4">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-ink-400"
                      />
                    </td>
                    <td className="py-4 pr-4 text-sm font-medium text-ink-900">
                      {t.recipient}
                    </td>
                    <td className="py-4 pr-4 text-sm text-ink-500">
                      {new Date(t.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-4 pr-4 text-sm text-ink-500">{t.type}</td>
                    <td className="py-4 pr-4 text-sm text-ink-900">{t.amount}</td>
                    <td className="py-4 pr-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                        <span
                          className={
                            t.status === "successful"
                              ? "h-1.5 w-1.5 rounded-full bg-green-400"
                              : t.status === "failed"
                                ? "h-1.5 w-1.5 rounded-full bg-red-600"
                                : "h-1.5 w-1.5 rounded-full bg-yellow-400"
                          }
                        />
                        {t.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button
                        aria-label="Row actions"
                        className="text-ink-400 hover:text-ink-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* details card */}
      {selectedTransaction && (
        <div className=" w-[min(420px,calc(100%-2rem))] rounded-2xl border border-border bg-surface p-5 shadow-2xl shadow-ink-900/10">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink-500">
                Selected transaction
              </p>
              <h3 className="mt-1 text-xl font-semibold text-ink-900">
                {selectedTransaction.recipient}
              </h3>
            </div>
            <span className="rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-brand">
              {selectedTransaction.currency}
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-canvas p-4">
              <p className="text-xs text-ink-500">Reference</p>
              <p className="mt-1 text-sm font-medium text-ink-900">
                {selectedTransaction.reference}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-canvas p-4">
              <p className="text-xs text-ink-500">Type</p>
              <p className="mt-1 text-sm font-medium capitalize text-ink-900">
                {selectedTransaction.type}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-canvas p-4">
              <p className="text-xs text-ink-500">Amount</p>
              <p className="mt-1 text-sm font-medium text-ink-900">
                {selectedTransaction.amount}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-canvas p-4">
              <p className="text-xs text-ink-500">Status</p>
              <p className="mt-1 text-sm font-medium capitalize text-ink-900">
                {selectedTransaction.status}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-canvas p-4 md:col-span-2">
              <p className="text-xs text-ink-500">Description</p>
              <p className="mt-1 text-sm text-ink-900">
                {selectedTransaction.description}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-canvas p-4 md:col-span-2">
              <p className="text-xs text-ink-500">Date</p>
              <p className="mt-1 text-sm text-ink-900">
                {new Date(selectedTransaction.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
