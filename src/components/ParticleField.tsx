"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface ParticleFieldProps {
  id?: string;
  className?: string;
  densityDivider?: number;
  maxPoints?: number;
  containerRef?: React.RefObject<HTMLElement | null>;
}

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface Ripple {
  x: number;
  y: number;
  t: number;
}

function hexToRgb(hex: string): string {
  const clean = hex.trim().replace("#", "");
  if (clean.length < 6) return "198, 255, 61";
  return `${parseInt(clean.slice(0, 2), 16)}, ${parseInt(
    clean.slice(2, 4),
    16
  )}, ${parseInt(clean.slice(4, 6), 16)}`;
}

export function ParticleField({
  id = "particle-canvas",
  className = "",
  densityDivider = 6500,
  maxPoints = 190,
  containerRef,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = containerRef?.current || canvas.parentElement;
    if (!parent) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let points: Point[] = [];
    const pointer = { x: -999, y: -999, active: false };
    let ripples: Ripple[] = [];
    let isVisible = true;
    let animId = 0;

    let themeColors = { accRgb: "198, 255, 61", fgRgb: "244, 245, 242", contrastMultiplier: 1.5, isLight: false };

    const updateThemeColors = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light" ||
        (!document.documentElement.getAttribute("data-theme") && resolvedTheme === "light");
      const styles = getComputedStyle(document.documentElement);
      const accVal = styles.getPropertyValue("--acc") || (isLight ? "#4d7a00" : "#c6ff3d");
      const fgVal = isLight ? "#2a3b5c" : (styles.getPropertyValue("--fg") || "#f4f5f2");
      themeColors = {
        accRgb: hexToRgb(accVal),
        fgRgb: hexToRgb(fgVal),
        contrastMultiplier: isLight ? 2.6 : 1.6,
        isLight,
      };
    };

    updateThemeColors();

    const themeObserver = new MutationObserver(() => {
      updateThemeColors();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (!width || !height) return;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(maxPoints, (width * height) / densityDivider));
      points = [];
      for (let i = 0; i < count; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.5 + 0.8,
        });
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handlePointerDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest("a, button, input, label")) return;
      const rect = parent.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
      ripples.push({ x: pointer.x, y: pointer.y, t: 0 });

      points.forEach((p) => {
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < 260) {
          const force = (1 - dist / 260) * 5;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      });
    };

    const render = () => {
      animId = requestAnimationFrame(render);
      if (!isVisible || !width) return;

      ctx.clearRect(0, 0, width, height);

      // Update positions
      points.forEach((p) => {
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < 150) {
            const force = (1 - dist / 150) * 0.5;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx *= 0.96;
        p.vy *= 0.96;
        const speed = Math.hypot(p.vx, p.vy);
        if (speed < 0.12) {
          p.vx += (Math.random() - 0.5) * 0.03;
          p.vy += (Math.random() - 0.5) * 0.03;
        }

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      });

      // Draw lines and particles
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 150) {
            const alpha = Math.min(
              0.85,
              0.28 * themeColors.contrastMultiplier * (1 - dist / 150)
            );
            ctx.strokeStyle = `rgba(${themeColors.fgRgb}, ${alpha})`;
            ctx.lineWidth = 1.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Pointer accent line
        if (pointer.active) {
          const pDist = Math.hypot(p1.x - pointer.x, p1.y - pointer.y);
          if (pDist < 180) {
            ctx.strokeStyle = `rgba(${themeColors.accRgb}, ${
              0.95 * (1 - pDist / 180)
            })`;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }

        // Draw particle dot
        const isHovered =
          pointer.active && Math.hypot(p1.x - pointer.x, p1.y - pointer.y) < 150;
        ctx.fillStyle = `rgba(${isHovered ? themeColors.accRgb : themeColors.fgRgb}, 0.9)`;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw ripple shockwaves
      ripples = ripples.filter((r) => {
        r.t += 0.025;
        return r.t < 1;
      });
      ripples.forEach((r) => {
        ctx.strokeStyle = `rgba(${themeColors.accRgb}, ${(1 - r.t) * 0.8})`;
        ctx.lineWidth = 2 * (1 - r.t) + 0.5;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.t * 220, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Pointer glow radial gradient
      if (pointer.active) {
        const glow = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          120
        );
        glow.addColorStop(0, `rgba(${themeColors.accRgb}, 0.16)`);
        glow.addColorStop(1, `rgba(${themeColors.accRgb}, 0)`);
        ctx.fillStyle = glow;
        ctx.fillRect(pointer.x - 120, pointer.y - 120, 240, 240);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(parent);

    parent.addEventListener("pointermove", handlePointerMove as EventListener);
    parent.addEventListener("pointerleave", handlePointerLeave);
    parent.addEventListener("pointerdown", handlePointerDown as EventListener);
    window.addEventListener("resize", resize);

    resize();
    render();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      themeObserver.disconnect();
      parent.removeEventListener("pointermove", handlePointerMove as EventListener);
      parent.removeEventListener("pointerleave", handlePointerLeave);
      parent.removeEventListener("pointerdown", handlePointerDown as EventListener);
      window.removeEventListener("resize", resize);
    };
  }, [containerRef, densityDivider, maxPoints, resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
