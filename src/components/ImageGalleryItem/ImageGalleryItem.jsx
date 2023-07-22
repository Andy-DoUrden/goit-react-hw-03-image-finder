import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, webformatURL }) => (
  <GalleryItem key={id}>
    <GalleryImage src={webformatURL} />
  </GalleryItem>
);

export default ImageGalleryItem;
