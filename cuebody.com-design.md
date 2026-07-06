---
version: alpha
name: Cuebody
description: An editorial women's health system with a magenta–violet duotone, cream surfaces, expressive serif italics, and pill-soft geometry.
colors:
  primary: "#D4028A"
  secondary: "#540995"
  magenta: "#D4028A"
  magenta-700: "#A60270"
  magenta-300: "#F2A6D6"
  magenta-100: "#FBDDF0"
  violet: "#540995"
  violet-700: "#3F0773"
  violet-300: "#B388D8"
  violet-100: "#ECDFF5"
  sand: "#D2B9A7"
  sand-200: "#EAD9CC"
  sky: "#BFD6E5"
  sky-200: "#DDE9F1"
  cream: "#FFF7F3"
  surface: "#FFFFFF"
  surface-alt: "#FBEDE5"
  ink: "#2A1430"
  text-secondary: "#5C4760"
  text-tertiary: "#8A7B90"
  hairline: "#EBDDE6"
  card-border: "rgba(84,9,149,0.06)"
  focus-ring: "rgba(212,2,138,0.10)"
  backdrop: "rgba(42,20,48,0.55)"
typography:
  display:
    fontFamily: "Lora"
    fontSize: "clamp(48px, 6vw, 88px)"
    fontWeight: 350
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "Lora"
    fontSize: "clamp(36px, 4vw, 56px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  headline-md:
    fontFamily: "Lora"
    fontSize: "clamp(28px, 3vw, 40px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline-sm:
    fontFamily: "Alexandria"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  lead:
    fontFamily: "Alexandria"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.45
  body-md:
    fontFamily: "Alexandria"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Alexandria"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  eyebrow:
    fontFamily: "Alexandria"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.14em"
    textTransform: "uppercase"
rounded:
  sm: 8px
  md: 14px
  lg: 22px
  xl: 32px
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  content-max: 1280px
  prose-max: 880px
shadows:
  sm: "0 1px 2px rgba(84,9,149,0.06), 0 1px 1px rgba(42,20,48,0.04)"
  md: "0 8px 24px -10px rgba(84,9,149,0.18), 0 2px 4px rgba(42,20,48,0.04)"
  lg: "0 24px 60px -20px rgba(84,9,149,0.28), 0 4px 10px rgba(212,2,138,0.06)"
  glow: "0 0 0 6px rgba(212,2,138,0.10)"
motion:
  ease: "cubic-bezier(0.22, 1, 0.36, 1)"
  duration-fast: 140ms
  duration: 240ms
  duration-slow: 480ms
components:
  button-primary:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.surface}"
    typography: "{typography.body-sm}"
    fontWeight: 600
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.magenta-700}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
  button-secondary:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.surface}"
    typography: "{typography.body-sm}"
    fontWeight: 600
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.violet-700}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.violet}"
    border: "1.5px solid {colors.hairline}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.card-border}"
    rounded: "{rounded.lg}"
    shadow: "{shadows.md}"
    padding: "36px"
  card-warm:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "36px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    border: "1.5px solid {colors.hairline}"
    rounded: "{rounded.full}"
    padding: "14px 20px"
  input-focus:
    border: "1.5px solid {colors.magenta}"
    shadow: "{shadows.glow}"
  chip:
    backgroundColor: "{colors.magenta-100}"
    textColor: "{colors.violet}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: "8px 14px"
---

## Overview
Cuebody is an AI health guide built exclusively for women — a smart, evolving confidante rather than a clinical tool. The system reads as editorial wellness with quiet authority: think a style-magazine longread on women's health, signed off by a soft-spoken companion. Layouts are spacious and contemplative, headlines are serif and expressive, and the palette pivots on a vivid magenta–violet duotone grounded by cream and dusted neutrals.

## Colors

