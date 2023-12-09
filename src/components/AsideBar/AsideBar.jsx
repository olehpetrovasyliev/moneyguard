import { useMediaQuery } from 'react-responsive';
import { Navigation } from 'components/Navigation/Navigation';
import { StyledAside, StyledWrapper } from './AsideBar.styled';
import { Currency } from 'components/Currency/Currency';
import { Balance } from 'components/Balance/Balance';

export const AsideBar = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <StyledAside>
      <StyledWrapper>
        <Navigation />
        {isTablet && <Balance />}
      </StyledWrapper>
      {isTablet && <Currency />}
    </StyledAside>
  );
};
