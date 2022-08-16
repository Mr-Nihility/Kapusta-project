import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import styles from './UserInfo.module.css';
import { logOut } from 'redux/auth/auth-operations';
//---------------------------------------------------//

export default function UserInfo() {
  const dispath = useDispatch();

  const handlerLogOut = () => {
    dispath(logOut());
  };
  return (
    <div className={styles.wrapper}>
      <Avatar
        size={32}
        // fgColor={'#52555F'}
        round={true}
        name="RomanenKo Vovan4ik"
      />
      <p className={styles.text}>{'RomanenKo Vovan4ik'}</p>

      <button className={styles.btn} type="button" onClick={handlerLogOut}>
        Exit
      </button>
    </div>
  );
}
