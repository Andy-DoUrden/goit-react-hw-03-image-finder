import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './App.styled';
import ImageGallery from 'components/ImageGallery';
import Searchbar from 'components/Searchbar';

export default class App extends Component {
  state = {
    searchValue: '',
    showModal: false,
  };

  handleSearchSubmit = searchValue => {
    this.setState({ searchValue });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { searchValue } = this.state;

    return (
      <Container>
        <ToastContainer autoClose={3000} theme={'dark'} />
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery
          searchValue={searchValue}
          onOpenModalClick={this.toggleModal}
          showModal={this.state.showModal}
        />
      </Container>
    );
  }
}
