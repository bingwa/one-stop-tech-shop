import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [pathname]);

  return children || null;
}
