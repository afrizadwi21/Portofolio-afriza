"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Award, ExternalLink } from "lucide-react";
import { Reveal, TitleReveal } from "./Reveal";
import { CERTIFICATES, CertificateItem, PROFILE_DATA } from "../lib/data";
import { LinkedInIcon } from "../lib/icons";

export function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? CERTIFICATES.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === CERTIFICATES.length - 1 ? 0 : curr + 1));
  };

  const current = CERTIFICATES[currentIndex];

  return (
    <section id="certificates" className="py-24 relative border-t border-[var(--line)]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <TitleReveal text="Licenses & Certifications." className="mb-2" />
            <p className="text-[var(--mut)] text-base max-w-[50ch]">
              Dokumentasi pencapaian, sertifikasi kompetensi, dan pelatihan industri terverifikasi.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-[var(--line)] text-[var(--fg)] hover:border-[var(--acc)] hover:text-[var(--acc)] transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>Semua di LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <div className="flex items-center gap-1.5" role="group" aria-label="Navigasi sertifikat">
              <button
                type="button"
                onClick={prev}
                aria-label="Sertifikat sebelumnya"
                className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:bg-[var(--glass)] hover:border-[var(--acc)] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Sertifikat berikutnya"
                className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:bg-[var(--glass)] hover:border-[var(--acc)] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 1 Row Carousel Card */}
        <Reveal variant="zoom">
          <div className="relative border border-[var(--line)] rounded-2xl bg-[var(--bg2)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center">
              {/* Preview Image with Modal Trigger */}
              <button
                type="button"
                onClick={() => setActiveCert(current)}
                className="group relative w-full aspect-[16/10] bg-[var(--bg)] border-b lg:border-b-0 lg:border-r border-[var(--line)] overflow-hidden cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)]"
                aria-label={`Lihat ukuran penuh ${current.title}`}
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-3.5 py-1.5 rounded-full bg-[var(--bg)]/95 border border-[var(--line)] text-xs font-mono text-[var(--fg)]">
                    Klik untuk memperbesar
                  </span>
                </div>
              </button>

              {/* Certificate Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between h-full gap-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="inline-flex items-center gap-1.5 text-[var(--acc)] font-medium">
                      <Award className="w-3.5 h-3.5" />
                      {current.category}
                    </span>
                    <span className="text-[var(--mut)]">
                      {currentIndex + 1} / {CERTIFICATES.length}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[var(--fg)]">
                    {current.title}
                  </h3>

                  <div className="font-mono text-xs text-[var(--mut)] space-y-1 py-1">
                    <div>Penerbit: <span className="text-[var(--fg)]">{current.issuer}</span> ({current.year})</div>
                    <div>Credential ID: <span className="text-[var(--fg)]">{current.credentialId}</span></div>
                  </div>

                  <p className="text-sm text-[var(--mut)] leading-relaxed">
                    {current.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--line)]">
                  {current.verifyUrl && (
                    <a
                      href={current.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[var(--acc)] text-[var(--acc-ink)] transition-opacity hover:opacity-90"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Verifikasi Kredensial
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveCert(current)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-[var(--line)] text-[var(--fg)] hover:bg-[var(--glass)] transition-colors cursor-pointer"
                  >
                    Lihat Dokumen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Fullscreen Certificate Preview Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[var(--bg)] border border-[var(--line)] rounded-2xl p-4 overflow-auto flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between border-b border-[var(--line)] pb-3 px-1">
              <span className="text-sm font-semibold text-[var(--fg)]">{activeCert.title}</span>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="px-3 py-1 rounded-md text-xs font-mono border border-[var(--line)] text-[var(--mut)] hover:text-[var(--fg)] cursor-pointer"
              >
                Tutup (Esc)
              </button>
            </div>
            <div className="relative w-full aspect-[16/11] max-h-[75vh]">
              <Image
                src={activeCert.image}
                alt={activeCert.title}
                fill
                sizes="(max-width: 1200px) 95vw, 1100px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
