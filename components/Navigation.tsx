"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const RED = "#4A7A5A";

interface Props {
  dark?: boolean;
}

export default function Navigation({ dark = false }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = dark ? "#E8D8B8" : "#1C1814";
  const bgColor = dark
    ? "transparent"
    : scrolled
    ? "rgba(245,240,230,0.95)"
    : "transparent";

  return (
    <motion.header
      className={`nav-main fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-sm ${
        scrolled && !dark ? "py-3" : "py-5"
      }`}
      style={{ background: bgColor }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-main__inner max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="nav-main__logo relative group">
          <span
            className="nav-main__logo-text font-hand text-2xl tracking-wide transition-colors duration-200"
            style={{ color: textColor }}
            onMouseEnter={(e) => (e.currentTarget.style.color = RED)}
            onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
          >
            jackie
          </span>
        </Link>

        {/* Nav links */}
        <nav className="nav-main__links flex items-center gap-8">
          <NavLink href="/work" active={pathname === "/work"} textColor={textColor}>
            Work
          </NavLink>
          <NavLink href="/about" active={pathname === "/about"} textColor={textColor}>
            About
          </NavLink>
          <a
            href="mailto:lapsun.j.zhang@gmail.com"
            className="nav-main__connect font-sans text-sm tracking-widest uppercase transition-all duration-300 px-4 py-2 rounded-full border"
            style={{
              color: textColor,
              borderColor: dark ? "rgba(232,216,184,0.3)" : "#DDD7CB",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = dark ? "#2A1A14" : "#1C1814";
              el.style.color = dark ? "#E8D8B8" : "#F5F0E6";
              el.style.borderColor = dark ? "#2A1A14" : "#1C1814";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = textColor;
              el.style.borderColor = dark ? "rgba(232,216,184,0.3)" : "#DDD7CB";
            }}
          >
            Connect
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

function NavLink({
  href,
  active,
  children,
  textColor,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  textColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className="nav-link-item relative font-serif text-lg transition-colors duration-200"
      style={{ color: active ? RED : textColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <svg
        className="nav-link-item__doodle absolute -bottom-1.5 left-0 w-full overflow-visible"
        height="5"
        viewBox="0 0 60 5"
        fill="none"
        aria-hidden
      >
        <motion.path
          className="nav-link-item__doodle-path"
          d="M0 2.5 C 5 1, 15 4, 25 2.5 C 35 1, 45 4, 55 2.5 C 57 2, 58.5 2.5, 60 2.5"
          stroke={RED}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: active ? 1 : 0 }}
          animate={{ pathLength: hovered || active ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </svg>
    </Link>
  );
}
