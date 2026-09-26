# WebFarm Phase 1

## Goal
Build a static, original WebFarm homepage that closely follows the supplied reference’s editorial pacing, type hierarchy, media-led composition, mobile behavior, and staged opening experience.

## Implementation
- Establish a restrained off-white, ink, and warm accent design system with a condensed editorial display face and legible sans-serif body face.
- Build the opening sequence as three coordinated states: progressing WebFarm loader, animated statement transformation, then a clipped/scaled reveal into the live page. Respect reduced-motion preferences and avoid replaying it repeatedly within the same visit.
- Build the homepage from focused components: header/mobile menu, hero, intro statement, services, service media, capability index, process, proof placeholders, replaceable metrics, editorial project showcases, closing contact section, and footer.
- Create original visual assets for the hero, service story, and four featured projects. Treat imagery as replaceable content through reusable media and project components.
- Keep content concise, factual, and WebFarm-specific. Clearly mark proof and metric values as awaiting verified data rather than presenting invented claims.
- Add route-specific search/social metadata and preserve static deployment with no backend or application-only features.

## Responsive behavior
- Desktop uses wide asymmetric compositions, oversized type, strong whitespace, and large horizontal media.
- Mobile uses a compact menu, deliberate heading wraps, stacked editorial sections, portrait media crops, and tighter but still generous pacing modeled on the supplied recording.

## Validation
- Check the complete intro timing and transformation in-browser.
- Compare desktop at 1920×1080 and mobile around 390×844 for clipping, text wrapping, image framing, navigation, and section rhythm.
- Confirm reduced-motion behavior, keyboard navigation, semantic headings, and absence of runtime errors.
