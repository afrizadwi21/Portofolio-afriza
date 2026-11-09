# Design System

## Visual Identity & Philosophy

- **Mode**: Experience & Persuade.
- **Theme**: Dark Minimalist Editorial with Lime & Blue Accents.
- **Atmosphere**: Technical yet tactile, calm charcoal background, crisp wireframe particle canvas, sharp monospace tags, and punchy editorial headings.

## Color Tokens

### Dark Mode (Default)
- `--bg`: `#0b0c0d` (Deep charcoal canvas)
- `--bg2`: `#131517` (Elevated card & surface background)
- `--fg`: `#f4f5f2` (Crisp off-white text)
- `--mut`: `#8b9096` (Muted secondary text, contrast ≥ 4.5:1)
- `--line`: `rgba(255, 255, 255, 0.09)` (Subtle surface dividers & borders)
- `--glass`: `rgba(255, 255, 255, 0.04)` (Translucent chips & badges)
- `--acc`: `#c6ff3d` (Electric Lime, high energy primary accent)
- `--acc-ink`: `#0b0c0d` (Dark text on lime buttons)
- `--blue`: `#5b8cff` (Soft atmospheric blue secondary)

### Light Mode
- `--bg`: `#f5f6f2` (Warm porcelain canvas)
- `--bg2`: `#ffffff` (Crisp card background)
- `--fg`: `#0e0f10` (Near-black body copy)
- `--mut`: `#5d6269` (Charcoal secondary text, contrast compliant)
- `--line`: `rgba(0, 0, 0, 0.1)` (Delicate line dividers)
- `--glass`: `rgba(0, 0, 0, 0.035)` (Light translucent badges)
- `--acc`: `#4d7a00` (Deep lime/olive accent ensuring AA contrast)
- `--acc-ink`: `#ffffff` (White text on accent)
- `--blue`: `#2f5bd8` (Royal blue secondary accent)

## Typography

- **Display & Headings**: Space Grotesk (Weights: 600, 700; Tight tracking: -0.035em to -0.05em)
- **Body**: Space Grotesk (Weights: 400, 500; Line height: 1.6)
- **Technical & Labels**: JetBrains Mono (Weights: 400, 500; Uppercase tracking: 0.1em to 0.14em)

## Motion & Tactility

- Canvas particle field with cursor evasion, accent spring lines, and click ripple shockwaves.
- View Transitions API expanding circular wipe on theme toggle.
- Synchronized smooth marquee ticker with pause-on-hover.
- Full respect for `prefers-reduced-motion: reduce`.
