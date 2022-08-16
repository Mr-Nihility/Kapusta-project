import styles from './MainContainer.module.css';
import Rectangle from './images/Rectangle.png';
import NutsFon from './images/NutsFon.png';
import Nutsmini from './images/Nutsmini.png';
import LogoKapusta from './images/LogoKapusta.png';
export const MainContainer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Fon}>
        <img src={Rectangle} alt="Fon" width="100%" />
        <div className={styles.FonNuts}>
          <img src={NutsFon} alt="" width="100%" />
        </div>
        <div className={styles.LogoKapusta}>
          <img src={LogoKapusta} alt="" width="100%" />
        </div>
      </div>
      <div className={styles.Nutsmini}>
        <img src={Nutsmini} alt="" />
      </div>
    </div>
  );
};
