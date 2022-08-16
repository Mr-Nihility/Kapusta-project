import { useSelector } from 'react-redux';
import { getUserEmail } from 'redux/auth/auth-selectors';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';

export const Main = () => {
  const emailToShow = useSelector(getUserEmail);
  console.log(emailToShow);
  return (
    <div>
      <TransactionForm/>
      <h2>Hello {emailToShow}! </h2>
    </div>
  );
};
