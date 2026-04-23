import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section id="top" className="pt-24 sm:pt-28">
      <div className="border-b border-border pb-12 sm:pb-14">
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] text-foreground/60">
            &lt; developer /&gt;
          </p>

          <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Hi, I'm Suryansu
          </h1>

          <p className="mt-4 text-lg text-foreground/85">
            Full-Stack MERN Developer
          </p>

          <p className="mt-4 text-base leading-7 text-foreground/70">
          I build and deploy scalable web applications and solve real-world problems using React, Next.js, and Node.js
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="[ResumeLink]" variant="outline">
              Resume
            </Button>
            <Button href="#contact" variant="outline">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

