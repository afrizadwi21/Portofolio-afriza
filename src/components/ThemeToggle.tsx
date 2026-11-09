"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const current = resolvedTheme || theme || "dark";
    const nextTheme = current === "dark" ? "light" : "dark";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      "startViewTransition" in document &&
      !prefersReducedMotion
    ) {
      const x = e.clientX || window.innerWidth - 40;
      const y = e.clientY || 40;
      const r = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = (
        document as unknown as {
          startViewTransition: (cb: () => void) => {
            ready: Promise<void>;
          };
        }
      ).startViewTransition(() => {
        setTheme(nextTheme);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${r}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 700,
            easing: "cubic-bezier(.65,0,.25,1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    } else {
      document.documentElement.classList.add("theme-transition");
      setTheme(nextTheme);
      setTimeout(() => {
        document.documentElement.classList.remove("theme-transition");
      }, 500);
    }
  };

  if (!mounted) {
    return (
      <div
        className="w-[42px] h-[42px] rounded-xl border border-[var(--line)] bg-[var(--glass)]"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Ganti tema"
      className="w-[42px] h-[42px] rounded-xl border border-[var(--line)] bg-[var(--glass)] text-[var(--fg)] cursor-pointer flex items-center justify-center transition-all duration-300 hover:border-[var(--acc)] hover:text-[var(--acc)] hover:rotate-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
    >
      {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
    </button>
  );
}
