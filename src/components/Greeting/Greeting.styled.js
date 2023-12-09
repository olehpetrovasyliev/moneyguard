import { FcMoneyTransfer } from 'react-icons/fc';
import styled from 'styled-components';

export const GreetingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 20px;
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    padding: 30px 50px;
    max-width: 800px;
  }
`;

export const WalletIcon = styled(FcMoneyTransfer)`
  width: 250px;
  height: 250px;
  fill: ${({ theme }) => theme.colors.pink};

  @media screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (min-width: 1280px) {
    width: 350px;
    height: 350px;
  }
`;

export const GreetingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 370px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 700px;
  }
`;

export const GreetingTitle = styled.h1`
  font-size: 40px;
  color: #00ff5fd6;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const GreetingText = styled.p`
  font-size: 25px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
  }
`;
