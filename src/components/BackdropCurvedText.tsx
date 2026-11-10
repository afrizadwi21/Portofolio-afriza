"use client";

import React, { useId } from "react";

export interface BackdropTextConfig {
  text: string;
  separator: string;
  repeatMode: "auto" | "1" | "2" | "3" | "4";
  shape: "circle" | "arch" | "orbit3d" | "dual";
  radius: number; // 120 - 260
  fontSize: number; // 11 - 26
  letterSpacing: number; // 0 - 14
  uppercase: boolean;
  fontWeight: "normal" | "medium" | "semibold" | "bold";
  fontFamily: "editorial" | "mono";

  // Position & 3D Tilt
  offsetY: number; // -90 to +90
  offsetX: number; // -70 to +70
  tiltX: number; // -75 to +75
  tiltY: number; // -60 to +60

  // Animation & Motion
  isPlaying: boolean;
  speed: number; // seconds per full turn (6 - 60s)
  direction: "cw" | "ccw";
  manualRotation: number; // 0 - 360

  // Styling & Glow
  color: string;
  glowIntensity: number; // 0 - 24
  glowColor: string;
  opacity: number; // 0.25 - 1.0
  showBackdropDisc: boolean;
  discOpacity: number; // 0.05 - 0.4
}

export const DEFAULT_BACKDROP_CONFIG: BackdropTextConfig = {
  text: "Muhammad afriza Dwi Isnandarsyah",
  separator: " • ",
  repeatMode: "auto",
  shape: "circle",
  radius: 185,
  fontSize: 15,
  letterSpacing: 4,
  uppercase: true,
  fontWeight: "semibold",
  fontFamily: "editorial",

  offsetY: -8,
  offsetX: 0,
  tiltX: 0,
  tiltY: 0,

  isPlaying: true,
  speed: 22,
  direction: "cw",
  manualRotation: 0,

  color: "#c6ff3d",
  glowIntensity: 8,
  glowColor: "#c6ff3d",
  opacity: 0.92,
  showBackdropDisc: true,
  discOpacity: 0.14,
};

export const BACKDROP_PRESETS: {
  id: string;
  label: string;
  desc: string;
  config: Partial<BackdropTextConfig>;
}[] = [
  {
    id: "neon-lime",
    label: "Neon Lime",
    desc: "Luminous halo orbiting behind the neck and shoulders",
    config: {
      shape: "circle",
      color: "#c6ff3d",
      glowColor: "#c6ff3d",
      glowIntensity: 10,
      radius: 185,
      tiltX: 0,
      tiltY: 0,
      offsetY: -8,
      speed: 22,
      direction: "cw",
      repeatMode: "auto",
      showBackdropDisc: true,
    },
  },
  {
    id: "shoulder-arch",
    label: "Shoulder Arch",
    desc: "Typographic arch framing the back and shoulders",
    config: {
      shape: "arch",
      color: "#ffffff",
      glowColor: "#ffffff",
      glowIntensity: 6,
      radius: 200,
      tiltX: -10,
      tiltY: 0,
      offsetY: 20,
      speed: 16,
      isPlaying: false,
      manualRotation: 0,
      showBackdropDisc: false,
    },
  },
  {
    id: "saturn-3d",
    label: "3D Orbit",
    desc: "Tilted elliptical 3D orbit around the torso",
    config: {
      shape: "orbit3d",
      color: "#38bdf8",
      glowColor: "#0284c7",
      glowIntensity: 12,
      radius: 205,
      tiltX: 62,
      tiltY: -14,
      offsetY: 25,
      speed: 18,
      direction: "cw",
      repeatMode: "auto",
      showBackdropDisc: true,
    },
  },
  {
    id: "dual-rings",
    label: "Dual Rings",
    desc: "Concentric counter-rotating typography rings",
    config: {
      shape: "dual",
      color: "#c084fc",
      glowColor: "#a855f7",
      glowIntensity: 9,
      radius: 175,
      tiltX: 15,
      tiltY: -10,
      offsetY: -5,
      speed: 24,
      direction: "cw",
      repeatMode: "auto",
      showBackdropDisc: true,
    },
  },
  {
    id: "golden-aura",
    label: "Warm Gold",
    desc: "Warm ambient halo radiating behind the portrait",
    config: {
      shape: "circle",
      color: "#fbbf24",
      glowColor: "#f59e0b",
      glowIntensity: 14,
      radius: 190,
      tiltX: 0,
      tiltY: 0,
      offsetY: -10,
      speed: 28,
      direction: "cw",
      repeatMode: "auto",
      showBackdropDisc: true,
    },
  },
];

