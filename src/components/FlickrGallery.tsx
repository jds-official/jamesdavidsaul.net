// src/components/FlickrGallery.tsx
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the interface we're going to use to store API data.
interface FlickrPhoto {
  id: string;
  url: string;
  title: string;
  description: string;
}

export default function FlickrGallery() {
  const [photos, setPhotos] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        // First we pull the album.
        const photosetRes = await axios.get(
          'https://api.flickr.com/services/rest/',
          {
            params: {
              method: 'flickr.photosets.getPhotos',
              api_key: process.env.NEXT_PUBLIC_FLICKR_API_KEY,
              photoset_id: '72177720326182006',
              user_id: '200633048@N05',
              format: 'json',
              nojsoncallback: 1,
            },
          },
        );

        // Now we can put our photo data together.
        const photos: FlickrPhoto[] = photosetRes.data.photoset.photo;

        // We have to get the sizes of the photos so we can pull a higher res version.
        const results = await Promise.all(
          photos.map(async (photo: FlickrPhoto) => {
            const sizeRes = await axios.get(
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
            // Now we can get our sizes together and determine the largest one.
            const sizes: FlickrSize[] = sizeRes.data.sizes.size;
            const largest = sizes.reduce((prev, current) =>
              parseInt(current.width) > parseInt(prev.width) ? current : prev,
            );

            // Get the description
            const infoRes = await axios.get(
              'https://api.flickr.com/services/rest/',
              {
                params: {
                  method: 'flickr.photos.getInfo',
                  api_key: process.env.NEXT_PUBLIC_FLICKR_API_KEY,
                  photo_id: photo.id,
                  format: 'json',
                  nojsoncallback: 1,
                },
              },
            );
            const description = infoRes.data.photo.description._content;

            // Return structured data.
            return {
              id: photo.id,
              url: largest.source,
              title: photo.title,
              description: description,
            };
          }),
        );
        console.log('results', results);
        setPhotos(results);
      } catch (error) {
        console.error('Error fetching flickr photo', error);
      }
    };

    fetchPhoto();
  }, []);

  return (
    <div>
      {photos ? (
        <div>
          {photos.map((photo, i) => (
            <div key={i} className="mb-8">
              <Image
                className="aspect-1/1 object-cover"
                key={i}
                src={photo.url}
                alt={photo.title}
                width={1000}
                height={1000}
              />
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
}
