import { Balance } from 'components/Balance/Balance';
import Navigation from 'components/Navigation/Navigation';
import { ReportBtn } from 'components/ReportBtn/ReportBtn';
import Tablelist from 'components/TableList/TableList';
import Styles from '../Balance/BalancePage.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from 'redux/auth/auth-selectors';
import { deleteTrancaction } from 'redux/transaction/transaction-operations';

export default function MainMobile() {
  const dispatch = useDispatch();
  const allTransactions = useSelector(getAllTransactions);
  const deleteItem = id => {
    dispatch(deleteTrancaction(id));
  };
  console.log(allTransactions, allTransactions?.length);
  return (
    <>
      <h1> Ми на мабілє!</h1>
      <div className={Styles.paddingTop}>
        <Balance />
        <ReportBtn />
      </div>

      {!!allTransactions?.length && (
        <Tablelist list={allTransactions} delTrans={deleteItem} />
      )}
      <Navigation
        expenses={'create-transaction'}
        income={'create-transaction'}
      />
    </>
  );
}
