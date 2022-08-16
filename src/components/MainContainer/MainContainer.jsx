import styles from './MainContainer.module.css';
import Rectangle from './images/Rectangle.png';
import NutsFon from './images/NutsFon.png';
import Nutsmini from './images/Nutsmini.png';
import LogoKapusta from './images/LogoKapusta.png';
export const MainContainer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Fon}>
        <img src={Rectangle} alt="Fon" />
        <div className={styles.FonNuts}>
          <img src={NutsFon} alt="" />
        </div>
        <div className={styles.LogoKapusta}>
          <img src={LogoKapusta} alt="" />
        </div>
      </div>
      <div className={styles.Nutsmini}>
        <img src={Nutsmini} alt="" />
      </div>
    </div>
  );
};
