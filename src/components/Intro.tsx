// src/components/Intro.tsx
'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import ScrollArrow from '@/components/ScrollArrow';
import GrandFormat from '@/components/GrandFormat';

gsap.registerPlugin(ScrollTrigger);

export default function TextHighlight() {
  const mountainRef = useRef(null);
  const fadeRef = useRef(null);
  const typeRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      mountainRef.current,
      { backgroundPositionY: '-30vh' },
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
        yPercent: 250,
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
    gsap.fromTo(
      typeRef.current,
      {
        width: '0',
      },
      {
        width: '100%',
        duration: 1.5,
        ease: 'steps(16)',
      },
    );
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
          className="animate-revealUp translate-y-full w-[150px] md:w-[200px]"
          style={{ animationDelay: '2.5s' }}
          src="/images/jds.webp"
          alt="Selfie of James David Saul"
          width={200}
          height={300}
        />
      </div>
      <h2 className="text-4xl font-bold whitespace-nowrap mt-4">
        <div ref={typeRef} className="relative overflow-hidden">
          {headline}
        </div>
      </h2>
      <div className="relative overflow-hidden pl-2 pr-2 text-center">
        <h3
          className="inline-block animate-revealUp translate-y-full text-xl lg:text-2xl"
          style={{ animationDelay: '1.2s' }}
        >
          {sub}
        </h3>
      </div>
      <div
        ref={fadeRef}
        className="gsap-hidden relative mt-8 md:mt-auto mb-4 w-full pl-2 pr-2 pb-8 md:overflow-hidden"
        style={{ animationDelay: '3.1s' }}
      >
        <div
          className="text-rose-50 h-[60vh] md:h-[200px] grid grid-flow-row md:grid-flow-col justify-items-center items-start"
          style={{ animationDelay: '3s' }}
        >
          <div className="grid grid-rows-2 gap-2 md:grid-cols-2 md:gap-0">
            <GrandFormat />
            <ScrollArrow />
          </div>
        </div>
      </div>
    </div>
  );
}
