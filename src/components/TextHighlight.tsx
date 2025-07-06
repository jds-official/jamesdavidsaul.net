// src/components/TextHighlight.tsx
'use client';
import { useEffect, useState } from 'react';
// import { useScroll } from '@/context/ScrollContext';

export default function TextHighlight() {
  // const { scroll } = useScroll();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true); // defer animation until after hydration
  }, []);
  const headline = `hey, it's jds`;
  const sub = `I'm a photographer and web developer in the Hudson Valley, NY.`;
  return (
    <div className="bg-sky-500/50 min-h-[100vh] p-10 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold whitespace-nowrap">
        {headline.split('').map((char, i) => (
          <span
            key={i}
            className={`inline-block transition-all duration-500 ${
              active ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}{' '}
          </span>
        ))}{' '}
      </h2>
      <div className="relative overflow-hidden">
        <h3 className="inline-block animate-revealUp translate-y-full">
          {sub}
        </h3>
      </div>
    </div>
  );
}
