"use client";

import { motion } from "framer-motion";

const RED = "#C84535";
const TILE_BG = "#1E1410";
const TILE_BORDER = "#2E1E18";

/* ── Individual icon SVGs ───────────────── */

function IconWarrior() {
  return (
    <svg viewBox="0 0 40 40" fill="none">
      {/* Body / armor shape */}
      <path d="M 20 8 C 14 8, 10 12, 10 18 C 10 22, 12 25, 15 27 L 20 32 L 25 27 C 28 25, 30 22, 30 18 C 30 12, 26 8, 20 8" stroke={RED} strokeWidth="1.5" />
      {/* Head */}
      <circle cx="20" cy="14" r="5" stroke={RED} strokeWidth="1.5" fill="none" />
      {/* Horns / helmet spikes */}
      <path d="M 15 10 L 13 5 M 20 9 L 20 4 M 25 10 L 27 5" stroke={RED} strokeWidth="1.2" strokeLinecap="round" />
      {/* Arms */}
      <path d="M 10 20 L 5 24 M 30 20 L 35 24" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
      {/* Legs */}
      <path d="M 16 32 L 14 38 M 24 32 L 26 38" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconMask() {
  return (
    <svg viewBox="0 0 40 40" fill="none">
      {/* Outer face shape */}
      <ellipse cx="20" cy="20" rx="13" ry="15" stroke={RED} strokeWidth="1.5" />
      {/* Eye hollows */}
      <ellipse cx="14" cy="17" rx="3.5" ry="4" stroke={RED} strokeWidth="1.5" />
      <ellipse cx="26" cy="17" rx="3.5" ry="4" stroke={RED} strokeWidth="1.5" />
      {/* Nose triangle */}
      <path d="M 18 23 L 20 27 L 22 23" stroke={RED} strokeWidth="1.2" fill="none" />
      {/* Mouth */}
      <path d="M 14 30 C 17 33, 23 33, 26 30" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
      {/* Decorative marks */}
      <circle cx="9" cy="20" r="2" stroke={RED} strokeWidth="1" />
      <circle cx="31" cy="20" r="2" stroke={RED} strokeWidth="1" />
    </svg>
  );
}

function IconCursor() {
  return (
    <svg viewBox="0 0 40 40" fill="none">
      {/* Arrow cursor */}
      <path
        d="M 10 8 L 10 30 L 16 24 L 22 35 L 26 33 L 20 22 L 28 22 Z"
        stroke={RED} strokeWidth="1.5" strokeLinejoin="round"
      />
    </svg>
  );
}

function IconOwl() {
  return (
    <svg viewBox="0 0 40 40" fill="none">
      {/* Body */}
      <path d="M 20 35 C 10 35, 8 28, 8 22 C 8 14, 12 8, 20 8 C 28 8, 32 14, 32 22 C 32 28, 30 35, 20 35" stroke={RED} strokeWidth="1.5" fill="none" />
      {/* Large eye circles */}
      <circle cx="14" cy="20" r="5.5" stroke={RED} strokeWidth="1.8" fill="none" />
      <circle cx="26" cy="20" r="5.5" stroke={RED} strokeWidth="1.8" fill="none" />
      {/* Pupils */}
      <circle cx="14" cy="20" r="2.5" fill={RED} />
      <circle cx="26" cy="20" r="2.5" fill={RED} />
      {/* Ear tufts */}
      <path d="M 13 8 L 11 3 L 16 7" stroke={RED} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M 27 8 L 29 3 L 24 7" stroke={RED} strokeWidth="1.2" strokeLinejoin="round" />
      {/* Beak */}
      <path d="M 18 24 L 20 28 L 22 24" stroke={RED} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      {/* Wing lines */}
      <path d="M 10 25 C 8 28, 8 32, 11 34" stroke={RED} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 30 25 C 32 28, 32 32, 29 34" stroke={RED} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconDiamond() {
  return (
    <svg viewBox="0 0 40 40" fill="none">
      {/* Diamond shape */}
      <path d="M 20 5 L 35 18 L 20 35 L 5 18 Z" stroke={RED} strokeWidth="1.5" />
      {/* Inner facet lines */}
      <path d="M 5 18 L 20 12 L 35 18" stroke={RED} strokeWidth="1" />
      <path d="M 20 12 L 20 35" stroke={RED} strokeWidth="1" strokeDasharray="2 2" />
      {/* Sparkle */}
      <path d="M 28 8 L 29 5 L 30 8 L 33 9 L 30 10 L 29 13 L 28 10 L 25 9 Z" stroke={RED} strokeWidth="1" fill={RED} fillOpacity="0.4" />
    </svg>
  );
}

function IconFlower() {
  return (
    <svg viewBox="0 0 40 40" fill="none">
      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse
          key={i}
          cx={20 + Math.cos((angle * Math.PI) / 180) * 9}
          cy={20 + Math.sin((angle * Math.PI) / 180) * 9}
          rx="4"
          ry="6"
          transform={`rotate(${angle}, ${20 + Math.cos((angle * Math.PI) / 180) * 9}, ${20 + Math.sin((angle * Math.PI) / 180) * 9})`}
          stroke={RED}
          strokeWidth="1.2"
          fill="none"
        />
      ))}
      {/* Center */}
      <circle cx="20" cy="20" r="5" stroke={RED} strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="20" r="2" fill={RED} fillOpacity="0.6" />
    </svg>
  );
}

