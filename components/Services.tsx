const SERVICES = [
  "Resolve API errors, state management bugs, and production issues like CORS and failed deployments",
  "Create clean, mobile-friendly interfaces focused on performance and usability",
  "Design backend endpoints and connect them seamlessly with frontend applications",
  "Handle real-world deployment issues including environment variables, hosting, and backend connectivity",
] as const;

export function Services() {
  return (
    <section id="services" className="py-14 sm:py-16">
      <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
        What I Can Help You With
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-3">
        {SERVICES.map((item, idx) => {
          const number = String(idx + 1).padStart(2, "0");
          return (
            <div
              key={item}
              className="rounded-2xl border border-border bg-[rgba(240,237,232,0.02)] p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 text-xs font-medium tracking-[0.2em] text-accent">
                  {number}
                </span>
                <p className="text-sm leading-6 text-foreground/80">
                  {item}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

