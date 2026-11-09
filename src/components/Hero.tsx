"use client";

import React, { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { ParticleField } from "./ParticleField";
import { Reveal } from "./Reveal";
import { PROFILE_DATA } from "../lib/data";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center pt-[140px] pb-20 overflow-hidden"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_60%_40%,#000,transparent)]"
        aria-hidden="true"
      />

      {/* Background orbs */}
      <div
        className="orb o1 absolute w-[380px] h-[380px] rounded-full blur-[90px] bg-[var(--acc)] opacity-[0.14] right-[6%] top-[12%] pointer-events-none animate-pulse"
        aria-hidden="true"
      />
      <div
        className="orb o2 absolute w-[320px] h-[320px] rounded-full blur-[90px] bg-[var(--blue)] opacity-[0.16] right-[26%] bottom-[6%] pointer-events-none animate-pulse"
        aria-hidden="true"
      />

      {/* Particle Canvas */}
      <ParticleField containerRef={heroRef} id="hero-fx" />

      {/* Cursor interaction hint */}
      <div
        className="hint mono absolute left-0 right-0 bottom-6 text-center text-xs text-[var(--mut)] tracking-wider z-10 pointer-events-none px-6"
        aria-hidden="true"
      >
        <span className="text-[var(--acc)] font-semibold">↳</span> gerakkan kursor atau sentuh layar
      </div>

      <div className="max-w-[1180px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 items-center w-full">
        <div>
          {/* Availability pill */}
          <Reveal delayMs={100}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--line)] bg-[var(--glass)] text-xs font-medium mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--acc)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--acc)]" />
              </span>
              Available for internships & collaborations
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delayMs={200}>
            <h1 className="font-semibold text-[clamp(44px,7.8vw,104px)] leading-[0.96] tracking-[-0.05em] mb-6 text-balance">
              Building Digital <span className="text-[var(--mut)] block sm:inline">Experiences</span> Through{" "}
              <em className="not-italic text-[var(--acc)]">Code.</em>
            </h1>
          </Reveal>

          {/* Lead paragraph */}
          <Reveal delayMs={300}>
            <p className="max-w-[52ch] text-[var(--mut)] text-lg md:text-xl leading-relaxed mb-9">
              I’m <b className="text-[var(--fg)] font-medium">{PROFILE_DATA.shortName}</b>, a developer passionate about building modern web applications, backend systems, and practical digital solutions.
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delayMs={400}>
            <div className="flex flex-wrap gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-[15px] bg-[var(--acc)] text-[var(--acc-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_36px_-8px_var(--acc)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-[15px] border border-[var(--line)] text-[var(--fg)] bg-transparent transition-all duration-300 hover:bg-[var(--glass)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
              >
                Contact Me <Mail className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Small Terminal code card */}
        <Reveal delayMs={400} variant="zoom">
          <div className="mono bg-[var(--bg2)] border border-[var(--line)] rounded-[20px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] transform lg:rotate-2 transition-transform duration-500 hover:rotate-0 hover:-translate-y-1.5">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--line)] text-xs text-[var(--mut)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--line)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--line)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--line)]" />
              <span className="ml-auto">afriza.ts</span>
            </div>
            <div className="p-5 text-[13px] leading-[1.85] text-[var(--fg)]">
              <span className="text-[var(--mut)]">{"// who am i"}</span>
              <br />
              <span className="text-[var(--blue)]">const</span> dev = &#123;
              <br />
              &nbsp;&nbsp;name: <span className="text-[var(--acc)]">&quot;{PROFILE_DATA.name}&quot;</span>,
              <br />
              &nbsp;&nbsp;role: <span className="text-[var(--acc)]">&quot;Web Developer Student&quot;</span>,
              <br />
              &nbsp;&nbsp;school: <span className="text-[var(--acc)]">&quot;{PROFILE_DATA.school}&quot;</span>,
              <br />
              &nbsp;&nbsp;learning: [<span className="text-[var(--acc)]">&quot;Next.js&quot;</span>, <span className="text-[var(--acc)]">&quot;Go&quot;</span>, <span className="text-[var(--acc)]">&quot;Docker&quot;</span>],
              <br />
              &nbsp;&nbsp;goal: <span className="text-[var(--acc)]">&quot;Full-Stack&quot;</span>
              <br />
              &#125;;
              <br />
              <span className="text-[var(--mut)]">&gt;</span>{" "}
              <span className="inline-block w-2 h-4 bg-[var(--acc)] align-middle animate-pulse" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
