"use client";
import { useEffect, useRef, useState } from "react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center min-w-[72px]">
      <span className="font-space text-4xl md:text-5xl font-black gradient-text block leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs text-slate-500 uppercase tracking-widest mt-1.5 block">{label}</span>
    </div>
  );
}

export default function Hero() {
  const target = useRef(new Date(Date.now() + 3 * 86400000));
  const { d, h, m, s } = useCountdown(target.current);
  const [seats, setSeats] = useState(653);
  const [count, setCount] = useState(0);

  // Animated registration counter
  useEffect(() => {
    let start = 0;
    const end = 847;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, []);

  // Simulated seats dropping
  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() < 0.3) setSeats((s) => Math.max(s - Math.floor(Math.random() * 3 + 1), 10));
    }, 9000);
    return () => clearInterval(id);
  }, []);

  const pad2 = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-pink-500/6 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-500/30 rounded-full px-5 py-2 text-sm font-semibold text-indigo-300 mb-8 animate-fade-down">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
          Registration Open — Limited Seats Available
        </div>

        {/* Headline */}
        <h1 className="font-space text-4xl md:text-6xl lg:text-7xl font-black leading-[1.08] mb-6 animate-fade-up">
          Master AI Skills in<br />
          <span className="gradient-text">7 Days. For Free.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Join NxtWave&apos;s intensive AI Skills Challenge. Build real projects, compete on the leaderboard,
          and earn a verified certificate — no experience needed.
        </p>

        <p className="text-cyan-400 font-medium text-sm mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          📍 For college students across Andhra Pradesh &amp; Telangana
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <a
            href="https://forms.gle/Hu9MYLn1VvpHtLXn7"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-register-btn"
            className="gradient-brand text-white px-10 py-4 rounded-full font-bold text-lg btn-glow shimmer-btn inline-flex items-center gap-3 justify-center"
          >
            🚀 Register for Free
          </a>
          <a
            href="#curriculum"
            id="hero-curriculum-btn"
            className="border border-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 inline-flex items-center gap-2 justify-center"
          >
            See Curriculum ↓
          </a>
        </div>

        {/* Stats row */}
        <div className="flex justify-center gap-10 md:gap-16 flex-wrap mb-14 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          {[
            { val: `${count}+`, label: "Students Joined" },
            { val: "7", label: "Days of Learning" },
            { val: "100%", label: "Free" },
            { val: "1", label: "Verified Certificate" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <span className="font-space text-3xl font-black gradient-text block">{s.val}</span>
              <span className="text-xs text-slate-500 mt-1 block">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Countdown card */}
        <div className="bg-[#0d1428] border border-white/8 rounded-2xl p-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-xs text-slate-500 uppercase tracking-[3px] mb-5">🔥 Challenge Starts In</p>
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-6">
            <CountdownUnit value={d} label="Days" />
            <span className="font-space text-4xl font-black text-indigo-400">:</span>
            <CountdownUnit value={h} label="Hours" />
            <span className="font-space text-4xl font-black text-indigo-400">:</span>
            <CountdownUnit value={m} label="Minutes" />
            <span className="font-space text-4xl font-black text-indigo-400">:</span>
            <CountdownUnit value={s} label="Seconds" />
          </div>

          {/* Progress */}
          <div className="max-w-sm mx-auto">
            <div className="flex justify-between text-xs text-slate-500 mb-2">
              <span>Registration progress</span>
              <span>{count} / 1,500 seats</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full gradient-brand rounded-full transition-all duration-1000"
                style={{ width: `${(count / 1500) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Avatar + count */}
        <div className="flex items-center justify-center gap-3 mt-6 animate-fade-up" style={{ animationDelay: "0.35s" }}>
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
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-[#050811] flex items-center justify-center text-xs font-bold ${i > 0 ? "-ml-2" : ""}`}
              >
                {["R","P","A","S","K"][i]}
              </div>
            ))}
          </div>
          <span className="text-sm text-slate-400">
            <strong className="text-white">{count}+ students</strong> registered today
          </span>
        </div>

        {/* Seats left */}
        <div className="mt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <span className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/25 text-pink-300 text-xs font-semibold px-4 py-2 rounded-full">
            🔴 Only <strong className="text-pink-200">{seats}</strong> seats remaining
          </span>
        </div>
      </div>
    </section>
  );
}
