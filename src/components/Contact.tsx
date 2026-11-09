"use client";

import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal, TitleReveal } from "./Reveal";
import { PROFILE_DATA } from "../lib/data";
import { TechIcon, LinkedInIcon } from "../lib/icons";

export function Contact() {
  return (
    <section id="contact" className="py-28 text-center relative overflow-hidden">
      {/* Background ambient orb */}
      <div
        className="orb absolute left-1/2 top-[30%] -translate-x-1/2 w-[520px] h-[520px] rounded-full blur-[90px] bg-[var(--acc)] opacity-[0.08] pointer-events-none animate-[floatOrb_14s_ease-in-out_infinite]"
        aria-hidden="true"
      />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <TitleReveal
          text="Have an idea? Let’s build something meaningful."
          highlightWord="meaningful."
          className="max-w-[14ch] mx-auto mb-6 !text-[clamp(40px,7vw,92px)] !leading-[1.02]"
        />

        <Reveal delayMs={200}>
          <p className="max-w-[48ch] mx-auto mb-9 text-[var(--mut)] text-lg leading-relaxed">
            Open to internships, collaborations and conversations about code.
          </p>
        </Reveal>

        <Reveal delayMs={300}>
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-base bg-[var(--acc)] text-[var(--acc-ink)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_var(--acc)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
          >
            Contact Me <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>

        {/* Contact links row */}
        <Reveal delayMs={400} variant="zoom">
          <div className="flex flex-wrap gap-3 justify-center items-center mt-12">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl border border-[var(--line)] bg-[var(--glass)] text-sm font-medium text-[var(--fg)] transition-all duration-300 hover:border-[var(--acc)] hover:text-[var(--acc)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
            >
              <Mail className="w-4 h-4" />
              <span>{PROFILE_DATA.email}</span>
            </a>

            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl border border-[var(--line)] bg-[var(--glass)] text-sm font-medium text-[var(--fg)] transition-all duration-300 hover:border-[var(--acc)] hover:text-[var(--acc)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <TechIcon name="GitHub" />
              </span>
              <span>github.com/afrizadwi21</span>
            </a>

            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-[var(--line)] bg-[var(--glass)] text-sm font-medium text-[var(--fg)] transition-all duration-300 hover:border-[var(--acc)] hover:text-[var(--acc)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>linkedin.com/in/afrizadwi</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
