import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Header } from 'components/Header/Header';
import { Modal } from 'components/Modal/Modal';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import {
  selectIsModalAddTransactionOpen,
  selectIsModalEditTransactionOpen,
} from 'redux/global/globalSelectors';
import {
  closeModalAddTransaction,
  closeModalEditTransaction,
} from 'redux/global/globalSlice';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { AsideBar } from 'components/AsideBar/AsideBar';
import { EditTransactions } from 'components/EditTransactions/EditTransactions';
import { StyledMain } from './DashboardPage.styled';
import { BigLoader } from 'components/Loaders/BigLoader';
import {
  desktopLoaderStyles,
  loaderStyles,
} from 'components/Loaders/loaderStyles';

const DashboardPage = () => {
  const isModalAddOpen = useSelector(selectIsModalAddTransactionOpen);
  const isModalEditOpen = useSelector(selectIsModalEditTransactionOpen);
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <>
      <Header />
      <Container>
        <AsideBar />
        <StyledMain>
          <Suspense
            fallback={
              <BigLoader
                styles={isDesktop ? desktopLoaderStyles : loaderStyles}
              />
            }
          >
            <Outlet />
          </Suspense>
          {isModalAddOpen && (
            <Modal closeReducer={closeModalAddTransaction}>
              <ModalAddTransaction />
            </Modal>
          )}
          {isModalEditOpen && (
            <Modal closeReducer={closeModalEditTransaction}>
              <EditTransactions />
            </Modal>
          )}
        </StyledMain>
      </Container>
    </>
  );
};

export default DashboardPage;
