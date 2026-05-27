"use client";

const leaderboard = [
  { rank: "🥇", name: "Priya Reddy", college: "JNTU Hyderabad", pts: 2840, streak: 7, avatarGrad: "from-amber-400 to-yellow-500", avatarColor: "text-black" },
  { rank: "🥈", name: "Arjun Sharma", college: "Osmania University", pts: 2615, streak: 7, avatarGrad: "from-slate-400 to-slate-600", avatarColor: "text-white" },
  { rank: "🥉", name: "Sravya Nair", college: "Gitam University", pts: 2480, streak: 6, avatarGrad: "from-amber-700 to-orange-800", avatarColor: "text-white" },
  { rank: "4", name: "Rohit Varma", college: "VIT-AP Amaravati", pts: 2210, streak: 5, avatarGrad: "from-indigo-500 to-purple-700", avatarColor: "text-white" },
  { rank: "5", name: "Meghana Kotte", college: "Sri Krishnadevaraya Univ.", pts: 1990, streak: 5, avatarGrad: "from-green-500 to-cyan-600", avatarColor: "text-white" },
];

const streakDays = [
  { label: "M", done: true },
  { label: "T", done: true },
  { label: "W", done: true },
  { label: "T", done: true },
  { label: "F", today: true },
  { label: "S", upcoming: true },
  { label: "S", upcoming: true },
];

const badges = ["⚡ Speed Learner", "🎯 Perfect Score", "🔥 5-Day Streak"];

const pointsMap = [
  { pts: "+100", label: "Complete a daily task", color: "text-cyan-400" },
  { pts: "+50",  label: "Submit a project",      color: "text-cyan-400" },
  { pts: "+200", label: "7-day streak bonus",    color: "text-amber-400" },
  { pts: "+150", label: "Give peer feedback",    color: "text-pink-400" },
  { pts: "+75",  label: "Refer a friend",        color: "text-green-400" },
];

export default function Gamification() {
  return (
    <section id="gamification" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-500/12 border border-indigo-500/25 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Gamification
          </span>
          <h2 className="font-space text-3xl md:text-5xl font-black mb-4">Learn Like You Play</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Streaks, leaderboards, badges — because learning should feel exciting, not like homework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Leaderboard */}
          <div className="bg-[#0d1428] border border-white/8 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/8 bg-indigo-500/10 font-bold text-base flex items-center gap-2">
              🏆 Live Leaderboard — Week 1
            </div>
            {leaderboard.map((s, i) => (
              <div key={i} className="flex items-center px-6 py-4 border-b border-white/5 hover:bg-indigo-500/5 transition-colors gap-4">
                <span className={`font-black text-xl min-w-[30px] ${i < 3 ? "" : "text-slate-500"}`}>{s.rank}</span>
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${s.avatarGrad} ${s.avatarColor} flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                  {s.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">{s.name}</div>
                  <div className="text-slate-500 text-xs truncate">{s.college}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-cyan-400 font-bold text-sm">{s.pts.toLocaleString()} pts</div>
                  <div className="text-amber-400 text-xs">🔥 {s.streak}-day streak</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">

            {/* Streak tracker */}
            <div className="bg-[#0d1428] border border-white/8 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-space font-bold text-lg">🔥 Your Daily Streak</h3>
                <span className="text-amber-400 text-sm font-bold">Day 5 of 7</span>
              </div>
              <div className="flex gap-2 mb-6">
                {streakDays.map((day, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-semibold text-sm ${
                      day.done
                        ? "gradient-brand text-white"
                        : day.today
                        ? "bg-indigo-500/20 border-2 border-indigo-400 text-indigo-300"
                        : "bg-white/5 border border-white/8 text-slate-500"
                    }`}
                  >
                    {day.label}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Your Badges</p>
                <div className="flex flex-wrap gap-2">
                  {badges.map((b, i) => (
                    <span key={i} className="bg-amber-500/12 border border-amber-500/25 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Points card */}
            <div className="bg-[#0d1428] border border-white/8 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-amber-500/15 rounded-xl flex items-center justify-center text-2xl">🎯</div>
                <h3 className="font-space font-bold text-lg">How Points Work</h3>
              </div>
              <ul className="space-y-3">
                {pointsMap.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className={`${p.color} font-bold w-12 flex-shrink-0`}>{p.pts}</span>
                    <span className="text-slate-400">{p.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
