'use client';
// import { useState } from 'react';
import FlickrGrid from '@/components/FlickrGrid';

export default function Home() {
  // const [query, setQuery] = useState('');
  // const [photos, setPhotos] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const searchPhotos = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const res = await axios.get('/api/search', { params: { query } });
  //   setPhotos(res.data.photos);
  //   setLoading(false);
  // };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">James David Saul</h1>
      {/* <FlickrGrid photos={photos} /> */}
      <FlickrGrid />
    </main>
  );
}
