// src/context/ScrollContext.tsx
'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

type ScrollContextType = {
  scroll: LocomotiveScroll | null;
  containerRef: React.RefObject<HTMLDivElement>;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;
    const initScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      const scrollInstance = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
      });
      setScroll(scrollInstance);
    };

    initScroll();

    return () => {
      scrollInstance.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scroll, containerRef }}>
      <div data-scroll-container ref={containerRef}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) throw new Error('useScroll must be used within ScrollProvider');
  return context;
};
