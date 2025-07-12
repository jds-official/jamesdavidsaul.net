// src/components/TextHighlight.tsx
'use client';
import { useEffect, useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import ScrollArrow from '@/components/ScrollArrow';
import GrandFormat from '@/components/GrandFormat';

gsap.registerPlugin(ScrollTrigger);

export default function TextHighlight() {
  const [active, setActive] = useState(false);
  const mountainRef = useRef(null);
  const fadeRef = useRef(null);

  useEffect(() => {
    setActive(true); // defer animation until after hydration
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      mountainRef.current,
      { backgroundPositionY: '-10vh' },
      {
        backgroundPositionY: '-50vh',
        scrollTrigger: {
          trigger: mountainRef.current,
          start: 'top top',
          scrub: true,
        },
      },
    );
    gsap.fromTo(
      fadeRef.current,
      {
        yPercent: 120,
        autoAlpha: 0,
      },
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 2,
        delay: 3.5,
      },
    );
    gsap.fromTo(
      fadeRef.current,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
        scrollTrigger: {
          trigger: mountainRef.current,
          start: 'top top',
          end: '+300',
          scrub: true,
        },
      },
    );
  });
  const headline = `hey, it's jds`;
  const sub = `I'm a photographer and web developer in the Hudson Valley, NY.`;
  return (
    <div
      ref={mountainRef}
      className="bg-[url(/images/catskills.webp)] min-h-[100vh] pt-25 flex flex-col items-center font-sans relative bg-fixed will-change-[background-position-y] bg-position-[center_top_-20vh]"
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
      <div
        ref={fadeRef}
        className="gsap-hidden relative mt-auto mb-4 w-full pl-2 pr-2 pb-8"
        style={{ animationDelay: '3.1s' }}
      >
        <div
          className="text-rose-50 grid grid-flow-row justify-items-center lg:grid-flow-col items-start lg:grid-cols-2 h-[200px]"
          style={{ animationDelay: '3s' }}
        >
          <GrandFormat />
          <ScrollArrow />
        </div>
      </div>
    </div>
  );
}
