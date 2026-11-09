"use client";

import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { PROFILE_DATA } from "../lib/data";
import { TechIcon, LinkedInIcon } from "../lib/icons";

export function Contact() {
  return (
    <section id="contact" className="py-28 text-center relative overflow-hidden">
      {/* Background ambient orb */}
      <div
        className="orb absolute left-1/2 top-[30%] -translate-x-1/2 w-[520px] h-[520px] rounded-full blur-[100px] bg-[var(--acc)] opacity-[0.08] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <Reveal>
          <div className="flex items-center justify-center gap-2.5 font-mono text-xs font-medium tracking-[0.14em] uppercase text-[var(--acc)] mb-5 before:content-[''] before:w-7 before:h-[1px] before:bg-[var(--acc)] after:content-[''] after:w-7 after:h-[1px] after:bg-[var(--acc)]">
            05 — Contact
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <h2 className="max-w-[14ch] mx-auto mb-6 font-semibold tracking-[-0.04em] text-[clamp(40px,7vw,92px)] leading-[1.02]">
            Have an idea? Let’s build something{" "}
            <em className="not-italic text-[var(--acc)]">meaningful.</em>
          </h2>
        </Reveal>

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
              onClick={(e) => {
                if (PROFILE_DATA.linkedin.endsWith("/in/")) e.preventDefault();
              }}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl border border-[var(--line)] bg-[var(--glass)] text-sm font-medium text-[var(--fg)] transition-all duration-300 hover:border-[var(--acc)] hover:text-[var(--acc)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn · placeholder</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
