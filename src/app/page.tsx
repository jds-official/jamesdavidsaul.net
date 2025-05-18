'use client';
import FlickrGallery from '@/components/FlickrGallery';
import { H1 } from '@/components/Headings';

export default function Home() {
  return (
    <main className="p-8">
      <H1>James David Saul</H1>
      <FlickrGallery />
    </main>
  );
}
