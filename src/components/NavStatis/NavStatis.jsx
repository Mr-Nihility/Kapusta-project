import Style from './NavStatis.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import BalancePage from '../Balance/Balance';
import { Icons } from '../../components/Icons/Icons';
// import { getDataTransaction } from 'redux/transaction/transaction-operations';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { useState } from 'react';

export const NavStatis = () => {
	// const dispath = useDispatch();
	// const data = dispath(getDataTransaction())
	// console.log(data);
	
  return (
    <>
      <div className={Style.topСontainer}>
        <Link to="/kapusta-project/expenses" className={Style.button_goHome}>
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
          <BalancePage />
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
