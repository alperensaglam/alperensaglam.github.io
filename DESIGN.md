---
name: Alperen Sağlam · Apps
description: One home for every app Alperen Sağlam has in production, with how-to, support and privacy pages in one shared design.
colors:
  paper: "#ffffff"
  band: "#f5f5f7"
  ink: "#1d1d1f"
  ink-secondary: "#424245"
  ink-tertiary: "#6a6a6f"
  hairline: "rgba(0, 0, 0, 0.1)"
  hairline-strong: "rgba(0, 0, 0, 0.16)"
  accent: "#0a5bd7"
  lokma: "#f26b1d"
  lokma-ink: "#b4470b"
  lokma-tint: "#fff4ec"
  drawluma: "#ff4b72"
  drawluma-ink: "#c4163f"
  drawluma-tint: "#fff0f3"
  puzzlelens: "#3a63d9"
  puzzlelens-ink: "#2f55c8"
  puzzlelens-tint: "#eff3ff"
  biverba: "#f2a33a"
  biverba-ink: "#14213a"
  biverba-tint: "#eff2f7"
  watchntalk: "#f2b45a"
  watchntalk-ink: "#8a5a12"
  watchntalk-tint: "#fbf5ea"
typography:
  display:
    fontFamily: "Mona Sans, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(40px, 6vw, 68px)"
    fontWeight: 780
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.6vw, 52px)"
    fontWeight: 780
    lineHeight: 1.04
    letterSpacing: "-0.032em"
  title:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 720
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  tagline:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "clamp(19px, 2.2vw, 23px)"
    fontWeight: 620
    letterSpacing: "-0.012em"
  body:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
rounded:
  control: "10px"
  button: "12px"
  panel: "14px"
  screenshot: "30px"
  icon: "22.37%"
spacing:
  gutter: "clamp(20px, 5vw, 40px)"
  page: "1120px"
  reading: "68ch"
  band: "clamp(56px, 8vw, 104px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "0 18px"
    height: "44px"
  language-switch:
    backgroundColor: "{colors.band}"
    rounded: "{rounded.control}"
    height: "40px"
  language-switch-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  app-hero:
    backgroundColor: "{colors.lokma-tint}"
    textColor: "{colors.ink}"
  callout:
    backgroundColor: "{colors.band}"
    rounded: "{rounded.panel}"
    padding: "18px 20px"
---

# Design System: Alperen Sağlam · Apps

## Overview

**Creative North Star: "The shelf the apps stand on."**

A white, well-lit page in the manner of the indie developers it sits beside (Panic, Lux, Cultured Code): confident type, generous space, and the apps themselves doing the talking through their real icons and real screenshots. The hub owns no loud colour of its own; every app brings its colour, and the page lends it a band to stand in.

The system serves two readers at once. Someone with a problem in one app finds its icon in the first viewport, its guide in one tap and its privacy policy in the next. Someone looking at what Alperen has shipped reads five product bands that each say plainly what the app does and where it stops. App pages (lokma-app, drawluma-site, biverba-privacy, puzzlelens) use the same stylesheet from `/assets/site.css`, so the hub and every policy page read as one site.

**Key Characteristics:**
- Real artefacts only: App Store icons in the iOS squircle, App Store screenshots, Apple's official badge.
- One colour per app, applied to its tint band, its links and its marks; the hub itself stays neutral.
- Turkish and English on every page through one switch that remembers the choice.
- Legal text is carried over word for word; the design changes the frame, never the policy.

## Colors

Neutral paper and ink with one borrowed colour per app.

