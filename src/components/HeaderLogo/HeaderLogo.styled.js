import styled from 'styled-components';

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:focus img,
  &:hover img {
    transform: scale(1.02);
  }

  &:focus h2,
  &:hover h2 {
    transform: scale(1.02);
  }
`;

export const TitleLogo = styled.h2`
  color: ${({ theme }) => theme.colors.primaryFont};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1.2px;
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitions.regular};
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`;

export const LogoHeader = styled.img`
  width: 18px;
  height: 18px;
  margin-bottom: 3px;
  transition: transform ${({ theme }) => theme.transitions.regular};
  outline: none;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-bottom: 5px;
  }
`;
