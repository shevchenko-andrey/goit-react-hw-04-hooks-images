import { useState, useEffect, useCallback } from 'react';
import { useMountedState } from 'react-use';
import SearchService from './SearchService';
import ImageFinderAPI from '../ImageFinderAPI';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import status from '../Constants/status';
import NotFaundMassage from './EroorUi/NotFaundMasage';
import imageNotFaund from '../images/400error.jpg';

const { IDLE, RESOLVED, RESJECTED, PENDING } = status;

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(IDLE);
  const isMounted = useMountedState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getImagesData = useCallback(async () => {
    try {
      setStatus(PENDING);
      const response = await ImageFinderAPI(query, page);
      const { totalPages, images } = response;
      if (totalPages < 1) {
        return setStatus(RESJECTED);
      }
      setImages(prevImages => [...prevImages, ...images]);
      setTotalPages(totalPages);
      setStatus(RESOLVED);
    } catch {
      setStatus(RESJECTED);
    }
  });

  useEffect(() => {
    if (!query) {
      return;
    }
    getImagesData();
  }, [getImagesData, query]);

  useEffect(() => {
    if (isMounted()) {
      getImagesData();

      if (page > 1) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
    }
  }, [getImagesData, page, isMounted]);

  const handleFormSubmit = newQuery => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setPage(1);
      setImages([]);
    }
  };
  const handleLoadMore = () => {
    setTotalPages(prevPage => prevPage + 1);
  };

  return (
    <SearchService onSubmit={handleFormSubmit}>
      <ImageGallery images={images} />

      {status === PENDING && <Loader />}
      {status === RESOLVED && page <= totalPages && (
        <Button onClick={handleLoadMore} />
      )}
      {status === RESJECTED && <NotFaundMassage image={imageNotFaund} />}
    </SearchService>
  );
};

export default App;
