// src/components/FlickrGrid.tsx
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Photo {
  id: string;
  farm: number;
  server: string;
  secret: string;
  title: string;
}

interface Photo {
  id: string;
  farm: number;
  server: string;
  secret: string;
  title: string;
}

export default function FlickrGrid() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

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
        console.log(largestPhoto.source);
        setPhotoUrl(largestPhoto.source);
        // if (photo.length > 0) {
        //   setPhoto(photo); // take the first photo
        // }
      } catch (error) {
        console.error('Error fetching flickr photo', error);
      }
    };

    fetchPhoto();
  }, []);

  // if (!photo) return <div>Loading...</div>;

  // Construct the photo URL using Flickr’s format:
  // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

  // const photoUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  // console.log(photoUrl);
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt="Flickr"
            sizes="100vw"
            // Make the image display full width
            // and preserve its aspect ratio
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="bg-pink">
        <h4>Fuckerini 9000</h4>
      </div>
    </div>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    //       {photos.map((photo) => (
    //         <div key={photo.id} className="rounded overflow-hidden shadow">
    //           <Image
    //             src={photo.src}
    //             alt={photo.title}
    //             width={300}
    //             height={200}
    //             className="w-full h-auto object-cover"
    //           />
    //           <p className="text-sm p-2">{photo.title}</p>
    //         </div>
    //       ))}
    //     </div>
  );
}

// type Photo = {
//   id: string;
//   src: string;
//   title: string;
// };

// type Props = {
//   photos: Photo[];
// };

// export default function FlickrGrid({ photos }: Props) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//       {photos.map((photo) => (
//         <div key={photo.id} className="rounded overflow-hidden shadow">
//           <Image
//             src={photo.src}
//             alt={photo.title}
//             width={300}
//             height={200}
//             className="w-full h-auto object-cover"
//           />
//           <p className="text-sm p-2">{photo.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