interface BackdropCurvedTextProps {
  config: BackdropTextConfig;
  rotationAngle: number;
}

export function BackdropCurvedText({
  config,
  rotationAngle,
}: BackdropCurvedTextProps) {
  const uniqueId = useId().replace(/:/g, "");
  const primaryPathId = `text-path-primary-${uniqueId}`;
  const secondaryPathId = `text-path-secondary-${uniqueId}`;
  const archPathId = `text-path-arch-${uniqueId}`;

  // Build repeated text string
  const rawText = (config.text || "Muhammad afriza Dwi Isnandarsyah").trim();
  const sep = config.separator || " • ";
  const fullSnippet = `${rawText}${sep}`;

  // Estimate repeat count
  let repeatCount = 3;
  if (config.repeatMode === "auto") {
    // 2 * PI * r
    const circ = 2 * Math.PI * config.radius;
    const estCharWidth = config.fontSize * 0.65 + config.letterSpacing;
    const snippetPx = fullSnippet.length * estCharWidth;
    repeatCount = Math.max(1, Math.round(circ / Math.max(snippetPx, 1)));
  } else {
    repeatCount = parseInt(config.repeatMode, 10) || 3;
  }

  const primaryText = Array(repeatCount).fill(fullSnippet).join("");
  const secondaryText = Array(Math.max(1, repeatCount - 1))
    .fill(`AFRIZA • SOFTWARE & GAME DEV • FULL-STACK • `)
    .join("");

  const r = config.radius;
  const innerR = Math.max(70, Math.round(r * 0.78));

  // Circle paths (SVG circle with two semicircles for clean 100% path coverage)
  const circleD = `M 0,-${r} A ${r},${r} 0 0,1 0,${r} A ${r},${r} 0 0,1 0,-${r}`;
  const innerCircleD = `M 0,-${innerR} A ${innerR},${innerR} 0 0,1 0,${innerR} A ${innerR},${innerR} 0 0,1 0,-${innerR}`;

  // Arch path (smooth crest hugging the shoulders and curving over head)
  const archWidth = r * 1.15;
  const archHeight = r * 0.95;
  const archD = `M -${archWidth},${archHeight * 0.5} C -${archWidth * 0.75},-${archHeight} ${archWidth * 0.75},-${archHeight} ${archWidth},${archHeight * 0.5}`;

  // Font family resolution
  const fontStyle =
    config.fontFamily === "mono"
      ? "var(--font-jetbrains-mono), monospace"
      : "var(--font-sans-editorial), sans-serif";

  // Glow filter
  const glowFilter =
    config.glowIntensity > 0
      ? `drop-shadow(0 0 ${config.glowIntensity}px ${config.glowColor || config.color}) drop-shadow(0 0 ${Math.round(config.glowIntensity * 1.8)}px ${config.glowColor || config.color})`
      : "none";

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[3]"
      style={{
        transform: `translate(${config.offsetX}px, ${config.offsetY}px) perspective(900px) rotateX(${config.tiltX}deg) rotateY(${config.tiltY}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Optional soft radial disc aura behind text */}
      {config.showBackdropDisc && (
        <div
          className="absolute rounded-full blur-[42px] pointer-events-none transition-all duration-300"
          style={{
            width: `${r * 2.1}px`,
            height: `${r * 2.1}px`,
            backgroundColor: config.color,
            opacity: config.discOpacity,
            transform: "translateZ(-20px)",
          }}
        />
      )}

      {/* Primary Curved Text Canvas */}
      <svg
        viewBox="-350 -350 700 700"
        className="w-[700px] h-[700px] max-w-none overflow-visible pointer-events-none"
      >
        <defs>
          <path id={primaryPathId} d={circleD} fill="none" />
          <path id={secondaryPathId} d={innerCircleD} fill="none" />
          <path id={archPathId} d={archD} fill="none" />
        </defs>

        {/* MODE: ARCH */}
        {config.shape === "arch" && (
          <g style={{ filter: glowFilter }}>
            {/* Guide faint arc line */}
            <path
              d={archD}
              fill="none"
              stroke={config.color}
              strokeWidth="1"
              strokeDasharray="4 6"
              opacity={config.opacity * 0.35}
            />
            <text
              fill={config.color}
              fontSize={config.fontSize}
              fontFamily={fontStyle}
              fontWeight={config.fontWeight}
              letterSpacing={config.letterSpacing}
              textAnchor="middle"
              style={{
                textTransform: config.uppercase ? "uppercase" : "none",
                opacity: config.opacity,
              }}
            >
              <textPath href={`#${archPathId}`} startOffset="50%">
                {rawText}
              </textPath>
            </text>
          </g>
        )}

        {/* MODE: CIRCLE / ORBIT3D */}
        {(config.shape === "circle" || config.shape === "orbit3d") && (
          <g
            style={{
              transform: `rotate(${rotationAngle}deg)`,
              transformOrigin: "0 0",
              filter: glowFilter,
            }}
          >
            {/* Faint subtle guide circle */}
            <circle
              cx="0"
              cy="0"
              r={r}
              fill="none"
              stroke={config.color}
              strokeWidth="0.75"
              strokeDasharray="3 7"
              opacity={config.opacity * 0.25}
            />

            <text
              fill={config.color}
              fontSize={config.fontSize}
              fontFamily={fontStyle}
              fontWeight={config.fontWeight}
              letterSpacing={config.letterSpacing}
              style={{
                textTransform: config.uppercase ? "uppercase" : "none",
                opacity: config.opacity,
              }}
            >
              <textPath href={`#${primaryPathId}`} startOffset="0%">
                {primaryText}
              </textPath>
            </text>
          </g>
        )}

        {/* MODE: DUAL RINGS */}
        {config.shape === "dual" && (
          <>
            {/* Outer ring rotating in primary direction */}
            <g
              style={{
                transform: `rotate(${rotationAngle}deg)`,
                transformOrigin: "0 0",
                filter: glowFilter,
              }}
            >
              <circle
                cx="0"
                cy="0"
                r={r}
                fill="none"
                stroke={config.color}
                strokeWidth="0.75"
                strokeDasharray="4 6"
                opacity={config.opacity * 0.3}
              />
              <text
                fill={config.color}
                fontSize={config.fontSize}
                fontFamily={fontStyle}
                fontWeight={config.fontWeight}
                letterSpacing={config.letterSpacing}
                style={{
                  textTransform: config.uppercase ? "uppercase" : "none",
                  opacity: config.opacity,
                }}
              >
                <textPath href={`#${primaryPathId}`} startOffset="0%">
                  {primaryText}
                </textPath>
              </text>
            </g>

            {/* Inner ring counter-rotating */}
            <g
              style={{
                transform: `rotate(${-rotationAngle * 1.25}deg)`,
                transformOrigin: "0 0",
                filter: glowFilter,
              }}
            >
              <circle
                cx="0"
                cy="0"
                r={innerR}
                fill="none"
                stroke={config.color}
                strokeWidth="0.75"
                strokeDasharray="2 4"
                opacity={config.opacity * 0.25}
              />
              <text
                fill={config.color}
                fontSize={Math.max(10, config.fontSize - 3)}
                fontFamily={fontStyle}
                fontWeight={config.fontWeight}
                letterSpacing={config.letterSpacing + 1}
                style={{
                  textTransform: "uppercase",
                  opacity: config.opacity * 0.85,
                }}
              >
                <textPath href={`#${secondaryPathId}`} startOffset="0%">
                  {secondaryText}
                </textPath>
              </text>
            </g>
          </>
        )}
      </svg>
    </div>
  );
}
