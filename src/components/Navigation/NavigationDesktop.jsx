import React from 'react';
import {
  ContainerStyledDesktop,
  ContainerStyledIconDesktop,
  HomeIcon,
  ItemStyledDesktop,
  MenuStyledDesktop,
  NavLinkStyledDesktop,
  SpanStyled,
  StatisticsIcon,
} from './Navigation.styled';

export const NavigationDesktop = () => {
  return (
    <ContainerStyledDesktop>
      <nav>
        <MenuStyledDesktop>
          <ItemStyledDesktop>
            <NavLinkStyledDesktop to="/">
              <ContainerStyledIconDesktop>
                <HomeIcon />
              </ContainerStyledIconDesktop>
              <SpanStyled>Home</SpanStyled>
            </NavLinkStyledDesktop>
          </ItemStyledDesktop>
          <ItemStyledDesktop>
            <NavLinkStyledDesktop to="/statistic">
              <ContainerStyledIconDesktop>
                <StatisticsIcon />
              </ContainerStyledIconDesktop>
              <SpanStyled>Statistics</SpanStyled>
            </NavLinkStyledDesktop>
          </ItemStyledDesktop>
        </MenuStyledDesktop>
      </nav>
    </ContainerStyledDesktop>
  );
};
