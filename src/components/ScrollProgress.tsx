"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress(Math.min(1, Math.max(0, window.scrollY / scrollHeight)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="sp"
      style={{
        transform: `scaleX(${progress})`,
        transformOrigin: "left",
      }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[70] bg-gradient-to-r from-[var(--acc)] to-[var(--blue)] pointer-events-none transition-transform duration-75 ease-out motion-reduce:hidden"
      aria-hidden="true"
    />
  );
}
