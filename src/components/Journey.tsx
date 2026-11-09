"use client";

import React, { useEffect, useRef, useState } from "react";
import { Reveal, TitleReveal } from "./Reveal";
import { JOURNEY_STEPS } from "../lib/data";

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, (viewportHeight * 0.75 - rect.top) / rect.height)
      );
      setLineProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-24 pb-12">
      <TitleReveal text="The path so far." className="mb-14" />

      <div ref={containerRef} className="relative max-w-[760px] ml-1">
        {/* Scroll-drawn vertical timeline line */}
        <div
          style={{
            transform: `scaleY(${lineProgress})`,
            transformOrigin: "top",
          }}
          className="absolute left-[11px] top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-[var(--acc)] via-[var(--acc)] to-[var(--line)] pointer-events-none transition-transform duration-150 ease-out motion-reduce:!scale-y-100"
          aria-hidden="true"
        />

        <div className="space-y-10">
          {JOURNEY_STEPS.map((step, index) => (
            <Reveal key={step.phase} delayMs={index * 80} variant="left">
              <div className="group relative pl-12">
                {/* Pop-in node with bounce effect */}
                <span
                  className="absolute left-[4px] top-1.5 w-[15px] h-[15px] rounded-full bg-[var(--bg)] border-2 border-[var(--acc)] transition-all duration-300 group-hover:bg-[var(--acc)] group-hover:shadow-[0_0_18px_var(--acc)]"
                  aria-hidden="true"
                />

                <small className="block font-mono text-[11px] font-medium text-[var(--acc)] tracking-[0.12em] uppercase mb-1">
                  {step.phase}
                </small>
                <h3 className="text-xl sm:text-[22px] font-semibold tracking-[-0.02em] text-[var(--fg)] mb-2 group-hover:text-[var(--acc)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[var(--mut)] text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
