/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // Generates static HTML/CSS/JS in /out — required for Netlify
  trailingSlash: true, // Netlify serves index.html inside folders cleanly
  images: {
    unoptimized: true, // next/image optimisation is unavailable in static export
    remotePatterns: [],
  },
};

export default nextConfig;
