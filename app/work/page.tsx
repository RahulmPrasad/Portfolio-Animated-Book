"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";

/* ── Types ─────────────────────────────── */
interface Project {
  name: string;
  url?: string;
  tagline: string;
  role?: string;
  year?: string;
  notable: string[];
  metric?: string;
  learning?: string;
  tag: string;
  isSideQuest?: boolean;
}

/* ── Data ──────────────────────────────── */
const mainProjects: Project[] = [
  {
    name: "Triple Time",
    tagline: "AI powered medical note taker for doctors",
    role: "Founding Product Designer",
    year: "2025",
    notable: [
      "End-to-end product design from 0→1",
      "AI-assisted clinical documentation UX",
      "Doctor workflow research & validation",
      "Design system & component library",
    ],
    metric: "Founding designer — shaping the product from day one",
    tag: "AI / HealthTech",
  },
  {
    name: "ResQued",
    tagline: "Helping ordinary people deliver extraordinary acts of kindness",
    role: "Founding Product Designer",
    year: "2024",
    notable: [
      "Community rescue coordination platform",
      "Real-time response UX design",
      "Onboarding & trust-building flows",
      "Mobile-first design system",
    ],
    metric: "Building a platform for human connection at scale",
    tag: "Social Impact",
  },
  {
    name: "Bash",
    url: "bash.com",
    tagline: "South Africa's largest omni-channel fashion and lifestyle shopping platform",
    role: "Lead Product Designer",
    year: "2023",
    notable: ["BashPay payment portal", "Internal packing tool", "Kiosk experience", "Point of Sale system"],
    metric: "Payment portal achieving 80% success rate",
    learning: "Designing for high-stakes financial flows in an emerging market context",
    tag: "eCommerce / Fintech",
  },
  {
    name: "Pulse",
    tagline: "Watch the race from the athlete's point of view",
    role: "Product Designer",
    year: "2022",
    notable: [
      "Stream uploader for GoPro footage",
      "Home feed & discovery",
      "Race platform design",
      "Event timeline UX",
    ],
    metric: "Enabled athletes to upload and monetise race footage",
    learning: "Simplifying complex multi-step upload flows for non-technical users",
    tag: "Sports / Streaming",
  },
  {
    name: "Heygo",
    tagline: "Visit interesting places around the world through the eyes of a professional tour guide",
    role: "Product Designer",
    year: "2021",
    notable: [
      "Streaming UI redesign",
      "Stream creator platform",
      "Monetisation & tipping flows",
      "Discovery & recommendation engine",
    ],
    metric: "Increased tipping by 8%/stream",
    learning: "Small UX improvements in live contexts have outsised real-world impact",
    tag: "Live Streaming",
  },
  {
    name: "Dotslash",
    tagline: "Digital transformation agency helping businesses thrive",
    role: "Senior Product Designer",
    year: "2019–2021",
    notable: ["Dekra", "Balwin Fibre", "Junk Mail", "4 additional client projects"],
    metric: "Shipped 7+ products across diverse industries",
    learning: "Context-switching between clients sharpened my ability to ramp up fast",
    tag: "Agency",
  },
];

const sideQuests: Project[] = [
  {
    name: "Drift",
    tagline: "Personal image library — a place to store visual inspiration",
    notable: ["Personal design project", "Mood board & reference tool"],
    tag: "Side Project",
    isSideQuest: true,
  },
  {
    name: "TF2048",
    tagline: "Puzzle based NFT with design and 3D modelling",
    notable: ["NFT puzzle game", "3D modelling", "Blockchain UX"],
    tag: "Side Project",
    isSideQuest: true,
  },
  {
    name: "Who's Speaking",
    tagline: "Speaker tracking platform for events and podcasts",
    notable: ["Speaker discovery", "Event management UX"],
    tag: "Side Project",
    isSideQuest: true,
  },
];

