import styled from '@emotion/styled';

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  width: 700px;
  padding: 20px;
  margin-top: 20px;

  border: 2px solid #f2ab26;
  border-radius: 20px;
`;

const GalleryImage = styled.img`
  width: 100%;
  border-radius: 20px;
`;

export { Container, GalleryImage };
