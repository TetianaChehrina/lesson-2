// import { getPhotos } from 'apiService/photos';
import { getPhotos } from 'apiService/photos';
import { Text, Form } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [photos, setPhotos] = useState('');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isError, setIsError] = useState(null);

  const handleValues = value => {
    setQuery(value);
  };

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = getPhotos(query, page);
        setPhotos(response.photos);
      } catch (error) {
        setIsError(error.message);
      }
    }
    fetchPhotos();
  }, [page, query]);

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={handleValues} />
    </>
  );
};
