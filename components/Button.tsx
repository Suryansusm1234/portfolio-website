import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  onClick?: never;
  type?: never;
};

type ActionButtonProps = {
  href?: never;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick: () => void;
  type?: "button" | "submit";
  target?: never;
  rel?: never;
};

type ButtonProps = LinkButtonProps | ActionButtonProps;

function classesForVariant(variant: ButtonVariant) {
  switch (variant) {
    case "primary":
      return "bg-[var(--accent)] text-black hover:brightness-110";
    case "outline":
      return "border border-[var(--border)] text-[var(--foreground)] hover:border-[rgba(240,237,232,0.28)] hover:bg-[rgba(240,237,232,0.04)]";
    case "ghost":
      return "text-[var(--foreground)] hover:text-[var(--accent)]";
  }
}

export function Button({
  children,
  variant = "outline",
  className,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

  if ("href" in rest && typeof rest.href === "string") {
    const isExternal =
      rest.href.startsWith("http") || rest.href.startsWith("mailto:");
    const finalTarget = rest.target ?? (isExternal ? "_blank" : "_self");
    const finalRel =
      rest.rel ?? (finalTarget === "_blank" ? "noopener noreferrer" : undefined);

    return (
      <a
        href={rest.href}
        target={finalTarget}
        rel={finalRel}
        className={[base, classesForVariant(variant), className]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={rest.type ?? "button"}
      onClick={rest.onClick}
      className={[base, classesForVariant(variant), className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}

