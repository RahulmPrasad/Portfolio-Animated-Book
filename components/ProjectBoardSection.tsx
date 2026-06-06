"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const RED = "#4A7A5A";
const CREAM = "#2A3D2E";
const BOARD = "#E4E0D4";
const DARK = "#EDE8D4";
const GRID = "rgba(30,80,50,0.09)";
const CELL = 42;

/* ═══════════════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════════════ */
export default function ProjectBoardSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section ref={ref} style={{ background: DARK, padding: "20px 0 40px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 48px" }}>
        <motion.div
          style={{
            position: "relative",
            background: BOARD,
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(30,80,50,0.15)",
            minHeight: 800,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Graph paper background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(${GRID} 1px, transparent 1px), linear-gradient(90deg, ${GRID} 1px, transparent 1px)`,
              backgroundSize: `${CELL}px ${CELL}px`,
              backgroundPosition: `40px 0`,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Row numbers */}
          {Array.from({ length: 18 }, (_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: i * CELL + CELL / 2 - 7,
                left: 0,
                width: 36,
                textAlign: "right",
                paddingRight: 6,
                fontSize: 10,
                color: "rgba(30,80,50,0.45)",
                fontFamily: "monospace",
                userSelect: "none",
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              {i + 1}
            </div>
          ))}

          {/* Plus markers at intersections */}
          <PlusMarkers />

          {/* Red corner fold — top right */}
          <div style={{ position: "absolute", top: 0, right: 0, zIndex: 15, pointerEvents: "none" }}>
            <svg width="70" height="50" viewBox="0 0 70 50" fill="none">
              <path d="M 70 0 L 70 50 L 34 50 L 34 14 L 50 0 Z" fill="#0E3020" />
              <path d="M 50 0 L 34 14 L 70 14 Z" fill="#1A4D2E" />
            </svg>
          </div>

          {/* Animal sketch at top center */}
          <motion.div
            style={{ position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)", zIndex: 10, pointerEvents: "none" }}
            initial={{ opacity: 0, y: -18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimalSketch />
          </motion.div>

          {/* ── Cards ── */}
          <div style={{ position: "relative", zIndex: 5, padding: "96px 50px 130px 50px" }}>

            {/* ROW 1 */}
            <BoardCard isInView={isInView} delay={0.12} rotate={-2} style={{ position: "absolute", top: 100, left: 48, width: 155, zIndex: 8 }}>
              <CardPackMobile />
            </BoardCard>

            <BoardCard isInView={isInView} delay={0.22} rotate={1.5} style={{ position: "absolute", top: 80, left: 230, width: 175, zIndex: 7 }}>
              <CardGameCode />
            </BoardCard>

            <BoardCard isInView={isInView} delay={0.33} rotate={2.5} style={{ position: "absolute", top: 86, right: 46, width: 175, zIndex: 7 }}>
              <CardVideoQuiz />
            </BoardCard>

            {/* ROW 2 */}
            <BoardCard isInView={isInView} delay={0.18} rotate={-1.5} style={{ position: "absolute", top: 340, left: 32, width: 190, zIndex: 6 }}>
              <CardConference />
            </BoardCard>

            <BoardCard isInView={isInView} delay={0.30} rotate={2} style={{ position: "absolute", top: 320, left: 258, width: 170, zIndex: 6 }}>
              <CardAppointments />
            </BoardCard>

            <BoardCard isInView={isInView} delay={0.44} rotate={-2} style={{ position: "absolute", top: 330, right: 36, width: 185, zIndex: 6 }}>
              <CardTimeline />
            </BoardCard>

            {/* ROW 3 */}
            <BoardCard isInView={isInView} delay={0.15} rotate={-3} style={{ position: "absolute", bottom: 118, left: 28, width: 168, zIndex: 5 }}>
              <CardLogisticsMini />
            </BoardCard>

            <BoardCard isInView={isInView} delay={0.28} rotate={1} style={{ position: "absolute", bottom: 108, left: 238, width: 190, zIndex: 5 }}>
              <CardNewsTerminal />
            </BoardCard>

            <BoardCard isInView={isInView} delay={0.42} rotate={2.5} style={{ position: "absolute", bottom: 98, right: 32, width: 178, zIndex: 5 }}>
              <CardOffRoad />
            </BoardCard>
          </div>

          {/* Bottom quote */}
          <motion.p
            className="font-hand"
            style={{
              position: "absolute",
              bottom: 28,
              right: 44,
              zIndex: 20,
              color: CREAM,
              fontSize: "0.9rem",
              fontStyle: "italic",
              pointerEvents: "none",
              margin: 0,
              opacity: 0,
            }}
            animate={isInView ? { opacity: 0.5 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            everything you do, do it with care.
          </motion.p>

          {/* About me CTA */}
          <motion.div
            style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <Link
              href="/about"
              className="font-hand"
              style={{
                display: "inline-block",
                padding: "6px 26px",
                border: `1.5px dashed rgba(74,122,90,0.65)`,
                borderRadius: 4,
                color: RED,
                fontSize: "0.95rem",
                textDecoration: "none",
                letterSpacing: 0.3,
              }}
            >
              About me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   BOARD CARD WRAPPER
═══════════════════════════════════════════════════════ */
function BoardCard({
  children,
  isInView,
  delay,
  rotate = 0,
  style,
}: {
  children: React.ReactNode;
  isInView: boolean;
  delay: number;
  rotate?: number;
  style: React.CSSProperties;
}) {
  return (
    <motion.div
      style={{ ...style }}
      initial={{ opacity: 0, scale: 0.88, rotate: rotate - 4 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate } : {}}
      transition={{ type: "spring", stiffness: 55, damping: 14, delay }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 40, transition: { duration: 0.22 } }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   PLUS MARKERS
═══════════════════════════════════════════════════════ */
function PlusMarkers() {
  const positions = [
    { top: 83, left: 40 },
    { top: 83, right: 40 },
    { top: 293, left: 40 },
    { top: 293, right: 40 },
    { top: 503, left: 40 },
    { top: 503, right: 40 },
    { top: 713, left: 40 },
    { top: 713, right: 40 },
    { top: 503, left: "50%" },
  ];
  return (
    <>
      {positions.map((pos, i) => (
        <div key={i} style={{ position: "absolute", ...pos, zIndex: 2, pointerEvents: "none", transform: pos.left === "50%" ? "translateX(-50%)" : undefined }}>
          <svg width="10" height="10" viewBox="0 0 10 10">
            <line x1="5" y1="0" x2="5" y2="10" stroke={CREAM} strokeWidth="0.8" strokeOpacity="0.35" />
            <line x1="0" y1="5" x2="10" y2="5" stroke={CREAM} strokeWidth="0.8" strokeOpacity="0.35" />
          </svg>
        </div>
      ))}
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   ANIMAL SKETCH (bear / cat playing guitar)
═══════════════════════════════════════════════════════ */
function AnimalSketch() {
  const c = "#C84535";
  return (
    <svg width="220" height="90" viewBox="0 0 220 90" fill="none" aria-hidden>
      {/* Branch */}
      <path d="M 10 72 C 40 68, 80 65, 110 68 C 140 71, 180 66, 210 70" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
      {/* Small leaves on branch */}
      <path d="M 45 68 C 40 58, 48 52, 54 60 C 50 62, 45 68" stroke={c} strokeWidth="1.1" fill="none" />
      <path d="M 80 65 C 78 54, 86 50, 90 58 C 87 61, 80 65" stroke={c} strokeWidth="1.1" fill="none" />
      <path d="M 155 67 C 153 57, 161 53, 164 61 C 161 64, 155 67" stroke={c} strokeWidth="1.1" fill="none" />

      {/* Body */}
      <ellipse cx="110" cy="55" rx="14" ry="16" stroke={c} strokeWidth="1.5" fill="none" />
      {/* Head */}
      <circle cx="110" cy="34" r="12" stroke={c} strokeWidth="1.5" fill="none" />
      {/* Ears */}
      <path d="M 100 25 L 96 15 L 105 22 Z" stroke={c} strokeWidth="1.3" fill="none" />
      <path d="M 120 25 L 124 15 L 115 22 Z" stroke={c} strokeWidth="1.3" fill="none" />
      {/* Eyes */}
      <circle cx="105" cy="32" r="2" fill={c} fillOpacity="0.8" />
      <circle cx="115" cy="32" r="2" fill={c} fillOpacity="0.8" />
      {/* Nose + mouth */}
      <path d="M 109 37 L 111 39 L 113 37" stroke={c} strokeWidth="1" strokeLinejoin="round" fill="none" />
      <path d="M 106 41 C 108 44, 112 44, 114 41" stroke={c} strokeWidth="1" strokeLinecap="round" fill="none" />

      {/* Guitar body */}
      <ellipse cx="126" cy="58" rx="8" ry="10" stroke={c} strokeWidth="1.3" fill="none" />
      <ellipse cx="126" cy="52" rx="5" ry="6" stroke={c} strokeWidth="1.1" fill="none" />
      <circle cx="126" cy="56" r="2.5" stroke={c} strokeWidth="0.9" fill="none" />
      {/* Guitar neck */}
      <rect x="130" y="30" width="4" height="20" rx="1" stroke={c} strokeWidth="1.1" fill="none" />
      {/* Guitar strings */}
      <line x1="131" y1="32" x2="131" y2="50" stroke={c} strokeWidth="0.7" strokeOpacity="0.6" />
      <line x1="133" y1="32" x2="133" y2="50" stroke={c} strokeWidth="0.7" strokeOpacity="0.6" />

      {/* Arms */}
      <path d="M 98 50 C 92 46, 88 50, 86 56" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 122 48 C 128 44, 131 44, 130 50" stroke={c} strokeWidth="1.3" strokeLinecap="round" />

      {/* Stars / sparkles */}
      <path d="M 74 30 L 75.5 26 L 77 30 L 81 31.5 L 77 33 L 75.5 37 L 74 33 L 70 31.5 Z" stroke={c} strokeWidth="1" fill="none" />
      <path d="M 144 20 L 145 17 L 146 20 L 149 21 L 146 22 L 145 25 L 144 22 L 141 21 Z" stroke={c} strokeWidth="1" fill="none" />
      <circle cx="62" cy="48" r="1.5" fill={c} fillOpacity="0.5" />
      <circle cx="158" cy="38" r="1.5" fill={c} fillOpacity="0.5" />
      <path d="M 168 48 L 168 52 M 166 50 L 170 50" stroke={c} strokeWidth="1" strokeLinecap="round" />
      <path d="M 53 55 L 53 59 M 51 57 L 55 57" stroke={c} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   PROJECT CARDS
═══════════════════════════════════════════════════════ */

/* 1 — Pack: mobile order tracking */
function CardPackMobile() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#F9F9F9" }}>
      {/* Status bar */}
      <div style={{ background: "#fff", padding: "6px 12px 4px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: "#111" }}>9:41</span>
        <div style={{ display: "flex", gap: 3 }}>
          {[4, 3, 5, 4].map((h, i) => <div key={i} style={{ width: 3, height: h, background: "#111", borderRadius: 1 }} />)}
        </div>
      </div>
      {/* Header */}
      <div style={{ background: "#fff", padding: "8px 12px 6px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ fontSize: 11, color: "#999" }}>←</div>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#111", flex: 1 }}>Pack</span>
        <div style={{ fontSize: 9, color: "#666", background: "#F0F0F0", padding: "2px 6px", borderRadius: 10 }}>Filter ↕</div>
      </div>
      {/* Date */}
      <div style={{ padding: "6px 12px 2px", fontSize: 10, color: "#999" }}>12:00 Today</div>
      {/* Order items */}
      {[
        { id: "B64#8475-01", color: "#E8E8E8", items: 2 },
        { id: "B64#8475-01", color: "#D4E8D4", items: 1 },
      ].map((order, i) => (
        <div key={i} style={{ margin: "4px 10px", background: "#fff", borderRadius: 8, padding: "8px 10px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 9, color: "#888", marginBottom: 4 }}>{order.id}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 28, height: 28, background: order.color, borderRadius: 6 }} />
            {i === 0 && <div style={{ width: 28, height: 28, background: "#2A2A5A", borderRadius: 6 }} />}
            <div style={{ marginLeft: "auto", fontSize: 9, color: "#888" }}>Choose {order.items}</div>
          </div>
        </div>
      ))}
      <div style={{ margin: "4px 10px 10px", background: "#fff", borderRadius: 8, padding: "8px 10px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
        <div style={{ fontSize: 9, color: "#888", marginBottom: 4 }}>B64#8475-01</div>
        <div style={{ width: 28, height: 28, background: "#1A1A1A", borderRadius: 6 }} />
      </div>
    </div>
  );
}

/* 2 — Game / pixel code editor */
function CardGameCode() {
  const pixels = [
    [0,0,1,1,0,0,0,1,1,0],
    [0,1,1,1,1,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,0,0,1,1,0,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,1,0,0,0,0,0,0,1,0],
  ];
  const colors = ["#E67835", "#F5A623", "#C84535", "#4A9ED6", "#5BAD6F"];
  return (
    <div style={{ fontFamily: "monospace", background: "#1E1E2E" }}>
      {/* Tab bar */}
      <div style={{ display: "flex", gap: 1, padding: "6px 8px 0", background: "#13131F" }}>
        {["main.js", "level.js"].map((t, i) => (
          <div key={t} style={{ fontSize: 9, padding: "3px 8px", background: i === 0 ? "#1E1E2E" : "transparent", color: i === 0 ? "#E8D8B8" : "#666", borderRadius: "4px 4px 0 0" }}>{t}</div>
        ))}
      </div>
      {/* Pixel grid */}
      <div style={{ padding: "10px 12px 6px" }}>
        {pixels.map((row, ri) => (
          <div key={ri} style={{ display: "flex", gap: 2, marginBottom: 2 }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{ width: 12, height: 12, background: cell ? colors[(ri + ci) % colors.length] : "transparent", borderRadius: 1, opacity: cell ? 0.9 : 0 }} />
            ))}
          </div>
        ))}
      </div>
      {/* Code lines */}
      <div style={{ padding: "4px 12px 10px" }}>
        {["const spawn = (x,y) => {", "  tiles[y][x] = ENEMY;", "  render();", "}"].map((line, i) => (
          <div key={i} style={{ fontSize: 8, color: i === 0 ? "#4A9ED6" : i === 1 ? "#E8D8B8" : i === 2 ? "#F5A623" : "#888", lineHeight: "14px" }}>{line}</div>
        ))}
      </div>
    </div>
  );
}

/* 3 — Video streaming / quiz */
function CardVideoQuiz() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#0D0D1A" }}>
      {/* Top labels */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 10px 4px", fontSize: 9, color: "#888" }}>
        <span style={{ color: "#4ADE80", fontWeight: 700 }}>● LIVE</span>
        <span>You&apos;re First!</span>
      </div>
      {/* Video frame */}
      <div style={{ margin: "0 8px", height: 80, background: "linear-gradient(160deg,#1A2A1A 0%,#0A1A28 60%,#1A0A08 100%)", borderRadius: 6, position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 159 80" fill="none" preserveAspectRatio="xMidYMid slice">
          <ellipse cx="80" cy="55" rx="55" ry="30" fill="#1E3820" fillOpacity="0.7" />
          <ellipse cx="80" cy="52" rx="38" ry="22" fill="#2A4A2A" fillOpacity="0.6" />
          <path d="M 30 65 C 50 58, 110 58, 130 65" stroke="#4ADE80" strokeWidth="0.8" strokeOpacity="0.4" />
          <circle cx="80" cy="40" r="18" fill="#1A2A30" fillOpacity="0.8" />
          <path d="M 73 33 L 90 40 L 73 47 Z" fill="#E8D8B8" fillOpacity="0.7" />
        </svg>
        {/* Counter */}
        <div style={{ position: "absolute", bottom: 6, right: 8, fontSize: 9, color: "#E8D8B8", background: "rgba(0,0,0,0.5)", padding: "2px 6px", borderRadius: 10 }}>12s</div>
      </div>
      {/* Question */}
      <div style={{ padding: "8px 10px 4px", fontSize: 9, color: "#E8D8B8", lineHeight: 1.4 }}>
        To help your team where your favourite location...
      </div>
      {/* Answer options */}
      <div style={{ padding: "0 8px 8px", display: "flex", flexDirection: "column", gap: 3 }}>
        {["Option A", "Option B"].map((opt, i) => (
          <div key={i} style={{ background: i === 0 ? "#2A1A3A" : "#1A1A2A", borderRadius: 4, padding: "5px 8px", fontSize: 9, color: "#E8D8B8" }}>{opt}</div>
        ))}
        <div style={{ background: "#C84535", borderRadius: 4, padding: "5px 8px", fontSize: 9, color: "#fff", textAlign: "center", fontWeight: 700 }}>Close 25s →</div>
      </div>
    </div>
  );
}

/* 4 — Conference speaker */
function CardConference() {
  const faces = ["#C84535", "#4A7FA5", "#8B6A40", "#5BAD6F", "#9B6AAD", "#D4884A"];
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#0A0A14" }}>
      {/* Green grid background suggestion */}
      <div style={{
        background: "linear-gradient(135deg, #0A1A0F 0%, #0A0A14 60%)",
        backgroundImage: `linear-gradient(rgba(74,222,128,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.07) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
        padding: "14px 14px 10px",
      }}>
        <div style={{ fontSize: 18, fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: -0.5, textTransform: "uppercase" }}>
          WHO&apos;S<br />SPEAKING?
        </div>
        <div style={{ fontSize: 9, color: "#4ADE80", marginTop: 4, lineHeight: 1.4 }}>
          Find out where your favourite<br />founders are talking
        </div>
        {/* Face circles row */}
        <div style={{ display: "flex", gap: -4, marginTop: 10 }}>
          {faces.map((bg, i) => (
            <div key={i} style={{ width: 24, height: 24, borderRadius: "50%", background: bg, border: "2px solid #0A0A14", marginLeft: i > 0 ? -6 : 0, position: "relative", zIndex: faces.length - i }}>
              <div style={{ position: "absolute", inset: 3, borderRadius: "50%", background: "rgba(0,0,0,0.2)" }} />
            </div>
          ))}
        </div>
        {/* Audience strip */}
        <div style={{ marginTop: 8, height: 36, background: "#0F1A0F", borderRadius: 4, overflow: "hidden", display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 2, padding: "0 4px 2px" }}>
          {Array.from({ length: 16 }, (_, i) => (
            <div key={i} style={{ width: 8, height: 12 + Math.sin(i * 0.9) * 8, background: "#1E3820", borderRadius: "2px 2px 0 0" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* 5 — Appointments / calendar scheduler */
function CardAppointments() {
  const slots = [
    { time: "Apr 7", label: "Design Review", color: "#FFF3CD", dot: "#F5A623" },
    { time: "Apr 8", label: "Sprint Planning", color: "#D4EDDA", dot: "#5BAD6F" },
    { time: "Apr 9", label: "User Testing", color: "#D1ECF1", dot: "#4A9ED6" },
    { time: "Apr 10", label: "Retrospective", color: "#F8D7DA", dot: "#C84535" },
  ];
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#fff" }}>
      <div style={{ padding: "10px 12px 6px", borderBottom: "1px solid #F0F0F0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: "#111" }}>Appointments</span>
        <span style={{ fontSize: 9, color: "#C84535" }}>+ New</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, padding: "8px 10px" }}>
        {slots.map((s) => (
          <div key={s.time} style={{ background: s.color, borderRadius: 6, padding: "6px 8px", borderLeft: `3px solid ${s.dot}` }}>
            <div style={{ fontSize: 8, color: "#888", marginBottom: 2 }}>{s.time}</div>
            <div style={{ fontSize: 9, fontWeight: 600, color: "#111", lineHeight: 1.3 }}>{s.label}</div>
          </div>
        ))}
      </div>
      {/* Mini calendar row */}
      <div style={{ padding: "0 10px 10px", display: "flex", gap: 3 }}>
        {["M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center", fontSize: 8, color: i === 2 ? "#fff" : "#888", background: i === 2 ? "#C84535" : "transparent", borderRadius: 3, padding: "2px 0" }}>{d}</div>
        ))}
      </div>
    </div>
  );
}

/* 6 — Timeline / Gantt chart */
function CardTimeline() {
  const bars = [
    { label: "Design", start: 5, len: 40, color: "#4A9ED6" },
    { label: "Dev", start: 35, len: 55, color: "#5BAD6F" },
    { label: "Test", start: 75, len: 20, color: "#F5A623" },
    { label: "Ship", start: 68, len: 27, color: "#C84535" },
  ];
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#0E1117" }}>
      <div style={{ padding: "10px 12px 4px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#E8D8B8" }}>Timeline</span>
        <span style={{ fontSize: 8, color: "#666" }}>Q2 2025</span>
      </div>
      <div style={{ padding: "8px 12px 10px" }}>
        {bars.map((b) => (
          <div key={b.label} style={{ marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 32, fontSize: 8, color: "#888", flexShrink: 0 }}>{b.label}</div>
            <div style={{ flex: 1, height: 10, background: "#1A1A2A", borderRadius: 3, position: "relative" }}>
              <div style={{ position: "absolute", left: `${b.start}%`, width: `${b.len}%`, height: "100%", background: b.color, borderRadius: 3, opacity: 0.85 }} />
            </div>
          </div>
        ))}
        {/* Week markers */}
        <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: 38, marginTop: 4 }}>
          {["W1", "W2", "W3", "W4"].map((w) => (
            <span key={w} style={{ fontSize: 7, color: "#444" }}>{w}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 7 — Logistics mini (Buenos Aires → Shanghai) */
function CardLogisticsMini() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#fff", padding: "10px 12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#111" }}>Buenos Aires</span>
        <span style={{ color: "#aaa", fontSize: 10 }}>→</span>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#111" }}>Shanghai</span>
      </div>
      <div style={{ fontSize: 9, color: "#666", marginBottom: 6 }}>
        $308/MT · <span style={{ color: "#111" }}>Panamax</span>
      </div>
      <div style={{ display: "flex", gap: 2, marginBottom: 8 }}>
        {["#C84535", "#4A7FA5", "#5BAD6F", "#F5A623"].map((bg, i) => (
          <div key={i} style={{ width: 20, height: 20, borderRadius: "50%", background: bg, border: "2px solid #fff", marginLeft: i > 0 ? -5 : 0 }} />
        ))}
      </div>
      <div style={{ background: "#F8F8F8", borderRadius: 6, padding: "6px 8px" }}>
        <div style={{ fontSize: 9, fontWeight: 600, color: "#111", marginBottom: 2 }}>David Andersen</div>
        <div style={{ fontSize: 8, color: "#888" }}>Melbourne, AUS (UTC+11)</div>
        <div style={{ fontSize: 8, color: "#555", marginTop: 3 }}>02:23 → Starts in 9hrs 42min</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 6 }}>
        <span style={{ background: "#FF9800", color: "#fff", fontSize: 8, padding: "1px 5px", borderRadius: 2, fontWeight: 700 }}>MEDIUM</span>
        <span style={{ fontSize: 8, color: "#999" }}>Wheat · 45,000MT</span>
      </div>
    </div>
  );
}

