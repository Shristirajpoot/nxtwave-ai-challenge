"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is this really free? No hidden fees?",
    a: "100% free. There are no hidden charges, no credit card required, no upsells to join the 7-day challenge. The only cost is your time and commitment to show up each day.",
  },
  {
    q: "Do I need any prior coding or AI knowledge?",
    a: "Absolutely not! The challenge is designed for complete beginners. If you can use a smartphone and browse the internet, you can do this. We start from scratch and build up progressively.",
  },
  {
    q: "How much time do I need every day?",
    a: "Just 60–90 minutes per day. Each session is focused and practical — no fluff, no padding. You can do it even with a full college schedule.",
  },
  {
    q: "Who is eligible to participate?",
    a: "Any college student from Andhra Pradesh or Telangana can join — from any branch (CSE, ECE, Mechanical, Civil, Commerce — doesn't matter). All years welcome.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes! Every student who completes all 7 days receives a verified digital certificate from NxtWave. It's shareable on LinkedIn and recognized by recruiters across India.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-[#0a0f1e]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-500/12 border border-indigo-500/25 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="font-space text-3xl md:text-5xl font-black mb-4">Common Questions</h2>
          <p className="text-slate-400 text-lg">Everything you need to know before you register.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`bg-[#0d1428] border rounded-2xl overflow-hidden transition-colors duration-300 ${
                open === i ? "border-indigo-500/35" : "border-white/8"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-base gap-4 cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
                id={`faq-btn-${i}`}
              >
                <span>{f.q}</span>
                <span
                  className={`w-7 h-7 rounded-full bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-sm flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180 bg-indigo-500/30" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-slate-400 text-[15px] leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
