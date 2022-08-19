import Style from './NavStatis.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { getDataTransaction } from '../../redux/reports/reports-operations';
import { useDispatch, useSelector } from 'react-redux';
import { Icons } from '../../components/Icons/Icons';
import { Balance } from '../Balance/Balance';
import { useState } from 'react';
import { monthMas } from '../Month/Month';
import { useEffect } from 'react';
import { getIsLogged } from 'redux/auth/auth-selectors';

export const NavStatis = () => {
  const [dateNow, setDateNow] = useState(null);
  const [month, setMonth] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [year, setYear] = useState('');
  const dispatch = useDispatch();
  const isLoged = useSelector(getIsLogged);

  useEffect(() => {
    if (!isLoged) {
      return;
    }
    dispatch(getDataTransaction(`${year}-${month}`));
  }, [dispatch, month, year, isLoged]);

  if (dateNow === null) {
    let date = new Date().toLocaleDateString(); // date in format 17.08 2022
    setMonth(date.slice(3, 5));
    setYear(date.slice(6, 10));
    setDateNow(`${year}-${month}`);
  }

  const CurrentMonth = (monthMas, month) => {
    monthMas.forEach((element, index) => {
      if (index === month) {
        setCurrentMonth(element.toUpperCase());
      }
    });
  };

  if (currentMonth === '') {
    const a = month - 1;
    CurrentMonth(monthMas, a);
  }

  const handelBeforeMonth = () => {
    let m;
    let y = year;
    let curNumber = '';
    m = Number(month) - 1;

    if (curNumber === '') {
      curNumber = m;
      const num = Number(curNumber) < 10 ? '0' + curNumber : curNumber;
      setMonth(num);
      const a = curNumber - 1;
      CurrentMonth(monthMas, a);
    }

    if (m < 1) {
      y = Number(year) - 1;
      setYear(y);
      setMonth('12');
      CurrentMonth(monthMas, 11);
    }
  };
  const handelNextMonth = () => {
    let m;
    let y = year;
    m = Number(month) + 1;
    let curNumber = '';
    if (curNumber === '') {
      curNumber = m;
      const num = Number(curNumber) < 10 ? '0' + curNumber : curNumber;
      setMonth(num);
      const a = curNumber - 1;
      CurrentMonth(monthMas, a);
    }
    if (curNumber > 12) {
      y = Number(year) + 1;
      setYear(y);
      setMonth('01');
      CurrentMonth(monthMas, 0);
    }
  };

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
          <Balance />
        </div>
        <div className={Style.month_switch}>
          <p className={Style.month_switchText}>Current period:</p>
          <div className={Style.month_switchPosition}>
            <div onClick={handelBeforeMonth}>
              <Icons
                name="arrow-left"
                className="Style.month_switchSvgLeft"
                color="#ff751d"
                width="4"
                height="10"
              />
            </div>
            <p className={Style.month_switchTextBig}>
              {currentMonth} {year}
            </p>
            <div onClick={handelNextMonth}>
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
      </div>
    </>
  );
};
