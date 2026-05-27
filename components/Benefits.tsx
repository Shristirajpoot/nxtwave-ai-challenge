"use client";

const benefits = [
  {
    icon: "🤖",
    color: "bg-indigo-500/15 border-indigo-500/20",
    iconBg: "bg-indigo-500/20",
    title: "Learn by Doing",
    desc: "No theory overload. Every day you build something real using AI tools — a chatbot, an AI resume, a content generator, and more.",
  },
  {
    icon: "⚡",
    color: "bg-cyan-500/10 border-cyan-500/20",
    iconBg: "bg-cyan-500/20",
    title: "Industry-Relevant Skills",
    desc: "Learn Prompt Engineering, ChatGPT, Midjourney, AI productivity tools and automation — skills companies are hiring for right now.",
  },
  {
    icon: "🏆",
    color: "bg-green-500/10 border-green-500/20",
    iconBg: "bg-green-500/20",
    title: "Compete & Win",
    desc: "Earn points, climb the leaderboard, maintain streaks, and win exclusive recognition and prizes. Learning that feels like a game.",
  },
  {
    icon: "🎓",
    color: "bg-purple-500/10 border-purple-500/20",
    iconBg: "bg-purple-500/20",
    title: "Verified Certificate",
    desc: "Every completer earns an industry-recognized AI Skills Certificate — shareable on LinkedIn and recognised by top recruiters in India.",
  },
  {
    icon: "🌐",
    color: "bg-amber-500/10 border-amber-500/20",
    iconBg: "bg-amber-500/20",
    title: "Network & Community",
    desc: "Join an exclusive WhatsApp community of 1,500+ ambitious college students from AP & Telangana. Your tribe awaits.",
  },
  {
    icon: "🚀",
    color: "bg-pink-500/10 border-pink-500/20",
    iconBg: "bg-pink-500/20",
    title: "Career Advantage",
    desc: "Stand out in placements and interviews. AI skills are now a top requirement for freshers in 2025 — get ahead of your batch.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-500/12 border border-indigo-500/25 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            About the Challenge
          </span>
          <h2 className="font-space text-3xl md:text-5xl font-black mb-4">
            What is the 7-Day AI Challenge?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A free, structured, hands-on challenge designed for college students who want to go from zero to AI-ready in just one week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-8 card-hover ${b.color} relative overflow-hidden`}
            >
              {/* Top bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className={`w-14 h-14 rounded-xl ${b.iconBg} flex items-center justify-center text-2xl mb-5`}>
                {b.icon}
              </div>
              <h3 className="font-space font-bold text-xl mb-3">{b.title}</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
