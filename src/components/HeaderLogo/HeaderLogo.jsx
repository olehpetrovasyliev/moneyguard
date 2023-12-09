import React from 'react';
import moneyGuardLogo from 'assets/images/moneyGuardLogo.svg';
import { LogoHeader, TitleLogo, WrapperLogo } from './HeaderLogo.styled';
export const HeaderLogo = () => {
  return (
    <WrapperLogo>
      <LogoHeader src={moneyGuardLogo} alt="MoneyGuard Logo" />
      <TitleLogo>Money Guard</TitleLogo>
    </WrapperLogo>
  );
};
