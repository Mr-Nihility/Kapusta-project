import Tablelist from 'components/TableList/TableList';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';

import { useDispatch } from 'react-redux';
import { addExpanses, getExpanses } from 'redux/transaction/transaction-operations';

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

  const dispatch = useDispatch();

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
