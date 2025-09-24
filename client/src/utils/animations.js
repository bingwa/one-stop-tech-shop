// Basic animation utility definitions. Update with your GSAP / Framer Motion variants as needed.

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};
