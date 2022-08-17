import Tablelist from 'components/TableList/TableList';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addExpenseTransaction } from 'redux/transaction/transaction-operations';
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


const getDate = (year, month, day) => {
  return year + '-' + month + '-' + day;
};
const getInputs = (description, amount, category) => {
  return { description, amount, category };
};

const dispatch =useDispatch()
const onSubmit = evt => {
  evt.preventDefault();

  dispatch(
    addExpenseTransaction({
      description: getInputs().description,
      amount: getInputs().amount,
      date: '2022-08-16',
      // year+'-'+month+'-'+day,
      category: getInputs().category,
    })
  );
  // console.log(dispatch(fetchExpenceTransaction()));
  // setDescription('');
  // setCategory('');
  // setAmount('');
};


  return (
    <div>
      <TransactionForm
        rCategory={rCategory}
        onSubmit={onSubmit}
        engCategory={engCategory}
        getIngo={getDate}
        getInputs={getInputs}
      />
      <BalancePage />
      <Tablelist />
    </div>
  );
}
