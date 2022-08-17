import Style from './NavStatis.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { getDataTransaction } from '../../redux/reports/reports-operations';
import { useDispatch } from 'react-redux';
import { Icons } from '../../components/Icons/Icons';
import { Balance } from '../Balance/Balance';
import { useState } from 'react';
// import { useEffect } from 'react';

export const NavStatis = () => {
	const [dateNow, setDateNow] = useState(null);
	const [month, setMonth] = useState('');
	const [year, setYear] = useState('');

	if(dateNow === null) {
		let date = new Date().toLocaleDateString();
		setMonth(date.slice(3,5));
		setYear(date.slice(6,10));
		setDateNow(`${year}-${month}`);
	}
	
	const dispatch = useDispatch();
	console.log(month);
	console.log(year);

	console.log(dateNow);
	const data = dispatch(getDataTransaction(`${year}-${month}`));
	console.log(data);

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
            <Icons
              name="arrow-left"
              className="Style.month_switchSvgLeft"
              color="#ff751d"
              width="4"
              height="10"
            />
            <p className={Style.month_switchTextBig}>{year}</p>
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
