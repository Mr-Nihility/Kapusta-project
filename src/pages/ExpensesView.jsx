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
  // const rCategory = [

  //   'Транспорт',
  //   'Продукты',
  //   'Здоровье',
  //   'Развлечения',
  //   'Всё для дома',
  //   'Техника',
  //   'Коммуналка и связь',
  //   'Спорт и хобби',
  //   'Образование',
  //   'Прочее',
  // ];
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
    <div>
      <BalancePage />
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
  );
}
