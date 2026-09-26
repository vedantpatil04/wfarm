# WebFarm Launch

Build Phase 1 of WebFarm.in inside the existing Lovable project.

The supplied ReliaBuilds website, desktop recording, mobile recording and screenshots are the primary visual references.

The objective is NOT to create a generic modern agency website.

The objective is to reproduce the same type of visual experience, page composition, typography hierarchy, spacing rhythm, media treatment, responsive behavior, and opening sequence as the reference, while using original WebFarm branding, original copy, and original/licensed assets.

Do not copy ReliaBuilds proprietary text, logo, source code, or copyrighted assets.

---

PROJECT TYPE

WebFarm.in is a static marketing website.

There is no backend in this phase.

Do NOT add:

- database
- authentication
- user accounts
- CMS
- admin panel
- payments
- API
- AI backend
- dashboard functionality
- unnecessary application logic

The site should remain deployable as a static frontend.

---

REQUIRED TECHNOLOGY

Use the stack naturally supported by this project:

- React
- TypeScript
- Vite
- Tailwind CSS where useful
- Custom CSS for high-fidelity visual control

Structure the project cleanly so advanced animation libraries can be added without rewriting the page architecture.

Do not introduce unnecessary UI libraries.

---

BRAND

Brand:

WebFarm

Domain:

webfarm.in

Business positioning:

WebFarm builds digital products for businesses and startups.

Core services:

- Web Development
- Mobile App Development
- AI & Automation
- Custom Business Software

Suggested primary statement:

Your Ideas, Our Technology.

Use WebFarm-specific copy throughout.

Keep copy concise and visually compatible with the reference's large editorial typography.

---

IMPORTANT: OPENING EXPERIENCE

This is a critical requirement.

The reference does NOT simply load directly into the homepage.

Reproduce this overall sequence for WebFarm:

Stage 1 — Initial loading screen

Immediately after page load, show a minimal full-screen loading state.

Use:

WebFarm

as the centered brand name.

At the lower area, display a subtle loading/progress treatment with a percentage.

The progress should visibly move toward 100%.

Do not use a generic circular spinner.

The composition must remain minimal and editorial.

---

Stage 2 — Brand-to-statement transition

After the loading sequence reaches completion:

transition from:

WebFarm

to:

Your Ideas, Our Technology.

The text should transition smoothly rather than simply disappearing and being replaced instantly.

The transition should feel like a designed intro sequence.

---

Stage 3 — Transition into the website

Do NOT simply fade the homepage in.

The reference uses a visual transformation/reveal between the introductory screen and the actual site.

Create a controlled reveal where the intro state transforms into the main website viewport.

Use an approach such as:

- clipping/masking
- scale
- position
- container reveal
- layered transition

The exact implementation should be chosen to visually reproduce the reference behavior.

The important requirement is that the user should feel:

intro screen → visual transformation → actual website

rather than:

intro screen → normal fade → homepage

---

MAIN WEBSITE STRUCTURE

After the opening sequence, build the complete WebFarm homepage with the same overall pacing and information architecture as the reference.

Structure:

1. Header
2. Hero
3. Intro statement
4. Services
5. Service visual/media section
6. Core capabilities
7. Process
8. Trust / proof
9. Metrics
10. Work / case studies
11. Contact CTA
12. Footer

Do not add unrelated sections.

---

HEADER

Create a minimal editorial header.

Desktop:

- WebFarm wordmark/logo
- limited navigation
- Work
- Contact
- primary contact action
- generous whitespace
- clean alignment

Mobile:

- WebFarm logo/wordmark
- compact menu control
- intentional mobile navigation
- clean spacing

Do not use a standard Bootstrap navbar appearance.

---

HERO

Make the hero visually dominant.

Reproduce the reference's characteristics:

- large display typography
- strong whitespace
- carefully controlled text width
- large media area
- minimal supporting content
- refined alignment
- editorial composition

Main heading:

Your Ideas,
Our Technology.

Supporting content should explain that WebFarm builds:

- websites
- web applications
- mobile apps
- AI solutions
- automation
- custom software

Keep the copy short enough to preserve the intended composition.

---

IMPORTANT MEDIA RULE

Do not fill visual areas with generic circles, gradients or random CSS shapes.

Use:

- original WebFarm artwork
- licensed photography
- product screenshots
- videos
- carefully designed placeholders

Media must feel intentional.

Use correct:

- aspect ratios
- cropping
- object-position
- scale
- spacing

Build reusable media components so assets can be replaced later.

---

INTRO STATEMENT

Create a large editorial statement section.

Use oversized typography, restrained supporting text and significant whitespace.

The section should feel like part of the same visual story as the opening.

---

SERVICES

Use four primary services:

01

Web Development

02

