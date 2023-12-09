import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavigationMobile } from './NavigationMobile';
import { NavigationDesktop } from './NavigationDesktop';

export const Navigation = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return <>{isTablet ? <NavigationDesktop /> : <NavigationMobile />}</>;
};
