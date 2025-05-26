'use client';
import TextHighlight from '@/components/TextHighlight';
import FlickrGallery from '@/components/FlickrGallery';
import { H1 } from '@/components/Headings';

export default function Home() {
  return (
    <main className="p-8" data-scroll-container>
      {/* <H1>James David Saul</H1> */}
      <TextHighlight />
      <FlickrGallery />
    </main>
  );
}
