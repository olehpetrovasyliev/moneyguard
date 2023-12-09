import { IoExitOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 12px 20px;
  margin-bottom: 12px;
  align-items: center;
  background: linear-gradient(276deg, #2e1746 3.19%, #2e225f 100%);

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 16px 32px;
  }
`;

export const ExitContainer = styled.div`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
`;

export const ExitBtn = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  &:hover,
  &:focus {
    & svg {
      color: #ffb627;
    }
    & span {
      color: #ff868d;
    }
  }
`;

export const ExitText = styled.span`
  transition: color ${({ theme }) => theme.transitions.regular};
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const NameWrap = styled.span`
  margin-right: 12px;

  @media screen and (max-width: 500px) {
    margin-right: 8px;
  }
`;

export const SvgStick = styled.svg`
  width: 2px;
  height: 30px;
  fill: none;
  margin-right: 12px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const ExitIcon = styled(IoExitOutline)`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  transition: color ${({ theme }) => theme.transitions.regular};
  @media screen and (max-width: 500px) {
    margin-right: 0;
  }
`;

export const ExitWrap = styled.div`
  display: flex;
  align-items: center;
`;
