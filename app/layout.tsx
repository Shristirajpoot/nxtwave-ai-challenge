import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "7-Day Free AI Skills Challenge | NxtWave – Learn AI in 7 Days",
  description:
    "Join NxtWave's FREE 7-Day AI Skills Challenge for college students in Andhra Pradesh & Telangana. Learn AI tools, build real projects, earn a verified certificate. 1,500+ seats. Register now!",
  keywords: "AI challenge, free AI course, NxtWave, college students, AP Telangana, AI skills, certificate",
  openGraph: {
    title: "7-Day Free AI Skills Challenge | NxtWave",
    description: "Free AI challenge for AP & Telangana students. Certificate. Leaderboard. Prizes. Limited seats.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
