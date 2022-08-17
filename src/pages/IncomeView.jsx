import Tablelist from 'components/TableList/TableList';
import React, { useEffect } from 'react';
import BalancePage from './Balance/BalancePage';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { addIncome} from 'redux/transaction/transaction-operations';
import { getIncome } from 'redux/transaction/transactions-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getIncomeCategories } from 'redux/categories/catrgories-operation';
export default function IncomeView() {
  const rCategory = ['З/П', 'Доп. доход'];
  const engCategory = ['salary', 'additional income'];
  const dispatch = useDispatch();
  const expence =useSelector(getIncome)
  useEffect(() => {
    dispatch(getIncome());
    dispatch(getIncomeCategories());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onSubmit = data => {
    
    dispatch(addIncome(data));
    console.log(expence);
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
