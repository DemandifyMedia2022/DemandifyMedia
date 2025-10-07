'use client';
import { ArrowRight } from 'lucide-react';

type FlowButtonSize = 'sm' | 'md' | 'lg';

export function FlowButton({ text = "Modern Button", size = 'md', as = 'button' }: { text?: string; size?: FlowButtonSize; as?: 'button' | 'span' | 'div' }) {
  const sizeClasses = {
    sm: {
      container: 'px-5 py-2 text-xs',
      leftArrow: 'w-3 h-3 left-[-28%] group-hover:left-3',
      rightArrow: 'w-3 h-3 right-3',
      textShift: '-translate-x-2 group-hover:translate-x-2',
    },
    md: {
      container: 'px-8 py-3 text-sm',
      leftArrow: 'w-4 h-4 left-[-25%] group-hover:left-4',
      rightArrow: 'w-4 h-4 right-4',
      textShift: '-translate-x-3 group-hover:translate-x-3',
    },
    lg: {
      container: 'px-10 py-4 text-base',
      leftArrow: 'w-5 h-5 left-[-22%] group-hover:left-5',
      rightArrow: 'w-5 h-5 right-5',
      textShift: '-translate-x-4 group-hover:translate-x-4',
    },
  }[size];

  const Component = as;

  return (
    <Component className={`group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-[#333333]/40 bg-[#d734cc] ${sizeClasses.container} font-semibold text-white cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white hover:text-[#c93bd2] hover:rounded-[12px] active:scale-[0.95]`}>
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className={`absolute ${sizeClasses.leftArrow} stroke-white fill-none z-[9] group-hover:stroke-[#c93bd2] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]`} 
      />

      {/* Text */}
      <span className={`relative z-[1] ${sizeClasses.textShift} transition-all duration-[800ms] ease-out`}>
        {text}
      </span>

      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className={`absolute ${sizeClasses.rightArrow} stroke-white fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-[#c93bd2] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]`} 
      />
    </Component>
  );
}
