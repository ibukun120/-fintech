"use client";

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { card } from "@/data/mock";

export default function CardWidget() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-ink-900">
            {card.label}
          </h2>

          <p className="mt-0.5 text-xs text-ink-500">
            Your active virtual card
          </p>
        </div>

        <button
          aria-label="More options"
          className="text-ink-400 transition-colors hover:text-ink-700"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Card */}
      <div
        className="mt-4 cursor-pointer [perspective:1000px]"
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        <div
          className={`relative h-[210px] w-full transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* ================= FRONT ================= */}
          <div
            className="
              absolute inset-0 overflow-hidden rounded-[22px]
              bg-gradient-to-br from-[#29B4D8] via-[#4C6FD9] to-[#A13FB5]
              p-6 text-white shadow-lg
              [backface-visibility:hidden]
            "
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-white/10" />

            <div className="pointer-events-none absolute -bottom-24 left-20 h-48 w-48 rounded-full bg-purple-500/20 blur-2xl" />

            <div className="pointer-events-none absolute right-0 top-24 h-24 w-40 rounded-full bg-blue-300/10 blur-xl" />

            {/* Top row */}
            <div className="relative z-10 flex items-start justify-between">
              <p className="text-[24px] font-medium tracking-tight">
                Finaci
              </p>

              <p className="text-[25px] font-bold italic tracking-tight">
                VISA
              </p>
            </div>

            {/* Chip */}
            <div
              className="
                relative z-10 mt-5 flex h-11 w-[58px]
                items-center justify-center overflow-hidden
                rounded-lg bg-gradient-to-br
                from-yellow-200 via-yellow-400 to-yellow-500
                shadow-sm
              "
            >
              <div className="absolute h-7 w-10 rounded-md border border-yellow-700/40" />

              <div className="absolute h-8 w-[1px] bg-yellow-700/30" />

              <div className="absolute h-[1px] w-9 bg-yellow-700/30" />

              <div className="absolute left-2 h-5 w-2 rounded-full border-r border-yellow-700/30" />

              <div className="absolute right-2 h-5 w-2 rounded-full border-l border-yellow-700/30" />
            </div>

            {/* Card number */}
            <p className="relative z-10 mt-4 text-[20px] font-medium tracking-[4px]">
              {isHidden? "**** **** **** 2345" : "1112 6988 5830 2345"}
            </p>

            {/* Bottom information */}
            <div className="relative z-10 mt-5 flex items-end justify-between">
              <div>
                <p className="text-[10px] text-white/75">
                  Noman Manzoor
                </p>

                <p className="mt-1 text-[15px] font-medium">
                  Noman Manzoor
                </p>
              </div>

              <div>
                <p className="text-[10px] text-white/75">
                  EXPIRY DATE
                </p>

                <p className="mt-1 text-[15px] font-medium">
                  02/30
                </p>
              </div>
            </div>
          </div>

          {/* ================= BACK ================= */}
          <div
            className="
              absolute inset-0 overflow-hidden rounded-[22px]
              bg-gradient-to-br from-[#29B4D8] via-[#4C6FD9] to-[#A13FB5]
              text-white shadow-lg
              [backface-visibility:hidden]
              [transform:rotateY(180deg)]
            "
          >
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10" />

            <div className="pointer-events-none absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-purple-500/20 blur-2xl" />

            {/* Visa */}
            <div className="relative flex justify-end px-6 pt-5">
              <p className="text-[25px] font-bold italic">
                VISA
              </p>
            </div>

            {/* Magnetic stripe */}
            <div className="relative mt-4 h-11 w-full bg-black/75" />

            {/* Signature / CVV */}
            <div className="relative mx-6 mt-5 flex items-center gap-3">
              <div className="flex h-8 flex-1 items-center bg-white/90 px-3">
                <div className="w-full border-b border-dashed border-gray-400" />
              </div>

              <div className="flex h-8 w-14 items-center justify-center rounded bg-white text-xs font-bold text-gray-800">
                {isHidden? "***" : "824"}
              </div>
            </div>

            {/* Back text */}
            <div className="relative mt-4 px-6">
              <p className="text-[9px] leading-relaxed text-white/70">
                This card is issued by Finaci. If found, please
                return it to the issuing institution. Use of this
                card is subject to the applicable terms and
                conditions.
              </p>
            </div>

            <div className="absolute bottom-4 left-6">
              <p className="text-[10px] tracking-wide text-white/60">
                finaci.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flip hint */}
      <div className="flex items-center justify-between">
        <p className="mt-2 text-center text-[10px] text-ink-400">
        Click card to view {isFlipped ? "front" : "back"}
      </p>

      <button 
      className="mt-2 text-center text-[10px] text-ink-400 cursor-pointer px-4 py-1 rounded-lg border border-amber-400"
      onClick={()=> setIsHidden(!isHidden)}>Show Card Details</button>

      </div>
      {/* Spending Limit */}
      <div className="mt-4">
        <p className="text-sm text-ink-500">
          Spending Limit
        </p>

        <p className="mt-1 text-2xl font-bold text-ink-900">
          {card.spendingLimit}{" "}
          <span className="text-sm font-normal text-ink-500">
            used from {card.totalLimit}
          </span>
        </p>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-canvas">
          <div
            className="h-full rounded-full bg-brand transition-all"
            style={{
              width: `${card.usedPercent}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}