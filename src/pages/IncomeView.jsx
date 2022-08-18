import Tablelist from 'components/TableList/TableList';
import React, { useEffect } from 'react';
import BalancePage from './Balance/BalancePage';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import {
  addIncome,
  deleteTrancaction,
  fetchIncome,
} from 'redux/transaction/transaction-operations';
import {
  getIncomeList,
  getIncomeMonth,
} from 'redux/transaction/transactions-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getIncomeCategories } from 'redux/categories/catrgories-operation';
import { getIsLogged, getStartBalance } from 'redux/auth/auth-selectors';
import { getCategoriesIncome } from 'redux/categories/catrgories-selectors';

import { ReportBtn } from 'components/ReportBtn/ReportBtn';

//------------------------------------------------------------------------------------//
export default function IncomeView() {
  const engCategory = ['salary', 'additional income'];
  const ruCategory = useSelector(getCategoriesIncome);
  const dispatch = useDispatch();
  const incomeArr = useSelector(getIncomeList);
  const bal = useSelector(getStartBalance);
  const isLog = useSelector(getIsLogged);

  const stats = useSelector(getIncomeMonth);
  console.log(ruCategory);
  useEffect(() => {
    console.log('render');
    if (!isLog) {
      return;
    }
    dispatch(getIncomeCategories());
    dispatch(fetchIncome());
  }, [dispatch, isLog, bal]);

  const onSubmit = data => {
    dispatch(addIncome(data));
  };

  const deleteItem = id => {
    dispatch(deleteTrancaction(id));
  };

  return (
    <div>
      <ReportBtn />

      <BalancePage />
      <div
        className="kek"
        style={{
          maxWidth: '1098px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '32px 32px 61px 32px',
          backgroundColor: '#ffffff',
          boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
          borderRadius: '0px 30px 30px 30px',
        }}
      >
        <TransactionForm
          rCategory={ruCategory}
          onSubmit={onSubmit}
          engCategory={engCategory}
        />

        <Tablelist stats={stats} list={incomeArr} delTrans={deleteItem} />
      </div>
    </div>
  );
}