### Brand duotone
- **Magenta (#D4028A):** The action pole — CTAs, links, emphasis, and the italic half of duotone headlines. Warm, vivid, and confident.
- **Violet (#540995):** The authority pole — headings, icons, and depth. Violet sets a thought; magenta finishes it in italic within the same headline.
- Each has 700/300/100 tints for hover states, soft accents, and pale tinted fills (`magenta-100 #FBDDF0`, `violet-100 #ECDFF5`).

### Secondary neutrals
- **Sand (#D2B9A7) / Sand-200 (#EAD9CC):** Warm, low-chroma neutrals that ground the brights.
- **Sky (#BFD6E5) / Sky-200 (#DDE9F1):** Cool counterweights, used sparingly.

### Surfaces
- **Cream (#FFF7F3):** The default page background — never pure white in marketing contexts.
- **Surface / White (#FFFFFF):** Reserved for cards and forms.
- **Surface-alt (#FBEDE5):** A warmer card option; pick one card tone per surface, don't mix.

### Ink & text
- **Ink (#2A1430):** Near-black with a violet undertone for primary text.
- **Secondary (#5C4760) / Tertiary (#8A7B90):** Violet-warmed grays for supporting copy.
- **Hairline (#EBDDE6):** The universal separator — a faint violet-tinted line.

## Typography
Lora (variable, optical sizing) is the secondary display voice: a warm, editorial serif with expressive italics. Headlines use light weights (350–400) with soft negative tracking. The signature type move is **italic switching mid-sentence** — violet roman text shifts to magenta italic within a single headline ("Built exclusively *for women*"). Italic is the brand's primary expressive device.

Alexandria is the primary typeface, handling everything functional: body copy, labels, forms, and UI. Eyebrows are uppercase Alexandria at 13px with wide 0.14em tracking in magenta — the only uppercase in the system.

Casing is deliberate: Title Case for headlines and CTAs, sentence case for supporting copy. The wordmark is always lowercase `cuebody` inline.

## Layout
Generous, contemplative whitespace. Marketing sections breathe at 80–120px vertical padding. Content maxes at 1280px, with copy constrained to ~880px for readability. Asymmetry is welcome — hero copy left-aligned with a soft radial glow blob bleeding off the right edge. Spacing follows a 4/8/12/16/24/32/48/64/96 scale.

## Elevation & Depth
Shadows are **tinted with violet, never gray** — gray shadows immediately break the brand. Three tiers (sm/md/lg) plus a magenta glow ring for emphasized elements. Hero glows are radial gradients with `filter: blur()`, not box-shadows. Backdrop blur appears only on modal scrims (rgba(42,20,48,0.55) + 6px blur) — never on cards or text containers.

## Shapes
Pill geometry is a brand signature: buttons and inputs are fully rounded (999px). Cards sit at 22px or 28–32px radius with luxurious internal padding — never less than 22px, often 36–40px on hero cards. Input borders are 1.5px, not 1px; the heavier weight reads as intentional. Focus rings bloom at 4–6px in tinted magenta rather than outlining.

## Components
Buttons are pill-shaped and filled: magenta primary darkening to magenta-700 on hover, deep-violet secondary darkening to violet-700. No scale-up on hover — only a subtle `scale(0.97)` on press. Links shift magenta → violet on hover.

Cards are white or warm `#FBEDE5`, with a 1px hairline at rgba(84,9,149,0.06) and soft violet-tinted shadow. Lift is subtle (shadow-md → shadow-lg); cards never tilt or scale.

Inputs match button pills — white fill, 1.5px hairline border, generous padding, blooming magenta focus ring.

Icons are Lucide at 1.6 stroke, 24×24, violet by default — never emoji, icon fonts, or unicode glyphs. Icons only carry violet, magenta, or current foreground.

## Motion
Slow and settling: `cubic-bezier(0.22, 1, 0.36, 1)` at 240–480ms. Fades and gentle Y-translates only — no bounces, springs, or popping. No scroll-triggered animation chaos; the brand is contemplative.

## Voice
- Second-person, direct: "you / your," never "users" or "patients." The body is a participant: "Your body's signals."
- Short, declarative, lyrical fragments: "Built to Listen. Built for Her."
- Owned vocabulary: "cues," "decode," "confidante," "whole person care."
- No emoji, no exclamation marks, no clinical jargon, no tech-bro AI language ("AI-powered," "supercharge").

## Do's and Don'ts
- Do use the violet-roman → magenta-italic switch as the primary headline emphasis.
- Do keep cream as the page surface; reserve pure white for cards and forms.
- Do tint every shadow with violet and keep radii generous and pill-forward.
- Do let sections breathe — 80–120px vertical padding, luxurious card padding.
- Don't use gray shadows, emoji, exclamation marks, or uppercase outside eyebrows.
- Don't scale elements on hover, bounce animations, or add scroll-trigger effects.
- Don't introduce repeating patterns, hand-drawn illustration, or blue-tinted stock photography.
- Don't swap Alexandria or Lora without a licensed brand replacement; the italic serif is the voice.
