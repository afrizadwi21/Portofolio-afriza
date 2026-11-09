"use client";

import React, { useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import { PROFILE_DATA } from "../lib/data";

const DEFAULT_CODE = `// Edit kode & tekan Run (Ctrl+Enter)
const dev = {
  name: "${PROFILE_DATA.name}",
  role: "Web Developer Student",
  school: "SMKN 4 Padalarang",
  learning: ["Next.js", "Go", "Docker"],
  goal: "Full-Stack"
};

console.log(\`\${dev.name} -> \${dev.goal}\`);
console.log("Focus:", dev.learning.join(", "));`;

const fmt = (v: unknown) => (typeof v === "string" ? v : JSON.stringify(v));

function executeSnippet(source: string): { logs: string[]; error: string | null } {
  const logs: string[] = [];
  const push = (...args: unknown[]) => logs.push(args.map(fmt).join(" "));
  try {
    const js = source.replace(/:\s*[A-Za-z0-9_<>\[\]|&\s]+(?=[,=;\)\n])/g, "");
    const out = new Function("console", `"use strict";\n${js}`)({ log: push, info: push, warn: push, error: push });
    if (!logs.length && out !== undefined) logs.push(fmt(out));
    return { logs: logs.length ? logs : ["// Tidak ada output console.log"], error: null };
  } catch (err) {
    return { logs, error: err instanceof Error ? err.message : String(err) };
  }
}

export function CodePlayground() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [result, setResult] = useState(() => executeSnippet(DEFAULT_CODE));
  const run = (src = code) => setResult(executeSnippet(src));
  const reset = () => {
    setCode(DEFAULT_CODE);
    setResult(executeSnippet(DEFAULT_CODE));
  };

  return (
    <div className="mono bg-[var(--bg2)] border border-[var(--line)] rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-0.5">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--line)] text-[11px] text-[var(--mut)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--line)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--line)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--line)]" />
        <span className="ml-1 text-[var(--fg)] font-medium">afriza.ts</span>
        <div className="ml-auto flex items-center gap-1.5">
          <button
            type="button"
            onClick={reset}
            aria-label="Reset code"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-[var(--line)] text-[var(--mut)] hover:text-[var(--fg)] hover:bg-[var(--glass)] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
          <button
            type="button"
            onClick={() => run(code)}
            aria-label="Run code"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[var(--acc)] text-[var(--acc-ink)] font-semibold transition-opacity hover:opacity-90 cursor-pointer"
          >
            <Play className="w-3 h-3 fill-current" /> Run
          </button>
        </div>
      </div>

      <label htmlFor="afriza-ts-editor" className="sr-only">Edit kode TypeScript afriza.ts</label>
      <textarea
        id="afriza-ts-editor"
        value={code}
        onChange={(e) => { setCode(e.target.value); run(e.target.value); }}
        onKeyDown={(e) => { if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); run(code); } }}
        spellCheck={false}
        rows={9}
        className="w-full p-4 bg-transparent text-[12.5px] leading-[1.7] text-[var(--fg)] resize-y focus:outline-none focus:bg-[var(--bg)]/40 font-mono"
      />

      <div className="border-t border-[var(--line)] bg-[var(--bg)]/60 px-4 py-3 text-[12px] leading-[1.6]">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.06em] text-[var(--mut)] mb-1.5">
          <span>Output Console</span>
          <span className={result.error ? "text-red-400" : "text-[var(--acc)]"}>{result.error ? "Error" : "Live"}</span>
        </div>
        {result.error ? (
          <pre className="text-red-400 whitespace-pre-wrap break-words font-mono">{result.error}</pre>
        ) : (
          <div className="space-y-1">
            {result.logs.map((line, i) => (
              <div key={i} className="flex items-start gap-2 text-[var(--fg)]">
                <span className="text-[var(--acc)] select-none">&gt;</span>
                <span className="whitespace-pre-wrap break-words">{line}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
