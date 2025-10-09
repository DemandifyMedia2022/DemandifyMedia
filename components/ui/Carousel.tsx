"use client";
import { useEffect, useState, useRef } from "react";

interface SlideData {
  title: string;
  src: string;
  excerpt?: string;
}

interface CarouselProps {
  slides: SlideData[];
  interval?: number; // Auto slide interval in ms
}

export default function Carousel({ slides, interval = 3000 }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, interval);
    return () => clearInterval(timer);
  }, [current, slides.length, interval]);

  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getSlideStyles = (index: number) => {
    const total = slides.length;
    const offset = (index - current + total) % total;

    // Center slide
    if (offset === 0) return "z-50 scale-100 opacity-100 translate-x-0";

    // Right slide
    if (offset === 1) return "z-10 scale-90 opacity-60 translate-x-[105%]";

    // Left slide
    if (offset === total - 1) return "z-10 scale-90 opacity-60 -translate-x-[105%]";

    // Hidden slides
    return "opacity-0 scale-75 z-0 pointer-events-none";
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto flex justify-center items-center py-8 overflow-visible"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides container */}
      <div className="relative flex justify-center items-center h-[260px] sm:h-[320px] md:h-[380px] w-full overflow-visible">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-700 ease-in-out transform ${getSlideStyles(i)}`}
            style={{ transformOrigin: "center center" }}
          >
            <div className="w-[65vw] sm:w-[45vw] md:w-[28vw] max-w-[380px] cursor-pointer">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-white ring-1 ring-black/5 grid place-items-center p-2">
                <img
                  src={s.src}
                  alt={s.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <article className="mt-3 text-center">
                <h3 className="font-extrabold text-[#b300a5] leading-snug">{s.title}</h3>
                {s.excerpt && (
                  <p className="mt-1 text-neutral-700 text-sm leading-snug">{s.excerpt}</p>
                )}
              </article>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={handlePrev}
        className="absolute left-0 md:left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-40"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 md:right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-40"
      >
        ❯
      </button>
    </div>
  );
}
