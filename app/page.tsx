import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title:
    "Kwadjo Boadi-Mantey - Frontend Developer | Vue, React, Next.js Engineer",
  description:
    "Experienced Frontend Developer specializing in Vue.js, React, Next.js, TypeScript, and modern web technologies. Building scalable, performant web applications.",
  keywords: [
    "Frontend Developer",
    "Vue.js",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "JavaScript",
  ],
  authors: [{ name: "Kwadjo Boadi Mantey" }],
  creator: "Kwadjo Boadi Mantey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-joe-boadis-projects.vercel.app/",
    title: "Joe Boadi - Frontend Developer",
    description:
      "Experienced Frontend Developer specializing in modern web technologies",
    siteName: "Joe Boadi's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Boadi - Frontend Developer",
    description:
      "Experienced Frontend Developer specializing in modern web technologies",
    creator: "@joeboadiDev_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
