"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  color?: string;
  className?: string;
  alwaysVisible?: boolean;
}

export default function DoodleUnderline({
  children,
  color = "#C47B50",
  className = "",
  alwaysVisible = false,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <svg
        className="absolute -bottom-1 left-0 w-full overflow-visible pointer-events-none"
        height="8"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          d="M0 5 C 8 2, 18 7, 28 4 C 38 1, 48 6, 58 4 C 68 2, 78 6, 88 4 C 93 3, 96 4.5, 100 4"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: alwaysVisible ? 1 : 0 }}
          animate={{ pathLength: alwaysVisible || hovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </svg>
    </span>
  );
}
