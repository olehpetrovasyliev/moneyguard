import { useMediaQuery } from 'react-responsive';
import {
  GreetingText,
  GreetingTextWrapper,
  GreetingTitle,
  GreetingWrapper,
  WalletIcon,
} from './Greeting.styled';

export const Greeting = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <>
      <GreetingWrapper>
        <WalletIcon />
        <GreetingTextWrapper>
          <GreetingTitle>Welcome to Money Guard!</GreetingTitle>
          {isMobile || isDesktop ? (
            <GreetingText>
              There is no transaction history yet. To add your first
              transaction, click the button in the lower right corner.
            </GreetingText>
          ) : null}
        </GreetingTextWrapper>
      </GreetingWrapper>
      {isTablet && (
        <GreetingText>
          There is no transaction history yet. To add your first transaction,
          click the button in the lower right corner.
        </GreetingText>
      )}
    </>
  );
};
