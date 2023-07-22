import styled from '@emotion/styled';

const GalleryItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 150px;

  border: 2px solid #f2ab26;
  border-radius: 20px;
  overflow: hidden;

  transition: 300ms;

  :hover {
    border-color: #00f90f;
    scale: 1.05;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  border-radius: 20px;
`;

export { GalleryItem, GalleryImage };
