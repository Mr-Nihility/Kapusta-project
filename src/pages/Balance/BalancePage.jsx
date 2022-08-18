import { Balance } from 'components/Balance/Balance';
import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router';

export default function BalancePage() {
  return (
    <>
      <div
        style={{
          margin: '0 auto',
          maxWidth: '1098px',
        }}
      >
        <Balance />

        <Navigation />
        <Outlet />
      </div>
    </>
  );
}
