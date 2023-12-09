import PropTypes from 'prop-types';
import { usePasswordStrength } from 'hooks/usePasswordStrength';
import { PasswordStrengthIndicator, PasswordStrengthText } from './IndicatorPasswordStrenghtatyled';

export const IndicatorPasswordStrenghtatyled = ({ values }) => {
  const { getPasswordStrengthWidth, getPasswordStrengthColor, getPasswordStrengthText } =
    usePasswordStrength();

  return (
    <>
      <PasswordStrengthIndicator
        width={getPasswordStrengthWidth(values.password)}
        color={getPasswordStrengthColor(values.password)}
      />
      <PasswordStrengthText color={getPasswordStrengthColor(values.password)}>
        {getPasswordStrengthText(values.password)}
      </PasswordStrengthText>
    </>
  );
};

IndicatorPasswordStrenghtatyled.propTypes = {
  values: PropTypes.shape({
    password: PropTypes.string,
  }).isRequired,
};
