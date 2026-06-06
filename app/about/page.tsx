"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import DoodleUnderline from "@/components/DoodleUnderline";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* ─── HERO ──────────────────────────────── */}
      <section className="pt-36 pb-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="font-hand text-xl text-clay mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            About Jackie
          </motion.p>

          <motion.h1
            className="font-serif font-light text-ink leading-tight mb-8"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            For the past{" "}
            <DoodleUnderline color="#C47B50" alwaysVisible>
              10 years
            </DoodleUnderline>
            , I&apos;ve been turning{" "}
            <em>complex ideas</em>
            <br className="hidden md:block" />
            into interactable stuff.
          </motion.h1>

          <motion.p
            className="font-sans text-lg text-ink-muted max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Product designer based in Cape Town, South Africa. Senior level. I care
            deeply about clarity, craft, and working on things that actually matter
            to people.
          </motion.p>
        </div>
      </section>

      {/* ─── ROLE GRID ──────────────────────── */}
      <section className="py-16 px-6 md:px-10 lg:px-16 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-hand text-xl text-clay mb-8">I am also a —</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roles.map((role, i) => (
              <AnimatedSection key={role} delay={i * 0.06}>
                <div className="bg-card border border-border rounded-xl p-4 hover:border-ink-muted transition-colors duration-200">
                  <p className="font-serif text-lg text-ink">{role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT FUELS ME ──────────────────── */}
      <section className="py-20 px-6 md:px-10 lg:px-16 border-t border-border">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left column */}
          <AnimatedSection>
            <div>
              <p className="font-hand text-xl text-clay mb-6">What fuels my soul</p>
              <ul className="space-y-4">
                {soulFuel.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <DoodleArrow />
                    <span className="font-serif text-xl text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Right column */}
          <AnimatedSection delay={0.15}>
            <div>
              <p className="font-hand text-xl text-clay mb-6">What energises me at work</p>
              <ul className="space-y-4">
                {workEnergy.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <DoodleArrow />
                    <span className="font-serif text-xl text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── NERD INTERESTS ──────────────────── */}
      <section className="py-20 px-6 md:px-10 lg:px-16 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-hand text-xl text-clay mb-10">Nerd interests (non-design)</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {nerdInterests.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group">
                  <div className="relative mb-4 h-40 bg-cream-dark rounded-xl overflow-hidden flex items-center justify-center border border-border paper-card group-hover:border-ink-muted transition-colors duration-300">
                    <span className="text-5xl" aria-hidden>{item.emoji}</span>
                    {/* Doodle corner accent */}
                    <svg
                      className="absolute top-3 right-3 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M3 17 C 5 10, 10 5, 17 3"
                        stroke="#C47B50"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-ink mb-1">{item.title}</h3>
                  <p className="font-sans text-sm text-ink-muted leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY QUOTE ──────────────── */}
      <section className="py-24 px-6 md:px-10 lg:px-16 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <blockquote className="relative">
              {/* Opening doodle quote mark */}
              <span
                className="font-hand text-8xl text-clay opacity-20 absolute -top-4 -left-4 leading-none select-none"
                aria-hidden
              >
                &ldquo;
              </span>
              <p
                className="font-serif font-light italic text-ink pl-6 leading-relaxed"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                Everything you do, do it with care.
              </p>
              <footer className="mt-6 pl-6">
                <p className="font-hand text-lg text-clay">— a mantra</p>
              </footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────── */}
      <section className="py-24 px-6 md:px-10 lg:px-16 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <AnimatedSection>
            <div>
              <p className="font-hand text-xl text-clay mb-2">Want to work together?</p>
              <h2 className="font-serif font-light text-ink text-4xl md:text-5xl">
                Let&apos;s connect
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <a
              href="mailto:lapsun.j.zhang@gmail.com"
              className="inline-flex items-center gap-3 font-serif text-xl text-ink border border-ink rounded-full px-8 py-4 hover:bg-ink hover:text-cream transition-all duration-300"
            >
              lapsun.j.zhang@gmail.com
              <span aria-hidden>→</span>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────── */}
      <footer className="py-8 px-6 md:px-10 lg:px-16 border-t border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-hand text-lg text-ink-muted">jackie zhang</span>
          <span className="font-sans text-sm text-ink-light">
            Cape Town © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </main>
  );
}

/* ── Data ──────────────────────────────── */

const roles = [
  "AI-powered coder",
  "Digital artist",
  "Mentor",
  "Martial artist",
  "Cautious skateboarder",
  "Husband & father",
  "Senior designer",
  "Cape Town local",
];

const soulFuel = [
  "Time in nature with family",
  "Human connection",
  "Creative output",
];

const workEnergy = [
  "Close team collaboration",
  "Shipping products",
  "Contributing to positive change",
];

const nerdInterests = [
  {
    emoji: "🎲",
    title: "Tabletop RPGs",
    description:
      "Mouse Guard RPG fan. There's something about collaborative world-building and storytelling that never gets old.",
  },
  {
    emoji: "☕",
    title: "Aeropress coffee",
    description:
      "Inverted method, always. The precision and ritual of it is weirdly satisfying.",
  },
  {
    emoji: "🎨",
    title: "Concept art",
    description:
      "Craig Mullins is a legend. Studying how illustrators build mood and atmosphere informs everything I design.",
  },
];

/* ── Mini components ──────────────────── */
function DoodleArrow() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0 mt-1"
      aria-hidden
    >
      <path
        d="M3 10 C 6 8, 10 12, 14 10 M 11 7 L 14 10 L 11 13"
        stroke="#C47B50"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
