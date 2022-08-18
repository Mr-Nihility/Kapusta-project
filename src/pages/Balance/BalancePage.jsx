import { Balance } from 'components/Balance/Balance';
import { Outlet } from 'react-router';

export default function BalancePage() {
  return (
    <>
      <Balance />
      <Outlet />
    </>
  );
}
