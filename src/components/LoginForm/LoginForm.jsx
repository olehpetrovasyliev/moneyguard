import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { loginSchema } from 'services/validation/validationLoginSchema';
import { usePasswordToggle } from 'hooks/usePasswordToggle';
import { logInThunk } from 'redux/auth/authOperations';

import { Button } from 'components/Button/Button';
import { Logo } from 'components/Logo/Logo';
import { FormError } from 'components/FormError/FormError';
import { TogglePasswordIcon } from 'components/TogglePasswordVisibility/TogglePasswordVisibility';

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
} from './LoginForm.styled';

export const LoginForm = () => {
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle(['password1', 'password2']);
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (value, { resetForm }) => {
    dispatch(logInThunk(value))
      .unwrap()
      .then(data => {
        resetForm();
        toast.success(`Well done  ${data.user.username}! You have signed in successfully.`);
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <WrapperForm>
      <Logo />
      <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
        <FormStyled>
          <WrapperField>
            <WrapperIcon>
              <FieldStyled
                type="email"
                name="email"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="E-mail"
                autoComplete="off"
                required
              />
              <EmailIcon />
            </WrapperIcon>
            <FormError name="email" />
            <WrapperIcon3>
              <WrapperIcon2>
                <FieldStyled
                  type={showPasswords.password1 ? 'text' : 'password'}
                  name="password"
                  title="Enter the password more difficult, letter, digit, capital letter."
                  placeholder="Password"
                  autoComplete="off"
                  required
                />
                <PasswordlIcon />
              </WrapperIcon2>
              <TogglePasswordIcon
                showPassword={showPasswords.password1}
                onToggle={() => togglePasswordVisibility('password1')}
              />
            </WrapperIcon3>
            <FormError name="password" />
          </WrapperField>
          <WrapperButton>
            <Button type="submit" text="log in" />
            <Link to="/register">
              <Button text="register" variant="secondary" />
            </Link>
          </WrapperButton>
        </FormStyled>
      </Formik>
    </WrapperForm>
  );
};
