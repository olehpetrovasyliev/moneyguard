import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSummaryThunk } from 'redux/transaction/transactionOperations';
import { selectTransactions } from 'redux/transaction/transactionSelectors';
import { getMonthAndYear } from 'services/getDateNow';
import {
  BalanceIcon,
  ContainerStyled,
  SpanStyled,
  TextStyled,
  TitleStyled,
} from './Balance.styled';

export const Balance = () => {
  const dispatch = useDispatch();
  const date = useRef(getMonthAndYear());
  const transaction = useSelector(selectTransactions);
  const [currentTotalBalance, setcurrentTotalBalance] = useState(0);

  useEffect(() => {
    dispatch(getSummaryThunk(date)).then(data =>
      setcurrentTotalBalance(data.payload.periodTotal)
    );
  }, [dispatch, transaction]);

  return (
    <ContainerStyled>
      <TitleStyled>Your balance</TitleStyled>
      <TextStyled>
        <BalanceIcon />
        <SpanStyled total={currentTotalBalance}>
          {Number(currentTotalBalance).toFixed(2)}
        </SpanStyled>
      </TextStyled>
    </ContainerStyled>
  );
};
