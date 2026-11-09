"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { PROFILE_DATA } from "../lib/data";
import { TechIcon, LinkedInIcon } from "../lib/icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="max-w-[1180px] mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-[var(--mut)]">
        <Link
          href="#home"
          className="font-bold tracking-[0.18em] text-[15px] flex items-center gap-2 text-[var(--fg)] hover:opacity-90 transition-opacity"
        >
          <span
            className="w-[9px] h-[9px] rounded-full bg-[var(--acc)] shadow-[0_0_14px_var(--acc)]"
            aria-hidden="true"
          />
          AFRIZA
        </Link>

        <div>© 2026 {PROFILE_DATA.name}</div>

        <div className="flex items-center gap-2">
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:bg-[var(--acc)] hover:text-[var(--acc-ink)] hover:border-[var(--acc)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
          >
            <span className="w-4 h-4 flex items-center justify-center">
              <TechIcon name="GitHub" />
            </span>
          </a>

          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:bg-[var(--acc)] hover:text-[var(--acc-ink)] hover:border-[var(--acc)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PROFILE_DATA.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:bg-[var(--acc)] hover:text-[var(--acc-ink)] hover:border-[var(--acc)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:bg-[var(--acc)] hover:text-[var(--acc-ink)] hover:border-[var(--acc)] hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)] cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
