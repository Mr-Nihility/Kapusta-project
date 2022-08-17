import Tablelist from 'components/TableList/TableList';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addExpanses,
  getExpanses,
} from 'redux/transaction/transaction-operations';

import BalancePage from './Balance/BalancePage';
export default function ExpensesView() {
  const rCategory = [
    'Транспорт',
    'Продукты',
    'Здоровье',
    'Развлечения',
    'Всё для дома',
    'Техника',
    'Коммуналка и связь',
    'Спорт и хобби',
    'Образование',
    'Прочее',
  ];
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
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  // const [date, setDate] = useState(null);
  console.log(description, category, amount);
  const getDate = date => {
    console.log(date);
    return date;
  };
  const getInputs = (description, amount, category) => {
    return { description, amount, category };
  };

  const dispatch = useDispatch();


  const onSubmit = evt => {
    evt.preventDefault();
console.log('submit');
    dispatch(
      addExpanses({
        description: description,
        amount: amount,
        date: '2022-08-16',
        // year+'-'+month+'-'+day,
        category: category,
      })
    );
    // console.log(dispatch(fetchExpenceTransaction()));
    // setDescription('');
    // setCategory('');
    // setAmount('');
  };
  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'description':
        setDescription(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'amount':
        setAmount(value);
        break;
      default:
        return '';
    }
    console.log(value);
    // getDate(date)
  };

  return (
    <div>
      <TransactionForm
        engCategory={engCategory}
        rCategory={rCategory}
        onSubmit={onSubmit}
        onChange={onChange}
        getDate={getDate}
        getInputs={getInputs}
        amount={amount}
        description={description}
        category={category}
      />
      <BalancePage />
      <Tablelist />
    </div>
  );
}
