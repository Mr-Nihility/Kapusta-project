/* eslint-disable react-hooks/exhaustive-deps */
import Tablelist from 'components/TableList/TableList';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getExpansesCategories } from 'redux/categories/catrgories-operation';
import { addExpanses, getExpanses } from 'redux/transaction/transaction-operations';
import { getExpence } from 'redux/transaction/transactions-selectors';

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
    'Transport',
    'Products',
    'Health',
    'Entertainment',
    'Housing',
    'Technique',
    'Communal, communication',
    'Sports, hobbies',
    'Education',
    'Other',
  ];

  const dispatch = useDispatch();
  
  const rCategory = useSelector(getExpansesCategories);
  useEffect(()=>{
    dispatch(getExpanses())
    dispatch(getExpansesCategories())
  },[]) 
console.log(rCategory);

  const onSubmit = data => {
    
    dispatch(addExpanses(data));
    
  };

  return (
    <div>
      <TransactionForm
        engCategory={engCategory}
        rCategory={rCategory}
        onSubmit={onSubmit}
      />
      <BalancePage />
      <Tablelist />
    </div>
  );
}