/* ── Page ──────────────────────────────── */
export default function WorkPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* ─── HEADER ─────────────────────── */}
      <section className="pt-36 pb-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="font-hand text-xl text-clay mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            10 years of craft
          </motion.p>
          <motion.h1
            className="font-serif font-light text-ink leading-tight"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Selected Work
          </motion.h1>
        </div>
      </section>

      {/* ─── MAIN PROJECTS ──────────────── */}
      <section className="px-6 md:px-10 lg:px-16 pb-16">
        <div className="max-w-5xl mx-auto space-y-2">
          {mainProjects.map((project, i) => (
            <FlipProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ─── SIDE QUESTS ────────────────── */}
      <section className="py-20 px-6 md:px-10 lg:px-16 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-hand text-xl text-clay mb-2">Personal experiments</p>
            <h2
              className="font-serif font-light text-ink mb-12"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
            >
              Side Quests
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {sideQuests.map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 0.1}>
                <div className="group bg-card border border-border rounded-2xl p-6 h-full paper-card hover:border-ink-muted transition-all duration-300 hover:-translate-y-1">
                  <span className="inline-block font-sans text-xs tracking-widest uppercase text-ink-light border border-border-light rounded-full px-3 py-1 mb-4">
                    {project.tag}
                  </span>
                  <h3 className="font-serif text-2xl text-ink mb-2 group-hover:text-clay transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="font-sans text-sm text-ink-muted leading-relaxed mb-4">
                    {project.tagline}
                  </p>
                  <ul className="space-y-1">
                    {project.notable.map((item) => (
                      <li key={item} className="font-sans text-xs text-ink-light flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-clay shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────── */}
      <section className="py-24 px-6 md:px-10 lg:px-16 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-hand text-xl text-clay mb-4">Interested in working together?</p>
            <h2
              className="font-serif font-light text-ink mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Let&apos;s make something great
            </h2>
            <a
              href="mailto:lapsun.j.zhang@gmail.com"
              className="inline-block font-serif text-xl border-b-2 border-ink text-ink hover:text-clay hover:border-clay transition-all duration-300 pb-1"
            >
              lapsun.j.zhang@gmail.com
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────── */}
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

/* ── Flip Card ─────────────────────────── */
function FlipProjectCard({ project, index }: { project: Project; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });

  /* Auto-flip on scroll */
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0 }}
      className="card-flip-wrapper w-full"
      style={{ height: "auto", minHeight: 180 }}
    >
      {/* Click to toggle flip */}
      <div
        className="relative w-full"
        style={{ perspective: 1200 }}
        onClick={() => setFlipped((f) => !f)}
      >
        <motion.div
          style={{ rotateY, transformStyle: "preserve-3d" }}
          className="relative w-full rounded-2xl cursor-pointer"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.645, 0.045, 0.355, 1] }}
        >
          {/* ── FRONT ─── */}
          <div
            className="w-full bg-card border border-border rounded-2xl p-6 md:p-8 paper-card"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              {/* Left */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-hand text-clay text-lg">{`0${index + 1}`}</span>
                  <span className="font-sans text-xs tracking-widest uppercase text-ink-light border border-border-light rounded-full px-3 py-0.5">
                    {project.tag}
                  </span>
                  {project.year && (
                    <span className="font-hand text-ink-muted text-base">{project.year}</span>
                  )}
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-ink mb-1">
                  {project.name}
                </h2>
                {project.role && (
                  <p className="font-sans text-sm text-ink-muted mb-3">{project.role}</p>
                )}
                <p className="font-serif italic text-lg text-ink-muted max-w-xl">
                  {project.tagline}
                </p>
              </div>

              {/* Right - Notable work */}
              <div className="md:w-64 shrink-0">
                <p className="font-hand text-sm text-clay mb-2">Notable work</p>
                <ul className="space-y-1">
                  {project.notable.map((item) => (
                    <li key={item} className="font-sans text-sm text-ink-muted flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-clay shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Flip hint */}
            <div className="mt-5 flex items-center gap-2 text-ink-light">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M2 8 C2 4.7, 4.7 2, 8 2 C11.3 2, 14 4.7, 14 8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M11 5 L14 8 L14 5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-hand text-sm">flip for learnings</span>
            </div>
          </div>

          {/* ── BACK ─── */}
          <div
            className="absolute inset-0 w-full bg-ink rounded-2xl p-6 md:p-8 flex flex-col justify-between"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div>
              <p className="font-hand text-clay text-lg mb-4">{project.name}</p>

              {project.metric && (
                <div className="mb-6">
                  <p className="font-sans text-xs tracking-widest uppercase text-cream/40 mb-2">
                    Impact
                  </p>
                  <p className="font-serif text-2xl text-cream leading-snug">
                    {project.metric}
                  </p>
                </div>
              )}

              {project.learning && (
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-cream/40 mb-2">
                    Key learning
                  </p>
                  <p className="font-serif italic text-lg text-cream/80 leading-relaxed">
                    &ldquo;{project.learning}&rdquo;
                  </p>
                </div>
              )}
            </div>

            {/* Flip back hint */}
            <div className="flex items-center gap-2 text-cream/30 mt-6">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M14 8 C14 11.3, 11.3 14, 8 14 C4.7 14, 2 11.3, 2 8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 11 L2 8 L2 11"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-hand text-sm">flip back</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
