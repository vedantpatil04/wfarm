type ServiceIconProps = {
  kind: "web" | "mobile" | "ai" | "software";
  className?: string;
};

/**
 * Editorial fine-line technology scenes for the services media system.
 * Designed with precise stroke weights, isometric and architectural linework,
 * warm amber accents, and technical grid geometries in the spirit of the reference.
 */
export function ServiceIcon({ kind, className = "" }: ServiceIconProps) {
  switch (kind) {
    case "web":
      return (
        <svg viewBox="0 0 320 240" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Subtle blueprint grid */}
          <defs>
            <pattern id="grid-web" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.12" />
            </pattern>
          </defs>
          <rect width="320" height="240" fill="url(#grid-web)" />
          
          {/* Main browser viewport container */}
          <rect x="40" y="32" width="240" height="170" rx="6" stroke="currentColor" strokeWidth="1.2" fill="#faf8f3" fillOpacity="0.75" />
          <line x1="40" y1="58" x2="280" y2="58" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          
          {/* Browser dots */}
          <circle cx="56" cy="45" r="3" fill="#ffb800" />
          <circle cx="68" cy="45" r="3" fill="currentColor" fillOpacity="0.25" />
          <circle cx="80" cy="45" r="3" fill="currentColor" fillOpacity="0.25" />
          
          {/* URL bar */}
          <rect x="100" y="39" width="130" height="12" rx="3" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
          <line x1="108" y1="45" x2="160" y2="45" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
          
          {/* Web application layout wireframe */}
          {/* Navigation sidebar */}
          <rect x="52" y="70" width="44" height="118" rx="3" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.35" fill="none" />
          <line x1="60" y1="82" x2="84" y2="82" stroke="#ffb800" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="60" y1="94" x2="80" y2="94" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
          <line x1="60" y1="106" x2="82" y2="106" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
          <line x1="60" y1="118" x2="74" y2="118" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />

          {/* Main content hero block */}
          <rect x="106" y="70" width="162" height="54" rx="3" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.35" fill="#f4f1ea" />
          <line x1="118" y1="85" x2="174" y2="85" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="118" y1="97" x2="210" y2="97" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" />
          <line x1="118" y1="107" x2="185" y2="107" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" />

          {/* Two metric cards */}
          <rect x="106" y="134" width="76" height="54" rx="3" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.35" fill="none" />
          <line x1="116" y1="148" x2="148" y2="148" stroke="#ffb800" strokeWidth="2" strokeLinecap="round" />
          <line x1="116" y1="162" x2="168" y2="162" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
          <line x1="116" y1="172" x2="152" y2="172" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />

          <rect x="192" y="134" width="76" height="54" rx="3" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.35" fill="none" />
          <path d="M 202 170 L 216 156 L 230 162 L 254 144" stroke="#ffb800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="254" cy="144" r="2.5" fill="#ffb800" />
        </svg>
      );

    case "mobile":
      return (
        <svg viewBox="0 0 320 240" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-mobile" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.12" />
            </pattern>
          </defs>
          <rect width="320" height="240" fill="url(#grid-mobile)" />
          
          {/* Secondary phone behind */}
          <g transform="translate(160, 20) rotate(7)">
            <rect x="0" y="0" width="96" height="180" rx="14" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" fill="#f4f1ea" />
            <rect x="6" y="14" width="84" height="152" rx="10" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.2" fill="none" />
            <line x1="18" y1="36" x2="60" y2="36" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
            <rect x="16" y="50" width="64" height="34" rx="4" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.25" fill="#faf8f3" />
          </g>

          {/* Primary phone front */}
          <g transform="translate(74, 24)">
            <rect x="0" y="0" width="108" height="192" rx="16" stroke="currentColor" strokeWidth="1.4" fill="#faf8f3" />
            
            {/* Dynamic Island / Notch */}
            <rect x="36" y="8" width="36" height="8" rx="4" fill="currentColor" fillOpacity="0.8" />
            
            {/* App UI Screen */}
            <rect x="8" y="24" width="92" height="158" rx="10" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.2" fill="none" />
            
            {/* User balance / status card */}
            <rect x="14" y="34" width="80" height="42" rx="6" fill="#ffb800" fillOpacity="0.15" stroke="#ffb800" strokeWidth="1" />
            <circle cx="28" cy="48" r="6" fill="#ffb800" />
            <line x1="40" y1="45" x2="78" y2="45" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="40" y1="54" x2="65" y2="54" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.5" strokeLinecap="round" />
            
            {/* Feed list items */}
            <rect x="14" y="86" width="80" height="24" rx="4" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" fill="#f4f1ea" />
            <line x1="22" y1="98" x2="56" y2="98" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <circle cx="82" cy="98" r="3" fill="#ffb800" />

            <rect x="14" y="118" width="80" height="24" rx="4" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" fill="#f4f1ea" />
            <line x1="22" y1="130" x2="62" y2="130" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <circle cx="82" cy="130" r="3" fill="currentColor" fillOpacity="0.3" />

            {/* Bottom tab bar */}
            <line x1="8" y1="160" x2="100" y2="160" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.2" />
            <circle cx="28" cy="169" r="2.5" fill="#ffb800" />
            <circle cx="54" cy="169" r="2.5" fill="currentColor" fillOpacity="0.3" />
            <circle cx="80" cy="169" r="2.5" fill="currentColor" fillOpacity="0.3" />
          </g>
        </svg>
      );

    case "ai":
      return (
        <svg viewBox="0 0 320 240" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-ai" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.12" />
            </pattern>
          </defs>
          <rect width="320" height="240" fill="url(#grid-ai)" />

          {/* Central AI core processor */}
          <rect x="110" y="70" width="100" height="100" rx="8" stroke="currentColor" strokeWidth="1.4" fill="#faf8f3" />
          <rect x="124" y="84" width="72" height="72" rx="4" stroke="#ffb800" strokeWidth="1.2" fill="#ffb800" fillOpacity="0.1" />
          
          {/* Circuit / Neural connections */}
          {/* Top pins */}
          <line x1="135" y1="70" x2="135" y2="35" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <circle cx="135" cy="35" r="3" fill="#ffb800" />
          <line x1="160" y1="70" x2="160" y2="25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="160" cy="25" r="3.5" fill="currentColor" />
          <line x1="185" y1="70" x2="185" y2="45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <circle cx="185" cy="45" r="3" fill="#ffb800" />

          {/* Bottom pins */}
          <line x1="135" y1="170" x2="135" y2="205" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <circle cx="135" cy="205" r="3" fill="#ffb800" />
          <line x1="160" y1="170" x2="160" y2="215" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="160" cy="215" r="3.5" fill="currentColor" />
          <line x1="185" y1="170" x2="185" y2="195" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <circle cx="185" cy="195" r="3" fill="#ffb800" />

          {/* Left pipeline */}
          <path d="M 40 100 L 80 100 L 110 110" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="40" cy="100" r="3" fill="#ffb800" />
          <path d="M 50 140 L 85 140 L 110 130" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="50" cy="140" r="3" fill="currentColor" fillOpacity="0.4" />

          {/* Right pipeline */}
          <path d="M 210 110 L 240 100 L 280 100" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="280" cy="100" r="3" fill="#ffb800" />
          <path d="M 210 130 L 235 140 L 270 140" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="270" cy="140" r="3" fill="currentColor" fillOpacity="0.4" />

          {/* Core matrix nodes */}
          <circle cx="145" cy="105" r="3" fill="#ffb800" />
          <circle cx="175" cy="105" r="3" fill="currentColor" />
          <circle cx="160" cy="120" r="4" fill="#ffb800" />
          <circle cx="145" cy="135" r="3" fill="currentColor" />
          <circle cx="175" cy="135" r="3" fill="#ffb800" />
          <line x1="145" y1="105" x2="160" y2="120" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1="175" y1="105" x2="160" y2="120" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1="145" y1="135" x2="160" y2="120" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1="175" y1="135" x2="160" y2="120" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
        </svg>
      );

    case "software":
      return (
        <svg viewBox="0 0 320 240" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-soft" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.12" />
            </pattern>
          </defs>
          <rect width="320" height="240" fill="url(#grid-soft)" />

          {/* Large database / business architecture schema */}
          {/* Main system panel */}
          <rect x="36" y="34" width="130" height="80" rx="4" stroke="currentColor" strokeWidth="1.2" fill="#faf8f3" />
          <rect x="36" y="34" width="130" height="20" rx="4" fill="#14181f" />
          <line x1="48" y1="44" x2="90" y2="44" stroke="#f4f1ea" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="152" cy="44" r="2.5" fill="#ffb800" />
          {/* Data table rows */}
          <line x1="48" y1="68" x2="152" y2="68" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
          <line x1="48" y1="84" x2="152" y2="84" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
          <line x1="48" y1="100" x2="152" y2="100" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />

          {/* Workflow card 2 */}
          <rect x="154" y="126" width="130" height="80" rx="4" stroke="currentColor" strokeWidth="1.2" fill="#faf8f3" />
          <rect x="154" y="126" width="130" height="20" rx="4" fill="#ffb800" />
          <line x1="166" y1="136" x2="210" y2="136" stroke="#14181f" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="270" cy="136" r="2.5" fill="#14181f" />
          {/* Metrics bars */}
          <rect x="166" y="156" width="60" height="8" rx="2" fill="currentColor" fillOpacity="0.2" />
          <rect x="166" y="156" width="42" height="8" rx="2" fill="#ffb800" />
          <rect x="166" y="172" width="90" height="8" rx="2" fill="currentColor" fillOpacity="0.2" />
          <rect x="166" y="172" width="70" height="8" rx="2" fill="currentColor" fillOpacity="0.7" />

          {/* Connecting data pipeline arrow */}
          <path d="M 100 114 L 100 166 L 154 166" stroke="#ffb800" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="100" cy="114" r="2.5" fill="#ffb800" />
          <polygon points="154,163 160,166 154,169" fill="#ffb800" />
        </svg>
      );

    default:
      return null;
  }
}
