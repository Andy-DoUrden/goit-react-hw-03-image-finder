import styled from '@emotion/styled';

const LoadMoreBtn = styled.button`
  width: 280px;
  height: 60px;

  background-color: #332b00;
  border-radius: 16px;
  outline: none;
  border: 2px solid#f2ab26;
  color: #f2ab26;

  font-size: 20px;

  cursor: pointer;
  transition: 300ms;

  :hover {
    background-color: #002b00;
    border: 2px solid #00f90f;
    color: #00f90f;
  }
`;

export { LoadMoreBtn };
