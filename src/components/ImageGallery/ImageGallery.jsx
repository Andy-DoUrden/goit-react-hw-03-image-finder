import { Component } from 'react';
import axios from 'axios';

import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

import { Container, GalleryImage } from './ImageGallery.styled';

const BASE_URL = 'https://pixabay.com/api/';

export default class ImageGallery extends Component {
  state = {
    response: null,
    loading: false,
    localPage: 1,
    targetImg: '',
    totalPicturs: 0,
    itemsCounter: 0,
    isHide: true,
    showImg: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({
        response: null,
      });

      const response = await this.fetchImages(1);
      let hide = false;

      if (response.data.totalHits - 12 < 12) {
        hide = true;
      }

      this.setState({
        response: response.data.hits,
        totalPicturs: response.data.totalHits,
        itemsCounter: 12,
        isHide: hide,
      });
    }
  }

  fetchImages = async localPage => {
    this.setState({ loading: true });

    const params = {
      key: '35900010-e6fba30fbbb71a29105fd08a0',
      q: this.props.searchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: localPage,
    };

    try {
      const response = await axios.get(BASE_URL, { params });
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  onImageClick = url => {
    this.setState({ targetImg: url });
    this.props.onOpenModalClick();
  };

  onLoadMoreClick = () => {
    this.setState(({ localPage, itemsCounter }) => ({
      localPage: localPage + 1,
      itemsCounter: itemsCounter + 12,
    }));

    setTimeout(async () => {
      const newResponse = await this.fetchImages(this.state.localPage);

      this.setState(({ response }) => ({
        response: response.concat(newResponse.data.hits),
      }));

      if (this.state.totalPicturs - this.state.itemsCounter < 12) {
        this.setState({
          isHide: true,
        });
      }
    }, 0);
  };

  toggleImg = () => {
    this.setState(({ showImg }) => ({
      showImg: !showImg,
    }));
  };

  render() {
    const { loading, response, targetImg, isHide, showImg } = this.state;
    const { onOpenModalClick, showModal } = this.props;

    return (
      <Container>
        {response &&
          response.map(img => (
            <ImageGalleryItem
              id={img.id}
              webformatURL={img.webformatURL}
              onClick={() => this.onImageClick(img.largeImageURL)}
            />
          ))}

        <Button onClick={this.onLoadMoreClick} isHide={isHide}>
          Завантажити ще...
        </Button>

        {showModal && (
          <Modal
            onClose={onOpenModalClick}
            showImg={showImg}
            resetImg={this.toggleImg}
          >
            <GalleryImage src={targetImg} onLoad={this.toggleImg} />
          </Modal>
        )}

        {loading && <Loader />}
      </Container>
    );
  }
}
