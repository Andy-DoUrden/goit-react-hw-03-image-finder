import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();

      this.props.resetImg();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();

      this.props.resetImg();
    }
  };

  render() {
    const { showImg } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContainer showImg={showImg}>{this.props.children}</ModalContainer>
      </Backdrop>,
      modalRoot
    );
  }
}
