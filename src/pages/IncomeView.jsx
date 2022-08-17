import Tablelist from 'components/TableList/TableList';
import React from 'react';
import BalancePage from './Balance/BalancePage';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
export default function IncomeView() {
  const rCategory = ['Зп', 'Доп.доходы'];
  const engCategory = ['salary', 'additional income'];

  const onSubmit = evt => {};
  const getDate = (year, month, day) => {
    return year + '-' + month + '-' + day;
  };
  const getInputs = (description, amount, category) => {
    return {description, amount, category};
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
