"use client";

import { useEffect, useMemo, useState } from "react";

const NAV = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrapperClass = useMemo(() => {
    return [
      "fixed inset-x-0 top-0 z-50",
      "bg-[var(--background)]/80 backdrop-blur",
      scrolled ? "border-b border-[var(--border)]" : "border-b border-transparent",
      "transition duration-200",
    ].join(" ");
  }, [scrolled]);

  return (
    <header className={wrapperClass}>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-base tracking-tight text-foreground hover:text-accent transition duration-200"
        >
          Suryansu Sanjeebani Mohanty
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-foreground transition duration-200 underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <nav className="flex items-center gap-4 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs text-foreground/80 hover:text-foreground transition duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

