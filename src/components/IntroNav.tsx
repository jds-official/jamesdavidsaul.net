'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollArrow from '@/components/ScrollArrow';
import GrandFormat from '@/components/GrandFormat';

gsap.registerPlugin(ScrollTrigger);

export default function IntroNav() {
  const fadeRef = useRef(null);
  useGSAP(() => {
    gsap.to(fadeRef.current, {
      // y: -1,
      // scrollTrigger: {
      //   trigger: fadeRef.current,
      //   start: 'bottom 200px',
      //   end: 'bottom bottom',
      //   scrub: true,
      //   markers: true,
      // },
    });
  });
  return (
    <div
      ref={fadeRef}
      className="relative mt-auto mb-4 animate-fade-in w-full pl-2 pr-2 pb-8 opacity-0"
      style={{ animationDelay: '3.1s' }}
    >
      <div
        className="text-rose-50 grid grid-flow-row justify-items-center lg:grid-flow-col items-start lg:grid-cols-2 animate-revealUp translate-y-full h-[200px]"
        style={{ animationDelay: '3s' }}
      >
        <GrandFormat />
        <ScrollArrow />
      </div>
    </div>
  );
}
