import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center">
      <p className="font-hand text-xl text-clay mb-4">oops —</p>
      <h1 className="font-serif font-light text-ink mb-4" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
        404
      </h1>
      <p className="font-sans text-lg text-ink-muted mb-8">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="font-serif text-xl border-b-2 border-ink text-ink hover:text-clay hover:border-clay transition-all duration-300 pb-1"
      >
        ← Back home
      </Link>
    </div>
  );
}
