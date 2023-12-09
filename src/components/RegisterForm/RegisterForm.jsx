import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { registerSchema } from 'services/validation/validationRegisterSchema';
import { usePasswordToggle } from 'hooks/usePasswordToggle';
import { signUpThunk } from 'redux/auth/authOperations';

import { Button } from 'components/Button/Button';
import { FormError } from 'components/FormError/FormError';
import { Logo } from 'components/Logo/Logo';
import { IndicatorPasswordStrenghtatyled } from 'components/IndicatorPasswordStrenght/IndicatorPasswordStrenght';
import { TogglePasswordIcon } from 'components/TogglePasswordVisibility/TogglePasswordVisibility';
import { ConfirmPasswordIndicator } from 'components/ConfirmPasswordIndicator/ConfirmPasswordIndicator';

import { LinkStyled, NameRegisterIcon } from './RegisterForm.styled';
import {
  EmailIcon,
  FieldStyled,
  FormStyled,
  PasswordlIcon,
  WrapperButton,
  WrapperField,
  WrapperForm,
  WrapperIcon,
  WrapperIcon2,
  WrapperIcon3,
} from 'components/LoginForm/LoginForm.styled';
import { toast } from 'react-toastify';

export const RegisterForm = () => {
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle([
    'password1',
    'password2',
  ]);

  const dispatch = useDispatch();

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (value, { resetForm }) => {
    const { username, email, password } = value;
    dispatch(signUpThunk({ username, email, password }))
      .unwrap()
      .then(data => {
        resetForm();
        toast.success(
          `${data.user.username}, thanks for signing up. Welcome to Money Guard! We are happy to have you on board.`
        );
      })
      .catch(error => {
        toast.error(error.message);
      });
    resetForm();
  };

  return (
    <WrapperForm>
      <Logo />
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <FormStyled autoComplete="off">
            <WrapperField>
              <WrapperIcon>
                <FieldStyled
                  type="text"
                  name="username"
                  placeholder="First name"
                  autoComplete="off"
                  required
                />
                <NameRegisterIcon />
              </WrapperIcon>
              <FormError name="username" touched={touched} errors={errors} />
              <WrapperIcon>
                <FieldStyled
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                />
                <EmailIcon />
              </WrapperIcon>
              <FormError name="email" touched={touched} errors={errors} />

              <WrapperIcon3>
                <WrapperIcon2>
                  <FieldStyled
                    type={showPasswords.password1 ? 'text' : 'password'}
                    name="password"
                    title="Enter the password more difficult, letter, digit, capital letter."
                    placeholder="Password"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  <PasswordlIcon />
                </WrapperIcon2>
                <TogglePasswordIcon
                  showPassword={showPasswords.password1}
                  onToggle={() => togglePasswordVisibility('password1')}
                />
              </WrapperIcon3>
              <IndicatorPasswordStrenghtatyled values={values} />
              <FormError name="password" touched={touched} errors={errors} />

              <WrapperIcon3>
                <WrapperIcon2>
                  <FieldStyled
                    type={showPasswords.password2 ? 'text' : 'password'}
                    name="confirmPassword"
                    title="Enter the password more difficult, letter, digit, capital letter."
                    placeholder="Confirm Password"
                    autoComplete="off"
                    required
                  />
                  <PasswordlIcon />
                </WrapperIcon2>
                <TogglePasswordIcon
                  showPassword={showPasswords.password2}
                  onToggle={() => togglePasswordVisibility('password2')}
                />
              </WrapperIcon3>
              <ConfirmPasswordIndicator
                values={values}
                passwordsMatch={
                  values.password === values.confirmPassword &&
                  values.confirmPassword !== ''
                }
              />
              <FormError name="confirmPassword" />
            </WrapperField>
            <WrapperButton>
              <Button type="submit" text="register" />
              <LinkStyled to="/login">Log in</LinkStyled>
            </WrapperButton>
          </FormStyled>
        )}
      </Formik>
    </WrapperForm>
  );
};
