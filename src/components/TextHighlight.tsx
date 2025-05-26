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
  const text = `hey, it's jds`;
  return (
    <div
      data-scroll-section
      className="bg-sky-500/50 min-h-[100vh] p-10 flex flex-col justify-center items-center"
    >
      <h2
        data-scroll
        data-scroll-speed="2"
        className="text-4xl font-bold whitespace-nowrap"
      >
        {text.split('').map((char, i) => (
          <span
            key={i}
            className={`inline-block transition-all duration-500 ${
              active ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}{' '}
          </span>
        ))}{' '}
      </h2>
      <p>
        I&#39;m a photographer and web developer in the Hudson Valley, NY and
        I&#39;ve finally updated my website.
      </p>
      <p>
        This site uses scrolljacking and lots of nasty stuff for keyboard users.
        Hit tab to jump to the gallery and enable keyboard control. Hit esc to
        bail!
      </p>
    </div>
  );
}
