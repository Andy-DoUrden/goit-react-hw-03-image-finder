import styled from '@emotion/styled';

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1);
  padding: 15px;
`;

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 600px;
  max-height: 80%;
  background: #332b00;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: 2px solid #f2ab26;
  padding: 20px;
  overflow-y: auto;

  color: #f2ab26;
  font-size: 20px;

  transition: 300ms;
  opacity: ${props => {
    if (props.showImg) {
      return 1;
    }
    return 0;
  }};
`;

export { Backdrop, ModalContainer };
