import BalanceModal from 'components/BalanceModal/BalanceModal';

// import { useDispatch, useSelector } from 'react-redux';
// import { newBalance } from '../../redux/transaction/transaction-operations';
// import { getStartBalance } from 'redux/auth/auth-selectors';

import styles from './Balance.module.css';

// export default function Balance() {

//   const [balance, setBalance] = useState(() => {
//     return JSON.parse(window.localStorage.getItem('balance')) ?? '';
//   });

//   useEffect(() => {
//     window.localStorage.setItem('balance', JSON.stringify(balance));
//   }, [balance]);

//   const addBalance = () => {
//     setBalance(prevState => balance);

//     if (balance === '0') {
//       alert(
//         'Hello! To get started, enter the current balance of your account!'
//       );
//     }
//   };

// <<<<<<< HEAD
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newBalance } from 'redux/transaction/transaction-operations';
import { getStartBalance } from 'redux/auth/auth-selectors';

export const Balance = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [balance, setBalance] = useState();
  const balanceEl = useSelector(getStartBalance);

  const handleChange = event => {
    console.log(event.target);
    const { name, value } = event.target;

    switch (name) {
      case 'balance':
        setBalance(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    dispatch(newBalance({ newBalance: balance }));
  };

  console.log(
    new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'UAH',
    }).format(balance)
  );
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label}>
          Balance:
          <div className={styles.inputWraper}>
            <input
              className={styles.input}
              type="number"
              name="balance"
              value={balance || balanceEl || ''}
              min="00.00"
              max="10000000.00"
              step="0.01"
              required
              placeholder="00.00"
              onChange={handleChange}
            />
            <p>UAH</p>
          </div>
        </label>

        <button className={styles.button} type="submit">
          CONFIRM
          <BalanceModal show={showModal} close={handleToggleModal} />
        </button>
      </form>
    </>
  );
};
