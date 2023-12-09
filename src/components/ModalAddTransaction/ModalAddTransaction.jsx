import { Button } from 'components/Button/Button';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAddTransaction } from 'redux/global/globalSlice';
import {
  addTransactionThunk,
  getTransactionsCategoriesThunk,
} from 'redux/transaction/transactionOperations';
import { selectCategories } from 'redux/transaction/transactionSelectors';
import {
  ButtonWrapper,
  ExpenseSpan,
  IncomeSpan,
  InputWrapper,
  MinusButton,
  ModalAddWrapper,
  ModalTransactionTitle,
  PlusButton,
  RadioWrapper,
  RadioWrapperChoose,
  RoundedButton,
  StyledField,
  StyledForm,
  StyledLabelWrapper,
} from './ModalAddTransaction.styled';
import { useCategoriesType } from 'hooks/categoriesFilter';
import { transactionsSchema } from 'services/validation/validationTransactions';
import { FormError } from 'components/FormError/FormError';
import { toast } from 'react-toastify';

export const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('Car');
  const [selectedType, setSelectedType] = useState(false);

  useEffect(() => {
    dispatch(getTransactionsCategoriesThunk());
  }, [dispatch]);

  const allCategories = useSelector(selectCategories);
  const [expenseCategories, incomeCategories] =
    useCategoriesType(allCategories);

  const initialValues = {
    transactionDate: new Date().toISOString().slice(0, 10),
    type: selectedType ? 'INCOME' : 'EXPENSE',
    categoryId: '',
    comment: '',
    amount: '',
  };
  const handleSubmit = (value, { resetForm }) => {
    const defCategoryId = 'c9d9e447-1b83-4238-8712-edc77b18b739';
    const newData = {
      ...value,
      type: selectedType ? 'INCOME' : 'EXPENSE',
      amount: `${
        !selectedType ? Number(value.amount) * -1 : Number(value.amount)
      }`,
      categoryId: `${
        !selectedType
          ? selectedOption?.id ?? defCategoryId
          : incomeCategories[0].id
      }`,
    };
    dispatch(addTransactionThunk(newData))
      .unwrap()
      .then(data =>
        toast.success(
          `${
            data.type.charAt(0) + data.type.slice(1).toLowerCase()
          } transaction added to your list.`
        )
      )
      .catch(error => toast.error('Something went wrong, please try again!'));
  };

  const handleChangeSelect = item => {
    setSelectedOption(item);
  };
  const selectOptionsData = expenseCategories.map(item => ({
    id: item.id,
    value: item.name,
    label: item.name,
  }));

  const changeTypeOfTransaction = () => {
    setSelectedType(prev => !prev);
  };
  return (
    <ModalAddWrapper>
      <ModalTransactionTitle>Add transaction</ModalTransactionTitle>
      <Formik
        validationSchema={transactionsSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <StyledForm>
          {/* ========================= Radio Buttons ========================= */}
          <RadioWrapperChoose>
            <IncomeSpan isSelected={selectedType}>Income</IncomeSpan>
            <RadioWrapper onClick={changeTypeOfTransaction}>
              <StyledLabelWrapper>
                <RoundedButton type={selectedType.toString()}>
                  {selectedType ? <PlusButton /> : <MinusButton />}
                </RoundedButton>
              </StyledLabelWrapper>
            </RadioWrapper>
            <ExpenseSpan isSelected={!selectedType}>Expense</ExpenseSpan>
          </RadioWrapperChoose>

          {/* ========================= SELECT ========================= */}
          {!selectedType && (
            <CustomSelect
              options={selectOptionsData}
              nameOfSelect="category"
              onChange={handleChangeSelect}
            />
          )}

          {/* ========================= INPUTS ========================= */}
          <InputWrapper>
            <StyledField
              type="number"
              name="amount"
              placeholder="0.00"
              weight="600"
              required
              autoComplete="off"
              autoFocus={true}
            />
            <StyledField
              autoComplete="off"
              type="date"
              name="transactionDate"
            />
          </InputWrapper>
          <StyledField
            autoComplete="off"
            type="text"
            name="comment"
            placeholder="Comment"
          />

          {/* ========================= BUTTONS ========================= */}
          <ButtonWrapper>
            <FormError name="amount" />
            <Button text="ADD" type="submit" />
            <Button
              name="cancel"
              text="CANCEL"
              variant="secondary"
              onClick={() => dispatch(closeModalAddTransaction())}
            />
          </ButtonWrapper>
        </StyledForm>
      </Formik>
    </ModalAddWrapper>
  );
};
