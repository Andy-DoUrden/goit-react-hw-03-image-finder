import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, onClick }) => (
  <GalleryItem onClick={onClick}>
    <GalleryImage src={webformatURL} />
  </GalleryItem>
);

export default ImageGalleryItem;