/* 8 — News terminal (NWS / binary) */
function CardNewsTerminal() {
  return (
    <div style={{ fontFamily: "'Courier New', monospace", background: "#050810" }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 10px", borderBottom: "1px solid rgba(74,222,128,0.15)" }}>
        <div style={{ fontSize: 11, fontWeight: 900, color: "#4ADE80", letterSpacing: 1 }}>NWS.</div>
        <div style={{ fontSize: 9, color: "#2A5A3A", letterSpacing: 2 }}>ᴱᴹᴺ</div>
        <div style={{ marginLeft: "auto", fontSize: 7, color: "#1E4D28" }}>11010110...</div>
      </div>
      {/* Binary stream */}
      <div style={{ padding: "4px 10px", fontSize: 7, color: "#1A3A22", lineHeight: 1.6, letterSpacing: 1, wordBreak: "break-all", height: 32, overflow: "hidden" }}>
        ATTENTION ATTENTION ATTENTION ATTENTION ATTENTION
      </div>
      {/* Main title */}
      <div style={{ background: "#0A1A0F", margin: "0 6px", borderRadius: 4, padding: "8px 10px 6px" }}>
        <div style={{ fontSize: 8, color: "#4ADE80", letterSpacing: 2, marginBottom: 3 }}>THE FIRST</div>
        <div style={{ fontSize: 20, fontWeight: 900, color: "#E8D8B8", letterSpacing: -1, lineHeight: 1 }}>2.0</div>
        <div style={{ fontSize: 7, color: "#4ADE80", letterSpacing: 2, marginTop: 2 }}>ALTERNET</div>
      </div>
      {/* Bottom ticker */}
      <div style={{ padding: "6px 10px 8px", fontSize: 7, color: "#2A5A3A", letterSpacing: 1 }}>
        ██ GET READY WITH INFO ██ STREAM OPEN ██
      </div>
    </div>
  );
}

/* 9 — Off-road / adventure video */
function CardOffRoad() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#0A0A0A" }}>
      {/* Video thumbnail */}
      <div style={{ height: 100, background: "linear-gradient(160deg, #1A2A10 0%, #2A1A08 50%, #1A0808 100%)", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 178 100" fill="none" preserveAspectRatio="xMidYMid slice">
          {/* Sky */}
          <rect width="178" height="60" fill="#0A1808" fillOpacity="0.8" />
          {/* Mountains */}
          <path d="M 0 60 L 30 30 L 60 50 L 90 20 L 120 45 L 150 25 L 178 40 L 178 60 Z" fill="#1A2A0A" fillOpacity="0.9" />
          {/* Ground */}
          <path d="M 0 60 C 30 56, 80 58, 130 55 C 155 54, 170 57, 178 60 L 178 100 L 0 100 Z" fill="#2A1A08" fillOpacity="0.8" />
          {/* 4WD vehicle suggestion */}
          <rect x="64" y="60" width="50" height="20" rx="4" fill="#3A2A0A" />
          <rect x="70" y="55" width="38" height="15" rx="3" fill="#4A3A10" />
          <circle cx="76" cy="82" r="7" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
          <circle cx="106" cy="82" r="7" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
          {/* Dust trail */}
          <ellipse cx="60" cy="78" rx="20" ry="6" fill="#4A3A20" fillOpacity="0.4" />
          {/* Sun/dust haze */}
          <circle cx="150" cy="20" r="14" fill="#F5A623" fillOpacity="0.15" />
          <circle cx="150" cy="20" r="8" fill="#F5A623" fillOpacity="0.2" />
        </svg>
        {/* Play overlay */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "7px 0 7px 12px", borderColor: "transparent transparent transparent rgba(255,255,255,0.8)", marginLeft: 2 }} />
          </div>
        </div>
      </div>
      {/* Info */}
      <div style={{ padding: "8px 10px 10px", display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#3A2A10", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, fontWeight: 600, color: "#E8D8B8", marginBottom: 1 }}>Desert Run S2</div>
          <div style={{ fontSize: 8, color: "#555" }}>14.2K views · 3 days ago</div>
        </div>
        <div style={{ background: "#C84535", borderRadius: 3, padding: "2px 6px", fontSize: 8, color: "#fff", fontWeight: 700 }}>SUB</div>
      </div>
    </div>
  );
}
