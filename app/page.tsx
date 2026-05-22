"use client";

import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import HeroIllustration from "@/components/HeroIllustration";
import SideIconPanel from "@/components/SideIconPanel";
import WorkPreviewSection from "@/components/WorkPreviewSection";

const RED = "#C84535";
const DARK = "#141010";
const PAPER = "#EDE0C4";
const PAPER_PLAIN = "#E8D8B4";

/* ═══════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <main className="hp-root min-h-screen relative overflow-x-hidden" style={{ background: DARK }}>
      <div className="hp-layout flex">
        <SideIconPanel side="left" />

        {/* Center column */}
        <div className="hp-center-col flex-1 flex flex-col overflow-hidden">
          <DarkNav />

          {/* Book pages */}
          <div className="hp-book-pages px-3 md:px-5 lg:px-6 pt-2 pb-16" style={{ padding: "5rem 8rem 0" }}>

            {/* ── Page 1: Hero ──────────────────────────────── */}
            <HeroCard />

            {/* ── Page 2: Beliefs (book-open animation) ─────── */}
            <BeliefsPage />

          </div>

          {/* ── Section 3: Work Preview (scattered cards) ─── */}
          <WorkPreviewSection />
        </div>

        <SideIconPanel side="right" />
      </div>

      {/* Corner sketches floating in the dark */}
      <div className="hp-sketch-juice absolute bottom-0 left-16 pointer-events-none hidden md:block">
        <JuiceBoxSketch />
      </div>
      <div className="hp-sketch-dragon absolute bottom-0 right-16 pointer-events-none hidden md:block">
        <DragonSketch />
      </div>
      <div className="hp-sketch-pen absolute top-[38%] right-[72px] pointer-events-none hidden lg:block opacity-50">
        <PenSketch />
      </div>
    </main>
  );
}