function IconSpiral() {
  return (
    <svg viewBox="0 0 40 40" fill="none">
      {/* Spiral path */}
      <path
        d="M 20 20 C 20 16, 23 13, 26 14 C 30 15, 32 19, 30 24 C 28 29, 22 32, 17 30 C 11 27, 9 20, 12 14 C 15 8, 23 6, 30 9"
        stroke={RED} strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      {/* Center dot */}
      <circle cx="20" cy="20" r="2.5" fill={RED} fillOpacity="0.7" />
    </svg>
  );
}

function IconPlant() {
  return (
    <svg viewBox="0 0 40 40" fill="none">
      {/* Stem */}
      <path d="M 20 38 C 20 28, 18 20, 20 12" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
      {/* Left leaf */}
      <path d="M 20 22 C 12 18, 8 12, 10 6 C 12 0, 18 4, 20 10 C 20 14, 20 18, 20 22" stroke={RED} strokeWidth="1.5" fill="none" />
      {/* Right leaf */}
      <path d="M 20 30 C 28 26, 34 20, 32 14 C 30 8, 24 12, 22 18 C 21 22, 20 26, 20 30" stroke={RED} strokeWidth="1.5" fill="none" />
      {/* Top bud */}
      <path d="M 20 12 C 17 8, 17 4, 20 3 C 23 4, 23 8, 20 12" stroke={RED} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function IconCompass() {
  return (
    <svg viewBox="0 0 40 40" fill="none">
      {/* Circle */}
      <circle cx="20" cy="20" r="14" stroke={RED} strokeWidth="1.5" />
      {/* Cross hairs */}
      <path d="M 20 6 L 20 34 M 6 20 L 34 20" stroke={RED} strokeWidth="1" strokeDasharray="2 3" />
      {/* North arrow */}
      <path d="M 20 8 L 17 16 L 20 14 L 23 16 Z" stroke={RED} strokeWidth="1.2" fill={RED} fillOpacity="0.7" />
      {/* South arrow */}
      <path d="M 20 32 L 17 24 L 20 26 L 23 24 Z" stroke={RED} strokeWidth="1.2" fill="none" />
      {/* Center dot */}
      <circle cx="20" cy="20" r="3" stroke={RED} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function IconDragonEgg() {
  return (
    <svg viewBox="0 0 40 40" fill="none">
      {/* Egg shape */}
      <path d="M 20 5 C 28 5, 33 12, 33 22 C 33 32, 27 37, 20 37 C 13 37, 7 32, 7 22 C 7 12, 12 5, 20 5" stroke={RED} strokeWidth="1.5" />
      {/* Scales pattern */}
      <path d="M 12 18 C 14 15, 18 16, 20 18" stroke={RED} strokeWidth="1" strokeLinecap="round" />
      <path d="M 20 18 C 22 15, 26 16, 28 18" stroke={RED} strokeWidth="1" strokeLinecap="round" />
      <path d="M 10 24 C 12 21, 16 22, 18 24" stroke={RED} strokeWidth="1" strokeLinecap="round" />
      <path d="M 18 24 C 20 21, 24 22, 26 24" stroke={RED} strokeWidth="1" strokeLinecap="round" />
      <path d="M 26 24 C 28 21, 30 22, 30 24" stroke={RED} strokeWidth="1" strokeLinecap="round" />
      <path d="M 12 30 C 14 27, 18 28, 20 30" stroke={RED} strokeWidth="1" strokeLinecap="round" />
      <path d="M 20 30 C 22 27, 26 28, 28 30" stroke={RED} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

const LEFT_ICONS = [
  IconWarrior,
  IconMask,
  IconCursor,
  IconOwl,
  IconDiamond,
  IconFlower,
  IconSpiral,
  IconPlant,
  IconCompass,
  IconDragonEgg,
];

const RIGHT_ICONS = [
  IconWarrior,
  IconDragonEgg,
  IconCursor,
  IconSpiral,
  IconDiamond,
  IconPlant,
  IconOwl,
  IconMask,
  IconFlower,
  IconCompass,
];

interface Props {
  side: "left" | "right";
}

export default function SideIconPanel({ side }: Props) {
  const icons = side === "left" ? LEFT_ICONS : RIGHT_ICONS;

  return (
    <div
      className={`side-panel side-panel--${side} hidden md:flex flex-col items-stretch shrink-0`}
      style={{ width: 64, background: "#141010" }}
    >
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          className="side-panel__tile flex items-center justify-center"
          style={{
            width: 64,
            height: 64,
            background: TILE_BG,
            border: `1px solid ${TILE_BORDER}`,
            padding: 10,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 * i, duration: 0.4 }}
          whileHover={{ background: "#2A1810" }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}