### Neutral
- **Paper** (#ffffff): the page ground.
- **Band** (#f5f5f7): every second product band, callouts, the language switch track.
- **Ink** (#1d1d1f): headings, strong text, the primary button.
- **Ink Secondary** (#424245): body copy.
- **Ink Tertiary** (#6a6a6f): facts, captions, table headers, dates (5.3:1 on paper, 4.9:1 on band).
- **Hairline** (rgba(0,0,0,.1)): band separators, table rules, the top bar once scrolled.

### App colours
Each app has three: a vivid colour for marks and glows, an ink for text and links (at least 4.5:1 on paper and on its tint), and a tint for its page hero.
- **Lokma**: vivid #f26b1d, ink #b4470b, tint #fff4ec.
- **Drawluma**: vivid #ff4b72, ink #c4163f, tint #fff0f3.
- **PuzzleLens**: vivid #3a63d9, ink #2f55c8, tint #eff3ff.
- **Biverba**: vivid #f2a33a (the amber ring), ink #14213a (the icon's navy), tint #eff2f7.
- **Watchntalk**: vivid #f2b45a, ink #8a5a12, tint #fbf5ea.

### Named Rules
**The Borrowed Colour Rule.** The hub has no brand colour. Colour appears only inside an app's own region (`.app-<name>`), taken from that app's icon.

**The Ink-for-Text Rule.** Vivid app colours never carry text; links and taglines use the app's ink value.

## Typography

**Font:** Mona Sans variable (self-hosted at `/assets/fonts/mona-sans.woff2`, weights 200–900, optical size axis), falling back to the system UI stack.

**Character:** One grotesk doing everything, heavy and tightly tracked at display sizes, quiet at body size. The optical size axis keeps large headings crisp and small text open.

### Hierarchy
- **Display** (780, clamp(40px, 6vw, 68px), 1.02, -0.035em): the hub headline only.
- **Headline** (780, clamp(34px, 4.6vw, 52px), 1.04, -0.032em): each product's name in its band; app names on app pages.
- **Title** (720, 24px, 1.2): section headings inside guides and policies.
- **Tagline** (620, clamp(19px, 2.2vw, 23px)): the line under a product name, in the app's ink.
- **Body** (400, 17px, 1.6–1.7): descriptions and policy text, at most 68ch.
- **Label** (500–650, 13–15px): navigation, facts, table headers, the language switch.

## Layout

A 1120px page with a fluid gutter of clamp(20px, 5vw, 40px). The hub runs: top bar, hero with headline, intro and a five-icon shelf, then one full-width band per product (white and #f5f5f7 alternating, copy and screenshot swapping sides), then the support index table, then contact. Product bands are two columns (copy 1.05fr, screenshot 0.95fr) and stack under 860px. The shelf drops from five columns to three under 560px. The support table becomes labelled rows under 720px.

App pages: top bar (hub name, app icon and name, all apps, language switch), a tinted hero with the icon, name, tagline and App Store badge, tabs (How to use, Support where it exists, Privacy), then an 880px document column whose text blocks stop at 68ch.

## Elevation & Depth

Flat surfaces; depth belongs to the apps' own artefacts. Icons carry a soft offset shadow, screenshots a longer one, and a blurred app-coloured glow sits behind each screenshot. Panels and callouts are tonal (#f5f5f7) with no border and no shadow.

### Shadow Vocabulary
- **Icon** (`0 1px 2px rgba(0,0,0,.12), 0 8px 20px -6px rgba(0,0,0,.28)`): every app icon over 60px.
- **Screenshot** (`0 2px 6px rgba(0,0,0,.08), 0 30px 60px -24px rgba(0,0,0,.35)`): product screenshots.
- **Switch thumb** (`0 1px 2px rgba(0,0,0,.12), 0 2px 6px -2px rgba(0,0,0,.12)`): the active language button.

## Shapes

Icons use the iOS squircle radius (22.37%). Screenshots 30px. Panels and callouts 14px, buttons 12px, the language switch 10px with 8px buttons. Status marks are 9px squares with 2px corners: filled for live, half-filled for in review, outlined for web-only.

## Components

### Top bar
Sticky, white at 94% with a hairline that appears only after scrolling. Hub name left; navigation and the TR/EN switch right. On app pages the app icon and name follow a thin separator; on phones only its icon stays.

### Icon shelf
Five app icons (60–96px) with name and platform, linking to each product band; the band's icon lifts once on arrival.

### Product band
Icon, name, tagline in app ink, a 48ch description, facts with a status mark, then actions: the official App Store badge (or a primary button for web), and arrow links for How to use, Privacy and other pages.

### Buttons and links
- **Primary button:** ink background, white text, 12px radius, 44px tall, lifts 1px on hover.
- **Arrow link:** app ink, 620 weight, a drawn arrow that moves 3px on hover.
- **Body links:** underlined at 0.18em offset with a 40% underline that turns solid on hover.

### Language switch
A segmented control on the band colour; the active language sits on a white thumb. Content blocks carry `data-lang="tr"` or `data-lang="en"`; `/assets/site.js` shows one set before first paint.

### Guide elements
Numbered steps (34px tinted circles in app ink), FAQ disclosures with a drawn chevron, tonal callouts, mail boxes on the app tint, simple ruled tables.

## Do's and Don'ts

- Do keep every app URL that App Store Connect points at; restyle in place.
- Do carry policy text over word for word, and keep its "last updated" line.
- Do use the app's ink for its text and the vivid colour only for marks, tints and glows.
- Do write in first person, plainly, and say where an app stops.
- Don't give the hub a colour of its own or a gradient headline.
- Don't put version numbers on the hub; when an app's review state changes (Watchntalk's iPhone app), update its status line the same day.
- Don't add eyebrow labels above headings.
- Don't touch `/puzzlelens/review/` (App Review demo material) or the root `app-ads.txt`.
