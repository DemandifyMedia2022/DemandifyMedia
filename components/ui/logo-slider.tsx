"use client";

import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const DEFAULT_LOGOS: Logo[] = [
  { src: "/img/RedHat.webp", alt: "Red Hat" },
  { src: "/img/Redis.webp", alt: "Redis" },
  { src: "/img/Sophos.webp", alt: "Sophos" },
  { src: "/img/Zoho.webp", alt: "Zoho" },
  { src: "/img/commvault.webp", alt: "Commvault" },
  { src: "/img/hp.webp", alt: "HP" },
  { src: "/img/salesforce.webp", alt: "Salesforce" },
  { src: "/img/tally.webp", alt: "Tally" },
  { src: "/img/tata communication.webp", alt: "Tata Communication" },
  { src: "/img/thoughtspot.webp", alt: "ThoughtSpot" },
  { src: "/img/zoom.webp", alt: "Zoom" },
];

type LogoSliderProps = {
  logos?: Logo[];
  className?: string;
  itemClassName?: string;
  speedMs?: number; // full loop duration
  pauseOnHover?: boolean;
};

/**
 * LogoSlider
 * - Seamless, infinitely scrolling logo marquee
 * - Duplicates the track for a continuous loop
 * - Pauses on hover (optional)
 * - Masked edges for a subtle fade in/out
 */
export function LogoSlider({
  logos,
  className,
  itemClassName,
  speedMs = 20000,
  pauseOnHover = true,
}: LogoSliderProps) {
  // Use provided logos or fall back to defaults
  const source = logos && logos.length ? logos : DEFAULT_LOGOS;
  // Duplicate logos for a looping track
  const track = [...source, ...source];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-2 sm:py-3",
        // gradient mask on edges
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          // responsive spacing between items
          "flex w-max gap-6 sm:gap-8 md:gap-10 lg:gap-12",
          "animate-logo-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ ['--logo-scroll-duration' as any]: `${speedMs}ms` }}
      >
        {track.map((logo, idx) => (
          <div key={`${logo.src}-${idx}`} className={cn("flex items-center justify-center", itemClassName)}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width ?? 140}
              height={logo.height ?? 40}
              className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes logo-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-logo-scroll {
          animation-name: logo-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: var(--logo-scroll-duration, 20000ms);
        }
        /* Slightly slower on very small screens for legibility */
        @media (max-width: 640px) {
          .animate-logo-scroll { animation-duration: calc(var(--logo-scroll-duration, 20000ms) * 1.1); }
        }
        /* Slightly faster on large screens so it doesn't feel too slow */
        @media (min-width: 1024px) {
          .animate-logo-scroll { animation-duration: calc(var(--logo-scroll-duration, 20000ms) * 0.9); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-logo-scroll { animation-duration: 0.001ms; animation-iteration-count: 1; }
        }
      `}</style>
    </div>
  );
}
