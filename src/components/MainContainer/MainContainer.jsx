import styles from './MainContainer.module.css';
import Rectangle from './images/Rectangle.png';
import NutsFon from './images/NutsFon.png';
import Nutsmini from './images/Nutsmini.png';
import LogoKapusta from './images/LogoKapusta.png';
import { useSelector } from 'react-redux';
// import { getToken } from 'redux/auth/auth-selectors';
export const MainContainer = () => {
  const inAuth = useSelector(state => state.auth.accessToken);
  console.log(inAuth);
  return inAuth ? (
    <>
      <div className={styles.Container}>
        <img className={styles.Fon} src={Rectangle} alt="Fon" width="100%" />
        <img
          className={styles.FonNutsInAuth}
          src={NutsFon}
          alt=""
          width="100%"
        />
      </div>
    </>
  ) : (
    <div className={styles.Container}>
      <img className={styles.Fon} src={Rectangle} alt="Fon" width="100%" />
      <img className={styles.FonNuts} src={NutsFon} alt="" width="100%" />

      <img
        className={styles.LogoKapusta}
        src={LogoKapusta}
        alt=""
        width="100%"
      />
      <img src={Nutsmini} alt="" className={styles.Nutsmini} />
    </div>
  );
};
