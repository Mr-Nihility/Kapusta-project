import { useSelector } from 'react-redux';
import { getUserEmail } from 'redux/auth/auth-selectors';

import { TransactionForm } from 'components/TransactionForm/TransactionForm';


// import { Statisticts } from './Statisticts/Statisticts'{/* <Statisticts /> */}

export const Main = () => {
  const emailToShow = useSelector(getUserEmail);
  
  return (
    <div>
      <TransactionForm/>
      
    </div>
  );
};
