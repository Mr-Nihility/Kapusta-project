import Tablelist from 'components/TableList/TableList';
import React, { useEffect } from 'react';
import BalancePage from './Balance/BalancePage';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import {
  addIncome,
  fetchIncome,
} from 'redux/transaction/transaction-operations';
import {
  getIncomeList,
  getIncomeMonth,
} from 'redux/transaction/transactions-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getIncomeCategories } from 'redux/categories/catrgories-operation';
import { getIsLogged } from 'redux/auth/auth-selectors';
//------------------------------------------------------------------------------------//
export default function IncomeView() {
  const rCategory = ['З/П', 'Доп. доход'];
  const engCategory = ['salary', 'additional income'];
  const dispatch = useDispatch();
  const incomeArr = useSelector(getIncomeList);

  const isLog = useSelector(getIsLogged);

  const stats = useSelector(getIncomeMonth);

  useEffect(() => {
    if (!isLog) {
      return;
    }
    dispatch(getIncomeCategories());
    dispatch(fetchIncome());
  }, [dispatch, isLog]);

  const onSubmit = data => {
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
      <Tablelist stats={stats} list={incomeArr}/>
    </div>
  );
}
