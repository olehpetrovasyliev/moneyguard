import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonWrapper,
  InputWrapper,
  ModalAddWrapper,
  ModalTransactionTitle,
  RadioWrapperChoose,
  StyledField,
  StyledForm,
} from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { Formik } from 'formik';
import { useState } from 'react';
import { closeModalEditTransaction } from 'redux/global/globalSlice';
import { selectEditTransaction } from 'redux/global/globalSelectors';
import { useCategoriesType } from 'hooks/categoriesFilter';
import { selectCategories } from 'redux/transaction/transactionSelectors';
import { editTransactionThunk } from 'redux/transaction/transactionOperations';
import {
  ExpenseSpanEditTransaction,
  IncomeSpanEditTransaction,
  StyledCategoryName,
} from './EditTransactions.styled.js';
import { transactionsSchema } from 'services/validation/validationTransactions.js';
import { FormError } from 'components/FormError/FormError.jsx';
import { toast } from 'react-toastify';

export const EditTransactions = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector(selectCategories);
  const [expenseCategories, incomeCategories] =
    useCategoriesType(allCategories);

  const transactionData = useSelector(selectEditTransaction);
  const { amount, categoryId, comment, id, transactionDate, type } =
    transactionData;

  const initialValues = {
    transactionDate,
    type,
    categoryId,
    comment,
    amount: `${type === 'EXPENSE' ? amount * -1 : amount}`,
  };

  const selectedCategory = expenseCategories.find(
    item => item.id === categoryId
  );
  const [changedType, setChangedType] = useState(type);
  const [changeCategoryData, setChangeCategoryData] =
    useState(selectedCategory);

  const handleSubmit = (value, { resetForm }) => {
    const normalNumber =
      changedType === 'EXPENSE'
        ? Number(value.amount * -1)
        : Number(value.amount);

    const newData = {
      ...value,
      type: changedType,
      amount: normalNumber,
      categoryId: `${
        changedType === 'INCOME'
          ? incomeCategories[0].id
          : value.id ?? changeCategoryData?.id
      }`,
    };

    dispatch(editTransactionThunk({ transactionId: id, transaction: newData }))
      .unwrap()
      .then(data =>
        toast.success(
          `${
            data.type.charAt(0) + data.type.slice(1).toLowerCase()
          } transaction edited successfully.`
        )
      )
      .catch(error => toast.error('Something went wrong, please try again!'));
  };

  const handleChangeType = value => {
    setChangedType(value);
    if (value === 'EXPENSE') {
      setChangeCategoryData({
        id: '719626f1-9d23-4e99-84f5-289024e437a8',
        name: 'Other expenses',
        type: 'EXPENSE',
      });
    }
  };
  return (
    <ModalAddWrapper>
      <ModalTransactionTitle>Edit transaction</ModalTransactionTitle>
      <Formik
        validationSchema={transactionsSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <StyledForm>
          {/* ========================= Radio Buttons ========================= */}
          <RadioWrapperChoose>
            <IncomeSpanEditTransaction
              onClick={() => handleChangeType('INCOME')}
              isSelected={changedType === 'INCOME'}
            >
              Income
            </IncomeSpanEditTransaction>
            <span>/</span>
            <ExpenseSpanEditTransaction
              onClick={() => handleChangeType('EXPENSE')}
              isSelected={changedType === 'EXPENSE'}
            >
              Expense
            </ExpenseSpanEditTransaction>
          </RadioWrapperChoose>

          {/* ========================= SELECT ========================= */}
          {changedType === 'EXPENSE' && (
            <StyledCategoryName>{changeCategoryData?.name}</StyledCategoryName> //TODO
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
            <Button text="save" type="submit" />
            <Button
              text="cancel"
              variant="secondary"
              onClick={() => dispatch(closeModalEditTransaction())}
            />
          </ButtonWrapper>
        </StyledForm>
      </Formik>
    </ModalAddWrapper>
  );
};
