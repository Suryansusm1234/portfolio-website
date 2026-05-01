const GROUPS = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js","Redis","FastAPI"],
  },
  {
    title: "Database",
    skills: ["MongoDB Atlas"],
  },
  {
    title: "Tools",
    skills: ["Git","Github", "Postman", "Vercel", "Render" ],
  },
] as const;

function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">
      {children}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-16">
      <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
        Technical Skills
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {GROUPS.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-border bg-[rgba(240,237,232,0.02)] p-6"
          >
            <h3 className="text-sm font-medium text-foreground/85">
              {g.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

