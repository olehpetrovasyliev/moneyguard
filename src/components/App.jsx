import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ProtectedRoute } from 'routes/ProtectedRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { fetchCurrentUserThunk } from 'redux/auth/authOperations';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyle } from 'services/styles/GlobalStyle';
import LoadingPage from 'pages/LoadingPage/LoadingPage';

const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SummaryPage = lazy(() => import('pages/SummaryPage/SummaryPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const CurrencyPage = lazy(() => import('pages/CurrencyPage/CurrencyPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              path="/login"
              element={
                <PublicRoute
                  component={<LoginPage />}
                  restricted
                  redirectTo="/"
                />
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute
                  component={<RegisterPage />}
                  restricted
                  redirectTo="/"
                />
              }
            />
            <Route
              element={
                <ProtectedRoute
                  component={<DashboardPage />}
                  redirectTo="/login"
                />
              }
            >
              <Route
                index
                element={
                  <ProtectedRoute
                    component={<HomePage />}
                    redirectTo="/login"
                  />
                }
              />
              <Route
                path="statistic"
                element={
                  <ProtectedRoute
                    component={<SummaryPage />}
                    redirectTo="/login"
                  />
                }
              />

              <Route
                path="currency"
                element={
                  <ProtectedRoute
                    component={
                      isMobile ? <CurrencyPage /> : <Navigate to="/" />
                    }
                    redirectTo="/login"
                  />
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      <GlobalStyle />
    </>
  );
};
