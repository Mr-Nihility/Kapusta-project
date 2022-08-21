import styles from './Balance.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newBalance } from 'redux/transaction/transaction-operations';
import { getStartBalance } from 'redux/auth/auth-selectors';

//----------------------------------------------------------------------------//
export const ReportsBalance = () => {
  const dispatch = useDispatch();
  const [balance, setBalance] = useState();
  const balanceEl = useSelector(getStartBalance);

  const handleChange = event => {
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

  return (
    <>
      <form className={styles.reports_form} onSubmit={onSubmit}>
        <label className={styles.reports_label}>
          Balance:
          <div className={styles.reports_inputWraper}>
            <input
              className={styles.reports_input}
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
      </form>
    </>
  );
};
