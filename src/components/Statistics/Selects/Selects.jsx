import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { CustomSelect } from 'components/CustomSelect/CustomSelect';
import { StyledSelectWrapper } from './Selects.styled';
import { getMonthAndYear } from 'services/getDateNow';

const months = [
  { value: 'January', label: 'January' },
  { value: 'February', label: 'February' },
  { value: 'March', label: 'March' },
  { value: 'April', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'June', label: 'June' },
  { value: 'July', label: 'July' },
  { value: 'August', label: 'August' },
  { value: 'September', label: 'September' },
  { value: 'October', label: 'October' },
  { value: 'November', label: 'November' },
  { value: 'December', label: 'December' },
];

export const Selects = ({ onChange }) => {
  const [years, setYears] = useState([]);
  const [data] = useState(getMonthAndYear());
  const { month, year } = data;
  const [selectMonth, setSelectMonth] = useState(month);
  const [selectYear, setSelectYear] = useState(year);

  const monthObject = months[+month - 1];
  const yearObject = {
    value: year,
    label: year,
  };

  useEffect(() => {
    for (let i = year; i > 2019; i -= 1) {
      setYears(prev => [
        ...prev,
        {
          value: i,
          label: i,
        },
      ]);
    }
  }, [year]);

  const handleChangeMonth = month => {
    const dataMonth = new Date(`${month.value} 1`).getMonth() + 1;
    setSelectMonth(dataMonth);
    onChange({
      month: dataMonth,
      year: selectYear,
    });
  };
  const handleChangeYear = year => {
    const dataYear = Number(year.value);
    setSelectYear(dataYear);
    onChange({
      month: selectMonth,
      year: dataYear,
    });
  };

  return (
    <StyledSelectWrapper>
      <CustomSelect
        defValue={monthObject}
        options={months}
        nameOfSelect={'month'}
        onChange={handleChangeMonth}
      />
      <CustomSelect
        defValue={yearObject}
        options={years}
        nameOfSelect={'year'}
        onChange={handleChangeYear}
      />
    </StyledSelectWrapper>
  );
};

Selects.propTypes = {
  onChange: PropTypes.func.isRequired,
};
