"use client";

import { Button } from "@/components/Button";
import { ProjectImagesModal } from "@/components/ProjectImagesModal";
import { useMemo, useState } from "react";

const PROJECTS = [
  {
    title: "Expense Tracker",
    description:
      "Full-stack MERN app for tracking personal expenses with a single-page dense UI",
    tags: ["React", "Node.js", "MongoDB", "Express", "Vercel"],
    liveHref: "https://expense-tracker-peach-kappa-52.vercel.app/",
    githubHref: "https://github.com/Suryansusm1234/Expense-Tracker",
    images: [
      { src: "[/Expensetracker/log.png]", alt: "Expense Tracker screenshot 1" },
      { src: "[/Expensetracker/expense-tarcker.png]", alt: "Expense Tracker screenshot 2" },
    ],
  },
  {
    title: "WeatherWise",
    description:
      "AI-powered app that recommends outfits based on real-time weather using Google Gemini",
    tags: ["Next.js", "Gemini AI", "OpenWeather API", "Vercel"],
    liveHref: "https://ai-weather-app-black.vercel.app/",
    githubHref: "https://github.com/Suryansusm1234/AI-weather-app",
    images: [
      { src: "[/WeatherWise/AIsuggestion.jpeg]", alt: "WeatherWise screenshot 1" },
      { src: "[/WeatherWise/Homepage.jpeg]", alt: "WeatherWise screenshot 2" },
      { src: "[/WeatherWise/ResultsinC.jpeg]", alt: "WeatherWise screenshot 3" },
      { src: "[/WeatherWise/ResultsinF.jpeg]", alt: "WeatherWise screenshot 4" },
    ],
  },
  {
    title: "Digital Library",
    description:
      "Resource management platform for students with Google Drive integration and auth",
    tags: ["Next.js", "Clerk Auth", "Google Drive API", "Vercel"],
    liveHref: "https://college-library-sage.vercel.app/",
    githubHref: "https://github.com/Suryansusm1234/Digital-Library",
    images: [
      { src: "[/DigitalLibrary/Screenshot from 2026-04-23 10-30-34.png]", alt: "Digital Library screenshot 1" },
      { src: "[/DigitalLibrary/Screenshot from 2026-04-23 10-31-40.png]", alt: "Digital Library screenshot 2" },
      { src: "[/DigitalLibrary/Screenshot from 2026-04-23 10-32-38.png]", alt: "Digital Library screenshot 3" },
      { src: "[/DigitalLibrary/Screenshot from 2026-04-23 10-32-59.png]", alt: "Digital Library screenshot 4" },
     
    ],
  },
] as const;

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">
      {children}
    </span>
  );
}

export function Projects() {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  const activeProject = useMemo(() => {
    if (!activeTitle) return null;
    return PROJECTS.find((p) => p.title === activeTitle) ?? null;
  }, [activeTitle]);

  return (
    <section id="projects" className="py-14 sm:py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
            Selected Work
          </h2>
          <p className="mt-2 text-sm text-foreground/65">
            A few projects I&apos;ve enjoyed building recently.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className={[
              "group rounded-2xl border border-border",
              "bg-[rgba(240,237,232,0.02)]",
              "p-6 transition duration-200",
              "hover:-translate-y-1 hover:border-[rgba(240,237,232,0.22)]",
            ].join(" ")}
          >
            <h3 className="font-display text-xl tracking-tight">{p.title}</h3>
            <p className="mt-3 text-sm leading-6 text-foreground/70">
              {p.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={p.liveHref} variant="primary" className="px-4 py-2">
                Live <span aria-hidden>↗</span>
              </Button>
              <Button href={p.githubHref} variant="outline" className="px-4 py-2">
                GitHub
              </Button>
              <Button
                variant="outline"
                className="px-4 py-2"
                onClick={() => setActiveTitle(p.title)}
              >
                View images
              </Button>
            </div>
          </article>
        ))}
      </div>

      <ProjectImagesModal
        open={Boolean(activeProject)}
        onClose={() => setActiveTitle(null)}
        title={activeProject?.title ?? ""}
        images={activeProject?.images ?? ([] as const)}
      />
    </section>
  );
}

