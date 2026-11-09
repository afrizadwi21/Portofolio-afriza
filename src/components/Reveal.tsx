"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  variant?: "up" | "left" | "right" | "zoom";
  delayMs?: number;
  className?: string;
}

export function Reveal({
  children,
  variant = "up",
  delayMs = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return "none";
    switch (variant) {
      case "left":
        return "translateX(-52px)";
      case "right":
        return "translateX(52px)";
      case "zoom":
        return "scale(0.94) translateY(24px)";
      default:
        return "translateY(26px)";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        filter: isVisible ? "none" : "blur(8px)",
        transition:
          "opacity 0.85s cubic-bezier(.2,.8,.2,1), transform 0.85s cubic-bezier(.2,.8,.2,1), filter 0.85s cubic-bezier(.2,.8,.2,1)",
        transitionDelay: `${delayMs}ms`,
      }}
      className={`motion-reduce:!opacity-100 motion-reduce:!transform-none motion-reduce:!filter-none ${className}`}
    >
      {children}
    </div>
  );
}

export function TitleReveal({
  text,
  className = "",
  highlightWord,
  accentColor = "var(--acc)",
}: {
  text: string;
  className?: string;
  highlightWord?: string;
  accentColor?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <h2
      ref={ref}
      className={`text-balance font-semibold tracking-[-0.035em] text-[clamp(34px,5.4vw,64px)] leading-[1.05] ${className}`}
    >
      {words.map((word, i) => {
        const isHighlight =
          highlightWord &&
          word.toLowerCase().includes(highlightWord.toLowerCase());
        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-top py-0.5 mr-[0.25em]"
          >
            <span
              style={{
                transform: isVisible
                  ? "none"
                  : "translateY(112%) rotate(5deg)",
                transformOrigin: "left bottom",
                transition: `transform 0.9s cubic-bezier(.2,.8,.2,1) ${i * 70}ms`,
                color: isHighlight ? accentColor : undefined,
              }}
              className="inline-block motion-reduce:!transform-none"
            >
              {word}
            </span>
          </span>
        );
      })}
    </h2>
  );
}
