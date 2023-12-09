import PropTypes from 'prop-types';
import { Triangle } from 'react-loader-spinner';

export const BigLoader = ({ styles = {} }) => {
  return (
    <Triangle
      height="200"
      width="200"
      color="#FFB627"
      ariaLabel="triangle-loading"
      wrapperStyle={{ ...styles }}
      wrapperClassName={'Loader'}
      visible={true}
    />
  );
};

BigLoader.propTypes = {
  styles: PropTypes.object,
};
