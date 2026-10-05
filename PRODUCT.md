# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML/CSS (and a few lines of JS for the language switch), served by GitHub Pages from this repo with no build step. The four app page repos (lokma-app, drawluma-site, biverba-privacy, puzzlelens) are separate GitHub Pages project sites under the same domain; they load the hub's shared stylesheet from `https://alperensaglam.github.io/assets/`.

## Users

1. **App users and App Store reviewers** (primary): someone who has, or is about to install, one of Alperen's apps and needs how-to help, subscription and data answers, a contact address, or the privacy policy. They arrive from an App Store listing link or a search, often on an iPhone.
2. **People evaluating Alperen as a developer** (secondary): employers, collaborators, curious visitors who want to see what he has shipped.

## Product Purpose

One home for everything Alperen Sağlam has in production. Every live product is listed with what it does, where to get it, how to use it and its privacy policy, so a user never hits a dead end and a reviewer finds the policy in one click. Success: every App Store support and privacy URL resolves to a clear, consistent, maintained page, and the hub links all of them.

## Positioning

An independent developer's own catalogue: small, carefully made apps, each solving one concrete problem (measuring food by volume, drawing on real paper from a reference, finding a jigsaw piece's place, translating a conversation live, watching together in sync). The pages say exactly what each app does and does not do, in the developer's first person.

## Operating Context

- In production (scope confirmed with the user, 5 October 2026):
  - **Lokma — Kalori Ölçer / Calorie Scanner** (App Store id 6815305987, Health & Fitness, free with LOKMA Pro subscription). Pages: `/lokma-app/`, `/lokma-app/privacy/`.
  - **Drawluma** (id 6806856472, Graphics & Design, free with ads, Drawluma PRO removes ads). Pages: `/drawluma-site/`, `/drawluma-site/privacy.html`, `/drawluma-site/app-ads.txt`.
  - **PuzzleLens** (id 6812349555, Utilities; version 1.1.0 in review). Pages: `/puzzlelens/`, `/puzzlelens/support/`, `/puzzlelens/privacy/`, `/puzzlelens/review/` (App Review demo material).
  - **Biverba — Live Translator** (id 6797633689, Utilities). Page: `/biverba-privacy/` (privacy policy; also its support URL).
  - **Watchntalk**: web app live at watchntalk.vercel.app (and watchntalk.pages.dev with ads in guides), iOS app (id 6817367081) in App Review, Chrome extension (manual install until the Web Store listing). Its own support and privacy pages live on the Watchntalk site.
- App Store Connect URLs point at the paths above; they must keep resolving unchanged.
- `app-ads.txt` at the hub root is required by AdMob and must stay byte-identical.
- Contact: alperensaglam177@gmail.com.

## Capabilities and Constraints

- Languages: Turkish and English with a switch on every page (confirmed). Existing pages already carry both languages for Lokma and Drawluma; PuzzleLens privacy is bilingual; Biverba privacy is English.
- Legal text (privacy policies, EULA references, subscription terms) is reproduced verbatim when pages are restyled; only structure and presentation change.
- Out of scope: live web side projects (e.g. Taskflow) and GitHub data/ML repositories.
- No analytics, cookies or third-party scripts on the hub.

## Brand Commitments

- Name as written: Alperen Sağlam. Each app keeps its own name, icon and spelling (Lokma/LOKMA, Drawluma, PuzzleLens, Biverba, Watchntalk).
- Voice: plain, honest first person ("I"); the existing pages state limits openly (estimates are labelled as estimates, flat sky regions cannot be solved, no medical advice).

## Evidence on Hand

- App icons, descriptions, ratings and screenshots from the public App Store listings (iTunes lookup API).
- Existing support/FAQ and privacy content in the four app repos.
- No testimonials, download counts or press. Do not invent any.

## Product Principles

1. A user with a problem reaches the answer or the contact address in two taps.
2. Every privacy policy is one click from the hub and from its app's page, and its wording is never altered silently.
3. Each app reads as its own thing; the hub is the shelf they sit on.
4. Say what the app does and where it stops.

## Accessibility & Inclusion

WCAG 2.2 AA: readable on small phones, keyboard reachable, language switch announced, `lang` attributes correct for each language block.
