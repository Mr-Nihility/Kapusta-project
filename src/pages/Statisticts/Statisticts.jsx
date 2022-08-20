import { NavStatis } from '../../components/NavStatis/NavStatis';
import { InfoForBalance } from '../../components/InfoForBalance/InfoForBalance';
import { SpendingMoneyStatisticts } from '../../components/SpendingMoneyStatisticts/SpendingMonStat';
import { Chart } from 'components/Chart/Chart';
import { useState } from 'react';
// import {
//   incomeDataSelector,
//   expensesDataSelector,
// } from 'redux/reports/reports-selector';

export const Statisticts = ({ screenWidth }) => {
  const [itemEl, setItemEL] = useState([]);

  const [arrow, setArrow] = useState(true);

  // const expenses = useSelector(incomeDataSelector);
  // const incomes = useSelector(expensesDataSelector);
  // const exCate = Object.entries(expenses);
  // const inCate = Object.entries(incomes);
  // console.log(arrow);
  // const token = useSelector(getSuccessToken);

  const handelArrow = () => {
    setArrow(ps => !ps);
  };

  const handelClickOnCategory = item => {
    setItemEL(item);
  };

  return (
    <>
      <NavStatis />
      <div
        style={{
          maxWidth: '1034px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '32px 32px 61px 32px',

          borderRadius: '0px 30px 30px 30px',
        }}
      >
        <InfoForBalance />
        <SpendingMoneyStatisticts
          handelClickOnCategory={handelClickOnCategory}
          handelArrow={handelArrow}
          arrow={arrow}
        />
        {!!itemEl.length && <Chart itemEl={itemEl} arrow={arrow} />}
      </div>
    </>
  );
};
