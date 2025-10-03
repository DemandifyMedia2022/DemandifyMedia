"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}
interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  // Color & font config
  const colorName = colors.name ?? "#000";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const offset = (index - activeIndex + testimonialsLength) % testimonialsLength;
    // const zIndex = testimonialsLength - Math.abs(offset);
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="testimonial-container">
      {/* Card wrapper for all content */}
      <div className="testimonial-card">
        <div className="testimonial-grid">
          {/* Images */}
          <div className="image-container" ref={imageContainerRef}>
            {testimonials.map((testimonial, index) => (
              <img
                key={testimonial.src}
                src={testimonial.src}
                alt={testimonial.name}
                className="testimonial-image"
                data-index={index}
                style={getImageStyle(index)}
              />
            ))}
          </div>
          {/* Divider between image and content */}
          <div className="divider" aria-hidden="true" />
          {/* Content */}
          <div className="testimonial-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={quoteVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h3
                  className="name"
                  style={{ color: colorName, fontSize: fontSizeName }}
                >
                  {activeTestimonial.name}
                </h3>
                <p
                  className="designation"
                  style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
                >
                  {activeTestimonial.designation}
                </p>
                <motion.p
                  className="quote"
                  style={{ color: colorTestimony, fontSize: fontSizeQuote }}
                >
                  {activeTestimonial.quote.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.22,
                        ease: "easeInOut",
                        delay: 0.025 * i,
                      }}
                      style={{ display: "inline-block" }}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            <div className="arrow-buttons">
              <button
                className="arrow-button prev-button"
                onClick={handlePrev}
                style={{
                  backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
                }}
                onMouseEnter={() => setHoverPrev(true)}
                onMouseLeave={() => setHoverPrev(false)}
                aria-label="Previous testimonial"
              >
                <FaArrowLeft size={28} color={colorArrowFg} />
              </button>
              <button
                className="arrow-button next-button"
                onClick={handleNext}
                style={{
                  backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
                }}
                onMouseEnter={() => setHoverNext(true)}
                onMouseLeave={() => setHoverNext(false)}
                aria-label="Next testimonial"
                >
                  <FaArrowRight size={28} color={colorArrowFg} />
                </button>
              </div>
            </div>
          </div>
        </div>
      <style jsx>{`
        .testimonial-container {
          width: 100%;
          max-width: 64rem;
          padding: 0.75rem;
        }
        .testimonial-card {
          position: relative;
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 1.25rem;
          padding: 2rem;
          box-shadow: 
            0 20px 30px rgba(0, 0, 0, 0.06),
            0 10px 20px rgba(0, 0, 0, 0.035),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(196, 27, 187, 0.3), transparent);
        }
        .testimonial-card:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 
            0 40px 80px rgba(0, 0, 0, 0.12),
            0 20px 40px rgba(0, 0, 0, 0.06),
            0 0 0 1px rgba(196, 27, 187, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }
        .testimonial-grid {
          display: grid;
          gap: 1.5rem;
          align-items: center;
          grid-template-columns: 1fr;
        }
        .divider {
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, rgba(203,213,225,0), rgba(203,213,225,0.8), rgba(203,213,225,0));
        }
        .image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          perspective: 1200px;
          margin: 0 auto;
          max-width: 18rem;
        }
        .testimonial-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 0rem;
          padding: 0.75rem;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.15),
            0 8px 16px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .testimonial-image:hover {
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.2),
            0 12px 24px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
          max-width: 36rem;
          margin: 0 auto;
        }
        .name {
          font-weight: 500;
          font-size: 1.375rem;
          letter-spacing: -0.025em;
          margin-bottom: 0.25rem;
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .designation {
          font-weight: 500;
          font-size: 0.95rem;
          color: #6b7280;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          position: relative;
        }
        .designation::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 2rem;
          height: 2px;
          background: linear-gradient(90deg, #c11bbb, #d946ef);
          border-radius: 1px;
        }
        .quote {
          line-height: 1.65;
          font-weight: 400;
          font-size: 1.05rem;
          color: #374151;
          position: relative;
          padding-left: 1.25rem;
          font-style: italic;
        }
        .quote::before {
          content: '"';
          position: absolute;
          left: 0;
          top: -0.25rem;
          font-size: 3rem;
          color: #c11bbb;
          font-family: Georgia, serif;
          line-height: 1;
          opacity: 0.6;
        }
        .arrow-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          justify-content: center;
        }
        .arrow-button {
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(196, 27, 187, 0.2);
          position: relative;
          overflow: hidden;
        }
        .arrow-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(196, 27, 187, 0.1), rgba(217, 70, 239, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .arrow-button:hover::before {
          opacity: 1;
        }
        .arrow-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(196, 27, 187, 0.2);
          border-color: rgba(196, 27, 187, 0.4);
        }
        .arrow-button:active {
          transform: translateY(0);
        }
        .word {
          display: inline-block;
        }
        
        /* Responsive Design */
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 0.9fr minmax(0, 1.1fr);
            gap: 2.5rem;
          }
          .testimonial-content {
            align-items: flex-start;
            text-align: left;
            margin: 0;
          }
          .arrow-buttons {
            margin-top: 2rem;
            justify-content: flex-start;
          }
          .testimonial-card {
            padding: 3rem;
          }
          .divider {
            height: 100%;
            width: 1px;
            background: linear-gradient(180deg, rgba(203,213,225,0), rgba(203,213,225,0.8), rgba(203,213,225,0));
            justify-self: center;
          }
        }
        
        @media (min-width: 1024px) {
          .testimonial-grid {
            gap: 4rem;
          }
          .image-container {
            max-width: 22rem;
          }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .testimonial-card {
            background: linear-gradient(145deg, #1f2937 0%, #111827 50%, #1f2937 100%);
            border-color: rgba(75, 85, 99, 0.3);
          }
          .name {
            background: linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .designation {
            color: #9ca3af;
          }
          .quote {
            color: #d1d5db;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;