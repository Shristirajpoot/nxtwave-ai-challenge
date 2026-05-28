"use client";

const rewards = [
  {
    icon: "🥇",
    title: "Top 3 Winners",
    desc: "Cash prizes + featured on NxtWave's platform + LinkedIn shout-out reaching 50,000+ followers. Your career starts here.",
    featured: true,
    border: "border-amber-500/30",
    bg: "bg-gradient-to-br from-amber-500/8 to-indigo-500/5",
  },
  {
    icon: "🎓",
    title: "Verified Certificate",
    desc: "Every completer gets a shareable, industry-recognized AI Skills Certificate. Add it to LinkedIn in one click.",
    featured: false,
    border: "border-white/8",
    bg: "bg-[#0d1428]",
  },
  {
    icon: "🌟",
    title: "Hall of Fame",
    desc: "Top 10% students get a permanent profile on NxtWave's AI Hall of Fame — visible to recruiters and companies.",
    featured: false,
    border: "border-white/8",
    bg: "bg-[#0d1428]",
  },
  {
    icon: "🎁",
    title: "Goodies & Swag",
    desc: "Top 50 students get exclusive NxtWave swag packs delivered to their door. Limited edition. You'll want this.",
    featured: false,
    border: "border-white/8",
    bg: "bg-[#0d1428]",
  },
  {
    icon: "💼",
    title: "Internship Spotlight",
    desc: "Top performers get referred to NxtWave's hiring partners network. Your AI projects become your job application.",
    featured: false,
    border: "border-white/8",
    bg: "bg-[#0d1428]",
  },
  {
    icon: "📣",
    title: "LinkedIn Shout-out",
    desc: "All completers get a public shout-out from NxtWave's official LinkedIn page. Build your professional brand from Day 1.",
    featured: false,
    border: "border-white/8",
    bg: "bg-[#0d1428]",
  },
];

export default function Rewards() {
  return (
    <section id="rewards" className="py-24 px-6 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-500/12 border border-indigo-500/25 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Rewards
          </span>
          <h2 className="font-space text-3xl md:text-5xl font-black mb-4">Win More Than Just Skills</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Top performers get recognized and rewarded. Here&apos;s everything up for grabs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((r, i) => (
            <div
              key={i}
              className={`rounded-2xl border ${r.border} ${r.bg} p-8 text-center card-hover relative overflow-hidden`}
            >
              {r.featured && (
                <span className="absolute top-3 right-3 bg-amber-500/20 border border-amber-500/35 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full">
                  ⭐ Top Pick
                </span>
              )}
              <div className="text-5xl mb-4">{r.icon}</div>
              <h3 className="font-space font-bold text-xl mb-3">{r.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
