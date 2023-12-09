import { useMediaQuery } from 'react-responsive';
import { Balance } from 'components/Balance/Balance';
import { RoundButton } from 'components/RoundButton/RoundButton';
import Transactions from 'components/Transactions/Transactions';
import { HomePageWrapper } from './HomePage.styled';

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <HomePageWrapper>
      {isMobile && <Balance />}
      <Transactions />
      <RoundButton />
    </HomePageWrapper>
  );
};

export default HomePage;
