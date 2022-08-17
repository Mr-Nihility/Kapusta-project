import Tablelist from 'components/TableList/TableList';
import React from 'react';
import BalancePage from './Balance/BalancePage';

export default function ExpensesView() {
  return (
    <div>
      <BalancePage />
      <Tablelist />
    </div>
  );
}
