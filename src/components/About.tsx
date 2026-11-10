"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ParticleField } from "./ParticleField";
import { Reveal, TitleReveal } from "./Reveal";
import { PROFILE_DATA } from "../lib/data";
import {
  BackdropCurvedText,
  BackdropTextConfig,
  DEFAULT_BACKDROP_CONFIG,
} from "./BackdropCurvedText";
import { BackdropTextControls } from "./BackdropTextControls";

export function About() {
  const photoContainerRef = useRef<HTMLElement>(null);
  const [config, setConfig] = useState<BackdropTextConfig>(DEFAULT_BACKDROP_CONFIG);
  const [animAngle, setAnimAngle] = useState(0);

  // Load saved preference from localStorage on mount (deferred to avoid cascading render)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("afriza_aura_text_config");
      if (saved) {
        const parsed = JSON.parse(saved);
        requestAnimationFrame(() => {
          setConfig((prev) => ({ ...prev, ...parsed }));
        });
      }
    } catch {
      // LocalStorage access might fail in restricted environments
    }
  }, []);

  // Save to localStorage when config changes
  useEffect(() => {
    try {
      localStorage.setItem("afriza_aura_text_config", JSON.stringify(config));
    } catch {
      // Ignore storage errors
    }
  }, [config]);

  // Smooth 60fps/120fps rotation loop
  useEffect(() => {
    if (!config.isPlaying) return;

    let animId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const deltaMs = currentTime - lastTime;
      lastTime = currentTime;

      const speedMs = Math.max(1, config.speed * 1000);
      const deltaDeg = (deltaMs / speedMs) * 360 * (config.direction === "cw" ? 1 : -1);

      setAnimAngle((prev) => (prev + deltaDeg) % 360);
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [config.isPlaying, config.speed, config.direction]);

  const effectiveAngle = config.isPlaying ? animAngle : config.manualRotation;

  const handleReset = () => {
    setConfig(DEFAULT_BACKDROP_CONFIG);
    setAnimAngle(0);
    try {
      localStorage.removeItem("afriza_aura_text_config");
    } catch {
      // Ignore
    }
  };

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-[70px] items-start">
        {/* Left column: Heading, Quote, and Oval Masked Photo */}
        <div>
          <TitleReveal text="Curious by default. Builder by habit." className="mb-6 max-w-[15ch]" />

          <Reveal delayMs={100} variant="left">
            <blockquote className="text-[clamp(22px,2.6vw,30px)] leading-[1.3] tracking-[-0.02em] pl-[22px] border-l border-[var(--line)] text-[var(--fg)] mt-8">
              {PROFILE_DATA.quote}
            </blockquote>
          </Reveal>

          {/* Cutout Portrait with Particle Canvas & Seamless Bottom Fade */}
          <Reveal delayMs={200} variant="zoom">
            <figure
              ref={photoContainerRef}
              className="relative aspect-[4/5] max-w-[360px] mx-auto lg:mx-0 mt-14 flex items-center justify-center overflow-visible"
            >
              {/* Backdrop Curved Text encircling behind back & shoulders */}
              <BackdropCurvedText
                config={config}
                rotationAngle={effectiveAngle}
              />

              {/* Particle field encircling the photo */}
              <ParticleField
                containerRef={photoContainerRef}
                id="about-fx"
                densityDivider={3800}
                maxPoints={120}
                className="-inset-y-[12%] -inset-x-[28%] !w-[156%] !h-[124%] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_55%,transparent_100%)] pointer-events-none"
              />

              {/* Portrait cutout fading smoothly at the bottom into the surface */}
              <div className="relative w-full h-full z-10 [mask-image:linear-gradient(to_bottom,#000_72%,transparent_100%)] pointer-events-none select-none">
                <Image
                  src="/Foto.png"
                  alt={`Foto ${PROFILE_DATA.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </figure>

            {/* Interactive Control Panel for Aura Text */}
            <BackdropTextControls
              config={config}
              onChange={setConfig}
              onReset={handleReset}
            />
          </Reveal>
        </div>

        {/* Right column: Editorial Narrative, Facts Grid, and Interest Chips */}
        <div className="space-y-5 pt-1">
          <Reveal delayMs={150} variant="right">
            <p className="text-[var(--mut)] text-[19px] leading-[1.6]">
              I’m a <b className="text-[var(--fg)] font-medium">Software & Game Development</b> student at SMK Negeri 4 Padalarang, growing from front-end foundations toward <b className="text-[var(--fg)] font-medium">full-stack engineering</b>.
            </p>
          </Reveal>

          <Reveal delayMs={220} variant="right">
            <p className="text-[var(--mut)] text-[19px] leading-[1.6]">
              Along the way I’ve worked on <b className="text-[var(--fg)] font-medium">backend APIs</b> and <b className="text-[var(--fg)] font-medium">business-oriented applications</b>, the kind of software that supports real workflows, from managing orders to organising distribution.
            </p>
          </Reveal>

          <Reveal delayMs={280} variant="right">
            <p className="text-[var(--mut)] text-[19px] leading-[1.6]">
              What keeps me going is solving technical problems and learning the next tool a little better than the last.
            </p>
          </Reveal>

          {/* Quick Facts Grid */}
          <Reveal delayMs={350} variant="zoom">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-[var(--line)] border border-[var(--line)] rounded-2xl overflow-hidden mt-9">
              <div className="bg-[var(--bg)] p-[22px]">
                <small className="block text-[var(--mut)] font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5 font-medium">
                  Education
                </small>
                <span className="text-[var(--fg)] text-base">
                  {PROFILE_DATA.school}
                </span>
              </div>
              <div className="bg-[var(--bg)] p-[22px]">
                <small className="block text-[var(--mut)] font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5 font-medium">
                  Major
                </small>
                <span className="text-[var(--fg)] text-base">
                  {PROFILE_DATA.major}
                </span>
              </div>
              <div className="bg-[var(--bg)] p-[22px]">
                <small className="block text-[var(--mut)] font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5 font-medium">
                  Currently learning
                </small>
                <span className="text-[var(--fg)] text-base">
                  {PROFILE_DATA.learning}
                </span>
              </div>
              <div className="bg-[var(--bg)] p-[22px]">
                <small className="block text-[var(--mut)] font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5 font-medium">
                  Direction
                </small>
                <span className="text-[var(--fg)] text-base">
                  {PROFILE_DATA.direction}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Interest Chips */}
          <Reveal delayMs={400}>
            <div className="flex flex-wrap gap-2 mt-6">
              {PROFILE_DATA.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-3.5 py-[7px] rounded-full border border-[var(--line)] bg-[var(--glass)] text-[var(--mut)] text-[13px]"
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
