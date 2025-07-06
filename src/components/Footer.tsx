'use client';
import ScrollArrow from '@/components/ScrollArrow';
import GrandFormat from '@/components/GrandFormat';

export default function Footer() {
  return (
    <div>
      <footer
        className="text-rose-50 absolute bottom-0 lg:-bottom-18 lg:grid lg:grid-cols-2 w-full animate-revealUp translate-y-full pl-4 pr-4"
        style={{ animationDelay: '3s' }}
        data-scroll
        data-scroll-speed="1"
      >
        <GrandFormat />
        <ScrollArrow />
      </footer>
    </div>
  );
}
