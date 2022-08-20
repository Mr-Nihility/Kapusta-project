import Style from './SpendingMonStat.module.css';
import { Icons } from '../../components/Icons/Icons';
import { useSelector } from 'react-redux';
// import {
//   incomeDataSelector,
//   expensesDataSelector,
// } from 'redux/reports/reports-selector';
// import { useState } from 'react';
import { ReportsItemsCard } from 'components/ReportsItemsCard/ReportsItemsCard';
// import { nanoid } from 'nanoid';
import { getSuccessToken } from 'redux/auth/auth-selectors';

//-------------------------------------------------------------------------------//
export const SpendingMoneyStatisticts = ({
  handelClickOnCategory,
  handelArrow,
  arrow,
  currentId,
  exCate,
  inCate,
}) => {
  const token = useSelector(getSuccessToken);

  return (
    <>
      {token && (
        <div className={Style.spend_stat}>
          <div className={Style.spend_statPosition}>
            <div className={Style.spend_stat_left} onClick={handelArrow}>
              <Icons
                name="arrow-left"
                className="Style.spend_statSvg"
                color="#ff751d"
                width="6"
                height="14"
              />
            </div>
            {arrow ? (
              <p className={Style.spend_statTextBig}>EXPENSES</p>
            ) : (
              <p className={Style.spend_statTextBig}>INCOMES</p>
            )}
            <div className={Style.spend_stat_right} onClick={handelArrow}>
              <Icons
                name="arrow-right"
                className="Style.spend_statSvg"
                color="#ff751d"
                width="6"
                height="14"
              />
            </div>
          </div>
          <div>
            {arrow ? (
              <ul className={Style.list_spend}>
                {inCate.map((item, i) => {
                  return (
                    <ReportsItemsCard
                      id={i}
                      key={i}
                      currentItem={currentId}
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
                {!!exCate.length ? (
                  exCate.map((item, i) => {
                    return (
                      <ReportsItemsCard
                        id={i}
                        key={i}
                        total={item[1].total}
                        category={item[0]}
                        currentItem={currentId}
                        item={item}
                        handelClickOnCategory={handelClickOnCategory}
                      />
                    );
                  })
                ) : (
                  <p> No reports</p>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};
