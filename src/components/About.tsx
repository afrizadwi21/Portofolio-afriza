"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ParticleField } from "./ParticleField";
import { Reveal, TitleReveal } from "./Reveal";
import { PROFILE_DATA } from "../lib/data";

export function About() {
  const photoContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        {/* Left column: Heading, Quote, and Oval Masked Photo */}
        <div>
          <Reveal>
            <div className="flex items-center gap-2.5 font-mono text-xs font-medium tracking-[0.14em] uppercase text-[var(--acc)] mb-5 before:content-[''] before:w-7 before:h-[1px] before:bg-[var(--acc)]">
              01 — About
            </div>
          </Reveal>

          <TitleReveal text="Curious by default. Builder by habit." className="mb-6 max-w-[15ch]" />

          <Reveal delayMs={100} variant="left">
            <blockquote className="text-[clamp(20px,2.4vw,28px)] leading-[1.3] tracking-[-0.02em] pl-5 border-l-2 border-[var(--acc)] text-[var(--fg)] mb-10">
              {PROFILE_DATA.quote}
            </blockquote>
          </Reveal>

          {/* Oval Masked Photo with Particle Canvas, no border/box, fades seamlessly into background */}
          <Reveal delayMs={200} variant="zoom">
            <div
              ref={photoContainerRef}
              className="relative aspect-[4/5] max-w-[340px] mx-auto lg:mx-0 my-4 flex items-center justify-center overflow-visible"
            >
              {/* Particle field encircling the photo */}
              <ParticleField
                containerRef={photoContainerRef}
                id="about-fx"
                densityDivider={3200}
                maxPoints={110}
                className="scale-125 [mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,#000_50%,transparent_100%)]"
              />

              {/* Ambient lime glow behind portrait */}
              <div
                className="absolute inset-[15%_10%_5%] rounded-full bg-[var(--acc)] blur-[60px] opacity-20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Floating aesthetic chips */}
              <div
                className="absolute left-[-2%] top-[12%] px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg2)_75%,transparent)] backdrop-blur-md text-xs whitespace-nowrap flex items-center gap-2 z-20 shadow-lg pointer-events-none"
                aria-hidden="true"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--acc)] shadow-[0_0_8px_var(--acc)]" />
                <span>Web Dev</span>
              </div>
              <div
                className="absolute right-[-4%] bottom-[24%] px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg2)_75%,transparent)] backdrop-blur-md text-xs whitespace-nowrap flex items-center gap-2 z-20 shadow-lg pointer-events-none"
                aria-hidden="true"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] shadow-[0_0_8px_var(--blue)]" />
                <span>Backend & APIs</span>
              </div>

              {/* Organic oval image mask fading cleanly into background without box or border */}
              <div className="relative w-full h-full z-10 [mask-image:radial-gradient(ellipse_66%_70%_at_50%_44%,#000_55%,transparent_100%)]">
                <Image
                  src="/foto.jpg"
                  alt={`Foto ${PROFILE_DATA.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right column: Editorial Narrative, Facts Grid, and Interest Chips */}
        <div className="space-y-6 pt-2">
          <Reveal delayMs={150} variant="right">
            <p className="text-[var(--mut)] text-lg leading-relaxed">
              I’m a <b className="text-[var(--fg)] font-medium">Software & Game Development</b> student at SMK Negeri 4 Padalarang, growing from front-end foundations toward <b className="text-[var(--fg)] font-medium">full-stack engineering</b>.
            </p>
          </Reveal>

          <Reveal delayMs={220} variant="right">
            <p className="text-[var(--mut)] text-lg leading-relaxed">
              Along the way I’ve worked on <b className="text-[var(--fg)] font-medium">backend APIs</b> and <b className="text-[var(--fg)] font-medium">business-oriented applications</b>, the kind of software that supports real workflows, from managing orders to organising distribution.
            </p>
          </Reveal>

          <Reveal delayMs={280} variant="right">
            <p className="text-[var(--mut)] text-lg leading-relaxed">
              What keeps me going is solving technical problems and learning the next tool a little better than the last.
            </p>
          </Reveal>

          {/* Quick Facts Grid */}
          <Reveal delayMs={350} variant="zoom">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-[var(--line)] border border-[var(--line)] rounded-[20px] overflow-hidden my-8">
              <div className="bg-[var(--bg)] p-5">
                <small className="block text-[var(--mut)] font-mono text-[11px] tracking-wider uppercase mb-1.5 font-medium">
                  Education
                </small>
                <span className="text-[var(--fg)] font-medium text-sm sm:text-base">
                  {PROFILE_DATA.school}
                </span>
              </div>
              <div className="bg-[var(--bg)] p-5">
                <small className="block text-[var(--mut)] font-mono text-[11px] tracking-wider uppercase mb-1.5 font-medium">
                  Major
                </small>
                <span className="text-[var(--fg)] font-medium text-sm sm:text-base">
                  {PROFILE_DATA.major}
                </span>
              </div>
              <div className="bg-[var(--bg)] p-5">
                <small className="block text-[var(--mut)] font-mono text-[11px] tracking-wider uppercase mb-1.5 font-medium">
                  Currently learning
                </small>
                <span className="text-[var(--fg)] font-medium text-sm sm:text-base">
                  {PROFILE_DATA.learning}
                </span>
              </div>
              <div className="bg-[var(--bg)] p-5">
                <small className="block text-[var(--mut)] font-mono text-[11px] tracking-wider uppercase mb-1.5 font-medium">
                  Direction
                </small>
                <span className="text-[var(--fg)] font-medium text-sm sm:text-base">
                  {PROFILE_DATA.direction}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Interest Chips */}
          <Reveal delayMs={400}>
            <div className="flex flex-wrap gap-2 pt-2">
              {PROFILE_DATA.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--glass)] text-[var(--mut)] text-xs sm:text-[13px] font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
