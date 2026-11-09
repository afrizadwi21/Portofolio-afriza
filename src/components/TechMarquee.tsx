"use client";

import React from "react";
import { TitleReveal } from "./Reveal";
import { TECH_LANES } from "../lib/data";
import { TechIcon } from "../lib/icons";

export function TechMarquee() {
  return (
    <div className="pt-24 pb-12">
      <TitleReveal text="Tools I work with." className="mb-12" />

      {/* Full width marquee lanes container */}
      <div className="space-y-8 w-screen relative left-1/2 -translate-x-1/2">
        {TECH_LANES.map((lane) => {
          // Triplicate lane items for seamless infinite ticker loop
          const tripleItems = [...lane.items, ...lane.items, ...lane.items];

          return (
            <div key={lane.title} className="group/row">
              <div className="max-w-[1180px] mx-auto px-6 mb-3">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--mut)]">
                  {lane.title}
                </span>
              </div>

              {/* Viewport with left and right fade masks */}
              <div className="overflow-hidden py-1.5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
                <div
                  style={
                    {
                      "--marquee-duration": `${lane.speedSec}s`,
                    } as React.CSSProperties
                  }
                  className="flex w-max animate-[marquee_var(--marquee-duration)_linear_infinite] group-hover/row:[animation-play-state:paused] motion-reduce:!animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:w-auto motion-reduce:px-6"
                >
                  <div className="flex shrink-0">
                    {tripleItems.map((tech, i) => (
                      <div
                        key={`${lane.title}-a-${tech}-${i}`}
                        className="flex items-center gap-3.5 mr-3.5 py-2.5 px-5 pl-2.5 rounded-[18px] border border-[var(--line)] bg-[var(--glass)] font-medium text-base text-[var(--fg)] whitespace-nowrap transition-all duration-300 hover:border-[var(--acc)] hover:text-[var(--acc)] hover:-translate-y-1 cursor-default"
                      >
                        <span className="w-11 h-11 rounded-xl bg-[var(--bg2)] border border-[var(--line)] flex items-center justify-center shrink-0">
                          <TechIcon name={tech} />
                        </span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duplicate set for endless loop */}
                  <div className="flex shrink-0 motion-reduce:hidden" aria-hidden="true">
                    {tripleItems.map((tech, i) => (
                      <div
                        key={`${lane.title}-b-${tech}-${i}`}
                        className="flex items-center gap-3.5 mr-3.5 py-2.5 px-5 pl-2.5 rounded-[18px] border border-[var(--line)] bg-[var(--glass)] font-medium text-base text-[var(--fg)] whitespace-nowrap transition-all duration-300 hover:border-[var(--acc)] hover:text-[var(--acc)] hover:-translate-y-1 cursor-default"
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
        })}
      </div>
    </div>
  );
}
