import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 800px;
  padding: 20px;
  margin-top: 20px;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;
`;

export { Container, GalleryContainer };
