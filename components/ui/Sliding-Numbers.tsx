'use client';
import { useEffect, useId, useState, useRef } from 'react';
import {
  MotionValue,
  motion,
  useSpring,
  useTransform,
  motionValue,
  useInView,
} from 'motion/react';
import useMeasure from 'react-use-measure';

const TRANSITION = {
  type: 'spring',
  stiffness: 50,
  damping: 22,
  mass: 1,
} as const;

function Digit({ value, place }: { value: number; place: number }) {
  const valueRoundedToPlace = Math.floor(value / place) % 10;
  const initial = motionValue(valueRoundedToPlace);
  const animatedValue = useSpring(initial, TRANSITION);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div className='relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums'>
      <div className='invisible'>0</div>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue<number>; number: number }) {
  const uniqueId = useId();
  const [ref, bounds] = useMeasure();

  const y = useTransform(mv, (latest) => {
    if (!bounds.height) return 0;
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * bounds.height;

    if (offset > 5) {
      memo -= 10 * bounds.height;
    }

    return memo;
  });

  // don't render the animated number until we know the height
  if (!bounds.height) {
    return (
      <span ref={ref} className='invisible absolute'>
        {number}
      </span>
    );
  }

  return (
    <motion.span
      style={{ y }}
      layoutId={`${uniqueId}-${number}`}
      className='absolute inset-0 flex items-center justify-center'
      transition={TRANSITION}
      ref={ref}
    >
      {number}
    </motion.span>
  );
}

type SlidingNumberProps = {
  value: number;
  padStart?: boolean;
  decimalSeparator?: string;
  className?: string;
  suffix?: string;
  animateOnScroll?: boolean;
  once?: boolean;
};

export function SlidingNumber({
  value,
  padStart = false,
  decimalSeparator = '.',
  className = '',
  suffix = '',
  animateOnScroll = false,
  once = true,
}: SlidingNumberProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.8, margin: '0px 0px -100px 0px' });
  const [displayValue, setDisplayValue] = useState(animateOnScroll ? 0 : value);

  useEffect(() => {
    if (animateOnScroll) {
      if (isInView) {
        setDisplayValue(value);
      } else if (!once) {
        setDisplayValue(0);
      }
    } else {
      setDisplayValue(value);
    }
  }, [isInView, value, animateOnScroll, once]);

  const absValue = Math.abs(displayValue);
  const [integerPart, decimalPart] = absValue.toString().split('.');
  const integerValue = parseInt(integerPart, 10);
  const paddedInteger =
    padStart && integerValue < 10 ? `0${integerPart}` : integerPart;
  const integerDigits = paddedInteger.split('');
  const integerPlaces = integerDigits.map((_, i) =>
    Math.pow(10, integerDigits.length - i - 1)
  );

  return (
    <div ref={ref} className={`flex items-center ${className}`}>
      {displayValue < 0 && '-'}
      {integerDigits.map((_, index) => (
        <Digit
          key={`pos-${integerPlaces[index]}`}
          value={integerValue}
          place={integerPlaces[index]}
        />
      ))}
      {decimalPart && (
        <>
          <span>{decimalSeparator}</span>
          {decimalPart.split('').map((_, index) => (
            <Digit
              key={`decimal-${index}`}
              value={parseInt(decimalPart, 10)}
              place={Math.pow(10, decimalPart.length - index - 1)}
            />
          ))}
        </>
      )}
      {suffix && <span>{suffix}</span>}
    </div>
  );
}
