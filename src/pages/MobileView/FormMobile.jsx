import React from 'react';
import { Icons } from '../../components/Icons/Icons';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { NavLink } from 'react-router-dom';
import styles from './FormMobile.module.css';

export default function FormMobile() {
  return (
    <div>
      <NavLink to="/kapusta-project/main" className={styles.backBtn}>
        <Icons
          name="long-arrow-left"
          className=""
          color="#FF751D"
          width="18"
          height="12"
        />
      </NavLink>
      <TransactionForm isRenderDate={false} />
    </div>
  );
}
