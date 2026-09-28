"use client";

import { Bell, ChevronDown, HelpCircle, Menu, Search, X } from "lucide-react";
import { navItemsDtails } from "@/data/mock";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Logo() {
  return (
    <Link href="/" className="cursor-pointer transition-all duration-300 hover:scale-105">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="11" cy="11" r="9" fill="#1FA971" />
        <circle cx="21" cy="11" r="9" fill="#F5B93F" />
        <circle cx="11" cy="21" r="9" fill="#2EC5CE" />
        <circle cx="21" cy="21" r="9" fill="#0E4B3E" />
      </svg>
    </Link>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("Dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-surface px-4 py-3 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 lg:gap-10">
          <Logo />

          <nav className="hidden items-center gap-6 lg:flex">
            {navItemsDtails.map((item) => (
              <Link
                href={item.link}
                key={item.TheType}
                onClick={() => setActive(item.TheType)}
                className={`relative pb-4 -mb-4 text-[15px] transition-all duration-300 hover:scale-105 ${
                  pathname === item.link || active === item.TheType
                    ? "font-bold text-gray-800"
                    : "font-medium text-gray-500 hover:text-ink-900"
                }`}
              >
                <span className="flex items-center gap-1">
                  {item.TheType}
                  {item.TheType === "More" && <ChevronDown size={16} />}
                </span>
                {(pathname === item.link || active === item.TheType) && (
                  <span className="absolute inset-x-0 -bottom-[1px] h-[2px] rounded-full bg-brand" />
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-700 transition hover:bg-canvas sm:h-10 sm:w-10"
          >
            <Search size={18} />
          </button>
          <button
            aria-label="Help"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border text-ink-700 transition hover:bg-canvas sm:flex sm:h-10 sm:w-10"
          >
            <HelpCircle size={18} />
          </button>
          <button
            aria-label="Notifications"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border text-ink-700 transition hover:bg-canvas sm:flex sm:h-10 sm:w-10"
          >
            <Bell size={18} />
          </button>
          <div className="ml-1 h-8 w-8 overflow-hidden rounded-full bg-ink-400 sm:h-9 sm:w-9">
            <img
              src="/images/womiloju.jpeg"
              alt="Womiloju"
              className="h-full w-full object-cover"
            />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-700 transition hover:bg-canvas lg:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="mt-4 flex flex-col gap-2 border-t border-border pt-4 lg:hidden">
          {navItemsDtails.map((item) => (
            <Link
              href={item.link}
              key={item.TheType}
              onClick={() => {
                setActive(item.TheType);
                setIsMenuOpen(false);
              }}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                pathname === item.link || active === item.TheType
                  ? "bg-brand/10 text-brand"
                  : "text-gray-600 hover:bg-canvas hover:text-ink-900"
              }`}
            >
              <span className="flex items-center gap-1">
                {item.TheType}
                {item.TheType === "More" && <ChevronDown size={16} />}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
