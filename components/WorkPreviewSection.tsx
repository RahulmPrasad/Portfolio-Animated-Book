"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RED = "#C84535";
const CREAM = "#E8D8B8";
const DARK = "#141010";

/* ═══════════════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════════════ */
export default function WorkPreviewSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      className="work-preview relative w-full overflow-hidden"
      ref={ref}
      style={{ background: DARK, paddingBottom: 80 }}
    >
      {/* Lucky Cat — centered, entrance from above */}
      <motion.div
        className="work-preview__cat-wrap flex justify-center pt-12 pb-4 relative z-10"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 55, damping: 14 }}
      >
        <LuckyCatSVG />
      </motion.div>

      {/* Scattered cards arena */}
      <div
        className="work-preview__arena relative mx-auto"
        style={{ maxWidth: 1000, height: 680 }}
      >
        {/* ── Sticky note — flies in from beliefs section above ─── */}
        <FloatingNote isInView={isInView} />

        {/* ── Project cards ────────────────────────────────────── */}
        <ScatteredCard
          className="card-logistics-wrap"
          isInView={isInView}
          delay={0.15}
          position={{ top: 50, left: 0 }}
          initialOffset={{ x: -80, y: -60 }}
          rotation={-5}
          zIndex={2}
        >
          <CardLogistics />
        </ScatteredCard>

        <ScatteredCard
          className="card-design-wrap"
          isInView={isInView}
          delay={0.3}
          position={{ top: 30, right: 0 }}
          initialOffset={{ x: 80, y: -60 }}
          rotation={3}
          zIndex={2}
        >
          <CardDesign />
        </ScatteredCard>

        <ScatteredCard
          className="card-race-wrap"
          isInView={isInView}
          delay={0.48}
          position={{ bottom: 10, left: 0 }}
          initialOffset={{ x: -80, y: 60 }}
          rotation={-3}
          zIndex={2}
        >
          <CardRace />
        </ScatteredCard>

        <ScatteredCard
          className="card-payment-wrap"
          isInView={isInView}
          delay={0.62}
          position={{ bottom: 20, right: 0 }}
          initialOffset={{ x: 80, y: 60 }}
          rotation={4}
          zIndex={2}
        >
          <CardPayment />
        </ScatteredCard>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SCATTERED CARD WRAPPER
═══════════════════════════════════════════════════════ */
interface ScatteredCardProps {
  children: React.ReactNode;
  className?: string;
  isInView: boolean;
  delay: number;
  position: React.CSSProperties;
  initialOffset: { x: number; y: number };
  rotation: number;
  zIndex?: number;
}

