"use client";

import React, { useState } from "react";
import {
  BackdropTextConfig,
  BACKDROP_PRESETS,
} from "./BackdropCurvedText";

interface BackdropTextControlsProps {
  config: BackdropTextConfig;
  onChange: (updater: (prev: BackdropTextConfig) => BackdropTextConfig) => void;
  onReset: () => void;
}

export function BackdropTextControls({
  config,
  onChange,
  onReset,
}: BackdropTextControlsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"text" | "shape" | "motion" | "style">("text");

  const update = <K extends keyof BackdropTextConfig>(key: K, val: BackdropTextConfig[K]) => {
    onChange((prev) => ({ ...prev, [key]: val }));
  };

  const applyPreset = (presetConfig: Partial<BackdropTextConfig>) => {
    onChange((prev) => ({ ...prev, ...presetConfig }));
  };

  const COLOR_PALETTES = [
    { label: "Lime", hex: "#c6ff3d" },
    { label: "Sky Blue", hex: "#38bdf8" },
    { label: "Violet", hex: "#c084fc" },
    { label: "Gold", hex: "#fbbf24" },
    { label: "White", hex: "#ffffff" },
    { label: "Emerald", hex: "#34d399" },
    { label: "Coral", hex: "#fb7185" },
  ];

  return (
    <div className="w-full max-w-[360px] mx-auto lg:mx-0 mt-5">
      {/* Editorial Minimalist Quick Bar - Pure Typography, No Emojis/Icons */}
      <div className="flex items-center justify-between gap-1.5 p-1.5 rounded-full bg-[var(--glass)] border border-[var(--line)] backdrop-blur-md">
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={() => update("isPlaying", !config.isPlaying)}
          className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-colors text-[var(--fg)] hover:bg-[var(--line)]"
        >
          {config.isPlaying ? "PAUSE" : "PLAY"}
        </button>

        {/* Shape Pills */}
        <div className="flex items-center gap-1">
          {[
            { id: "circle", label: "Circle" },
            { id: "arch", label: "Arch" },
            { id: "orbit3d", label: "3D" },
            { id: "dual", label: "Dual" },
          ].map((item) => {
            const isActive = config.shape === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => update("shape", item.id as BackdropTextConfig["shape"])}
                className={`text-[11px] px-2.5 py-1 rounded-full font-mono transition-all duration-150 ${
                  isActive
                    ? "bg-[var(--acc)] text-[var(--acc-ink)] font-semibold shadow-sm"
                    : "text-[var(--mut)] hover:text-[var(--fg)] hover:bg-[var(--line)]/50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Tune Modal Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="px-3 py-1 rounded-full bg-[var(--line)] hover:bg-[var(--acc)] hover:text-[var(--acc-ink)] text-[var(--fg)] text-[11px] font-mono tracking-wider uppercase transition-all"
        >
          TUNE
        </button>
      </div>

      {/* Expanded Customizer Modal Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="aura-text-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[540px] max-h-[88vh] flex flex-col rounded-2xl bg-[var(--bg2)] border border-[var(--line)] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--line)] bg-[var(--glass)]">
              <div>
                <h3 id="aura-text-title" className="text-base font-semibold text-[var(--fg)] tracking-tight">
                  Backdrop Typography Orbit
                </h3>
                <p className="text-[12px] text-[var(--mut)]">
                  Fine-tune the rotating text path behind your silhouette
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-[var(--mut)] hover:text-[var(--fg)] hover:bg-[var(--line)] transition-colors"
              >
                CLOSE
              </button>
            </div>

            {/* Presets Row */}
            <div className="px-6 py-2.5 border-b border-[var(--line)] bg-[var(--bg)]/50 overflow-x-auto flex items-center gap-2 no-scrollbar">
              <span className="text-[10px] font-mono text-[var(--mut)] uppercase tracking-wider shrink-0 mr-1">
                PRESETS:
              </span>
              {BACKDROP_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => applyPreset(preset.config)}
                  className="shrink-0 text-[11px] font-mono px-3 py-1 rounded-full border border-[var(--line)] bg-[var(--glass)] hover:border-[var(--acc)]/50 hover:bg-[var(--line)] transition-all text-[var(--fg)]"
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Tabs */}
            <div className="grid grid-cols-4 px-6 border-b border-[var(--line)] text-[12px] font-mono uppercase tracking-wider bg-[var(--bg)]">
              {[
                { id: "text", label: "Text" },
                { id: "shape", label: "Shape" },
                { id: "motion", label: "Motion" },
                { id: "style", label: "Style" },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`py-3 text-center border-b-2 transition-all duration-150 ${
                      isActive
                        ? "border-[var(--acc)] text-[var(--acc)] font-semibold"
                        : "border-transparent text-[var(--mut)] hover:text-[var(--fg)]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Contents */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {/* TAB 1: TEXT */}
              {activeTab === "text" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[var(--mut)] uppercase tracking-wider mb-2">
                      Custom String
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={config.text}
                        onChange={(e) => update("text", e.target.value)}
                        placeholder="Enter text..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--glass)] border border-[var(--line)] text-[var(--fg)] text-[14px] focus:outline-none focus:border-[var(--acc)] transition-colors pr-28"
                      />
                      <button
                        type="button"
                        onClick={() => update("text", "Muhammad afriza Dwi Isnandarsyah")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-[var(--line)] text-[var(--mut)] hover:text-[var(--fg)]"
                      >
                        Reset Name
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-[var(--mut)] uppercase tracking-wider mb-2">
                        Separator
                      </label>
                      <div className="flex items-center gap-1.5">
                        {[" • ", " ✦ ", " ★ ", " | ", " // "].map((sep) => (
                          <button
                            key={sep}
                            type="button"
                            onClick={() => update("separator", sep)}
                            className={`flex-1 py-1.5 rounded-lg border text-[12px] font-mono transition-all ${
                              config.separator === sep
                                ? "border-[var(--acc)] bg-[var(--acc)]/15 text-[var(--acc)] font-bold"
                                : "border-[var(--line)] bg-[var(--glass)] text-[var(--mut)] hover:text-[var(--fg)]"
                            }`}
                          >
                            {sep.trim()}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[var(--mut)] uppercase tracking-wider mb-2">
                        Repeat Mode
                      </label>
                      <div className="flex items-center gap-1.5">
                        {["auto", "1", "2", "3", "4"].map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() =>
                              update("repeatMode", mode as BackdropTextConfig["repeatMode"])
                            }
                            className={`flex-1 py-1.5 rounded-lg border text-[11px] font-mono uppercase transition-all ${
                              config.repeatMode === mode
                                ? "border-[var(--acc)] bg-[var(--acc)]/15 text-[var(--acc)] font-bold"
                                : "border-[var(--line)] bg-[var(--glass)] text-[var(--mut)] hover:text-[var(--fg)]"
                            }`}
                          >
                            {mode === "auto" ? "Auto" : `${mode}x`}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between text-[11px] font-mono text-[var(--mut)] uppercase mb-1.5">
                        <span>Font Size</span>
                        <span className="text-[var(--fg)]">{config.fontSize}px</span>
                      </div>
                      <input
                        type="range"
                        min="11"
                        max="26"
                        step="1"
                        value={config.fontSize}
                        onChange={(e) => update("fontSize", Number(e.target.value))}
                        className="w-full accent-[var(--acc)]"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-mono text-[var(--mut)] uppercase mb-1.5">
                        <span>Letter Spacing</span>
                        <span className="text-[var(--fg)]">{config.letterSpacing}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="14"
                        step="1"
                        value={config.letterSpacing}
                        onChange={(e) => update("letterSpacing", Number(e.target.value))}
                        className="w-full accent-[var(--acc)]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--glass)] border border-[var(--line)]">
                    <span className="text-[13px] text-[var(--fg)]">Uppercase Characters</span>
                    <button
                      type="button"
                      onClick={() => update("uppercase", !config.uppercase)}
                      className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all ${
                        config.uppercase
                          ? "bg-[var(--acc)] text-[var(--acc-ink)] font-semibold"
                          : "bg-[var(--line)] text-[var(--mut)]"
                      }`}
                    >
                      {config.uppercase ? "ON" : "OFF"}
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: SHAPE */}
              {activeTab === "shape" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[var(--mut)] uppercase tracking-wider mb-2">
                      Geometry
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: "circle", label: "Circle", desc: "360° Full Orbit" },
                        { id: "arch", label: "Arch", desc: "Shoulder Crest" },
                        { id: "orbit3d", label: "3D Orbit", desc: "Tilted Ring" },
                        { id: "dual", label: "Dual Ring", desc: "Counter Rotating" },
                      ].map((shape) => {
                        const isSelected = config.shape === shape.id;
                        return (
                          <button
                            key={shape.id}
                            type="button"
                            onClick={() =>
                              update("shape", shape.id as BackdropTextConfig["shape"])
                            }
                            className={`p-3 rounded-xl border text-left transition-all ${
                              isSelected
                                ? "border-[var(--acc)] bg-[var(--acc)]/10 text-[var(--fg)]"
                                : "border-[var(--line)] bg-[var(--glass)] text-[var(--mut)] hover:text-[var(--fg)]"
                            }`}
                          >
                            <span className="block text-[12px] font-mono font-medium text-[var(--fg)] mb-0.5">
                              {shape.label}
                            </span>
                            <span className="text-[10px] text-[var(--mut)]">{shape.desc}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-mono text-[var(--mut)] uppercase mb-1.5">
                      <span>Radius / Scale</span>
                      <span className="text-[var(--fg)]">{config.radius}px</span>
                    </div>
                    <input
                      type="range"
                      min="120"
                      max="260"
                      step="5"
                      value={config.radius}
                      onChange={(e) => update("radius", Number(e.target.value))}
                      className="w-full accent-[var(--acc)]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-mono text-[var(--mut)] uppercase mb-1.5">
                      <span>Backdrop Vertical Offset (Y)</span>
                      <span className="text-[var(--fg)]">
                        {config.offsetY > 0 ? `+${config.offsetY}` : config.offsetY}px
                      </span>
                    </div>
                    <input
                      type="range"
                      min="-80"
                      max="80"
                      step="2"
                      value={config.offsetY}
                      onChange={(e) => update("offsetY", Number(e.target.value))}
                      className="w-full accent-[var(--acc)]"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[var(--mut)] mt-1">
                      <span>NECK / HEAD</span>
                      <span>CENTER</span>
                      <span>LOWER BACK</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-1">
                    <div>
                      <div className="flex justify-between text-[11px] font-mono text-[var(--mut)] uppercase mb-1.5">
                        <span>3D Tilt X</span>
                        <span className="text-[var(--fg)]">{config.tiltX}°</span>
                      </div>
                      <input
                        type="range"
                        min="-75"
                        max="75"
                        step="2"
                        value={config.tiltX}
                        onChange={(e) => update("tiltX", Number(e.target.value))}
                        className="w-full accent-[var(--acc)]"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-mono text-[var(--mut)] uppercase mb-1.5">
                        <span>3D Tilt Y</span>
                        <span className="text-[var(--fg)]">{config.tiltY}°</span>
                      </div>
                      <input
                        type="range"
                        min="-60"
                        max="60"
                        step="2"
                        value={config.tiltY}
                        onChange={(e) => update("tiltY", Number(e.target.value))}
                        className="w-full accent-[var(--acc)]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: MOTION */}
              {activeTab === "motion" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--glass)] border border-[var(--line)]">
                    <div>
                      <span className="block text-[13px] text-[var(--fg)] font-medium">
                        Automatic Orbit Motion
                      </span>
                      <span className="text-[11px] text-[var(--mut)]">
                        Continuous smooth loop around the portrait
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => update("isPlaying", !config.isPlaying)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all ${
                        config.isPlaying
                          ? "bg-[var(--acc)] text-[var(--acc-ink)] font-semibold"
                          : "bg-[var(--line)] text-[var(--fg)]"
                      }`}
                    >
                      {config.isPlaying ? "PAUSE" : "RESUME"}
                    </button>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-mono text-[var(--mut)] uppercase mb-1.5">
                      <span>Cycle Speed</span>
                      <span className="text-[var(--fg)]">{config.speed}s / turn</span>
                    </div>
                    <input
                      type="range"
                      min="6"
                      max="55"
                      step="1"
                      value={config.speed}
                      onChange={(e) => update("speed", Number(e.target.value))}
                      className="w-full accent-[var(--acc)]"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[var(--mut)] mt-1">
                      <span>FAST (6s)</span>
                      <span>GENTLE (55s)</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[var(--mut)] uppercase tracking-wider mb-2">
                      Orbit Direction
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => update("direction", "cw")}
                        className={`py-2 px-3 rounded-xl border text-[11px] font-mono uppercase tracking-wider transition-all ${
                          config.direction === "cw"
                            ? "border-[var(--acc)] bg-[var(--acc)]/10 text-[var(--acc)] font-semibold"
                            : "border-[var(--line)] bg-[var(--glass)] text-[var(--mut)] hover:text-[var(--fg)]"
                        }`}
                      >
                        Clockwise
                      </button>

                      <button
                        type="button"
                        onClick={() => update("direction", "ccw")}
                        className={`py-2 px-3 rounded-xl border text-[11px] font-mono uppercase tracking-wider transition-all ${
                          config.direction === "ccw"
                            ? "border-[var(--acc)] bg-[var(--acc)]/10 text-[var(--acc)] font-semibold"
                            : "border-[var(--line)] bg-[var(--glass)] text-[var(--mut)] hover:text-[var(--fg)]"
                        }`}
                      >
                        Counter-CW
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-mono text-[var(--mut)] uppercase mb-1.5">
                      <span>Manual Angle</span>
                      <span className="text-[var(--fg)]">{config.manualRotation}°</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      step="2"
                      value={config.manualRotation}
                      onChange={(e) => update("manualRotation", Number(e.target.value))}
                      className="w-full accent-[var(--acc)]"
                    />
                  </div>
                </div>
              )}

              {/* TAB 4: STYLE */}
              {activeTab === "style" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[var(--mut)] uppercase tracking-wider mb-2">
                      Color Palette
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {COLOR_PALETTES.map((palette) => {
                        const isSelected =
                          config.color.toLowerCase() === palette.hex.toLowerCase();
                        return (
                          <button
                            key={palette.hex}
                            type="button"
                            onClick={() => {
                              update("color", palette.hex);
                              update("glowColor", palette.hex);
                            }}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-mono transition-all ${
                              isSelected
                                ? "border-[var(--acc)] bg-[var(--acc)]/15 text-[var(--fg)] ring-1 ring-[var(--acc)]"
                                : "border-[var(--line)] bg-[var(--glass)] text-[var(--mut)] hover:text-[var(--fg)]"
                            }`}
                          >
                            <span
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: palette.hex }}
                            />
                            <span>{palette.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={config.color}
                      onChange={(e) => {
                        update("color", e.target.value);
                        update("glowColor", e.target.value);
                      }}
                      className="w-9 h-9 rounded-xl cursor-pointer bg-transparent border-0"
                    />
                    <input
                      type="text"
                      value={config.color}
                      onChange={(e) => {
                        update("color", e.target.value);
                        update("glowColor", e.target.value);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[var(--glass)] border border-[var(--line)] text-[var(--fg)] font-mono text-[12px] w-28 uppercase"
                    />
                    <span className="text-[11px] font-mono text-[var(--mut)] uppercase">Custom Hex</span>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-mono text-[var(--mut)] uppercase mb-1.5">
                      <span>Luminescence / Glow</span>
                      <span className="text-[var(--fg)]">{config.glowIntensity}px</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="24"
                      step="1"
                      value={config.glowIntensity}
                      onChange={(e) => update("glowIntensity", Number(e.target.value))}
                      className="w-full accent-[var(--acc)]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-mono text-[var(--mut)] uppercase mb-1.5">
                      <span>Opacity</span>
                      <span className="text-[var(--fg)]">
                        {Math.round(config.opacity * 100)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="1.0"
                      step="0.05"
                      value={config.opacity}
                      onChange={(e) => update("opacity", Number(e.target.value))}
                      className="w-full accent-[var(--acc)]"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--glass)] border border-[var(--line)]">
                    <div>
                      <span className="block text-[13px] text-[var(--fg)] font-medium">
                        Soft Ambient Halo Disc
                      </span>
                      <span className="text-[11px] text-[var(--mut)]">
                        Subtle radiant glow behind the subject
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => update("showBackdropDisc", !config.showBackdropDisc)}
                      className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all ${
                        config.showBackdropDisc
                          ? "bg-[var(--acc)] text-[var(--acc-ink)] font-semibold"
                          : "bg-[var(--line)] text-[var(--mut)]"
                      }`}
                    >
                      {config.showBackdropDisc ? "ON" : "OFF"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-[var(--line)] bg-[var(--glass)]">
              <button
                type="button"
                onClick={onReset}
                className="text-[11px] font-mono uppercase tracking-wider text-[var(--mut)] hover:text-[var(--fg)] transition-colors"
              >
                Reset Default
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-xl bg-[var(--acc)] text-[var(--acc-ink)] font-semibold text-[12px] font-mono uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Apply & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
