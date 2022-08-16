import BalancePage from './Balance/BalancePage';

import { TransactionForm } from 'components/TransactionForm/TransactionForm';

export const Main = () => {
  return (
    <div>
      <BalancePage />

      <TransactionForm />
    </div>
  );
};
