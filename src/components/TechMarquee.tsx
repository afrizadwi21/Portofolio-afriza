"use client";

import React, { useEffect, useRef } from "react";
import { TitleReveal } from "./Reveal";
import { TECH_LANES, TechLane } from "../lib/data";
import { TechIcon } from "../lib/icons";

function MarqueeLaneRow({ lane }: { lane: TechLane }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const tripleItems = [...lane.items, ...lane.items, ...lane.items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animId = 0;
    let isVisible = true;
    let offset = 0;
    let lastTime = performance.now();

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(track);

    const step = (now: number) => {
      const dt = Math.min(64, now - lastTime) / 1000;
      lastTime = now;

      if (isVisible && !pausedRef.current) {
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0) {
          const pxPerSec = halfWidth / lane.speedSec;
          offset += pxPerSec * dt;
          if (offset >= halfWidth) {
            offset -= halfWidth;
          }
          track.style.transform = `translate3d(${-halfWidth + offset}px, 0, 0)`;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, [lane.speedSec]);

  return (
    <div
      onPointerEnter={() => {
        pausedRef.current = true;
      }}
      onPointerLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6 mb-3">
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--mut)]">
          {lane.title}
        </span>
      </div>

      <div className="overflow-hidden py-1.5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div
          ref={trackRef}
          className="flex w-max motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:w-auto motion-reduce:px-6 motion-reduce:!transform-none"
        >
          <div className="flex shrink-0">
            {tripleItems.map((tech, i) => (
              <div
                key={`${lane.title}-a-${tech}-${i}`}
                className="flex items-center gap-3.5 mr-3.5 py-2.5 px-5 pl-2.5 rounded-2xl border border-[var(--line)] bg-[var(--glass)] font-medium text-base text-[var(--fg)] whitespace-nowrap transition-all duration-300 hover:border-[var(--acc)] hover:text-[var(--acc)] hover:-translate-y-1 cursor-default"
              >
                <span className="w-11 h-11 rounded-xl bg-[var(--bg2)] border border-[var(--line)] flex items-center justify-center shrink-0">
                  <TechIcon name={tech} />
                </span>
                <span>{tech}</span>
              </div>
            ))}
          </div>

          <div className="flex shrink-0 motion-reduce:hidden" aria-hidden="true">
            {tripleItems.map((tech, i) => (
              <div
                key={`${lane.title}-b-${tech}-${i}`}
                className="flex items-center gap-3.5 mr-3.5 py-2.5 px-5 pl-2.5 rounded-2xl border border-[var(--line)] bg-[var(--glass)] font-medium text-base text-[var(--fg)] whitespace-nowrap transition-all duration-300 hover:border-[var(--acc)] hover:text-[var(--acc)] hover:-translate-y-1 cursor-default"
              >
                <span className="w-11 h-11 rounded-xl bg-[var(--bg2)] border border-[var(--line)] flex items-center justify-center shrink-0">
                  <TechIcon name={tech} />
                </span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <div className="pt-24 pb-12">
      <TitleReveal text="Tools I work with." className="mb-12" />

      <div className="space-y-8 w-screen relative left-1/2 -translate-x-1/2">
        {TECH_LANES.map((lane) => (
          <MarqueeLaneRow key={lane.title} lane={lane} />
        ))}
      </div>
    </div>
  );
}
