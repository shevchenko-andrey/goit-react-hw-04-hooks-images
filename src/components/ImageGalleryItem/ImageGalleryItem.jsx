import PropTypes from 'prop-types';

import {
  ImageItem,
  GalleryItemImg,
  ImageGaleryLink,
} from './ImageGalleryItem.styled';
function ImageGalleryItem({ webformatURL, tags, largeImageURL }) {
  console.log(webformatURL);
  return (
    <ImageItem>
      <ImageGaleryLink href={largeImageURL}>
        <GalleryItemImg src={webformatURL} alt={tags} />
      </ImageGaleryLink>
    </ImageItem>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
