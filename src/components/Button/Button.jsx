import { LoadMoreBtn } from './Button.styled';

const Button = ({ onClick, isHide }) => (
  <LoadMoreBtn onClick={onClick} hidden={isHide}></LoadMoreBtn>
);

export default Button;
