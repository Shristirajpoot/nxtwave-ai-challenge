"use client";

const testimonials = [
  {
    stars: 5,
    text: "Maine pehle socha tha AI sirf engineers ke liye hai. NxtWave ke iss challenge ne meri soch badal di. Ab main apne college projects ke liye AI use kar raha hoon aur placements mein bhi yeh skill alag hi lag rahi hai!",
    name: "Kiran Kumar",
    meta: "3rd Year CSE • JNTU Kakinada",
    avatarGrad: "from-indigo-500 to-purple-600",
  },
  {
    stars: 5,
    text: "The 7-day structure is genius. Every day had a clear project and I could see my progress. The leaderboard made me push harder — I ended up finishing top 5! My LinkedIn certificate got 3 interview calls within a week.",
    name: "Divya Lakshmi",
    meta: "2nd Year ECE • Andhra University",
    avatarGrad: "from-pink-500 to-indigo-600",
  },
  {
    stars: 5,
    text: "I'm from a small town in Nalgonda. I never thought I could learn AI tools — but this challenge made it so simple and practical. The WhatsApp community kept me accountable and the mentors were super helpful.",
    name: "Ramakrishna Goud",
    meta: "Final Year Mech • CBIT Hyderabad",
    avatarGrad: "from-green-500 to-cyan-600",
  },
];

const stats = [
  { val: "12,000+", label: "Students Trained" },
  { val: "4.9/5", label: "Average Rating" },
  { val: "200+", label: "Colleges" },
  { val: "89%", label: "Would Recommend" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-500/12 border border-indigo-500/25 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Social Proof
          </span>
          <h2 className="font-space text-3xl md:text-5xl font-black mb-4">What Students Are Saying</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real stories from students who&apos;ve experienced NxtWave&apos;s programs firsthand.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#0d1428] border border-white/8 rounded-2xl p-7 card-hover">
              <div className="text-amber-400 text-sm mb-3">{"★".repeat(t.stars)}</div>
              <p className="font-serif text-5xl text-indigo-400/40 leading-none mb-2">&ldquo;</p>
              <p className="text-slate-400 text-[15px] leading-relaxed mb-5 italic">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarGrad} flex items-center justify-center font-bold text-white`}>
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-[#0d1428] border border-white/8 rounded-2xl p-10 flex flex-wrap justify-center gap-10">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <span className="font-space text-4xl font-black gradient-text block mb-1">{s.val}</span>
              <span className="text-slate-400 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
