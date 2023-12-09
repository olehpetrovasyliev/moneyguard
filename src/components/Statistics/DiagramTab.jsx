import { useEffect, useRef } from 'react';
import { Chart } from './Chart/Chart';
import { Selects } from './Selects/Selects';
import {
  StyledTitle,
  StyledWrapperLeft,
  StyledWrapperRight,
  Wrapper,
} from './DiagramTab.styled';
import { Table } from './Table/Table';
import { getSummaryThunk } from 'redux/transaction/transactionOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesSummary } from 'redux/transaction/transactionSelectors';
import { color } from 'services/randomColor/randomColor';
import { getMonthAndYear } from 'services/getDateNow';

export const DiagramTab = () => {
  const categorySummary = useSelector(selectCategoriesSummary);

  const date = useRef(getMonthAndYear());
  const dispatch = useDispatch();
  const colors = color();

  const getSelectData = value => {
    dispatch(getSummaryThunk({ ...date.current, ...value }));
  };

  useEffect(() => {
    dispatch(getSummaryThunk(date));
  }, [dispatch]);

  return (
    <>
      <StyledTitle>Statistics</StyledTitle>
      <Wrapper>
        <StyledWrapperLeft>
          <Chart resp={categorySummary} colorStyle={colors} />
        </StyledWrapperLeft>
        <StyledWrapperRight>
          <Selects onChange={getSelectData} />
          <Table data={categorySummary} colorStyle={colors} />
        </StyledWrapperRight>
      </Wrapper>
    </>
  );
};
