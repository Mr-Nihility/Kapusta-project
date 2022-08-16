import Style from './NavStatis.module.css';
import { Link } from 'react-router-dom';
export const NavStatis = () => {
  return (
    <>
      <div className={Style.topСontainer}>
        <Link to="/" className={Style.button_goHome}>
          <span>
            <svg className={Style.button_goHomeSvg}>
              <use
                className={Style.button_goHomeUse}
                href="../../svg/svg-icon-project/symbol-defs.svg#icon-long-arrow-left"
              />
            </svg>
          </span>
          Main page
        </Link>
        <div className={Style.infoForUserBalance}>
          <p className={Style.textBalance}>
            Balance: <span className={Style.span_balance}>55 000.00 грн</span>
          </p>
          <button className={Style.button_confirm}>CONFIRM</button>
        </div>
        <div className={Style.month_switch}>
          <p className={Style.month_switchText}>Current period:</p>
          <p className={Style.month_switchTextBig}>
            <svg className={Style.month_switchSvg}>
              <use
                className={Style.month_switchUse}
                href='../../svg/svg-icon-project/symbol-defs.svg#icon-arrow-left'//https://polyakovdmitriy.ru/svg-v-react/
              />
            </svg>
            November 2019
            <svg className={Style.month_switchSvg}>
              <use
                className={Style.month_switchUse}
                href="../../svg/svg-icon-project/symbol-defs.svg#icon-arrow-right"
              />
            </svg>
          </p>
        </div>
      </div>
    </>
  );
};
