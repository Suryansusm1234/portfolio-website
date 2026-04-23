"use client";

import Image from "next/image";
import { useEffect } from "react";

type ProjectImagesModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  images: ReadonlyArray<{ src: string; alt: string }>;
};

export function ProjectImagesModal({
  open,
  onClose,
  title,
  images,
}: ProjectImagesModalProps) {
  const normalized = images
    .map((img) => {
      const trimmed = img.src.trim();
      const src = trimmed.startsWith("[") && trimmed.endsWith("]")
        ? trimmed.slice(1, -1).trim()
        : trimmed;
      return { ...img, src };
    })
    .filter((img) => img.src.length > 0);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} images`}
      className="fixed inset-0 z-60"
    >
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="absolute inset-x-0  mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-background shadow-2xl">
          <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
            <div>
              <p className="text-xs tracking-[0.2em] text-foreground/60 font-mono">
                Screenshots
              </p>
              <h3 className="font-display text-lg tracking-tight">{title}</h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-border px-3 py-1.5 text-xs text-foreground/80 transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(240,237,232,0.28)] hover:text-foreground"
            >
              Close
            </button>
          </div>

          <div className="p-5 sm:p-6 ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {normalized.map((img) => (
                <div
                  key={img.src}
                  className="overflow-hidden rounded-xl border border-border bg-[rgba(240,237,232,0.02)]"
                >
                  <div className="relative aspect-16/10">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

