import styled from 'styled-components';

export const ModalWrapper = styled.div``;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(10)};
  flex-wrap: wrap;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 50px;
  margin-top: 70px;
  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
`;

export const CloseBtn = styled.button``;
