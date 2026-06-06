"use client";

const RED = "#4A7A5A";

export default function HeroIllustration() {
  return (
    <svg
      className="hero-illustration w-full h-full"
      viewBox="0 0 440 355"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* ── PLANTS / LEAVES ─────────────────────────────────── */}
      <g className="hero-illustration__plants">
        {/* Main stem arching up-right */}
        <path
          className="hero-illustration__stem"
          d="M 20 355 C 15 300 35 248 75 205 C 105 172 132 162 158 140"
          stroke={RED} strokeWidth="2" strokeLinecap="round"
        />
        {/* Large leaf 1 - top of main stem */}
        <path
          className="hero-illustration__leaf"
          d="M 158 140 C 185 95 175 48 158 28 C 141 8 120 18 128 58 C 136 98 158 140"
          stroke={RED} strokeWidth="2" strokeLinecap="round" fill="none"
        />
        {/* Leaf vein */}
        <path className="hero-illustration__leaf-vein" d="M 158 140 C 152 108 148 72 158 28" stroke={RED} strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3" />

        {/* Secondary leaf branching from stem */}
        <path
          className="hero-illustration__leaf"
          d="M 100 195 C 80 160 60 120 52 88 C 44 56 55 42 70 55 C 85 68 92 120 100 195"
          stroke={RED} strokeWidth="2" strokeLinecap="round" fill="none"
        />

        {/* Small leaf lower left */}
        <path
          className="hero-illustration__leaf"
          d="M 48 280 C 28 255 22 220 35 200 C 48 180 65 195 62 225 C 59 255 48 280"
          stroke={RED} strokeWidth="2" strokeLinecap="round" fill="none"
        />

        {/* Tiny leaf top-left cluster */}
        <path
          className="hero-illustration__leaf"
          d="M 130 100 C 115 80 110 60 120 50 C 130 40 142 52 138 72 C 134 92 130 100"
          stroke={RED} strokeWidth="1.5" strokeLinecap="round" fill="none"
        />
        <path
          className="hero-illustration__leaf"
          d="M 118 118 C 100 100 96 78 108 68 C 120 58 132 70 128 90 C 124 110 118 118"
          stroke={RED} strokeWidth="1.5" strokeLinecap="round" fill="none"
        />
      </g>

      {/* ── COMPUTER WINDOW FRAME ───────────────────────────── */}
      <g className="hero-illustration__window">
        {/* Main frame */}
        <rect className="hero-illustration__window-frame" x="153" y="40" width="218" height="195" rx="14" stroke={RED} strokeWidth="2.5" />

        {/* Title bar divider line */}
        <line className="hero-illustration__window-titlebar" x1="153" y1="72" x2="371" y2="72" stroke={RED} strokeWidth="1.5" />

        {/* Window control circles */}
        <circle className="hero-illustration__window-btn" cx="172" cy="57" r="6.5" stroke={RED} strokeWidth="2" />
        <circle className="hero-illustration__window-btn" cx="191" cy="57" r="6.5" stroke={RED} strokeWidth="2" />
        <circle className="hero-illustration__window-btn" cx="210" cy="57" r="6.5" stroke={RED} strokeWidth="2" />

        {/* Title bar text "UNTITLED" */}
        <text
          className="hero-illustration__window-title"
          x="262" y="63"
          textAnchor="middle"
          fontFamily="'Gochi Hand', cursive"
          fontSize="12"
          fill={RED}
          letterSpacing="1"
        >
          UNTITLED
        </text>

        {/* Search / input bar */}
        <rect className="hero-illustration__search-bar" x="165" y="84" width="183" height="26" rx="13" stroke={RED} strokeWidth="1.8" />

        {/* Squiggly placeholder text in bar */}
        <path
          className="hero-illustration__search-squiggle"
          d="M 178 97 C 180 93, 183 101, 186 97 C 189 93, 192 101, 195 97 C 198 93, 201 101, 204 97 C 207 93, 210 101, 213 97 C 216 93, 219 101, 222 97 C 225 93, 228 101, 231 97 C 234 93, 237 101, 240 97"
          stroke={RED} strokeWidth="1.5" strokeLinecap="round"
        />

        {/* Arrow / send button in bar */}
        <path
          className="hero-illustration__search-arrow"
          d="M 326 97 L 340 97 M 334 91 L 340 97 L 334 103"
          stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />

        {/* Content placeholder line 1 */}
        <path
          className="hero-illustration__content-line"
          d="M 165 128 C 167 124, 170 132, 173 128 C 176 124, 179 132, 182 128 C 185 124, 188 132, 191 128 C 194 124, 197 132, 200 128 C 203 124, 206 132, 209 128 C 212 124, 215 132, 218 128 C 221 124, 224 132, 227 128 C 230 124, 233 132, 236 128"
          stroke={RED} strokeWidth="1.5" strokeLinecap="round"
        />

        {/* Content placeholder line 2 (shorter) */}
        <path
          className="hero-illustration__content-line"
          d="M 165 152 C 167 148, 170 156, 173 152 C 176 148, 179 156, 182 152 C 185 148, 188 156, 191 152 C 194 148, 197 156, 200 152 C 203 148, 206 156, 209 152"
          stroke={RED} strokeWidth="1.5" strokeLinecap="round"
        />
      </g>

      {/* ── BIRDS ON TOP OF WINDOW ──────────────────────────── */}
      <g className="hero-illustration__birds">
        {/* Bird 1 - left */}
        <ellipse className="hero-illustration__bird-body" cx="192" cy="34" rx="10" ry="7" stroke={RED} strokeWidth="1.8" fill="none" />
        <path className="hero-illustration__bird-beak" d="M 182 34 C 179 30, 174 28, 173 31" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
        <circle className="hero-illustration__bird-eye" cx="195" cy="31" r="1.5" fill={RED} />
        <path className="hero-illustration__bird-feet" d="M 188 41 L 186 47 M 192 41 L 190 47 M 192 41 L 195 47" stroke={RED} strokeWidth="1.2" strokeLinecap="round" />

        {/* Bird 2 - center (slightly higher, bigger) */}
        <ellipse className="hero-illustration__bird-body" cx="262" cy="24" rx="12" ry="8" stroke={RED} strokeWidth="1.8" fill="none" />
        <path className="hero-illustration__bird-beak" d="M 250 24 C 246 20, 241 18, 240 22" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
        <circle className="hero-illustration__bird-eye" cx="266" cy="21" r="1.8" fill={RED} />
        <path className="hero-illustration__bird-feet" d="M 257 32 L 255 38 M 262 32 L 260 38 M 262 32 L 266 38" stroke={RED} strokeWidth="1.2" strokeLinecap="round" />

        {/* Bird 3 - right */}
        <ellipse className="hero-illustration__bird-body" cx="345" cy="29" rx="10" ry="7" stroke={RED} strokeWidth="1.8" fill="none" />
        <path className="hero-illustration__bird-beak" d="M 335 29 C 332 25, 327 23, 326 26" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
        <circle className="hero-illustration__bird-eye" cx="348" cy="26" r="1.5" fill={RED} />
        <path className="hero-illustration__bird-feet" d="M 341 36 L 339 42 M 345 36 L 343 42 M 345 36 L 348 42" stroke={RED} strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* ── CHARACTER / PERSON ──────────────────────────────── */}
      <g className="hero-illustration__character">
        {/* Head */}
        <circle className="hero-illustration__char-head" cx="318" cy="276" r="24" stroke={RED} strokeWidth="2" fill="none" />

        {/* Eyes */}
        <ellipse className="hero-illustration__char-eye" cx="310" cy="272" rx="3.5" ry="4.5" fill={RED} />
        <ellipse className="hero-illustration__char-eye" cx="326" cy="272" rx="3.5" ry="4.5" fill={RED} />

        {/* Eyebrows */}
        <path className="hero-illustration__char-brow" d="M 305 265 C 308 262, 312 263, 314 265" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
        <path className="hero-illustration__char-brow" d="M 321 265 C 324 262, 328 263, 330 265" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />

        {/* Smile */}
        <path className="hero-illustration__char-smile" d="M 308 285 C 313 292, 323 292, 328 285" stroke={RED} strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Cheek dots */}
        <circle className="hero-illustration__char-cheek" cx="305" cy="282" r="3" fill={RED} fillOpacity="0.35" />
        <circle className="hero-illustration__char-cheek" cx="331" cy="282" r="3" fill={RED} fillOpacity="0.35" />

        {/* Body */}
        <path className="hero-illustration__char-body" d="M 318 300 L 318 342" stroke={RED} strokeWidth="2.5" strokeLinecap="round" />
        <path className="hero-illustration__char-shoulders" d="M 295 310 L 342 310" stroke={RED} strokeWidth="2" strokeLinecap="round" />

        {/* Left arm */}
        <path className="hero-illustration__char-arm" d="M 295 310 L 278 325 L 275 335" stroke={RED} strokeWidth="2" strokeLinecap="round" />

        {/* Right arm holding phone */}
        <path className="hero-illustration__char-arm" d="M 342 310 L 360 300" stroke={RED} strokeWidth="2" strokeLinecap="round" />

        {/* Phone / device */}
        <rect className="hero-illustration__phone" x="357" y="285" width="26" height="38" rx="5" stroke={RED} strokeWidth="2" />
        <path className="hero-illustration__phone-line" d="M 362 296 C 363 293, 365 299, 367 296 C 369 293, 371 299, 373 296 C 375 293, 377 299, 379 296" stroke={RED} strokeWidth="1.2" strokeLinecap="round" />
        <path className="hero-illustration__phone-line" d="M 362 306 C 364 303, 366 309, 368 306 C 370 303, 372 309, 374 306" stroke={RED} strokeWidth="1.2" strokeLinecap="round" />

        {/* Legs */}
        <path className="hero-illustration__char-leg" d="M 310 342 L 305 355" stroke={RED} strokeWidth="2.5" strokeLinecap="round" />
        <path className="hero-illustration__char-leg" d="M 326 342 L 331 355" stroke={RED} strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* ── ANIMAL (DUCK / GOOSE) ───────────────────────────── */}
      <g className="hero-illustration__animal">
        {/* Body */}
        <path
          className="hero-illustration__animal-body"
          d="M 388 208 C 408 185 435 196 435 218 C 435 240 415 254 396 246 C 378 238 374 222 388 208"
          stroke={RED} strokeWidth="2" fill="none"
        />

        {/* Neck */}
        <path className="hero-illustration__animal-neck" d="M 435 218 C 442 208 450 198 448 188" stroke={RED} strokeWidth="2" strokeLinecap="round" />

        {/* Head */}
        <circle className="hero-illustration__animal-head" cx="445" cy="182" r="10" stroke={RED} strokeWidth="2" fill="none" />

        {/* Eye */}
        <circle className="hero-illustration__animal-eye" cx="449" cy="179" r="2.5" fill={RED} />

        {/* Beak */}
        <path className="hero-illustration__animal-beak" d="M 454 182 L 462 178 L 458 185 Z" stroke={RED} strokeWidth="1.5" fill="none" strokeLinejoin="round" />

        {/* Wing detail */}
        <path className="hero-illustration__animal-wing" d="M 395 225 C 408 218 422 222 430 230" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />

        {/* Feet */}
        <path className="hero-illustration__animal-foot" d="M 392 246 L 388 258 L 380 263 M 388 258 L 390 265" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
        <path className="hero-illustration__animal-foot" d="M 410 250 L 410 263 L 402 268 M 410 263 L 415 268" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* ── EXTRA DECORATIVE ELEMENTS ───────────────────────── */}
      <g className="hero-illustration__decorative">
        {/* Small floating stars / dots near plants */}
        <circle className="hero-illustration__dot" cx="56" cy="165" r="2.5" fill={RED} />
        <circle className="hero-illustration__dot" cx="36" cy="195" r="1.8" fill={RED} />
        <circle className="hero-illustration__dot" cx="72" cy="140" r="2" fill={RED} />

        {/* Dotted decorative lines around window */}
        <circle className="hero-illustration__dot" cx="380" cy="75" r="2" fill={RED} fillOpacity="0.5" />
        <circle className="hero-illustration__dot" cx="392" cy="65" r="1.5" fill={RED} fillOpacity="0.4" />
        <circle className="hero-illustration__dot" cx="390" cy="82" r="1.8" fill={RED} fillOpacity="0.4" />

        {/* Small X mark decorative */}
        <path className="hero-illustration__x-mark" d="M 143 175 L 149 181 M 149 175 L 143 181" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />

        {/* Curved bracket / accent near character */}
        <path className="hero-illustration__bracket" d="M 288 262 C 280 270 280 285 288 293" stroke={RED} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}
