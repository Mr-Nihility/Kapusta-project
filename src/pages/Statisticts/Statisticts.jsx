import { NavStatis } from '../../components/NavStatis/NavStatis';
import { InfoForBalance } from '../../components/InfoForBalance/InfoForBalance';
import { SpendingMoneyStatisticts } from '../../components/SpendingMoneyStatisticts/SpendingMonStat';
import { Chart } from 'components/Chart/Chart';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  incomeDataSelector,
  expensesDataSelector,
} from 'redux/reports/reports-selector';

export const Statisticts = ({ screenWidth }) => {
  const expenses = useSelector(incomeDataSelector);
  const incomes = useSelector(expensesDataSelector);
  const exCate = Object.entries(expenses);
  const inCate = Object.entries(incomes);

  const [itemEl, setItemEL] = useState(inCate[0]);
  const [currentId, setCurrentId] = useState(0);
  const [arrow, setArrow] = useState(true);

  // console.log(arrow);
  // const token = useSelector(getSuccessToken);

  const handelArrow = () => {
    setArrow(ps => !ps);
  };

  const handelClickOnCategory = (item, currentIdItem) => {
    setItemEL(item);
    setCurrentId(currentIdItem);
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
          currentId={currentId}
          exCate={exCate}
          inCate={inCate}
        />
        {!!itemEl?.length && <Chart itemEl={itemEl} arrow={arrow} />}
      </div>
    </>
  );
};
