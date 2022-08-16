import styles from './MainContainer.module.css';
import Rectangle from './images/Rectangle.png';
import NutsFon from './images/NutsFon.png';
import Nutsmini from './images/Nutsmini.png';
import LogoKapusta from './images/LogoKapusta.png';
export const MainContainer = () => {
  return (
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
