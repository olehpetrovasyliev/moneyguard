import React from 'react';
import {
  ContainerStyledMobile,
  CurrencyIcon,
  HomeIcon,
  MenuStyledMobile,
  NavLinkStyledMobile,
  StatisticsIcon,
} from './Navigation.styled';

export const NavigationMobile = () => {
  return (
    <ContainerStyledMobile>
      <nav>
        <MenuStyledMobile>
          <li>
            <NavLinkStyledMobile to="/">
              <HomeIcon />
            </NavLinkStyledMobile>
          </li>
          <li>
            <NavLinkStyledMobile to="/statistic">
              <StatisticsIcon />
            </NavLinkStyledMobile>
          </li>
          <li>
            <NavLinkStyledMobile to="/currency">
              <CurrencyIcon />
            </NavLinkStyledMobile>
          </li>
        </MenuStyledMobile>
      </nav>
    </ContainerStyledMobile>
  );
};
