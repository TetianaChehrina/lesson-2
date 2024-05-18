// import { getPhotos } from 'apiService/photos';
import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery, Button } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isError, setIsError] = useState(null);

  const handleSubmit = value => {
    setPage(1);
    setPhotos([]);
    setQuery(value);
  };

  const handleLoadMore = () => {
    setPage(page => page + 1);
  };
  useEffect(() => {
    if (!query) return;
    async function fetchPhotos() {
      try {
        const response = await getPhotos(query, page);
        setPhotos(prevPhotos => [...prevPhotos, ...response.photos]);
      } catch (error) {
        setIsError(error.message);
      }
    }
    fetchPhotos();
  }, [page, query]);

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={handleSubmit} />
      <PhotosGallery listPhoto={photos} />
      <Button onClick={handleLoadMore}>Load more</Button>
      {isError && <Text textAlign="center">{isError} 🔎</Text>}
    </>
  );
};
