import BalancePage from './Balance/BalancePage';

import { TransactionForm } from 'components/TransactionForm/TransactionForm';

export const Main = () => {
  return (
    <div>
      <h2>Hello {emailToShow}! </h2>
      <BalancePage />

      <TransactionForm />
    </div>
  );
};
