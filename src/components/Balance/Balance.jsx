import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { newBalanceThunk } from 'redux/transaction/transaction-operations';

import styles from './Balance.module.css';

export default function Balance() {
  const [balance, setBalance] = useState(() => {
    return JSON.parse(window.localStorage.getItem('balance')) ?? '';
  });
  console.log(balance);
  const dispatch = useDispatch();
  useEffect(() => {
    window.localStorage.setItem('balance', JSON.stringify(balance));
  }, [balance]);

  const addBalance = () => {
    if (balance === '0') {
      alert(
        'Hello! To get started, enter the current balance of your account!'
      );
    }
  };

  const handleChange = event => {
    console.log(event.target);
    const { name, value } = event.target;

    switch (name) {
      case 'balance':
        console.log({ value });
        setBalance(5);
        break;

      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    dispatch(newBalanceThunk({ newBalance: balance }));
    addBalance(balance);
  };

  const balanseView = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'UAH',
  }).format(balance);
  console.log(balanseView);

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label}>
          Balance:
          <input
            className={styles.input}
            type="text"
            name="balance"
            value={`${balanseView}`}
            min="00.00"
            max="10000000.00"
            step="0.01"
            required
            placeholder="UAH"
            onChange={handleChange}
          />
        </label>

        <button className={styles.button} type="submit">
          CONFIRM
        </button>
      </form>
    </>
  );
}
