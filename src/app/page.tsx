'use client';
import TextHighlight from '@/components/TextHighlight';
import FlickrGallery from '@/components/FlickrGallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <TextHighlight />
      <FlickrGallery />
      {/* <Footer /> */}
    </main>
  );
}
