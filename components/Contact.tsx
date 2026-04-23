import { Button } from "@/components/Button";
import type { ReactNode } from "react";

function IconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/80 transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(240,237,232,0.28)] hover:text-foreground"
    >
      {children}
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-16">
      <div className="rounded-2xl border border-border bg-[rgba(240,237,232,0.02)] p-6 sm:p-10">
        <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
          Let&apos;s Work Together
        </h2>
        <p className="mt-3 text-sm text-foreground/70">
          Open to freelance projects and internship opportunities
        </p>

        <a
          className="mt-8 block font-display text-xl tracking-tight text-foreground hover:text-accent transition duration-200"
          href="mailto:ssanjeebanimohanty@gmail.com"
        >
          ssanjeebanimohanty@gmail.com
        </a>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="mailto:ssanjeebanimohanty@gmail.com" variant="primary" className="px-4 py-2">
            Email Me
          </Button>

          <div className="ml-0 flex items-center gap-2 sm:ml-2">
            <IconButton href="https://github.com/Suryansusm1234" label="GitHub">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path d="M12 2C6.477 2 2 6.58 2 12.26c0 4.54 2.865 8.39 6.84 9.75.5.1.683-.22.683-.48 0-.24-.01-.88-.014-1.73-2.782.62-3.369-1.37-3.369-1.37-.454-1.19-1.11-1.5-1.11-1.5-.908-.64.07-.63.07-.63 1.004.07 1.532 1.06 1.532 1.06.892 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.636-1.38-2.22-.26-4.555-1.14-4.555-5.08 0-1.12.39-2.03 1.03-2.75-.103-.26-.446-1.3.098-2.71 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 7.07c.85.004 1.705.12 2.505.35 1.91-1.32 2.75-1.05 2.75-1.05.544 1.41.2 2.45.098 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.95.68 1.92 0 1.39-.014 2.51-.014 2.85 0 .26.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.523 2 12 2z" />
              </svg>
            </IconButton>

            <IconButton href="https://www.linkedin.com/in/suryansu-sanjeebani-mohanty" label="LinkedIn">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.32V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}

