import { useState, useEffect } from 'react';

import styles from './Balance.module.css';

export default function Balance() {
  const [balance, setBalance] = useState(() => {
    return JSON.parse(window.localStorage.getItem('balance')) ?? '';
  });

  useEffect(() => {
    window.localStorage.setItem('balance', JSON.stringify(balance));
  }, [balance]);

  const addBalance = () => {
    setBalance(prevState => balance);

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
        setBalance(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();

    addBalance(balance);
  };

  console.log(
    new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'UAH',
    }).format(balance)
  );
  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label}>
          Balance:
          <input
            className={styles.input}
            type="number"
            name="balance"
            value={balance}
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
