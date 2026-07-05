import { motion as Motion, useReducedMotion } from 'motion/react';

/**
 * Scroll-in reveal. Fades and lifts content as it enters the viewport,
 * collapses to static under prefers-reduced-motion.
 */
export default function Reveal({ children, delay = 0, className, y = 20 }) {
  const reduce = useReducedMotion();

  return (
    <Motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Motion.div>
  );
}
