import Balance from 'components/Balance/Balance';
import { Outlet } from 'react-router';

import { Navigation } from 'components/Navigation/Navigation';

export default function BalancePage() {
  return (
    <>
      <Balance />
      <Navigation />
      <Outlet />
    </>
  );
}
