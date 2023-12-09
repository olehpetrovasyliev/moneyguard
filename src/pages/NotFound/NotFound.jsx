import {
  NotFoundContainer,
  NotFoundLink,
  NotFoundTitle,
  NotFoundWrapper,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundWrapper>
        <NotFoundTitle>Oops!</NotFoundTitle>
        <h2>PAGE NOT FOUND</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <NotFoundLink to="/">GO TO HOMEPAGE</NotFoundLink>
      </NotFoundWrapper>
    </NotFoundContainer>
  );
};

export default NotFound;
