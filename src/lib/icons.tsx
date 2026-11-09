import React from "react";

export function TechIcon({ name }: { name: string }) {
  switch (name) {
    case "JavaScript":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <rect width="32" height="32" rx="6" fill="#f7df1e" />
          <text x="21" y="27" textAnchor="middle" fontSize="14" fontWeight="700" fill="#111" className="mono">JS</text>
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <rect width="32" height="32" rx="6" fill="#3178c6" />
          <text x="21" y="27" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" className="mono">TS</text>
        </svg>
      );
    case "PHP":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <ellipse cx="16" cy="16" rx="15" ry="9" fill="#777bb4" />
          <text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" className="mono">php</text>
        </svg>
      );
    case "Python":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <path d="M16 3c-6 0-5.6 2.6-5.6 2.6V9h5.7v1H8S3 9.6 3 16s4.4 6 4.4 6H10v-3s-.2-4.4 4.3-4.4h5.6S24 14.7 24 10.5V6S24.5 3 16 3zm-3.1 2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" fill="#3776ab" />
          <path d="M16 29c6 0 5.6-2.6 5.6-2.6V23h-5.7v-1H24s5 .4 5-6-4.4-6-4.4-6H22v3s.2 4.4-4.3 4.4h-5.6S8 17.3 8 21.5V26s-.5 3 8 3zm3.1-2a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z" fill="#ffc331" />
        </svg>
      );
    case "Go":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <rect width="32" height="32" rx="16" fill="#00add8" />
          <text x="16" y="21" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" className="mono">GO</text>
        </svg>
      );
    case "React.js":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <g fill="none" stroke="#61dafb" strokeWidth="1.6">
            <ellipse cx="16" cy="16" rx="13" ry="5" />
            <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" />
            <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" />
          </g>
          <circle cx="16" cy="16" r="2.4" fill="#61dafb" />
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <circle cx="16" cy="16" r="15" fill="currentColor" />
          <text x="16" y="22" textAnchor="middle" fontSize="17" fontWeight="700" fill="var(--bg)" className="mono">N</text>
        </svg>
      );
    case "HTML":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <path d="M4 3h24l-2.2 24.5L16 30l-9.8-2.5z" fill="#e44d26" />
          <path d="M16 27.5l7.9-2.2L25.8 5H16z" fill="#f16529" />
          <text x="16" y="21" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" className="mono">5</text>
        </svg>
      );
    case "CSS":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <path d="M4 3h24l-2.2 24.5L16 30l-9.8-2.5z" fill="#1572b6" />
          <path d="M16 27.5l7.9-2.2L25.8 5H16z" fill="#33a9dc" />
          <text x="16" y="21" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" className="mono">3</text>
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <g transform="translate(2 7) scale(.55)">
            <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#38bdf8" />
          </g>
        </svg>
      );
    case "Laravel":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <rect width="32" height="32" rx="8" fill="#ff2d20" />
          <text x="16" y="23" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" className="mono">L</text>
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <path d="M16 2l12 7v14l-12 7-12-7V9z" fill="#539e43" />
          <text x="16" y="21" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" className="mono">N</text>
        </svg>
      );
    case "Odoo":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <circle cx="16" cy="16" r="15" fill="#714b67" />
          <circle cx="16" cy="16" r="5.5" fill="none" stroke="#fff" strokeWidth="3" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#336791" />
          <text x="16" y="21" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" className="mono">Pg</text>
        </svg>
      );
    case "REST API":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <rect x="1.5" y="1.5" width="29" height="29" rx="8" fill="none" stroke="var(--acc)" strokeWidth="2" />
          <text x="16" y="21" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--acc)" className="mono">{`{ }`}</text>
        </svg>
      );
    case "Git":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <path d="M16 2l14 14-14 14L2 16z" fill="#f05032" />
          <g stroke="#fff" strokeWidth="2" fill="none">
            <path d="M13 11v10M13 13l5 3" />
          </g>
          <circle cx="13" cy="11" r="2.2" fill="#fff" />
          <circle cx="13" cy="21" r="2.2" fill="#fff" />
          <circle cx="18.5" cy="16.2" r="2.2" fill="#fff" />
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <g transform="translate(3 3) scale(1.1)" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
          </g>
        </svg>
      );
    case "Docker":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <g fill="#2496ed">
            <rect x="5" y="12" width="4" height="4" />
            <rect x="10" y="12" width="4" height="4" />
            <rect x="15" y="12" width="4" height="4" />
            <rect x="10" y="7" width="4" height="4" />
            <rect x="15" y="7" width="4" height="4" />
            <rect x="20" y="12" width="4" height="4" />
            <path d="M2 18h26c0 6-5 10-13 10S3 24 2 18z" />
          </g>
        </svg>
      );
    case "Figma":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <path d="M11 2h5v9h-5a4.5 4.5 0 0 1 0-9z" fill="#f24e1e" />
          <path d="M16 2h5a4.5 4.5 0 0 1 0 9h-5z" fill="#ff7262" />
          <path d="M11 11h5v9h-5a4.5 4.5 0 0 1 0-9z" fill="#a259ff" />
          <circle cx="20.5" cy="15.5" r="4.5" fill="#1abcfe" />
          <path d="M11 20h5v4.5A4.5 4.5 0 1 1 11 20z" fill="#0acf83" />
        </svg>
      );
    case "VS Code":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 overflow-visible" aria-hidden="true">
          <path d="M23 3l6 3v20l-6 3L10 18.5 5 22.5 2 21V11l3-1.5 5 4z" fill="#007acc" />
          <path d="M23 3v26L10 18.5z" fill="#1f9cf0" opacity=".75" />
        </svg>
      );
    default:
      return null;
  }
}

export function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
