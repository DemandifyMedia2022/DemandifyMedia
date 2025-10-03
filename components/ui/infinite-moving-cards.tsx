"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string; // representative name
    title: string; // representative title or brand role
    logo: string; // brand image path under /public
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "16s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => {
          const parts = (item.title || '').split(',');
          const role = (parts[0] || '').trim();
          const company = parts.slice(1).join(',').trim();
          return (
          <li
            className="relative w-[360px] max-w-full shrink-0 rounded-2xl border-2 border-[#cb28c4] bg-white/90 px-6 py-5 md:w-[460px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(193,27,187,0.12)] transition-shadow duration-300 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={item.name}
          >
            <blockquote>
              {/* Brand logo - rectangular and larger */}
              <div className="mb-4">
                <div className="mx-auto h-20 w-36 rounded-lg border-2 border-[#cb28c4]/40 bg-white p-2 shadow-sm flex items-center justify-center overflow-hidden">
                  {/* using native img for simplicity */}
                  <img src={item.logo} alt={`${company || 'brand'} logo`} className="h-full w-full object-contain" />
                </div>
              </div>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-[0.95rem] leading-[1.7] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-5 flex flex-row items-center">
                <span className="flex flex-col gap-0.5">
                  <span className="text-[0.95rem] leading-[1.6] font-semibold text-black dark:text-gray-100">
                    by {item.name}
                  </span>
                  <span className="text-[0.85rem] leading-[1.6] text-neutral-600 dark:text-gray-400">
                    {role}
                    {company && ' · '}
                    {company && (<span className="text-[#cb28c4] font-semibold">{company}</span>)}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        )})}
      </ul>
      <style jsx>{`
        .animate-scroll {
          animation-name: scroll;
          animation-duration: var(--animation-duration, 40s);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: var(--animation-direction, forwards);
          will-change: transform;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
