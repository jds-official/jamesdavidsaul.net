'use client';
import Header from '@/components/Header';
import TextHighlight from '@/components/TextHighlight';
import FlickrGallery from '@/components/FlickrGallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <TextHighlight />
      <FlickrGallery />
      {/* <Footer /> */}
    </main>
  );
}
