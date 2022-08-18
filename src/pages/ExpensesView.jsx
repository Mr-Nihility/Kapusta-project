import { ReportBtn } from 'components/ReportBtn/ReportBtn';
import Tablelist from 'components/TableList/TableList';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getIsLogged, getStartBalance } from 'redux/auth/auth-selectors';
import { getExpansesCategories } from 'redux/categories/catrgories-operation';
import { getCategoriesExpanses } from 'redux/categories/catrgories-selectors';
import {
  addExpanses,
  deleteTrancaction,
  getExpanses,
} from 'redux/transaction/transaction-operations';
import {
  getExpenceList,
  getExpenseMonth,
} from 'redux/transaction/transactions-selectors';

import BalancePage from './Balance/BalancePage';
export default function ExpensesView() {
  const stats = useSelector(getExpenseMonth);

  const engCategory = [
    'Products',
    'Alcohol',
    'Entertainment',
    'Health',
    'Transport',
    'Housing',
    'Technique',
    'Communal, communication',
    'Sports, hobbies',
    'Education',
    'Other',
  ];

  const dispatch = useDispatch();
  const expenceArr = useSelector(getExpenceList);
  const categoriesExpanses = useSelector(getCategoriesExpanses);
  const isLog = useSelector(getIsLogged);
  const bal = useSelector(getStartBalance);

  useEffect(() => {
    if (!isLog) {
      return;
    }
    dispatch(getExpanses());
    dispatch(getExpansesCategories());
  }, [dispatch, isLog, bal]);

  const onSubmit = data => {
    dispatch(addExpanses(data));
  };

  const deleteItem = id => {
    dispatch(deleteTrancaction(id));
  };

  return (
    <div className="wrap">
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
          engCategory={engCategory}
          rCategory={categoriesExpanses}
          onSubmit={onSubmit}
        />

        <Tablelist
          stats={stats}
          list={expenceArr}
          type={true}
          delTrans={deleteItem}
        />
      </div>
    </div>
  );
}
