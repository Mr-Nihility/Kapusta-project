import Tablelist from 'components/TableList/TableList';
import React from 'react';
import BalancePage from './Balance/BalancePage';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { addIncome } from 'redux/transaction/transaction-operations';
import { useDispatch } from 'react-redux';
export default function IncomeView() {
  const rCategory = ['З/П', 'Доп. доход'];
  const engCategory = ['salary', 'additional income'];
  const dispatch = useDispatch();
  const onSubmit = data => {
    console.log(data);
    dispatch(addIncome(data));
  };
  
  return (
    <div>
      <TransactionForm
        rCategory={rCategory}
        onSubmit={onSubmit}
        engCategory={engCategory}
       
      />
      <BalancePage />
      <Tablelist />
    </div>
  );
}
