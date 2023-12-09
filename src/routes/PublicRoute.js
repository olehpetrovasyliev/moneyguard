import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const PublicRoute = ({
  component: Component,
  redirectTo = '/',
  restricted = false,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? (
    <Navigate to={location?.state?.from ?? redirectTo} />
  ) : (
    Component
  );
};