function ScatteredCard({
  children,
  className = "",
  isInView,
  delay,
  position,
  initialOffset,
  rotation,
  zIndex = 2,
}: ScatteredCardProps) {
  return (
    <motion.div
      className={`scattered-card absolute ${className}`}
      style={{ ...position, zIndex }}
      initial={{ opacity: 0, x: initialOffset.x, y: initialOffset.y, rotate: rotation - 4 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: rotation } : {}}
      transition={{ type: "spring", stiffness: 60, damping: 14, delay }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 30, transition: { duration: 0.25 } }}
    >
      <div
        className="card-shell"
        style={{
          background: "#fff",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 8px 48px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)",
          width: 275,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   FLYING STICKY NOTE (from hero → this section)
═══════════════════════════════════════════════════════ */
function FloatingNote({ isInView }: { isInView: boolean }) {
  return (
    /* Outer: entrance spring */
    <motion.div
      className="work-preview__note-wrap absolute"
      style={{
        top: "24%",
        left: "50%",
        translateX: "-50%",
        zIndex: 20,
        cursor: "default",
      }}
      initial={{ opacity: 0, y: -140, rotate: -10, scale: 0.72 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: -3, scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 65, damping: 12, delay: 0.22 }}
    >
      {/* Inner: continuous gentle float after landing */}
      <motion.div
        className="work-preview__note-float"
        animate={isInView ? { y: [0, -9, 0] } : {}}
        transition={{ delay: 1.6, duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="work-preview__note-card"
          style={{
            width: 210,
            background: "#FAF8F0",
            backgroundImage: `
              repeating-linear-gradient(
                transparent,
                transparent 31px,
                rgba(100, 130, 210, 0.28) 31px,
                rgba(100, 130, 210, 0.28) 32px
              )
            `,
            backgroundSize: "100% 32px",
            backgroundPosition: "0 12px",
            borderLeft: "3.5px solid rgba(200,69,53,0.45)",
            padding: "12px 16px 20px 20px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.25)",
            position: "relative",
          }}
        >
          <p
            className="work-preview__note-text font-hand"
            style={{
              color: "#1C1814",
              fontSize: "1.85rem",
              lineHeight: "32px",
              margin: 0,
            }}
          >
            tirelessly
            <br />
            pursue
            <br />
            clarity.
          </p>
          {/* Pin on note */}
          <svg
            className="work-preview__note-pin"
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            style={{ position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)" }}
            aria-hidden
          >
            <circle cx="8" cy="6" r="5" stroke={RED} strokeWidth="1.5" fill={RED} fillOpacity="0.6" />
            <line x1="8" y1="11" x2="8" y2="24" stroke={RED} strokeWidth="1.5" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   LUCKY CAT SVG
═══════════════════════════════════════════════════════ */
function LuckyCatSVG() {
  const c = CREAM;
  return (
    <svg className="lucky-cat" width="155" height="205" viewBox="0 0 155 205" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Body */}
      <path className="lucky-cat__body" d="M 28 130 C 28 100, 46 88, 77 88 C 108 88, 127 100, 127 130 L 127 182 C 127 193, 121 198, 110 198 L 44 198 C 33 198, 28 193, 28 182 Z" stroke={c} strokeWidth="2" fill="none" />
      {/* Head */}
      <circle className="lucky-cat__head" cx="77" cy="62" r="42" stroke={c} strokeWidth="2" fill="none" />
      {/* Left ear */}
      <path className="lucky-cat__ear-left" d="M 42 32 L 34 12 L 60 26 Z" stroke={c} strokeWidth="1.8" fill="none" />
      <path className="lucky-cat__ear-left-inner" d="M 44 30 L 38 16 L 57 27 Z" stroke={c} strokeWidth="1" fill={c} fillOpacity="0.25" />
      {/* Right ear */}
      <path className="lucky-cat__ear-right" d="M 112 32 L 120 12 L 94 26 Z" stroke={c} strokeWidth="1.8" fill="none" />
      <path className="lucky-cat__ear-right-inner" d="M 110 30 L 116 16 L 97 27 Z" stroke={c} strokeWidth="1" fill={c} fillOpacity="0.25" />
      {/* Eyes */}
      <ellipse className="lucky-cat__eye-left-outer" cx="63" cy="58" rx="8" ry="9" stroke={c} strokeWidth="1.8" fill="none" />
      <ellipse className="lucky-cat__eye-left-iris" cx="63" cy="59" rx="4" ry="5" fill={c} fillOpacity="0.85" />
      <circle className="lucky-cat__eye-left-pupil" cx="61" cy="56" r="1.5" fill={DARK} />
      <ellipse className="lucky-cat__eye-right-outer" cx="91" cy="58" rx="8" ry="9" stroke={c} strokeWidth="1.8" fill="none" />
      <ellipse className="lucky-cat__eye-right-iris" cx="91" cy="59" rx="4" ry="5" fill={c} fillOpacity="0.85" />
      <circle className="lucky-cat__eye-right-pupil" cx="89" cy="56" r="1.5" fill={DARK} />
      {/* Cheek blush */}
      <ellipse className="lucky-cat__blush-left" cx="50" cy="70" rx="7" ry="4" fill={c} fillOpacity="0.2" />
      <ellipse className="lucky-cat__blush-right" cx="104" cy="70" rx="7" ry="4" fill={c} fillOpacity="0.2" />
      {/* Nose */}
      <path className="lucky-cat__nose" d="M 75 70 L 77 74 L 79 70" stroke={c} strokeWidth="1.2" strokeLinejoin="round" fill="none" />
      {/* Mouth */}
      <path className="lucky-cat__mouth" d="M 72 77 C 74.5 81, 79.5 81, 82 77" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
      {/* Whiskers left */}
      <path className="lucky-cat__whisker" d="M 35 66 L 58 70" stroke={c} strokeWidth="1" strokeLinecap="round" />
      <path className="lucky-cat__whisker" d="M 33 73 L 58 74" stroke={c} strokeWidth="1" strokeLinecap="round" />
      <path className="lucky-cat__whisker" d="M 36 80 L 58 78" stroke={c} strokeWidth="1" strokeLinecap="round" />
      {/* Whiskers right */}
      <path className="lucky-cat__whisker" d="M 119 66 L 96 70" stroke={c} strokeWidth="1" strokeLinecap="round" />
      <path className="lucky-cat__whisker" d="M 121 73 L 96 74" stroke={c} strokeWidth="1" strokeLinecap="round" />
      <path className="lucky-cat__whisker" d="M 118 80 L 96 78" stroke={c} strokeWidth="1" strokeLinecap="round" />
      {/* Collar */}
      <path className="lucky-cat__collar" d="M 40 100 C 42 95, 52 92, 77 92 C 102 92, 112 95, 114 100 C 112 105, 102 108, 77 108 C 52 108, 42 105, 40 100 Z" stroke={c} strokeWidth="1.8" fill="none" />
      {/* Bell */}
      <circle className="lucky-cat__bell" cx="77" cy="112" r="7" stroke={c} strokeWidth="1.5" fill="none" />
      <path className="lucky-cat__bell-clapper" d="M 74 115 L 77 119 L 80 115" stroke={c} strokeWidth="1.2" />
      <line className="lucky-cat__bell-line" x1="74" y1="112" x2="80" y2="112" stroke={c} strokeWidth="1" />
      {/* Raised right paw / arm (our left) */}
      <path className="lucky-cat__arm-raised" d="M 116 122 C 122 108, 132 96, 138 82 C 142 72, 145 64, 143 56" stroke={c} strokeWidth="9" strokeLinecap="round" fill="none" />
      {/* Paw palm */}
      <ellipse className="lucky-cat__paw-palm" cx="141" cy="52" rx="13" ry="11" stroke={c} strokeWidth="1.8" fill="none" />
      {/* Paw toes */}
      <circle className="lucky-cat__paw-toe" cx="133" cy="45" r="4.5" stroke={c} strokeWidth="1.2" fill="none" />
      <circle className="lucky-cat__paw-toe" cx="141" cy="43" r="4.5" stroke={c} strokeWidth="1.2" fill="none" />
      <circle className="lucky-cat__paw-toe" cx="149" cy="46" r="4.5" stroke={c} strokeWidth="1.2" fill="none" />
      {/* Left arm resting */}
      <path className="lucky-cat__arm-rest" d="M 38 130 C 32 126, 24 128, 21 136" stroke={c} strokeWidth="8" strokeLinecap="round" />
      <ellipse className="lucky-cat__paw-rest" cx="18" cy="140" rx="10" ry="8" stroke={c} strokeWidth="1.5" fill="none" />
      {/* Body markings coin */}
      <circle className="lucky-cat__coin-outer" cx="77" cy="152" r="22" stroke={c} strokeWidth="1.5" fill="none" />
      <circle className="lucky-cat__coin-inner" cx="77" cy="152" r="18" stroke={c} strokeWidth="0.8" fill="none" />
      {/* 大吉 text */}
      <text className="lucky-cat__coin-text" x="77" y="160" textAnchor="middle" fontSize="16" fontFamily="serif" fill={c} fillOpacity="0.75">大吉</text>
      {/* Tail */}
      <path className="lucky-cat__tail" d="M 116 188 C 134 182, 148 170, 148 156 C 148 142, 136 138, 128 145 C 120 152, 116 164, 118 176" stroke={c} strokeWidth="8" strokeLinecap="round" fill="none" />
      {/* Body fur lines */}
      <path className="lucky-cat__fur" d="M 48 140 C 55 136, 65 138, 70 143" stroke={c} strokeWidth="0.8" strokeLinecap="round" />
      <path className="lucky-cat__fur" d="M 84 143 C 89 138, 99 136, 106 140" stroke={c} strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   PROJECT CARDS
═══════════════════════════════════════════════════════ */

/* Card 1 — Logistics / Trading Platform */
function CardLogistics() {
  return (
    <div className="card-logistics" style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* Truncated top row */}
      <div className="card-logistics__header" style={{ background: "#F7F7F7", padding: "8px 14px", fontSize: 11, color: "#aaa", borderBottom: "1px solid #eee" }}>
        ─ ─  Argentine Soybeans Shipment
      </div>
      <div className="card-logistics__body" style={{ padding: "14px 14px 16px" }}>
        {/* Route */}
        <div className="card-logistics__route" style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
          <span className="card-logistics__route-from" style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>Buenos Aires</span>
          <span className="card-logistics__route-arrow" style={{ color: "#888", fontSize: 12 }}>→</span>
          <span className="card-logistics__route-to" style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>Shanghai</span>
        </div>
        {/* Prices */}
        <div className="card-logistics__prices" style={{ display: "flex", gap: 10, fontSize: 11, color: "#666", marginBottom: 4 }}>
          <span className="card-logistics__price-proposed">Proposed <strong style={{ color: "#111" }}>$308/MT</strong></span>
          <span className="card-logistics__price-market">Market <strong style={{ color: "#111" }}>$305/MT</strong></span>
        </div>
        {/* Ship type */}
        <div className="card-logistics__ship" style={{ fontSize: 11, color: "#888", marginBottom: 10 }}>⚓ Panamax Bulk Carrier</div>
        {/* Avatars */}
        <div className="card-logistics__avatars" style={{ display: "flex", gap: 3, marginBottom: 12 }}>
          {["#C84535", "#4A7FA5", "#5A9B6A"].map((bg, i) => (
            <div key={i} className="card-logistics__avatar" style={{ width: 26, height: 26, borderRadius: "50%", background: bg, border: "2px solid #fff" }} />
          ))}
          <div className="card-logistics__avatar-more" style={{ width: 26, height: 26, borderRadius: "50%", background: "#ccc", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#555" }}>+2</div>
        </div>
        {/* Contact card */}
        <div className="card-logistics__contact" style={{ background: "#F8F8F8", borderRadius: 8, padding: "10px 10px", marginBottom: 10 }}>
          <div className="card-logistics__contact-row" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div className="card-logistics__contact-avatar" style={{ width: 30, height: 30, borderRadius: "50%", background: "#ddd", flexShrink: 0 }} />
            <div className="card-logistics__contact-info">
              <div className="card-logistics__contact-name" style={{ fontSize: 12, fontWeight: 600, color: "#111" }}>David Andersen</div>
              <div className="card-logistics__contact-role" style={{ fontSize: 10, color: "#888" }}>Shipbroker</div>
            </div>
            <div className="card-logistics__contact-icon" style={{ marginLeft: "auto" }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, background: "#e0e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 10, height: 8, border: "1px solid #6090b0", borderRadius: 1 }} />
              </div>
            </div>
          </div>
          <div className="card-logistics__contact-location" style={{ fontSize: 10, color: "#777", marginBottom: 5 }}>🌐 Melbourne, AUS (UTC+11)</div>
          <div className="card-logistics__contact-time" style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: "#555", marginBottom: 3 }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#ddd" }} />
            <span>02:23  →  Starts in 9hrs 42min</span>
          </div>
          <div className="card-logistics__contact-time" style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: "#555" }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#ddd" }} />
            <span>17:23  →  Ends in 1hr 42min →</span>
          </div>
        </div>
        {/* Tags row */}
        <div className="card-logistics__tags" style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
          <span className="card-logistics__tag-badge" style={{ background: "#FF9800", color: "#fff", fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 3, letterSpacing: 0.5 }}>MEDIUM</span>
          <span className="card-logistics__tag-label" style={{ fontSize: 11, color: "#777" }}>Wheat $...</span>
        </div>
        <div className="card-logistics__route-label" style={{ fontSize: 11, color: "#aaa" }}>Buenos Aires → Shanghai</div>
        <div className="card-logistics__details" style={{ fontSize: 10, color: "#bbb", marginTop: 2 }}>Volume <strong>45,000MT</strong> · Potential <strong>$14.2M</strong></div>
      </div>
    </div>
  );
}

/* Card 2 — Design / Creative Tool */
function CardDesign() {
  const photos = [
    { bg: "#2A2A2A", text: "Ps", textColor: "#4A9ED6" },
    { bg: "#1A3A5C", text: "宛先", textColor: "#fff" },
    { bg: "#C84535", text: "", textColor: "#fff" },
    { bg: "#8B7355", text: "n", textColor: "#E8D8B8" },
  ];
  return (
    <div className="card-design" style={{ fontFamily: "system-ui, sans-serif", background: "#1A1A1A" }}>
      {/* Image grid */}
      <div className="card-design__grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, padding: 2 }}>
        {photos.map((p, i) => (
          <div
            key={i}
            className="card-design__grid-item"
            style={{
              height: 75,
              background: p.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: i === 0 ? 18 : 14,
              fontWeight: 700,
              color: p.textColor,
              borderRadius: 4,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span>{p.text}</span>
            {i === 2 && (
              <span className="card-design__grid-v2" style={{ position: "absolute", bottom: 6, right: 8, fontSize: 22, fontWeight: 900, opacity: 0.7 }}>V2</span>
            )}
          </div>
        ))}
      </div>
      {/* W2 overlay text */}
      <div className="card-design__headline" style={{ background: "#111", padding: "8px 12px 4px" }}>
        <div className="card-design__headline-text" style={{ fontSize: 28, fontWeight: 900, color: "#fff", letterSpacing: -1, lineHeight: 1 }}>W2</div>
      </div>
      {/* Search bar */}
      <div className="card-design__search" style={{ background: "#1A1A1A", padding: "8px 12px 14px" }}>
        <div className="card-design__search-inner" style={{
          display: "flex",
          alignItems: "center",
          background: "#2A2A2A",
          borderRadius: 20,
          padding: "6px 14px",
          gap: 8,
        }}>
          <span className="card-design__search-placeholder" style={{ flex: 1, fontSize: 12, color: "#888" }}>Search...</span>
          <svg className="card-design__search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="#888" strokeWidth="1.5" />
            <path d="M11 11 L14 14" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* Card 3 — Race / Outdoor Tracker */
function CardRace() {
  return (
    <div className="card-race" style={{ fontFamily: "system-ui, sans-serif", background: "#0A1A0F" }}>
      {/* Map area */}
      <div className="card-race__map" style={{ height: 150, background: "linear-gradient(145deg, #0D2B15 0%, #1A3D22 40%, #0F2210 100%)", position: "relative", overflow: "hidden" }}>
        {/* GPS track line */}
        <svg className="card-race__map-svg" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 275 150" fill="none" preserveAspectRatio="xMidYMid slice">
          <path className="card-race__gps-track" d="M 20 130 C 40 110, 60 90, 90 80 C 120 70, 140 95, 165 75 C 190 55, 210 40, 245 35" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 2" />
          <circle className="card-race__gps-dot" cx="245" cy="35" r="6" fill="#4ADE80" fillOpacity="0.8" />
          <circle className="card-race__gps-pulse" cx="245" cy="35" r="12" stroke="#4ADE80" strokeOpacity="0.3" strokeWidth="1.5" />
          {/* Terrain lines */}
          <path className="card-race__terrain" d="M 0 120 C 30 115, 60 125, 90 118 C 120 111, 150 120, 180 115 C 210 110, 240 118, 275 115" stroke="#1E4D28" strokeWidth="1" />
          <path className="card-race__terrain" d="M 0 140 C 50 135, 100 142, 150 137 C 200 132, 240 140, 275 136" stroke="#1E4D28" strokeWidth="1" />
        </svg>
      </div>
      {/* Photo strip */}
      <div className="card-race__photos" style={{ display: "flex", gap: 2, padding: "2px 2px 0" }}>
        <div className="card-race__photo" style={{ flex: 1, height: 58, background: "#2A4030", borderRadius: "0 0 0 4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="14" r="6" fill="#4ADE80" fillOpacity="0.4" />
            <path d="M 10 38 C 10 28, 16 22, 20 22 C 24 22, 30 28, 30 38" fill="#4ADE80" fillOpacity="0.3" />
          </svg>
        </div>
        <div className="card-race__photo" style={{ flex: 1, height: 58, background: "#1E3028", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="16" cy="13" r="5" fill="#4ADE80" fillOpacity="0.35" />
            <circle cx="26" cy="13" r="5" fill="#4ADE80" fillOpacity="0.35" />
            <path d="M 8 36 C 8 27, 14 22, 16 22 L 26 22 C 28 22, 32 27, 32 36" fill="#4ADE80" fillOpacity="0.25" />
          </svg>
        </div>
      </div>
      {/* Timeline */}
      <div className="card-race__timeline" style={{ padding: "10px 14px 12px", background: "#0A1A0F" }}>
        <div className="card-race__timeline-row" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span className="card-race__time-start" style={{ fontSize: 10, color: "#4ADE80", fontWeight: 600 }}>00:55</span>
          <div className="card-race__progress" style={{ flex: 1, height: 3, background: "#1E3028", borderRadius: 2, position: "relative" }}>
            <div className="card-race__progress-fill" style={{ position: "absolute", left: 0, top: 0, width: "60%", height: "100%", background: "#4ADE80", borderRadius: 2 }} />
          </div>
          <span className="card-race__time-end" style={{ fontSize: 10, color: "#4ADE80", fontWeight: 600 }}>17:23</span>
        </div>
      </div>
    </div>
  );
}

/* Card 4 — BashPay */
function CardPayment() {
  return (
    <div className="card-payment" style={{ fontFamily: "system-ui, sans-serif", padding: "16px 16px 18px" }}>
      {/* Header */}
      <div className="card-payment__header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <span className="card-payment__brand" style={{ fontSize: 18, fontWeight: 800, color: "#111", letterSpacing: -0.5 }}>bashpay</span>
        <span className="card-payment__cancel" style={{ fontSize: 12, color: "#888", cursor: "pointer" }}>Cancel</span>
        <div className="card-payment__summary-chip" style={{ background: "#F5F5F5", borderRadius: 8, padding: "4px 10px" }}>
          <div className="card-payment__summary-label" style={{ fontSize: 10, color: "#888", marginBottom: 1 }}>Order summary</div>
          <div className="card-payment__summary-count" style={{ fontSize: 9, color: "#555" }}>1 Items</div>
        </div>
      </div>
      {/* Total due */}
      <div className="card-payment__total" style={{ marginBottom: 14 }}>
        <div className="card-payment__total-label" style={{ fontSize: 10, color: "#888", marginBottom: 2 }}>Total due</div>
        <div className="card-payment__total-amount" style={{ fontSize: 26, fontWeight: 800, color: "#C84535", letterSpacing: -1 }}>R6,699.86</div>
      </div>
      {/* Pay with */}
      <div className="card-payment__pay-options" style={{ marginBottom: 10 }}>
        <div className="card-payment__pay-label" style={{ fontSize: 10, color: "#aaa", marginBottom: 6 }}>Pay with</div>
        <div className="card-payment__apple-pay" style={{
          background: "#111",
          borderRadius: 8,
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          marginBottom: 6,
        }}>
          <svg className="card-payment__apple-pay-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 5 L15 5 C16 5, 16.5 5.5, 16.5 6.5 L16.5 12.5 C16.5 13.5, 16 14, 15 14 L3 14 C2 14, 1.5 13.5, 1.5 12.5 L1.5 6.5 C1.5 5.5, 2 5, 3 5Z" stroke="white" strokeWidth="1" />
            <path d="M2 8 L17 8" stroke="white" strokeWidth="1.5" />
          </svg>
          <span className="card-payment__apple-pay-label" style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>Apple Pay</span>
        </div>
        {/* Other options */}
        <div className="card-payment__options">
          {["Credit / debit card", "TFG Money account", "DFT / Capfec Pay", "WaveTyne"].map((opt, i) => (
            <div key={i} className="card-payment__option" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid #f0f0f0" }}>
              <span className="card-payment__option-label" style={{ fontSize: 10, color: "#555" }}>{opt}</span>
              <div className="card-payment__option-icons" style={{ display: "flex", gap: 3 }}>
                {i === 0 && ["#1A1AE0", "#E01A1A"].map((c, j) => <div key={j} className="card-payment__option-icon" style={{ width: 16, height: 10, borderRadius: 2, background: c }} />)}
                {i > 0 && <div className="card-payment__option-icon" style={{ width: 24, height: 12, borderRadius: 3, background: "#e8e8e8" }} />}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Summary line */}
      <div className="card-payment__summary" style={{ background: "#F8F8F8", borderRadius: 6, padding: "8px 10px" }}>
        <div className="card-payment__summary-row" style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#888", marginBottom: 2 }}>
          <span>Subtotal</span><span>R8,359.86</span>
        </div>
        <div className="card-payment__summary-row card-payment__summary-discount" style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#C84535", marginBottom: 2 }}>
          <span>Discount</span><span>-R600.00</span>
        </div>
        <div className="card-payment__summary-row card-payment__summary-total" style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 700, color: "#111" }}>
          <span>Amount due</span><span>R6,699.86</span>
        </div>
      </div>
    </div>
  );
}
