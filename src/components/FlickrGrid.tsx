// src/components/FlickrGrid.tsx
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FlickrGrid() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [photoData, setPhotoData] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const photosetRes = await axios.get(
          'https://api.flickr.com/services/rest/',
          {
            params: {
              method: 'flickr.photosets.getPhotos',
              api_key: process.env.NEXT_PUBLIC_FLICKR_API_KEY,
              photoset_id: '72177720325609981',
              user_id: '200633048@N05',
              format: 'json',
              nojsoncallback: 1,
            },
          },
        );

        const photo = photosetRes.data.photoset.photo[0];
        // console.log(photo);
        setPhotoData(photo);
        console.log(photo);

        const sizesRes = await axios.get(
          'https://api.flickr.com/services/rest/',
          {
            params: {
              method: 'flickr.photos.getSizes',
              api_key: process.env.NEXT_PUBLIC_FLICKR_API_KEY,
              photo_id: photo.id,
              format: 'json',
              nojsoncallback: 1,
            },
          },
        );

        const sizes = sizesRes.data.sizes.size;
        const largestPhoto = sizes[sizes.length - 1]; // or sort by width
        setPhotoUrl(largestPhoto.source);
      } catch (error) {
        console.error('Error fetching flickr photo', error);
      }
    };

    fetchPhoto();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={photoData.title}
            sizes="100vw"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="bg-pink">
        {photoData ? <h4>{photoData.title}</h4> : <p>Loadings...</p>}
      </div>
    </div>
  );
}
