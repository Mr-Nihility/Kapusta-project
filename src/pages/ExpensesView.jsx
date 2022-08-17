import Tablelist from 'components/TableList/TableList';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getIsLogged } from 'redux/auth/auth-selectors';
import { getExpansesCategories } from 'redux/categories/catrgories-operation';
import { getCategoriesExpanses } from 'redux/categories/catrgories-selectors';
import {
  addExpanses,
  getExpanses,
} from 'redux/transaction/transaction-operations';
import { getExpenceList } from 'redux/transaction/transactions-selectors';

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

  useEffect(() => {
    if (!isLog) {
      return;
    }
    dispatch(getExpanses());
    dispatch(getExpansesCategories());
  }, [dispatch, isLog]);

  const onSubmit = data => {
    dispatch(addExpanses(data));
  };

  return (
    <div>
      <TransactionForm
        engCategory={engCategory}
        rCategory={categoriesExpanses}
        onSubmit={onSubmit}
      />
      <BalancePage />
      <Tablelist list={expenceArr} />
    </div>
  );
}
