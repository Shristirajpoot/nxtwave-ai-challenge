"use client";

const days = [
  {
    num: "01",
    emoji: "🧠",
    title: "AI Fundamentals & Mindset",
    desc: "Understand what AI actually is, why it matters for your career, and how to think about it strategically.",
    tag: "Foundation",
    tagColor: "bg-indigo-500/15 text-indigo-300",
  },
  {
    num: "02",
    emoji: "✍️",
    title: "Prompt Engineering Mastery",
    desc: "Learn exact techniques to get 10x better outputs from ChatGPT & Claude. Build your personal prompt library.",
    tag: "Core Skill",
    tagColor: "bg-cyan-500/15 text-cyan-300",
  },
  {
    num: "03",
    emoji: "🎨",
    title: "AI for Creativity & Design",
    desc: "Create stunning visuals, logos, and content using Midjourney, DALL·E, and Canva AI. No design skills needed.",
    tag: "Creative AI",
    tagColor: "bg-pink-500/15 text-pink-300",
  },
  {
    num: "04",
    emoji: "📊",
    title: "AI for Productivity & Work",
    desc: "Automate repetitive tasks, build AI workflows, and 10x your output using Notion AI, Zapier, and Make.",
    tag: "Automation",
    tagColor: "bg-amber-500/15 text-amber-300",
  },
  {
    num: "05",
    emoji: "💻",
    title: "Build Your AI-Powered Resume",
    desc: "Use AI to craft a standout resume and LinkedIn profile. Generate a personal portfolio page — no coding required.",
    tag: "Career",
    tagColor: "bg-green-500/15 text-green-300",
  },
  {
    num: "06",
    emoji: "🤝",
    title: "AI for Business & Startups",
    desc: "Validate startup ideas, generate business plans, and create pitch decks — all with AI as your co-founder.",
    tag: "Entrepreneurship",
    tagColor: "bg-purple-500/15 text-purple-300",
  },
  {
    num: "07",
    emoji: "🚀",
    title: "Capstone: Build & Present Your AI Project",
    desc: "Put it all together. Build a complete AI-powered mini-project, present it to peers & mentors, and receive your verified certificate. Top 3 get special recognition!",
    tag: "🏆 Grand Finale",
    tagColor: "bg-amber-500/20 text-amber-200 border border-amber-500/30",
    finale: true,
  },
];

export default function Timeline() {
  return (
    <section id="curriculum" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-500/12 border border-indigo-500/25 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            7-Day Program
          </span>
          <h2 className="font-space text-3xl md:text-5xl font-black mb-4">Your Week, Transformed</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Each day is a focused 60–90 minute session packed with hands-on learning and a project you&apos;ll actually use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {days.map((d, i) => (
            <div
              key={i}
              className={`bg-[#0d1428] border border-white/8 rounded-2xl p-6 flex gap-5 items-start card-hover cursor-pointer ${
                d.finale ? "md:col-span-2" : ""
              }`}
            >
              <div className="font-space text-4xl md:text-5xl font-black gradient-text min-w-[52px] leading-none">
                {d.num}
              </div>
              <div className="flex-1">
                <div className="text-2xl mb-1.5">{d.emoji}</div>
                <h3 className="font-space font-bold text-lg mb-2">{d.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{d.desc}</p>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${d.tagColor}`}>
                  {d.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
