"use client";

interface SOHVACLogoProps {
  /** Full logo with icon + HVAC text + tagline */
  variant?: "full" | "icon" | "navbar";
  className?: string;
  width?: number;
}

/**
 * SO HVAC Brand Logo — SVG recreation of the official brochure logo.
 * House silhouette + maple leaf + S-swirl + flame + water waves + HVAC wordmark.
 */
export default function SOHVACLogo({
  variant = "full",
  className = "",
  width = 160,
}: SOHVACLogoProps) {
  if (variant === "icon") {
    // Icon-only: house + S emblem, no text
    return (
      <svg
        width={width}
        height={width}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="SO HVAC logo"
        role="img"
      >
        <LogoEmblem />
      </svg>
    );
  }

  if (variant === "navbar") {
    // Compact horizontal layout for navbar
    return (
      <svg
        width={width}
        height={Math.round(width * 0.42)}
        viewBox="0 0 240 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="SO HVAC - Second Opinion. First Choice."
        role="img"
      >
        {/* Icon on left */}
        <g transform="translate(0, 4) scale(0.85)">
          <LogoEmblem />
        </g>
        {/* HVAC text on right */}
        <text
          x="108"
          y="58"
          fontFamily="'Barlow', 'Arial Black', sans-serif"
          fontWeight="900"
          fontSize="42"
          fill="#1a2e5a"
          letterSpacing="-1"
        >
          HVAC
        </text>
        <text
          x="109"
          y="75"
          fontFamily="'Inter', Arial, sans-serif"
          fontWeight="500"
          fontSize="11"
          fill="#4a5568"
          letterSpacing="0.3"
        >
          Second Opinion. First Choice.
        </text>
      </svg>
    );
  }

  // Full stacked layout (hero)
  return (
    <svg
      width={width}
      height={Math.round(width * 1.4)}
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SO HVAC - Second Opinion. First Choice."
      role="img"
    >
      {/* Emblem centered */}
      <g transform="translate(40, 0)">
        <LogoEmblem />
      </g>
      {/* HVAC text */}
      <text
        x="100"
        y="172"
        fontFamily="'Barlow', 'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="52"
        fill="#1a2e5a"
        textAnchor="middle"
        letterSpacing="-1"
      >
        HVAC
      </text>
      {/* Tagline */}
      <text
        x="100"
        y="196"
        fontFamily="'Inter', Arial, sans-serif"
        fontWeight="500"
        fontSize="12"
        fill="#4a5568"
        textAnchor="middle"
        letterSpacing="0.4"
      >
        Second Opinion. First Choice.
      </text>
    </svg>
  );
}

/** Shared emblem: house + maple leaf + S-swirl + flame + water */
function LogoEmblem() {
  return (
    <g>
      {/* ── House silhouette ── */}
      {/* Roof */}
      <path
        d="M60 8 L88 34 L84 34 L84 56 L36 56 L36 34 L32 34 Z"
        fill="none"
        stroke="#1a2e5a"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Chimney */}
      <rect x="72" y="16" width="8" height="14" rx="1" fill="#1a2e5a" />

      {/* ── Canadian Maple Leaf (on chimney top) ── */}
      <g transform="translate(76, 10) scale(0.7)">
        <path
          d="M0,-8 L1.5,-3 L6,-4 L4,0 L7,1 L4,3 L5,8 L0,6 L-5,8 L-4,3 L-7,1 L-4,0 L-6,-4 L-1.5,-3 Z"
          fill="#dc2626"
        />
      </g>

      {/* ── S-swirl emblem circle area ── */}
      {/* The "S" shape using bezier curves — navy blue */}
      <path
        d="M70 38 C70 38 58 40 56 50 C54 60 64 64 62 72 C60 80 48 82 48 82"
        stroke="#1a2e5a"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Flame inside the S curve ── */}
      <path
        d="M63 62 C63 62 68 57 66 52 C65 49 63 50 63 50 C63 50 65 46 62 43 C61 42 60 43 60 43 C60 43 61 40 58 39 C56 45 58 48 56 51 C54 54 55 58 57 60 C58 62 60 63 60 63 C59 66 60 70 63 72 C65 70 66 66 63 62 Z"
        fill="#e53e2f"
        opacity="0.95"
      />
      {/* Inner flame highlight */}
      <path
        d="M61 56 C61 56 63 54 62 51 C62 50 61 51 61 51 C62 49 61 47 60 46 C59 49 60 51 59 53 C58 55 59 57 61 58 Z"
        fill="#f97316"
        opacity="0.8"
      />

      {/* ── Water waves (below the S) ── */}
      <path
        d="M44 86 Q50 82 56 86 Q62 90 68 86 Q74 82 80 86"
        stroke="#1a2e5a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M46 93 Q52 89 58 93 Q64 97 70 93 Q76 89 82 93"
        stroke="#1d4ed8"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M48 100 Q54 96 60 100 Q66 104 72 100 Q78 96 84 100"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </g>
  );
}
