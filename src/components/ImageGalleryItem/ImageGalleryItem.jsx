import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, onClick }) => (
  <GalleryItem onClick={onClick}>
    <GalleryImage src={webformatURL} />
  </GalleryItem>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  onClick: PropTypes.func,
};
