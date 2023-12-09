import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transaction/transactionSelectors';
import {
  TransactionDetails,
  TransactionDetailsItem,
  TransactionDetailsItemTitle,
  TableHead,
  TableHeader,
  Table,
  TableRow,
  Sum,
  ButtonContainer,
  ButtonEditTransaction,
  BtnEditTransaction,
  ButtonDelTransaction,
  TableDash,
  TableWrapper,
  AllTransactionsDetails,
  SumEl,
  TableTop,
} from './Transactions.styled';

import { useEffect, useState } from 'react';
import {
  getTransactionsCategoriesThunk,
  getAllTransactionsThunk,
} from 'redux/transaction/transactionOperations';
import MediaQuery from 'react-responsive';
import {
  closeModalDeleteTransaction,
  openModalDeleteTransaction,
  openModalEditTransaction,
  setUpdatedTransaction,
} from 'redux/global/globalSlice';
import { LiaPenSolid } from 'react-icons/lia';
import { getDateForSort } from 'services/getDateNow';
import { selectIsModalDeleteTransactionOpen } from 'redux/global/globalSelectors';
import { Modal } from 'components/Modal/Modal';
import ModalDeleteTransaction from 'components/ModalDeleteTransaction/ModalDeleteTransaction';
import { Greeting } from 'components/Greeting/Greeting';

const Transactions = () => {
  const [transactionIdToDelete, setTransactionIdToDelete] = useState(null);
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  const isDeleteModalOpen = useSelector(selectIsModalDeleteTransactionOpen);

  useEffect(() => {
    dispatch(getAllTransactionsThunk());
    dispatch(getTransactionsCategoriesThunk());
  }, [dispatch]);

  const handleDeleteButtonClick = transactionId => {
    setTransactionIdToDelete(transactionId);
    dispatch(openModalDeleteTransaction());
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    return (
      getDateForSort(b.transactionDate) - getDateForSort(a.transactionDate)
    );
  });

  const handleEditClick = obj => {
    dispatch(setUpdatedTransaction(obj));
    dispatch(openModalEditTransaction());
  }; // wait till adding real data will be able to addd and if there are bugs, fix them

  const formatDate = date => {
    const dateArr = date.split('-');
    const [year, month, day] = dateArr;

    return `${day}.${month}.${year}`;
  };

  return sortedTransactions.length ? (
    <>
      <MediaQuery maxWidth={767}>
        <AllTransactionsDetails>
          {sortedTransactions.map(transaction => {
            return (
              <li key={transaction.id}>
                <TransactionDetails
                  color={transaction.type === 'INCOME' ? '#FFB627' : '#FF868D'}
                >
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Date
                    </TransactionDetailsItemTitle>
                    <span>
                      <span>{formatDate(transaction.transactionDate)}</span>
                    </span>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Type
                    </TransactionDetailsItemTitle>
                    <span>{transaction.type ?? '-'}</span>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Category
                    </TransactionDetailsItemTitle>
                    <span>
                      {
                        categories.find(
                          cat => cat.id === transaction.categoryId
                        )?.name
                      }
                    </span>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Comment
                    </TransactionDetailsItemTitle>
                    <span>{transaction.comment}</span>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Sum
                    </TransactionDetailsItemTitle>
                    <SumEl
                      color={
                        transaction.type === 'INCOME' ? '#FFB627' : '#FF868D'
                      }
                      // make this check work and add normal styles
                    >
                      {transaction.amount > 0
                        ? transaction.amount
                        : transaction.amount * -1}
                    </SumEl>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <ButtonDelTransaction
                      type="button"
                      onClick={() => handleDeleteButtonClick(transaction.id)}
                    >
                      Delete
                    </ButtonDelTransaction>
                    {isDeleteModalOpen && (
                      <Modal closeReducer={closeModalDeleteTransaction}>
                        <ModalDeleteTransaction
                          transactionId={transactionIdToDelete}
                        />
                      </Modal>
                    )}
                    <ButtonEditTransaction
                      type="button"
                      onClick={() => handleEditClick(transaction)}
                    >
                      {<LiaPenSolid />} Edit
                    </ButtonEditTransaction>

                    {/* fix color of edit btn */}
                  </TransactionDetailsItem>
                </TransactionDetails>
              </li>
            );
          })}
        </AllTransactionsDetails>
      </MediaQuery>

      <MediaQuery minWidth={768}>
        <TableWrapper>
          <TableTop>
            <thead>
              <TableHead>
                <TableHeader>Date</TableHeader>
                <TableHeader>Type</TableHeader>
                <TableHeader>Category</TableHeader>
                <TableHeader>Comment</TableHeader>
                <TableHeader>Sum</TableHeader>
              </TableHead>
            </thead>
          </TableTop>
          <Table>
            <tbody>
              {sortedTransactions.map(transaction => {
                return (
                  <TableRow key={transaction.id}>
                    <TableDash>
                      {formatDate(transaction.transactionDate)}
                    </TableDash>
                    <TableDash>
                      {transaction.type === 'INCOME' ? '+' : '-'}
                    </TableDash>
                    <TableDash>
                      {
                        categories.find(
                          cat => cat.id === transaction.categoryId
                        )?.name

                        // transaction.category
                        //   ? transaction.category?.name
                        //   : 'Income'
                      }
                    </TableDash>
                    <TableDash>{transaction.comment}</TableDash>
                    <Sum
                      color={
                        transaction.type === 'INCOME' ? '#FFB627' : '#FF868D'
                      }
                    >
                      {transaction.amount > 0
                        ? transaction.amount
                        : transaction.amount * -1}
                    </Sum>
                    {/* <TableDash> */}
                    <ButtonContainer>
                      <BtnEditTransaction
                        type="button"
                        onClick={() => handleEditClick(transaction)}
                      >
                        <LiaPenSolid fill="#fff" />
                      </BtnEditTransaction>
                    </ButtonContainer>
                    <ButtonContainer>
                      <ButtonDelTransaction
                        type="button"
                        onClick={() => handleDeleteButtonClick(transaction.id)}
                      >
                        Delete
                      </ButtonDelTransaction>
                      {isDeleteModalOpen && (
                        <Modal closeReducer={closeModalDeleteTransaction}>
                          <ModalDeleteTransaction
                            transactionId={transactionIdToDelete}
                          />
                        </Modal>
                      )}
                    </ButtonContainer>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </TableWrapper>
      </MediaQuery>
    </>
  ) : (
    <Greeting />
  );
};

export default Transactions;
