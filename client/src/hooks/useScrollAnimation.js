import { useEffect } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

export const useScrollAnimation = (threshold = 0.1) => {
  const [setElement, isIntersecting] = useIntersectionObserver(threshold);

  useEffect(() => {
    if (isIntersecting) {
      // Trigger animation when element is in view
    }
  }, [isIntersecting]);

  return [setElement, isIntersecting];
};

// Global scroll animation initialization
export const initializeScrollAnimations = () => {
  if (typeof window === 'undefined') return;  // guard for SSR

  // Avoid multiple observers
  if (window.__scrollAnimationsInitialized) return;
  window.__scrollAnimationsInitialized = true;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
};
