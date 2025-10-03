'use client';
import { useRef } from 'react';
import { useInView, motion } from 'motion/react';

interface CircularProgressProps {
  percentage: number;
  label: string;
}

export function CircularProgress({ percentage, label }: CircularProgressProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <div ref={ref} className="group relative bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200/50 hover:border-[#b300a5]/30">
      <div className="absolute inset-0 bg-gradient-to-br from-[#b300a5]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Circular Progress */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32">
            <svg className="transform -rotate-90 w-32 h-32">
              <circle
                cx="64"
                cy="64"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-neutral-200"
              />
              <motion.circle
                cx="64"
                cy="64"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ 
                  strokeDashoffset: isInView ? circumference * (1 - percentage / 100) : circumference 
                }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="text-[#b300a5]"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-extrabold text-[#b300a5]">{percentage}%</span>
            </div>
          </div>
        </div>

        <h3 className="text-center text-base sm:text-lg font-semibold text-black leading-snug">
          {label}
        </h3>
      </div>
    </div>
  );
}
