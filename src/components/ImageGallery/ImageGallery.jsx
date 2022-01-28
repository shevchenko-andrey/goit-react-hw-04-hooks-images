import PropTypes from 'prop-types';
import { SRLWrapper } from 'simple-react-lightbox';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { GalleryImages } from './ImageGallery.styled';

const options = {
  settings: {
    overlayColor: 'rgba(0, 0, 0, 0.8)',
    disableWheelControls: true,
    disablePanzoom: true,
  },
  caption: {
    showCaption: false,
  },
  buttons: {
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
  progressBar: {
    showProgressBar: false,
  },
};

function ImageGallery({ images }) {
  if (images.length === 0) {
    return <></>;
  } else {
    return (
      <SRLWrapper options={options}>
        <GalleryImages>
          {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              tags={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          ))}
        </GalleryImages>
      </SRLWrapper>
    );
  }
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ImageGallery;
