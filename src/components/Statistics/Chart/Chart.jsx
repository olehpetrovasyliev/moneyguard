import PropTypes from 'prop-types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper, HrvnIcon, StyledSpan } from './Chart.styled';
import { useCategoriesType } from 'hooks/categoriesFilter';
import { useSelector } from 'react-redux';
import { selectPeriodTotal } from 'redux/transaction/transactionSelectors';
import { FcDonate } from 'react-icons/fc';

export const Chart = ({ colorStyle, resp }) => {
  const [expenseCategories] = useCategoriesType(resp);
  const periodTotal = useSelector(selectPeriodTotal);
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: [],
    datasets: [
      {
        data: !expenseCategories.length
          ? [1]
          : expenseCategories.map(item => item.total),
        backgroundColor: colorStyle,
        borderColor: colorStyle,
        borderWidth: 1,
        borderJoinStyle: 'round',
        borderAlign: 'inner',
      },
    ],
  };
  const options = {
    cutout: '75%',
  };
  return (
    <ChartWrapper>
      {Number(periodTotal) === 0 ? (
        <FcDonate style={{ width: '100%', height: '100%' }} />
      ) : (
        <>
          <StyledSpan>
            <HrvnIcon />
            {Number(periodTotal).toFixed(2)}
          </StyledSpan>
          <Doughnut data={data} options={options} />
        </>
      )}
    </ChartWrapper>
  );
};

Chart.propTypes = {
  colorStyle: PropTypes.arrayOf(PropTypes.string).isRequired,
  resp: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['INCOME', 'EXPENSE']).isRequired,
      total: PropTypes.number.isRequired,
    })
  ).isRequired,
};
