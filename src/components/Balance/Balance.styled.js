import styled from 'styled-components';
import { LiaHryvniaSolid } from 'react-icons/lia';

export const ContainerStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  max-width: 280px;
  padding: 8px 32px 12px 32px;
  margin-bottom: 32px;

  background: rgba(82, 59, 126, 0.6);
  border-radius: 8px;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);

  @media screen and (min-width: 768px) {
    padding: 8px 40px 12px 40px;
    max-width: 100%;
    height: 80px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    min-width: 100%;
    border-radius: 0;
  }
`;

export const TitleStyled = styled.h3`
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
`;

export const TextStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const SpanStyled = styled.span`
  font-size: 30px;
  font-weight: 700;
  line-height: normal;
  color: ${({ total }) => (total < 0 ? '#FF868D' : '#98FB98')};
`;

export const BalanceIcon = styled(LiaHryvniaSolid)`
  width: 30px;
  height: 30px;
`;
