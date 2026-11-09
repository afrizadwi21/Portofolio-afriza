"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, TitleReveal } from "./Reveal";
import { ProjectItem, PROJECTS } from "../lib/data";
import { TechIcon } from "../lib/icons";

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.type)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeCategory);

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-2.5 font-mono text-xs font-medium tracking-[0.14em] uppercase text-[var(--acc)] mb-5 before:content-[''] before:w-7 before:h-[1px] before:bg-[var(--acc)]">
            02 — Featured Projects
          </div>
        </Reveal>

        <TitleReveal text="Things I’ve been building." className="mb-8" />

        {/* Filter categories */}
        <Reveal delayMs={100}>
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Project filter">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[var(--acc)] text-[var(--acc-ink)] border-[var(--acc)] shadow-[0_4px_16px_-4px_var(--acc)]"
                    : "border-[var(--line)] bg-transparent text-[var(--mut)] hover:text-[var(--fg)] hover:border-[var(--fg)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delayMs={index * 90} variant="zoom">
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                style={{ "--project-color": project.color } as React.CSSProperties}
                className="group w-full text-left h-full flex flex-col border border-[var(--line)] rounded-[22px] bg-[var(--bg2)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[color-mix(in_srgb,var(--project-color)_55%,transparent)] hover:shadow-[0_20px_40px_-20px_color-mix(in_srgb,var(--project-color)_40%,transparent)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
              >
                {/* Mini thumbnail mock */}
                <div className="h-[128px] p-4 flex items-end relative overflow-hidden bg-[radial-gradient(circle_at_25%_15%,color-mix(in_srgb,var(--project-color)_20%,transparent),transparent_65%),var(--glass)]">
                  {project.kind === "bars" ? (
                    <div className="flex items-end gap-2 h-[58px] w-full">
                      {[45, 78, 56, 92, 64, 84].map((h, i) => (
                        <i
                          key={i}
                          style={{ height: `${h}%` }}
                          className="flex-1 rounded-t-md rounded-b-[2px] bg-gradient-to-b from-[var(--project-color)] to-transparent origin-bottom animate-[barGrow_2.6s_ease-in-out_infinite_alternate] even:[animation-delay:-1s]"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="w-full space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 p-1.5 rounded-md border border-[var(--line)] bg-[var(--bg)] text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--project-color)]" />
                        <span>Order #0001</span>
                        <span className="ml-auto text-[var(--mut)]">customer</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 rounded-md border border-[var(--line)] bg-[var(--bg)] text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--project-color)]" />
                        <span>Order #0002</span>
                        <span className="ml-auto text-[var(--mut)]">customer</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1 gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--project-color)] font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--fg)] group-hover:text-[var(--project-color)] transition-colors">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[var(--project-color)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <p className="text-[var(--mut)] text-[13.5px] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-[var(--line)] bg-[var(--glass)] text-[var(--mut)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}

          {/* More projects on GitHub card */}
          <Reveal delayMs={filteredProjects.length * 90} variant="zoom">
            <a
              href="https://github.com/afrizadwi21"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full min-h-[240px] flex flex-col items-center justify-center gap-3 p-6 rounded-[22px] border border-dashed border-[var(--line)] bg-transparent text-[var(--mut)] text-center transition-all duration-300 hover:text-[var(--acc)] hover:border-[var(--acc)] hover:bg-[var(--glass)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
            >
              <span className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <TechIcon name="GitHub" />
              </span>
              <span className="text-sm font-medium">
                Lebih banyak proyek di GitHub
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
