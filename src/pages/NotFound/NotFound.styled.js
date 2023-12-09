import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      300deg,
      rgba(109, 84, 235, 0.73) 3.47%,
      rgba(101, 35, 146, 0.73) 90.06%
    ),
    linear-gradient(230deg, #6d54eb 3.47%, #652392 90.06%);
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};

  max-width: 320px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(4)};

  text-align: center;
  color: #ffffff;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const NotFoundTitle = styled.h1`
  font-size: ${({ theme }) => theme.spacing(20)};
  color: ${({ theme }) => theme.colors.yellow};

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(25)};
  }

  @media only screen and (min-width: 1280px) {
    font-size: ${({ theme }) => theme.spacing(30)};
  }
`;

export const NotFoundLink = styled(Link)`
  padding: 8px 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  color: #ffffff;

  background: ${({ theme }) => theme.colors.btnGradient};
  border-radius: ${({ theme }) => theme.spacing(5)};

  transition: scale ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    scale: 1.08;
  }
`;
