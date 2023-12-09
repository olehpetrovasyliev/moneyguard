import React from 'react';
import { PlusBtn, RoundedWrap } from './RondButton.styled';
import { openModalAddTransaction } from 'redux/global/globalSlice';
import { useDispatch } from 'react-redux';

export const RoundButton = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModalAddTransaction());
  };
  return (
    <RoundedWrap onClick={handleOpenModal}>
      <PlusBtn />
    </RoundedWrap>
  );
};
