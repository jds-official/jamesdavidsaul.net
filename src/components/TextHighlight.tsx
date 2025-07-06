// src/components/TextHighlight.tsx
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function TextHighlight() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true); // defer animation until after hydration
  }, []);
  const headline = `hey, it's jds`;
  const sub = `I'm a photographer and web developer in the Hudson Valley, NY.`;
  return (
    <div className="bg-[url(/images/catskills.webp)] min-h-[100vh] p-10 flex flex-col justify-center items-center font-sans relative">
      <div className="relative overflow-hidden transition-all -top-5">
        <Image
          className="animate-revealUp translate-y-full"
          style={{ animationDelay: '2.5s' }}
          src="/images/jds.webp"
          alt="Selfie of James David Saul"
          width={200}
          height={300}
        />
      </div>
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
