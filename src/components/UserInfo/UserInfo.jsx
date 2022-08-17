import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import styles from './UserInfo.module.css';
import { logOut } from 'redux/auth/auth-operations';
import { getIsLogged, getUserEmail } from 'redux/auth/auth-selectors';
//---------------------------------------------------//

export default function UserInfo() {
  const dispath = useDispatch();
  const isLogged = useSelector(getIsLogged);
  const email = useSelector(getUserEmail);

  const handlerLogOut = () => {
    dispath(logOut());
  };

  return (
    isLogged && (
      <div className={styles.wrapper}>
        <Avatar
          size={32}
          // fgColor={'#52555F'}
          round={true}
          name={email}
        />
        <p className={styles.text}>{email}</p>

        <button className={styles.btn} type="button" onClick={handlerLogOut}>
          Exit
        </button>
      </div>
    )
  );
}
