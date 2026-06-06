"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RED = "#4A7A5A";
const CREAM = "#2A3D2E";
const PAPER = "#F5F0E2";
const DARK = "#EDE8D4";

export default function FooterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <footer
      className="footer-root relative w-full overflow-hidden"
      ref={ref}
      style={{ background: DARK, paddingBottom: 0 }}
    >
      {/* Main content area */}
      <div
        className="footer-inner relative mx-auto"
        style={{ maxWidth: 1100, padding: "80px 40px 0" }}
      >
        {/* Left decorative flowers */}
        <motion.div
          className="footer-flowers absolute pointer-events-none"
          style={{ left: -60, top: 20 }}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <FlowerCluster />
        </motion.div>

        {/* Right decorative bird */}
        <motion.div
          className="footer-bird absolute pointer-events-none"
          style={{ right: -20, top: 60 }}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          <BirdSketch />
        </motion.div>

        {/* Center card */}
        <motion.div
          className="footer-card relative mx-auto"
          style={{ maxWidth: 780 }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div
            className="footer-card__inner"
            style={{
              background: PAPER,
              borderRadius: 24,
              padding: "40px 44px 44px",
              display: "flex",
              gap: 36,
              alignItems: "stretch",
              boxShadow: "0 24px 80px rgba(0,0,0,0.55)",
            }}
          >
            {/* Left: form-like content */}
            <div className="footer-card__left" style={{ flex: 1 }}>
              {/* Top red rule */}
              <div style={{ height: 1.5, background: RED, marginBottom: 18, borderRadius: 2 }} />

              <motion.h2
                className="footer-card__title font-hand"
                style={{ color: RED, fontSize: "2.4rem", lineHeight: 1.1, marginBottom: 18 }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                What I look for
              </motion.h2>

              {/* Divider */}
              <div style={{ height: 1.5, background: RED, marginBottom: 24, borderRadius: 2 }} />

              {/* Checklist items */}
              <div className="footer-card__checklist" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  "Impactful work",
                  "Meaningful work",
                  "Diversed team of talented folks",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    className="footer-card__check-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "14px 0",
                      borderBottom: i < 2 ? "1.5px dotted rgba(200,69,53,0.35)" : "none",
                    }}
                    initial={{ opacity: 0, x: -14 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.12, duration: 0.55 }}
                  >
                    {/* Checkbox */}
                    <div
                      className="footer-card__checkbox"
                      style={{
                        width: 20,
                        height: 20,
                        border: `2px solid ${RED}`,
                        borderRadius: 4,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="footer-card__check-label font-hand"
                      style={{ color: "#1C1814", fontSize: "1.45rem" }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Let's chat button */}
              <motion.a
                href="mailto:lapsun.j.zhang@gmail.com"
                className="footer-card__cta font-hand"
                style={{
                  display: "inline-block",
                  marginTop: 28,
                  padding: "10px 32px",
                  border: `2px solid ${RED}`,
                  borderRadius: 50,
                  color: RED,
                  fontSize: "1.35rem",
                  textDecoration: "none",
                  cursor: "pointer",
                  background: "transparent",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.05, duration: 0.55 }}
                whileHover={{ background: RED, color: PAPER, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                let&apos;s chat!
              </motion.a>
            </div>

            {/* Right: hand-drawn red rectangle (photo/card placeholder) */}
            <motion.div
              className="footer-card__photo-frame"
              style={{ width: 300, flexShrink: 0, position: "relative" }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block" }}
              >
                {/* Hand-drawn warped rectangle */}
                <path
                  d="M 12 18 C 80 12, 200 8, 288 14 C 294 14, 298 18, 298 26
                     C 296 100, 298 180, 292 246
                     C 292 252, 288 256, 282 256
                     C 200 258, 80 260, 14 254
                     C 8 254, 4 250, 4 244
                     C 6 170, 4 88, 12 18 Z"
                  stroke={RED}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom computer sketch */}
        <motion.div
          className="footer-computer absolute"
          style={{ left: "50%", transform: "translateX(-50%)", bottom: -10 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <ComputerSketch />
        </motion.div>
      </div>

      {/* Gap for computer sketch */}
      <div style={{ height: 140 }} />

      {/* Marquee strip */}
      <div
        className="footer-marquee"
        style={{
          borderTop: "1px solid rgba(74,122,90,0.18)",
          borderBottom: "1px solid rgba(74,122,90,0.18)",
          padding: "14px 0",
          overflow: "hidden",
          position: "relative",
          background: "rgba(74,122,90,0.06)",
        }}
      >
        <motion.div
          className="footer-marquee__track"
          style={{ display: "flex", whiteSpace: "nowrap", gap: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="footer-marquee__item font-hand"
              style={{
                color: CREAM,
                fontSize: "1.15rem",
                opacity: 0.65,
                paddingRight: 80,
                display: "inline-flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <MusicNote />
              Younger than the mountains.
              <span style={{ opacity: 0.5, paddingLeft: 12 }}>Growin like a breeze Country</span>
              <MusicNote />
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}

/* ─── SVG Decoratives ─────────────────────────────────── */

function FlowerCluster() {
  const c = CREAM;
  return (
    <svg width="180" height="200" viewBox="0 0 180 200" fill="none" aria-hidden>
      {/* Stem 1 */}
      <path d="M 60 195 C 58 160, 52 130, 48 100 C 44 70, 50 45, 65 30" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
      {/* Flower 1 */}
      <circle cx="65" cy="28" r="12" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="65" cy="28" r="5" stroke={c} strokeWidth="1.2" fill="none" />
      <path d="M 65 16 C 65 10, 70 8, 72 13" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 76 22 C 82 20, 84 25, 79 27" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 75 34 C 80 36, 79 42, 73 41" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 65 40 C 65 46, 60 48, 58 43" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 55 34 C 50 36, 51 42, 57 41" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 54 22 C 48 20, 46 25, 51 27" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      {/* Leaf off stem 1 */}
      <path d="M 52 95 C 35 80, 28 60, 38 50 C 48 40, 58 55, 52 75 C 46 95, 52 95" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M 52 95 C 45 78, 42 60, 38 50" stroke={c} strokeWidth="0.8" strokeDasharray="2 3" />

      {/* Stem 2 */}
      <path d="M 110 195 C 108 155, 102 118, 95 88" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
      {/* Flower 2 - smaller */}
      <circle cx="95" cy="75" r="9" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="95" cy="75" r="3.5" fill={c} fillOpacity="0.35" />
      <path d="M 95 66 L 95 60" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 103 70 L 108 66" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 104 80 L 110 82" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 95 84 L 95 90" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 87 80 L 80 82" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 86 70 L 80 66" stroke={c} strokeWidth="1.3" strokeLinecap="round" />

      {/* Stem 3 - short */}
      <path d="M 78 195 C 80 175, 82 158, 88 142" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      {/* Flower bud */}
      <ellipse cx="90" cy="135" rx="7" ry="10" stroke={c} strokeWidth="1.4" fill="none" />
      <path d="M 83 135 C 80 126, 82 118, 90 116 C 98 118, 100 126, 97 135" stroke={c} strokeWidth="1" fill="none" />

      {/* Scattered leaves at base */}
      <path d="M 55 180 C 40 165, 35 148, 44 140 C 53 132, 62 145, 58 162 C 54 178, 55 180" stroke={c} strokeWidth="1.3" fill="none" />
      <path d="M 120 175 C 135 162, 140 145, 132 138 C 124 131, 115 143, 118 160 C 121 177, 120 175" stroke={c} strokeWidth="1.3" fill="none" />
    </svg>
  );
}

function BirdSketch() {
  const c = CREAM;
  return (
    <svg width="160" height="175" viewBox="0 0 160 175" fill="none" aria-hidden>
      {/* Body */}
      <ellipse cx="80" cy="105" rx="42" ry="32" stroke={c} strokeWidth="2" fill="none" />
      {/* Wing detail */}
      <path d="M 50 100 C 64 90, 82 93, 96 100" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 55 110 C 66 102, 82 104, 94 110" stroke={c} strokeWidth="1" strokeLinecap="round" />
      {/* Tail */}
      <path d="M 38 108 C 22 112, 10 106, 8 98 C 6 90, 18 84, 30 90" stroke={c} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Neck */}
      <path d="M 115 92 C 125 78, 130 62, 126 50" stroke={c} strokeWidth="2" strokeLinecap="round" />
      {/* Head */}
      <circle cx="120" cy="42" r="20" stroke={c} strokeWidth="2" fill="none" />
      {/* Eye */}
      <circle cx="128" cy="36" r="4.5" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="129" cy="35" r="2" fill={c} fillOpacity="0.7" />
      {/* Beak */}
      <path d="M 138 43 L 155 38 L 148 48 Z" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      {/* Crest */}
      <path d="M 112 28 C 110 18, 115 10, 120 8 C 122 14, 120 22, 120 28" stroke={c} strokeWidth="1.3" fill="none" />
      <path d="M 120 26 C 120 16, 126 8, 130 6 C 132 12, 128 20, 126 26" stroke={c} strokeWidth="1.3" fill="none" />
      {/* Feet */}
      <path d="M 66 136 L 62 152 L 52 158 M 62 152 L 64 162 M 62 152 L 72 160" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 86 136 L 86 154 L 76 160 M 86 154 L 90 163 M 86 154 L 96 160" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      {/* Ground line suggestion */}
      <path d="M 40 168 C 60 165, 110 166, 140 163" stroke={c} strokeWidth="0.8" strokeLinecap="round" strokeDasharray="4 4" strokeOpacity="0.4" />
    </svg>
  );
}

function ComputerSketch() {
  const c = CREAM;
  return (
    <svg width="145" height="135" viewBox="0 0 145 135" fill="none" aria-hidden>
      {/* Monitor body */}
      <rect x="18" y="8" width="110" height="82" rx="10" stroke={c} strokeWidth="2" fill="none" />
      {/* Screen bezel */}
      <rect x="26" y="16" width="94" height="66" rx="6" stroke={c} strokeWidth="1.2" fill="none" />
      {/* Face on screen */}
      <circle cx="58" cy="46" r="6" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="58" cy="46" r="2.5" fill={c} fillOpacity="0.5" />
      <circle cx="88" cy="46" r="6" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="88" cy="46" r="2.5" fill={c} fillOpacity="0.5" />
      <path d="M 62 62 C 66 68, 80 68, 84 62" stroke={c} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Play triangle */}
      <path d="M 22 24 L 30 29 L 22 34 Z" stroke={c} strokeWidth="1.2" fill="none" />
      {/* Base / neck */}
      <path d="M 64 90 L 62 106 L 84 106 L 82 90" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Base stand */}
      <path d="M 48 106 L 98 106" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
      {/* Small detail buttons */}
      <circle cx="126" cy="96" r="3" stroke={c} strokeWidth="1.2" fill="none" />
      <rect x="115" y="93" width="7" height="6" rx="1.5" stroke={c} strokeWidth="1.2" fill="none" />
      {/* Floppy slot */}
      <rect x="32" y="93" width="24" height="6" rx="2" stroke={c} strokeWidth="1.2" fill="none" />
      {/* Small leaf/flower at top right corner */}
      <path d="M 120 18 C 128 12, 136 14, 135 22 C 134 30, 124 30, 120 22 Z" stroke={c} strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function MusicNote() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden style={{ display: "inline-block", verticalAlign: "middle" }}>
      <path d="M 6 14 L 6 4 L 14 2 L 14 12" stroke={CREAM} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4.5" cy="14.5" r="2.5" stroke={CREAM} strokeWidth="1.3" fill="none" />
      <circle cx="12.5" cy="12.5" r="2.5" stroke={CREAM} strokeWidth="1.3" fill="none" />
    </svg>
  );
}
