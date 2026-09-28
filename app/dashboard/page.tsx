"use client";

import { useState } from "react";
import CardWidget from "@/components/CardWidget";
import ExpensesWidget from "@/components/ExpensesWidget";
import FinanceChart from "@/components/FinanceChart";
import GoalsWidget from "@/components/GoalsWidget";
import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import TransactionTable from "@/components/TransactionTable";

const currencyOptions = ["NGN", "USD", "GBP", "EUR"] as const;
type CurrencyCode = (typeof currencyOptions)[number];

const currencyMeta: Record<
  CurrencyCode,
  { code: CurrencyCode; locale: string; rate: number }
> = {
  NGN: { code: "NGN", locale: "en-NG", rate: 1500 },
  USD: { code: "USD", locale: "en-US", rate: 1 },
  GBP: { code: "GBP", locale: "en-GB", rate: 0.79 },
  EUR: { code: "EUR", locale: "en-IE", rate: 0.93 },
};

const formatCurrency = (amount: number, currency: CurrencyCode) => {
  const meta = currencyMeta[currency];

  return new Intl.NumberFormat(meta.locale, {
    style: "currency",
    currency: meta.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount * meta.rate);
};

export default function DashboardPage() {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");

  const accountBalance = 12645;
  const incomeSummary = 2645;
  const spendingSummary = 1895;

  const summaryCards = [
    {
      label: "Account Balance",
      value: formatCurrency(accountBalance, currency),
      delta: "12%",
      caption: "vs Last month",
    },
    {
      label: "Income Summary",
      value: formatCurrency(incomeSummary, currency),
      delta: "12%",
      caption: "vs Last month",
    },
    {
      label: "Spending Summary",
      value: formatCurrency(spendingSummary, currency),
      delta: "12%",
      caption: "vs Last month",
    },
  ];

  return (
    <div className="min-h-screen bg-canvas">
      <main className="mx-auto max-w-[1600px] px-8 py-6">
        <PageHeader />

        <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-lg font-semibold text-ink-900">Available Balance</h1>
                <label className="relative">
                  <span className="sr-only">Select currency</span>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                    className="appearance-none rounded-full border border-border bg-surface px-3 py-1.5 pr-8 text-sm font-medium text-ink-800 shadow-soft outline-none transition focus:border-brand"
                  >
                    {currencyOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-ink-500">
                    ▾
                  </span>
                </label>
              </div>
              <p className="mt-2 text-4xl font-bold text-ink-900">
                {formatCurrency(accountBalance, currency)}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {summaryCards.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>

            {/* <FinanceChart /> */}
            <TransactionTable />
          </div>

          <div className="flex flex-col gap-5">
            <CardWidget />
            <ExpensesWidget />
            <GoalsWidget />
          </div>
        </div>
      </main>
    </div>
  );
}