Mobile Apps

03

AI & Automation

04

Business Software

Use a presentation inspired by the reference's editorial service layout.

Do NOT turn the services into generic rounded SaaS cards.

Use typography, numbering, spacing and media relationships.

---

CORE CAPABILITIES

Create a large indexed capability section.

Use:

01 / Web Applications
02 / Mobile Apps
03 / Business Websites
04 / E-commerce
05 / UI/UX Development
06 / AI Assistants
07 / Workflow Automation
08 / API Integration
09 / Cloud & Deployment
10 / Analytics & Dashboards
11 / Maintenance & Support
12 / SEO & Performance

The section should feel like a sophisticated capability index.

---

PROCESS

Create:

01 — Discovery
02 — Design
03 — Development
04 — Testing
05 — Launch

Keep this section visually restrained.

---

TRUST / PROOF

Create a proof section without inventing claims.

Do not fabricate:

- client numbers
- awards
- testimonials
- revenue
- performance results

Use well-designed placeholders where real proof is not yet available.

The structure must allow real client data to be inserted later.

---

METRICS

Create a visually strong metrics section.

Use replaceable values.

Suggested labels:

- Projects Delivered
- Products Built
- Clients Served
- Digital Experiences

Do not present invented numbers as factual.

---

WORK

Create a large media-led portfolio/work section.

Projects:

- Earneazi
- GreenGuard AI
- 36 Spokes
- MedFind

Each project should support:

- title
- category
- description
- year
- large visual
- external link

Do NOT make this look like a conventional 3-column portfolio grid.

Use large editorial project presentations and strong image hierarchy.

---

CONTACT CTA

Create a visually powerful closing CTA.

Primary message:

Start something.

Supporting message should invite businesses/startups to discuss their next:

- website
- application
- software product
- AI solution
- automation project

CTA:

Start a conversation

Secondary CTA:

View our work

Contact:

hello@webfarm.in

---

FOOTER

Minimal footer containing:

- WebFarm
- Work
- Services
- Contact
- email
- social placeholders
- copyright/legal information

Keep it visually consistent with the reference.

---

TYPOGRAPHY

Typography is a major part of the visual identity.

Do not use generic Arial styling.

Use an appropriate original/licensed editorial display font paired with a highly legible sans-serif.

Centralize typography variables.

Use responsive "clamp()" values.

Carefully control:

- font size
- weight
- line-height
- letter spacing
- text width
- heading wraps

The typography should be one of the strongest elements of the website.

---

VISUAL LANGUAGE

Target:

- editorial
- minimal
- premium
- large typography
- generous whitespace
- thin borders
- restrained colors
- strong media
- asymmetric layouts where appropriate

Avoid:

- glassmorphism
- excessive shadows
- excessive rounded cards
- neon gradients
- purple SaaS styling
- generic floating blobs
- generic AI illustrations
- dashboard UI
- template-looking sections

---

RESPONSIVE DESIGN

Design both desktop and mobile intentionally.

Reference targets include:

Desktop:
1920 × 1080

Mobile:
384 × 850 / approximately 390 × 844

Also ensure the layout works at intermediate widths.

Do not merely shrink desktop.

Mobile needs its own:

- navigation
- text wrapping
- spacing
- media proportions
- section composition
- opening sequence layout

---

PHASE 1 ANIMATION SCOPE

The opening sequence IS part of Phase 1 because it is fundamental to the identity.

Implement only the opening intro behavior now:

WebFarm
→ loading percentage
→ completion
→ Your Ideas, Our Technology.
→ visual reveal
→ homepage

Do NOT yet implement the complete scroll animation system for every section.

Leave the DOM/component structure ready for Phase 2.

---

CODE QUALITY

Keep the code:

- typed
- componentized
- readable
- reusable
- responsive
- accessible

Use semantic HTML.

Do not create huge monolithic components.

Use reusable components for:

- Header
- MobileMenu
- Preloader
- IntroStatement
- Hero
- Services
- Capabilities
- Process
- Trust
- Metrics
- Work
- Project
- ContactCTA
- Footer

---

STATIC DEPLOYMENT

Keep the site compatible with static deployment.

No server-dependent features.

Do not add functionality that requires a backend.

---

FINAL PHASE 1 CHECK

Before considering Phase 1 complete:

Compare the result with the supplied reference.

Check:

- opening sequence
- typography
- hero proportions
- spacing
- media placement
- section heights
- navigation
- mobile composition
- overall visual rhythm

Do not stop after producing a generic first draft.

Do not redesign the experience.

The target is:

WebFarm content + reference-quality visual structure

not:

generic agency website with WebFarm branding.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://webfarm-intro-stage.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f0518bd8-4e04-440e-b648-9577575b2c79).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
