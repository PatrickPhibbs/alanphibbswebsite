'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
}

const directionVariants = {
  up: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export default function AnimateOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={directionVariants[direction]}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
