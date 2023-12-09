import { BiStats } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerStyledMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export const ContainerStyledDesktop = styled.div`
  /* width: 100%;
  margin-top: 40px;
  margin-left: 32px; */

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
  }
`;

export const ContainerStyledIconDesktop = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-right: 20px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const NavLinkStyledMobile = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 8px;

  transition: ${({ theme }) => theme.transitions.color};

  &.active,
  &:focus,
  &:hover {
    fill: ${({ theme }) => theme.colors.primaryFont};
    background-color: ${({ theme }) => theme.colors.blue};
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    transform: scale(1.03);
  }

  &.active svg,
  &:focus svg,
  &:hover svg {
    fill: ${({ theme }) => theme.colors.primaryFont};
  }
`;

export const NavLinkStyledDesktop = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: left;

  transition: ${({ theme }) => theme.transitions.color};

  &.active svg,
  &:focus svg,
  &:hover svg {
    fill: ${({ theme }) => theme.colors.primaryFont};
  }
  &.active div,
  &:focus div,
  &:hover div {
    background-color: ${({ theme }) => theme.colors.blue};
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }

  &.active span,
  &:focus span,
  &:hover span {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const ItemStyledDesktop = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const MenuStyledMobile = styled.ul`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 32px;
`;

export const MenuStyledDesktop = styled.ul`
  max-width: 200px;
`;

export const SpanStyled = styled.span``;

export const HomeIcon = styled(IoMdHome)`
  fill: rgba(255, 255, 255, 0.3);
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const StatisticsIcon = styled(BiStats)`
  fill: rgba(255, 255, 255, 0.3);
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const CurrencyIcon = styled(FaDollarSign)`
  fill: rgba(255, 255, 255, 0.3);
  width: 28px;
  height: 28px;
`;
