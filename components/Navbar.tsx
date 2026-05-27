"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#050811]/95 backdrop-blur-xl border-b border-white/10"
          : "py-4 bg-[#050811]/80 backdrop-blur-lg border-b border-white/5"
      }`}
    >
      {/* Logo */}
      <Link href="#home" className="flex items-center gap-3 no-underline">
        <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center text-lg">
          🤖
        </div>
        <span className="font-space font-bold text-lg gradient-text">NxtWave</span>
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <Link href="#curriculum" className="hover:text-white transition-colors">Curriculum</Link>
        <Link href="#gamification" className="hover:text-white transition-colors">Leaderboard</Link>
        <Link href="#rewards" className="hover:text-white transition-colors">Rewards</Link>
        <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
      </div>

      {/* CTA */}
      <a
        href="https://forms.gle/Hu9MYLn1VvpHtLXn7"
        target="_blank"
        rel="noopener noreferrer"
        id="nav-cta-btn"
        className="gradient-brand text-white px-5 py-2.5 rounded-full font-semibold text-sm btn-glow shimmer-btn"
      >
        Register Free →
      </a>
    </nav>
  );
}
