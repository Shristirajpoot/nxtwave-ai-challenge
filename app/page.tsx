import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Timeline from "@/components/Timeline";
import Gamification from "@/components/Gamification";
import Rewards from "@/components/Rewards";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <Benefits />

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <Timeline />

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <Gamification />

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <Rewards />

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <Testimonials />

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <FAQ />

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <CTA />

      {/* Footer */}
      <footer className="bg-[#0a0f1e] border-t border-white/8 py-10 px-6 text-center">
        <p className="font-space font-black text-xl gradient-text mb-3">NxtWave</p>
        <p className="text-slate-500 text-sm">© 2025 NxtWave Disruptive Technologies. All rights reserved.</p>
        <p className="text-slate-600 text-xs mt-2">Empowering the next generation of tech professionals across India.</p>
      </footer>
    </main>
  );
}
