// src/components/TextHighlight.tsx
'use client';
import { useEffect, useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function TextHighlight() {
  const [active, setActive] = useState(false);
  const mountainRef = useRef(null);

  useEffect(() => {
    setActive(true); // defer animation until after hydration
  }, []);

  useGSAP(() => {
    gsap.to(mountainRef.current, {
      backgroundPositionY: '-200px',
      scrollTrigger: {
        trigger: mountainRef.current,
        start: 'top top',
        scrub: true,
      },
    });
  });
  const headline = `hey, it's jds`;
  const sub = `I'm a photographer and web developer in the Hudson Valley, NY.`;
  return (
    <div
      ref={mountainRef}
      className="bg-[url(/images/catskills.webp)] min-h-[100vh] pt-25 flex flex-col items-center font-sans relative bg-fixed will-change-[background-position-y]"
    >
      <div className="relative overflow-hidden transition-all">
        <Image
          className="animate-revealUp translate-y-full w-[200px] h-[300px]"
          style={{ animationDelay: '2.5s' }}
          src="/images/jds.webp"
          alt="Selfie of James David Saul"
          width={200}
          height={300}
        />
      </div>
      <h2 className="text-4xl font-bold whitespace-nowrap mt-4">
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
        <h3
          className="inline-block animate-revealUp translate-y-full"
          style={{ animationDelay: '1.2s' }}
        >
          {sub}
        </h3>
      </div>
    </div>
  );
}
