import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import {
  Backdrop,
  ExitModalBtn,
  IconCloseModal,
  ModalStyled,
} from './Modal.styled';
import { useEffect } from 'react';
const modalContainer = document.getElementById('modal');

export const Modal = ({ children, closeReducer }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onCloseModalESC = e => {
      if (e.code === 'Escape') {
        dispatch(closeReducer());
      }
    };
    window.addEventListener('keydown', onCloseModalESC);
    return () => {
      window.removeEventListener('keydown', onCloseModalESC);
    };
  }, [closeReducer, dispatch]);
  const onCloseModal = e => {
    if (e.currentTarget === e.target) {
      dispatch(closeReducer());
    }
  };

  const handleCloseModal = () => {
    dispatch(closeReducer());
  };

  return createPortal(
    <Backdrop onClick={onCloseModal}>
      <ModalStyled>
        <IconCloseModal onClick={handleCloseModal}>
          <ExitModalBtn />
        </IconCloseModal>
        {children}
      </ModalStyled>
    </Backdrop>,
    modalContainer
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeReducer: PropTypes.func.isRequired
};
