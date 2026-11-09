"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.href.replace("#", ""))
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].href.replace("#", ""));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] backdrop-blur-xl bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] border-b border-[var(--line)]">
        <div className="max-w-[1180px] mx-auto px-6 h-[68px] flex items-center justify-between">
          <Link
            href="#home"
            onClick={() => setMobileOpen(false)}
            className="font-bold tracking-[0.16em] text-[15px] flex items-center gap-2.5 hover:opacity-90 transition-opacity"
          >
            <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-[var(--line)] bg-[var(--bg2)] flex items-center justify-center shrink-0">
              <Image
                src="/Logotitle.png"
                alt="Logo Afriza"
                fill
                sizes="28px"
                className="object-cover"
                priority
              />
            </div>
            <span>AFRIZA</span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[var(--fg)] bg-[var(--glass)]"
                      : "text-[var(--mut)] hover:text-[var(--fg)] hover:bg-[var(--glass)]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-[42px] h-[42px] rounded-xl border border-[var(--line)] bg-[var(--glass)] text-[var(--fg)] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Standalone Overlay covering full viewport with solid background) */}
      <nav
        className={`md:hidden fixed inset-0 z-40 bg-[var(--bg)] flex flex-col justify-between pt-[calc(76px+env(safe-area-inset-top,0px))] px-6 pb-10 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-semibold tracking-[-0.02em] py-3.5 border-b border-[var(--line)] transition-colors flex items-center justify-between ${
                  isActive ? "text-[var(--acc)]" : "text-[var(--fg)] hover:text-[var(--acc)]"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--acc)]" />
                )}
              </a>
            );
          })}
        </div>

        <div className="pt-6 border-t border-[var(--line)]">
          <p className="text-xs font-mono text-[var(--mut)] uppercase tracking-wider mb-2">Get in touch</p>
          <a
            href="mailto:afriza.dwi21@gmail.com"
            className="text-sm font-medium text-[var(--fg)] hover:text-[var(--acc)] transition-colors"
          >
            afriza.dwi21@gmail.com
          </a>
        </div>
      </nav>
    </>
  );
}
