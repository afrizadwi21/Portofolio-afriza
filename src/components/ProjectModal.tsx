"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { ProjectItem, PROJECTS } from "../lib/data";
import { TechIcon } from "../lib/icons";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ProjectModal({
  project,
  onClose,
  onNavigate,
}: ProjectModalProps) {
  const currentIndex = project
    ? PROJECTS.findIndex((p) => p.id === project.id)
    : -1;

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        const prev = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
        onNavigate(prev);
      } else if (e.key === "ArrowRight") {
        const next = (currentIndex + 1) % PROJECTS.length;
        onNavigate(next);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, currentIndex, onClose, onNavigate]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} Project Preview`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[color-mix(in_srgb,var(--bg)_75%,transparent)] backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        style={{ "--project-color": project.color } as React.CSSProperties}
        className="relative w-full max-w-[920px] max-h-[90vh] overflow-y-auto border border-[var(--line)] rounded-2xl bg-[var(--bg2)] grid grid-cols-1 md:grid-cols-2"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup preview"
          className="absolute top-4 right-4 z-20 w-[42px] h-[42px] rounded-xl border border-[var(--line)] bg-[var(--glass)] text-[var(--fg)] flex items-center justify-center hover:rotate-90 hover:border-[var(--project-color)] hover:text-[var(--project-color)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)] cursor-pointer"
        >
          <X className="w-[18px] h-[18px]" />
        </button>

        {/* Visual Mockup Column */}
        <div className="min-h-[260px] md:min-h-[380px] flex items-center justify-center p-6 md:p-8 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--project-color)_18%,transparent),transparent_65%),var(--glass)] border-b md:border-b-0 md:border-r border-[var(--line)]">
          <div className="w-full max-w-[340px] bg-[var(--bg)] border border-[var(--line)] rounded-xl p-5 space-y-2.5 font-mono text-xs">
            <div className="text-[11px] text-[var(--mut)] pb-1 border-b border-[var(--line)]">
              {project.name} · {project.kind === "bars" ? "workflow" : "orders"}
            </div>

            {project.kind === "bars" ? (
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 p-2.5 border border-[var(--line)] rounded-lg bg-[var(--bg2)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--project-color)]" />
                  <span>Warehouse → Regional Hub</span>
                  <span className="ml-auto text-[var(--mut)] text-[11px]">B2B</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 border border-[var(--line)] rounded-lg bg-[var(--bg2)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--project-color)]" />
                  <span>Batch Allocation #204</span>
                  <span className="ml-auto text-[var(--mut)] text-[11px]">synced</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 border border-[var(--line)] rounded-lg bg-[var(--bg2)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--project-color)]" />
                  <span>Distribution Manifest</span>
                  <span className="ml-auto text-[var(--mut)] text-[11px]">active</span>
                </div>
              </div>
            ) : (
              <div className="space-y-2 pt-1">
                {[1, 2, 3].map((orderNum) => (
                  <div
                    key={orderNum}
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-[var(--line)] bg-[var(--bg2)] text-xs"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--project-color)]" />
                    <span>Order #000{orderNum}</span>
                    <span className="ml-auto text-[var(--mut)] text-[11px]">sale.order</span>
                  </div>
                ))}
                <div className="font-mono text-[11px] text-[var(--blue)] pt-2">
                  GET /api/orders · 200 OK
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Project Info Column */}
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--project-color)] font-medium">
              {project.category}
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.035em] text-[var(--fg)]">
              {project.name}
            </h3>
            <p className="text-[var(--mut)] text-sm md:text-base leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 py-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2.5 py-1 rounded-md border border-[var(--line)] bg-[var(--glass)] text-[var(--mut)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Highlights List */}
            <ul className="border-t border-[var(--line)] divide-y divide-[var(--line)] text-sm pt-2">
              {project.highlights.map((item, i) => (
                <li
                  key={i}
                  className="py-2.5 text-[var(--mut)] flex items-center gap-2.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--project-color)] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action buttons & pagination */}
          <div className="pt-6 mt-6 border-t border-[var(--line)] flex flex-wrap items-center gap-3">
            <a
              href={project.liveDemoUrl || "#"}
              onClick={(e) => {
                if (project.liveDemoUrl === "#") e.preventDefault();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[var(--acc)] text-[var(--acc-ink)] transition-opacity duration-200 hover:opacity-90"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live demo
            </a>
            <a
              href={project.githubUrl || "https://github.com/afrizadwi21"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-[var(--line)] text-[var(--fg)] hover:bg-[var(--glass)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <TechIcon name="GitHub" />
              </span>
              GitHub
            </a>

            {/* Pagination Controls */}
            <div className="ml-auto flex items-center gap-2 font-mono text-xs text-[var(--mut)]">
              <button
                type="button"
                onClick={() =>
                  onNavigate(
                    (currentIndex - 1 + PROJECTS.length) % PROJECTS.length
                  )
                }
                aria-label="Sebelumnya"
                className="w-[42px] h-[42px] rounded-xl border border-[var(--line)] bg-[var(--glass)] flex items-center justify-center text-[var(--fg)] hover:border-[var(--project-color)] hover:text-[var(--project-color)] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-[18px] h-[18px]" />
              </button>
              <span>
                {currentIndex + 1} / {PROJECTS.length}
              </span>
              <button
                type="button"
                onClick={() => onNavigate((currentIndex + 1) % PROJECTS.length)}
                aria-label="Berikutnya"
                className="w-[42px] h-[42px] rounded-xl border border-[var(--line)] bg-[var(--glass)] flex items-center justify-center text-[var(--fg)] hover:border-[var(--project-color)] hover:text-[var(--project-color)] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
