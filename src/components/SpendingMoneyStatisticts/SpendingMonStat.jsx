import Style from './SpendingMonStat.module.css';
import { Icons } from '../../components/Icons/Icons';
import { useSelector } from 'react-redux';
import {
  incomeDataSelector,
  expensesDataSelector,
} from 'redux/reports/reports-selector';
import { useState } from 'react';
import { ReportsItemsCard } from 'components/ReportsItemsCard/ReportsItemsCard';
import { nanoid } from 'nanoid';
import { getSuccessToken } from 'redux/auth/auth-selectors';

export const SpendingMoneyStatisticts = ({ handelClickOnCategory }) => {
  const [arrow, setArrow] = useState(true);
  const expenses = useSelector(incomeDataSelector);
  const incomes = useSelector(expensesDataSelector);
  const exCate = Object.entries(expenses);
  const inCate = Object.entries(incomes);

  const token = useSelector(getSuccessToken);

  const handelArrow = () => {
    setArrow(ps => !ps);
  };

  return (
    <>
      {token && (
        <div className={Style.spend_stat}>
          <div className={Style.spend_statPosition}>
            <div onClick={handelArrow}>
              <Icons
                name="arrow-left"
                className="Style.spend_statSvg"
                color="#ff751d"
                width="4"
                height="10"
              />
            </div>
            {arrow ? (
              <p className={Style.spend_statTextBig}>EXPENSES</p>
            ) : (
              <p className={Style.spend_statTextBig}>INCOMES</p>
            )}
            <div onClick={handelArrow}>
              <Icons
                name="arrow-right"
                className="Style.spend_statSvg"
                color="#ff751d"
                width="4"
                height="10"
              />
            </div>
          </div>
          <div>
            {arrow ? (
              <ul className={Style.list_spend}>
                {inCate.map(item => {
                  return (
                    <ReportsItemsCard
                      id={nanoid()}
                      key={nanoid()}
                      total={item[1].total}
                      category={item[0]}
                      item={item}
                      handelClickOnCategory={handelClickOnCategory}
                    />
                  );
                })}
              </ul>
            ) : (
              <ul className={Style.list_spend}>
                {exCate.map(item => {
                  return (
                    <ReportsItemsCard
                      id={nanoid()}
                      key={nanoid()}
                      total={item[1].total}
                      category={item[0]}
                      item={item}
                      handelClickOnCategory={handelClickOnCategory}
                    />
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};