/* ═══════════════════════════════════════════════════════
   DARK NAVIGATION
═══════════════════════════════════════════════════════ */
function DarkNav() {
  return (
    <motion.nav
      className="nav-dark flex items-center justify-center gap-10 py-5 px-6 relative z-50"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href="/" className="nav-dark__logo">
        <motion.svg
          className="nav-dark__logo-icon"
          width="26" height="26" viewBox="0 0 26 26" fill="none"
          whileHover={{ scale: 1.15, rotate: 15 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          aria-label="Home"
        >
          <circle cx="13" cy="13" r="11" stroke="#E8D8B8" strokeWidth="1.5" />
          <circle cx="9.5" cy="11.5" r="2" fill="#E8D8B8" />
          <circle cx="16.5" cy="11.5" r="2" fill="#E8D8B8" />
          <path d="M 8.5 17 C 10.5 20.5, 15.5 20.5, 17.5 17"
            stroke="#E8D8B8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </motion.svg>
      </Link>

      {["about", "Work", "Connect"].map((label) => (
        <DarkNavItem
          key={label}
          label={label}
          href={label === "Connect" ? "mailto:lapsun.j.zhang@gmail.com" : `/${label.toLowerCase()}`}
          isExternal={label === "Connect"}
        />
      ))}
    </motion.nav>
  );
}

function DarkNavItem({ label, href, isExternal }: { label: string; href: string; isExternal?: boolean }) {
  const Tag = isExternal ? "a" : Link;
  return (
    <motion.div className="nav-dark__item relative group" whileHover="hover">
      <Tag
        href={href}
        className="nav-dark__link font-hand text-xl transition-colors duration-200"
        style={{ color: "#E8D8B8" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = RED)}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#E8D8B8")}
      >
        {label}
      </Tag>
      {/* Doodle underline */}
      <svg className="nav-dark__doodle absolute -bottom-1 left-0 w-full overflow-visible" height="5" viewBox="0 0 50 5" fill="none" aria-hidden>
        <motion.path
          className="nav-dark__doodle-path"
          d="M0 3 C 5 1, 15 4, 25 2.5 C 35 1, 45 4, 50 3"
          stroke={RED} strokeWidth="1.5" strokeLinecap="round"
          variants={{ hover: { pathLength: 1 }, initial: { pathLength: 0 } }}
          initial={{ pathLength: 0 }}
          transition={{ duration: 0.35 }}
        />
      </svg>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE 1 — HERO CARD
═══════════════════════════════════════════════════════ */
function HeroCard() {
  return (
    <motion.div
      className="hero-card relative w-full rounded-[20px] overflow-hidden"
      style={{
        border: `5px solid ${RED}`,
        background: PAPER,
        backgroundImage: `
          linear-gradient(rgba(60,90,180,0.13) 1px, transparent 1px),
          linear-gradient(90deg, rgba(60,90,180,0.13) 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
      initial={{ opacity: 0, scale: 0.97, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <div className="hero-card__inner flex flex-col md:flex-row min-h-[400px] md:min-h-[440px]" style={{ width: "100%" }}>

        {/* Left: text */}
        <div className="hero-card__content flex flex-col justify-between p-8 md:p-10 lg:p-12 flex-1 z-10">

          {/* Name + role */}
          <motion.div
            className="hero-card__header"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <div className="hero-card__name-row flex items-center gap-2 mb-1">
              <span className="hero-card__name font-hand text-3xl leading-none" style={{ color: RED }}>
                Jackie
              </span>
              {/* Smiley */}
              <svg className="hero-card__smiley" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <circle cx="10" cy="10" r="8.5" stroke={RED} strokeWidth="1.5" />
                <circle cx="7.5" cy="9" r="1.2" fill={RED} />
                <circle cx="12.5" cy="9" r="1.2" fill={RED} />
                <path d="M 7 13 C 8.5 15.5, 11.5 15.5, 13 13"
                  stroke={RED} strokeWidth="1.3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <p className="hero-card__role font-serif text-base" style={{ color: RED }}>Product Designer</p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="hero-card__headline font-hand leading-tight my-6 md:my-4"
            style={{ color: RED, fontSize: "clamp(2.2rem,4.5vw,4rem)", lineHeight: 1.15 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Software should
            <br />
            feel easy
          </motion.h1>

          {/* Location */}
          <motion.p
            className="hero-card__location font-serif text-base"
            style={{ color: RED }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            Cape Town • GMT +2:00
          </motion.p>
        </div>

        {/* Right: illustration */}
        <motion.div
          className="hero-card__illustration-wrap flex-1 relative overflow-hidden min-h-[280px] md:min-h-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="hero-card__illustration-inner absolute inset-0 flex items-end justify-center">
            <HeroIllustration />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE 2 — BELIEFS  (BOOK-OPEN ANIMATION)
═══════════════════════════════════════════════════════ */
function BeliefsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  /* Scroll-driven rotation: also sync with scroll for smooth feel */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.35"],
  });

  const rotateXRaw = useTransform(scrollYProgress, [0, 1], [-92, 0]);
  const rotateX = useSpring(rotateXRaw, { stiffness: 60, damping: 18 });
  const opacityRaw = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const shadowRaw = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    /* Perspective wrapper — the parent must supply perspective for rotateX */
    <div
      className="beliefs-perspective"
      ref={ref}
      style={{ perspective: "1800px", perspectiveOrigin: "50% 0%", marginTop: 6 }}
    >
      <motion.div
        className="beliefs-card"
        style={{
          rotateX,
          opacity: opacityRaw,
          transformOrigin: "top center",
          /* drop shadow that fades as page opens */
          filter: `drop-shadow(0 ${shadowRaw.get()}px 40px rgba(0,0,0,0.5))`,
          border: `5px solid ${RED}`,
          borderRadius: 20,
          background: PAPER_PLAIN,
          position: "relative",
          overflow: "hidden",
          padding: "40px 40px 60px",
          minHeight: 520,
        }}
      >
        {/* Very subtle grid lines on the second page */}
        <div
          className="beliefs-card__grid absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(60,90,180,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(60,90,180,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Section label */}
        <motion.p
          className="beliefs-card__label font-hand text-xl relative z-10"
          style={{ color: RED }}
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          3 things I strongly believe in
        </motion.p>

        {/* Sticky notes */}
        <div className="beliefs-card__notes relative mt-6" style={{ minHeight: 380 }}>
          <StickyNoteLinedPaper isInView={isInView} />
          <StickyNoteGrid isInView={isInView} />
          <StickyNotePlain isInView={isInView} />
        </div>

        {/* Decorative page doodles */}
        <BeliefsDoodles isInView={isInView} />
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   STICKY NOTES
═══════════════════════════════════════════════════════ */

function StickyNoteLinedPaper({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      className="note-lined absolute"
      initial={{ opacity: 0, y: 24, rotate: -3 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: -3 } : {}}
      transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: -1, scale: 1.03, zIndex: 10 }}
      style={{
        left: "4%",
        top: 30,
        width: 215,
        zIndex: 3,
        cursor: "default",
      }}
    >
      <div
        className="note-lined__inner"
        style={{
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
          borderLeft: `3.5px solid rgba(${parseInt(RED.slice(1, 3), 16)},${parseInt(RED.slice(3, 5), 16)},${parseInt(RED.slice(5, 7), 16)}, 0.45)`,
          padding: "12px 16px 20px 20px",
          boxShadow: "2px 5px 18px rgba(0,0,0,0.12)",
        }}
      >
        <p
          className="note-lined__text font-hand"
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
      </div>
    </motion.div>
  );
}

function StickyNoteGrid({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      className="note-grid absolute"
      initial={{ opacity: 0, y: 24, rotate: 2 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 2 } : {}}
      transition={{ delay: 1.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
      style={{
        right: "8%",
        top: 20,
        width: 220,
        zIndex: 2,
        cursor: "default",
      }}
    >
      <div
        className="note-grid__inner"
        style={{
          background: "#AEACA4",
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "18px 18px",
          padding: "20px 22px",
          boxShadow: "2px 5px 18px rgba(0,0,0,0.18)",
        }}
      >
        <p
          className="note-grid__text"
          style={{
            fontFamily: "'Courier New', 'Courier', monospace",
            color: "#1C1814",
            fontSize: "1.35rem",
            lineHeight: 1.45,
            fontWeight: "bold",
            margin: 0,
          }}
        >
          Software
          <br />
          should
          <br />
          empower.
        </p>
      </div>
    </motion.div>
  );
}

function StickyNotePlain({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      className="note-plain absolute"
      initial={{ opacity: 0, y: 24, rotate: -1.5 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: -1.5 } : {}}
      transition={{ delay: 1.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
      style={{
        right: "12%",
        bottom: 0,
        width: 240,
        zIndex: 4,
        cursor: "default",
      }}
    >
      <div
        className="note-plain__inner"
        style={{
          background: "#C8B492",
          padding: "22px 24px 28px",
          borderRadius: 4,
          boxShadow: "2px 5px 18px rgba(0,0,0,0.14)",
        }}
      >
        {/* Small heart/icon */}
        <svg className="note-plain__icon" width="24" height="22" viewBox="0 0 24 22" fill="none" style={{ marginBottom: 8 }} aria-hidden>
          <path
            d="M 12 19 C 12 19, 2 13, 2 7 C 2 4, 4 2, 7 2 C 9 2, 11 3, 12 5 C 13 3, 15 2, 17 2 C 20 2, 22 4, 22 7 C 22 13, 12 19, 12 19Z"
            stroke="#1C1814" strokeWidth="1.5" fill="none"
          />
        </svg>
        <p
          className="note-plain__text font-hand"
          style={{
            color: "#1C1814",
            fontSize: "2.2rem",
            fontStyle: "italic",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Design for
          <br />
          moments
        </p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   BELIEFS DOODLES (corners / decorations)
═══════════════════════════════════════════════════════ */
function BeliefsDoodles({ isInView }: { isInView: boolean }) {
  return (
    <>
      {/* Bottom-left plant cluster */}
      <motion.div
        className="doodle-plant absolute bottom-4 left-4 pointer-events-none"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={isInView ? { opacity: 0.75, scale: 1 } : {}}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <svg className="doodle-plant__svg" width="100" height="110" viewBox="0 0 100 110" fill="none" aria-hidden>
          <path d="M 50 110 C 48 90, 40 72, 30 58 C 20 44, 18 32, 28 22 C 38 12, 48 20, 46 40 C 44 60, 50 85, 50 110" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 50 80 C 62 68, 72 58, 70 45 C 68 32, 58 32, 54 44 C 50 56, 50 70, 50 80" stroke={RED} strokeWidth="1.5" fill="none" />
          <path d="M 50 95 C 38 85, 28 78, 25 68 C 22 58, 28 52, 36 58 C 44 64, 50 80, 50 95" stroke={RED} strokeWidth="1.5" fill="none" />
          {/* Small flowers */}
          <circle cx="28" cy="20" r="5" stroke={RED} strokeWidth="1.2" fill="none" />
          <circle cx="28" cy="20" r="2" fill={RED} fillOpacity="0.5" />
          <circle cx="70" cy="43" r="4" stroke={RED} strokeWidth="1.2" fill="none" />
          <circle cx="70" cy="43" r="1.5" fill={RED} fillOpacity="0.5" />
        </svg>
      </motion.div>

      {/* Bottom-right wheat/grain stalks */}
      <motion.div
        className="doodle-wheat absolute bottom-4 right-4 pointer-events-none"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
        transition={{ delay: 2.0, duration: 0.8 }}
      >
        <svg className="doodle-wheat__svg" width="80" height="100" viewBox="0 0 80 100" fill="none" aria-hidden>
          {/* Wheat stalk 1 */}
          <path d="M 30 100 L 35 40" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 35 40 C 25 32, 18 20, 22 12 C 26 4, 34 8, 35 20 C 36 32, 35 40" stroke={RED} strokeWidth="1.5" fill="none" />
          <path d="M 35 40 C 45 32, 52 20, 48 12 C 44 4, 36 8, 35 20 C 34 32, 35 40" stroke={RED} strokeWidth="1.5" fill="none" />
          {/* Wheat stalk 2 */}
          <path d="M 55 100 L 58 50" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 58 50 C 50 43, 44 33, 47 26 C 50 19, 57 22, 58 33 C 59 44, 58 50" stroke={RED} strokeWidth="1.5" fill="none" />
          <path d="M 58 50 C 66 43, 72 33, 69 26 C 66 19, 59 22, 58 33 C 57 44, 58 50" stroke={RED} strokeWidth="1.5" fill="none" />
          {/* Small X mark */}
          <path d="M 12 70 L 18 76 M 18 70 L 12 76" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Small star cluster — middle right of page */}
      <motion.div
        className="doodle-star absolute right-[5%] top-[45%] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : {}}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <svg className="doodle-star__svg" width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden>
          <path d="M 25 5 L 27 20 L 40 15 L 30 25 L 45 28 L 30 30 L 35 45 L 25 35 L 15 45 L 20 30 L 5 28 L 20 25 L 10 15 L 23 20 Z" stroke={RED} strokeWidth="1.2" fill="none" />
          <circle cx="25" cy="25" r="3" fill={RED} fillOpacity="0.4" />
        </svg>
      </motion.div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   CORNER SKETCHES
═══════════════════════════════════════════════════════ */
function JuiceBoxSketch() {
  return (
    <svg className="sketch-juice__svg" width="85" height="105" viewBox="0 0 85 105" fill="none" aria-hidden>
      <rect x="18" y="28" width="48" height="58" rx="4" stroke="#E8D8B8" strokeWidth="1.5" />
      <path d="M 18 38 L 66 38" stroke="#E8D8B8" strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="42" cy="57" r="13" stroke="#E8D8B8" strokeWidth="1.2" />
      <path d="M 35 57 C 37 52, 46 52, 49 57 C 46 62, 37 62, 35 57" stroke="#E8D8B8" strokeWidth="1" fill="none" />
      <path d="M 48 28 L 52 6" stroke="#E8D8B8" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="50" cy="28" rx="3" ry="2" stroke="#E8D8B8" strokeWidth="1" />
      <circle cx="28" cy="45" r="1.5" fill="#E8D8B8" fillOpacity="0.5" />
      <circle cx="34" cy="45" r="1.5" fill="#E8D8B8" fillOpacity="0.5" />
    </svg>
  );
}

function DragonSketch() {
  return (
    <svg className="sketch-dragon__svg" width="105" height="115" viewBox="0 0 105 115" fill="none" aria-hidden>
      <path d="M 22 95 C 20 78, 28 67, 42 60 C 54 54, 65 57, 74 50 C 82 43, 78 32, 70 26"
        stroke="#E8D8B8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M 70 26 C 75 18, 83 15, 88 21 C 93 27, 91 36, 84 38 C 77 40, 70 35, 70 26"
        stroke="#E8D8B8" strokeWidth="1.8" fill="none" />
      <circle cx="83" cy="24" r="3.5" fill="#E8D8B8" fillOpacity="0.8" />
      <circle cx="91" cy="30" r="1.8" stroke="#E8D8B8" strokeWidth="1" />
      <path d="M 85 38 L 83 44 M 89 36 L 89 42" stroke="#E8D8B8" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 57 53 L 54 44 L 62 53 M 46 59 L 42 51 L 50 59" stroke="#E8D8B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 22 95 C 13 100, 9 106, 11 111" stroke="#E8D8B8" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M 47 72 L 42 86 L 37 92 M 57 67 L 57 84 L 52 90"
        stroke="#E8D8B8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PenSketch() {
  return (
    <svg className="sketch-pen__svg" width="55" height="55" viewBox="0 0 55 55" fill="none" aria-hidden>
      <path d="M 12 48 L 44 12 L 50 18 L 18 54 Z" stroke="#E8D8B8" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M 44 12 L 49 7 L 50 18 Z" stroke="#E8D8B8" strokeWidth="1.2" fill="none" />
      <path d="M 12 48 L 15 53 L 18 54 L 12 48" stroke="#E8D8B8" strokeWidth="1.2" fill="none" />
      <path d="M 38 18 L 16 48" stroke="#E8D8B8" strokeWidth="0.8" strokeDasharray="3 3" />
    </svg>
  );
}
