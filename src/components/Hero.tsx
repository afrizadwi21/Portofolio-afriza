"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { ParticleField } from "./ParticleField";
import { Reveal } from "./Reveal";
import { PROFILE_DATA } from "../lib/data";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const el = heroRef.current;
        if (!el) return;
        const y = window.scrollY;
        if (y < 1400) {
          el.style.setProperty("--sy", String(y));
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      style={{ "--sy": 0 } as React.CSSProperties}
      className="relative min-h-[100svh] flex items-center pt-[140px] pb-20 overflow-hidden"
    >
      {/* Background orbs with parallax & slow float */}
      <div
        style={{
          translate: "0 calc(var(--sy, 0) * 0.3px)",
        }}
        className="orb o1 absolute w-[380px] h-[380px] rounded-full blur-[90px] bg-[var(--acc)] opacity-[0.10] right-[6%] top-[12%] pointer-events-none animate-[floatOrb_14s_ease-in-out_infinite] motion-reduce:!translate-none"
        aria-hidden="true"
      />
      <div
        style={{
          translate: "0 calc(var(--sy, 0) * -0.2px)",
          animationDelay: "-6s",
        }}
        className="orb o2 absolute w-[320px] h-[320px] rounded-full blur-[90px] bg-[var(--blue)] opacity-[0.12] right-[26%] bottom-[6%] pointer-events-none animate-[floatOrb_14s_ease-in-out_infinite] motion-reduce:!translate-none"
        aria-hidden="true"
      />

      {/* Particle Canvas */}
      <ParticleField containerRef={heroRef} id="hero-fx" />

      <div
        style={{
          transform: "translateY(calc(var(--sy, 0) * -0.08px))",
          opacity: "max(0.4, calc(1 - var(--sy, 0) / 1100))",
        }}
        className="max-w-[1180px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 items-center w-full motion-reduce:!transform-none motion-reduce:!opacity-100"
      >
        <div>
          {/* Availability pill */}
          <Reveal delayMs={70}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--line)] bg-[var(--glass)] text-[13px] mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full border border-[var(--acc)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--acc)]" />
              </span>
              Available for internships & collaborations
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delayMs={140}>
            <h1 className="font-semibold text-[clamp(38px,5.4vw,72px)] leading-[1.02] tracking-[-0.03em] text-balance">
              Building Digital <span className="text-[var(--mut)] block">Experiences</span> Through{" "}
              <em className="not-italic text-[var(--acc)]">Code.</em>
            </h1>
          </Reveal>

          {/* Lead paragraph */}
          <Reveal delayMs={210}>
            <p className="max-w-[52ch] text-[var(--mut)] text-[18px] leading-[1.6] my-8">
              I’m <b className="text-[var(--fg)] font-medium">{PROFILE_DATA.shortName}</b>, a developer passionate about building modern web applications, backend systems, and practical digital solutions.
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delayMs={280}>
            <div className="flex flex-wrap gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-[15px] bg-[var(--acc)] text-[var(--acc-ink)] border border-[var(--acc)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_36px_-8px_var(--acc)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
              >
                View Projects <ArrowRight className="w-[18px] h-[18px]" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-[15px] border border-[var(--line)] text-[var(--fg)] bg-transparent transition-all duration-300 hover:bg-[var(--glass)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
              >
                Contact Me <Mail className="w-[18px] h-[18px]" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Small Terminal code card */}
        <Reveal delayMs={280} variant="zoom">
          <div className="mono bg-[var(--bg2)] border border-[var(--line)] rounded-2xl overflow-hidden transform lg:rotate-1 transition-transform duration-500 hover:rotate-0 hover:-translate-y-1">
            <div className="flex items-center gap-2 px-4 py-3.5 border-b border-[var(--line)] text-[11px] text-[var(--mut)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--line)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--line)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--line)]" />
              <span className="ml-auto">afriza.ts</span>
            </div>
            <div className="p-5 text-[13px] leading-[1.9] text-[var(--fg)]">
              <span className="text-[var(--mut)]">{"// who am i"}</span>
              <br />
              <span className="text-[var(--blue)]">const</span> dev = &#123;
              <br />
              &nbsp;&nbsp;name: <span className="text-[var(--acc)]">&quot;{PROFILE_DATA.name}&quot;</span>,
              <br />
              &nbsp;&nbsp;role: <span className="text-[var(--acc)]">&quot;Web Developer Student&quot;</span>,
              <br />
              &nbsp;&nbsp;school: <span className="text-[var(--acc)]">&quot;SMKN 4 Padalarang&quot;</span>,
              <br />
              &nbsp;&nbsp;learning: [<span className="text-[var(--acc)]">&quot;Next.js&quot;</span>, <span className="text-[var(--acc)]">&quot;Go&quot;</span>, <span className="text-[var(--acc)]">&quot;Docker&quot;</span>],
              <br />
              &nbsp;&nbsp;goal: <span className="text-[var(--acc)]">&quot;Full-Stack&quot;</span>
              <br />
              &#125;;
              <br />
              <span className="text-[var(--mut)]">&gt;</span>{" "}
              <span className="inline-block w-2 h-[15px] bg-[var(--acc)] align-middle animate-pulse" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
