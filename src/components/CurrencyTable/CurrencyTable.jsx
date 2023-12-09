import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectCurrencyData } from 'redux/currency/currencySelectors';
import { CurrencyTableBody, CurrencyTableStyled } from './CurrencyTable.styled';
import { nanoid } from '@reduxjs/toolkit';

const CurrencyTable = ({ data = [] }) => {
  const { loading, error } = useSelector(selectCurrencyData);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredRates = data.filter(rate => {
    return (
      (rate.currencyCodeA === 840 && rate.currencyCodeB !== 978) ||
      (rate.currencyCodeA === 978 && rate.currencyCodeB !== 840)
    );
  });

  return (
    <CurrencyTableStyled>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Purchase</th>
          <th>Sale</th>
        </tr>
      </thead>
      <CurrencyTableBody>
        {filteredRates.map(rate => (
          <tr key={nanoid()}>
            <td>{rate.currencyCodeA === 840 ? 'USD' : 'EUR'}</td>
            <td>{rate.rateBuy.toFixed(2)}</td>
            <td>{rate.rateSell.toFixed(2)}</td>
          </tr>
        ))}
      </CurrencyTableBody>
    </CurrencyTableStyled>
  );
};

CurrencyTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CurrencyTable;
