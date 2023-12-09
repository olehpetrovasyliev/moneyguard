import CurrencyTable from 'components/CurrencyTable/CurrencyTable';
import { CurrencyWrapper } from './Currency.styled';
import { CurrencyChart } from 'components/CurrencyChart/CurrencyChart';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrencyData } from 'redux/currency/currencySelectors';
import { useEffect } from 'react';
import { fetchCurrencyRatesAsync } from 'redux/currency/currencyOperations';

export const Currency = () => {
  const dispatch = useDispatch();
  const { rates } = useSelector(selectCurrencyData);

  useEffect(() => {
    dispatch(fetchCurrencyRatesAsync());
  }, [dispatch]);

  return (
    <CurrencyWrapper>
      <CurrencyTable data={rates} />
      <CurrencyChart currentRates={rates} />
    </CurrencyWrapper>
  );
};
