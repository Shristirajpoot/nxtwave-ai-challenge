"use client";
import { useState, useEffect } from "react";

export default function CTA() {
  const [seats, setSeats] = useState(653);
  const [count, setCount] = useState(847);

  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() < 0.3) setSeats((s) => Math.max(s - Math.floor(Math.random() * 3 + 1), 10));
    }, 9000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="register" className="py-28 px-6 relative overflow-hidden">
      {/* Glow bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Seats badge */}
        <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/25 text-pink-300 text-sm font-semibold px-5 py-2 rounded-full mb-8">
          🔴 Only <span className="font-black text-pink-200 mx-1">{seats}</span> seats remaining
        </div>

        <h2 className="font-space text-4xl md:text-6xl font-black leading-tight mb-6">
          Your AI Journey Starts<br />
          <span className="gradient-text">Right Now</span>
        </h2>

        <p className="text-slate-400 text-xl mb-10">
          Join {count}+ students already registered. It&apos;s free, it&apos;s intense, and it could change your career trajectory.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSckuFrBrsjblvbOMtxZjJIaOCrSzf4wvGON0wIsgR82LBxiAQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          id="final-cta-btn"
          className="gradient-brand text-white px-14 py-5 rounded-full font-bold text-xl btn-glow shimmer-btn inline-flex items-center gap-3 mb-8"
        >
          🚀 Register for Free Now
        </a>

        {/* Avatar row */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex">
            {[
              "from-indigo-500 to-purple-600",
              "from-pink-500 to-indigo-600",
              "from-cyan-500 to-indigo-600",
              "from-green-500 to-cyan-600",
              "from-amber-500 to-red-500",
            ].map((g, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-[#050811] flex items-center justify-center text-sm font-bold ${i > 0 ? "-ml-2.5" : ""}`}
              >
                {["R","P","A","S","K"][i]}
              </div>
            ))}
          </div>
          <span className="text-slate-400 text-sm">
            Join <strong className="text-white">{count}+ students</strong> registered today
          </span>
        </div>

        <p className="text-slate-600 text-sm">
          100% Free &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; Certificate included &nbsp;·&nbsp; AP &amp; Telangana students
        </p>
      </div>
    </section>
  );
}
