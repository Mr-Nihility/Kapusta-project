import Style from './NavStatis.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

import { Icons } from '../../components/Icons/Icons';
export const NavStatis = () => {
  return (
    <>
      <div className={Style.topСontainer}>
        <Link to="/" className={Style.button_goHome}>
          <div className={Style.button_goHomeArrow}>
            <Icons
              name="long-arrow-left"
              className=""
              color="#FF751D"
              width="18"
              height="12"
            />
          </div>
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
          <div className={Style.month_switchPosition}>
            <Icons
              name="arrow-left"
              className="Style.month_switchSvgLeft"
              color="#ff751d"
              width="4"
              height="10"
            />
            <p className={Style.month_switchTextBig}>November 2019</p>
            <Icons
              name="arrow-right"
              className="Style.month_switchSvgRight"
              color="#ff751d"
              width="4"
              height="10"
            />
          </div>
        </div>
      </div>
    </>
  );
};
