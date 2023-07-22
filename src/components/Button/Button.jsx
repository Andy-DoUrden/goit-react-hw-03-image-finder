import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

const Button = ({ onClick, isHide }) => (
  <LoadMoreBtn onClick={onClick} hidden={isHide}>
    Завантажити ще...
  </LoadMoreBtn>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  isHide: PropTypes.bool,
};
