import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newBalanceThunk } from 'redux/transaction/transaction-operations';
import { getStartBalance } from 'redux/auth/auth-selectors';

import styles from './Balance.module.css';

export const Balance = () => {
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
    dispatch(newBalanceThunk({ newBalance: balance }));
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
        </button>
      </form>
    </>
  );
};