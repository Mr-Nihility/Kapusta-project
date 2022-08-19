import styles from './MainContainer.module.css';

import LogoKapusta from './images/LogoKapusta.png';
import { useSelector } from 'react-redux';
import { getSuccessToken } from 'redux/auth/auth-selectors';
export const MainContainer = ({ children }) => {
  const hasToken = useSelector(getSuccessToken);
  return hasToken ? (
    <>
      <div className={styles.Container2}>
        {children}
        {/* <img className={styles.Fon} src={Rectangle} alt="Fon" width="100%" />
        <img
          className={styles.FonNutsInAuth}
          src={NutsFon}
          alt=""
          width="100%"
        /> */}
      </div>
    </>
  ) : (
    <div className={styles.Container1}>
      {children}
      {/* <img className={styles.Fon} src={Rectangle} alt="Fon" width="100%" />
      <img className={styles.FonNuts} src={NutsFon} alt="" width="100%" /> */}

      <img
        className={styles.LogoKapusta}
        src={LogoKapusta}
        alt=""
        width="100%"
      />

      {/* <img src={Nutsmini} alt="" className={styles.Nutsmini} /> */}
    </div>
  );
};
