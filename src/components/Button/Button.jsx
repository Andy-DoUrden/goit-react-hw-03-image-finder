import { LoadMoreBtn } from './Button.styled';

const Button = ({ onClick, isHide }) => (
  <LoadMoreBtn onClick={onClick} hidden={isHide}>
    Завантажити ще...
  </LoadMoreBtn>
);

export default Button;
