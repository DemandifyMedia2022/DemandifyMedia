"use client";
import React, { useState } from "react";
import EbookModal from "../ui/ebook-modal";

interface EbooksGridProps {
  titles: string[];
}

export default function EbooksGrid({ titles }: EbooksGridProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const handleOpen = (title: string) => {
    setSelected(title);
    setOpen(true);
  };

  return (
    <>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {titles.map((title) => (
          <article key={title} className="relative group h-full">
            {/* Gradient border wrapper */}
            <div className="rounded-2xl p-[1.5px] bg-gradient-to-br from-[#b300a5] via-[#ff49d0] to-[#b300a5] h-full">
              {/* Inner card */}
              <div className="relative rounded-2xl bg-white shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5 overflow-hidden h-[200px] sm:h-[210px] lg:h-[220px] flex flex-col">
                {/* Soft pattern accent */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 10% 10%, #b300a5 1px, transparent 1px), radial-gradient(circle at 90% 30%, #b300a5 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative flex flex-col gap-4 p-5 flex-1">
                  {/* Pill tag */}
                  <span className="self-start inline-flex items-center rounded-full bg-[#b300a5]/10 text-[#b300a5] px-3 py-1 text-[11px] font-semibold border border-[#b300a5]/20">
                    E‑BOOK
                  </span>

                  {/* Title */}
                  <h4 className="font-extrabold text-neutral-900 leading-snug text-[15px] sm:text-base h-[48px] sm:h-[52px] line-clamp-2 overflow-hidden">
                    {title}
                  </h4>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-end">
                    <button
                      onClick={() => handleOpen(title)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#b300a5] px-4 py-2 text-white text-xs font-semibold shadow hover:bg-[#99038d] transition-colors"
                    >
                      <span className="hidden sm:inline">Get</span> E‑Book
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </div>

                {/* Shine on hover */}
                <div className="pointer-events-none absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/40 blur-3xl opacity-0 group-hover:opacity-70 transition-opacity" />
              </div>
            </div>
          </article>
        ))}
      </div>

      <EbookModal open={open} onClose={() => setOpen(false)} ebookTitle={selected} />
    </>
  );
}
