'use client';
import ScrollArrow from '@/components/ScrollArrow';
import GrandFormat from '@/components/GrandFormat';

export default function Footer() {
  return (
    <div>
      <footer
        className="text-rose-50 fixed items-center justify-center -bottom-18 flex w-full animate-revealUp translate-y-full"
        style={{ animationDelay: '3s' }}
      >
        <ScrollArrow />
        <GrandFormat />
      </footer>
    </div>
  );
}
