import { useSelector } from 'react-redux';
import { getUserEmail } from 'redux/auth/auth-selectors';
import BalancePage from './Balance/BalancePage';

export const Main = () => {
  const emailToShow = useSelector(getUserEmail);
  console.log(emailToShow);
  return (
    <div>
      <h2>Hello {emailToShow}! </h2>
      <BalancePage />
    </div>
  );
};
