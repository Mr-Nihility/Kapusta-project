import { NavStatis } from '../../components/NavStatis/NavStatis';
import { InfoForBalance } from '../../components/InfoForBalance/InfoForBalance';
import { SpendingMoneyStatisticts } from '../../components/SpendingMoneyStatisticts/SpendingMonStat';
import { Chart } from 'components/Chart/Chart';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  incomeDataSelector,
  expensesDataSelector,
} from 'redux/reports/reports-selector';
//-------------------------------------------------------------------//
export const Statisticts = () => {
  const expenses = useSelector(incomeDataSelector);
  const incomes = useSelector(expensesDataSelector);

  const exCate = Object.entries(expenses);
  const inCate = Object.entries(incomes);

  const [itemEl, setItemEl] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [arrow, setArrow] = useState(true);

  useEffect(() => {
    console.log(arrow);
    if (arrow) {
      setItemEl(Object.entries(incomes)[0]);
    } else {
      setItemEl(Object.entries(expenses)[0]);
    }

    setCurrentId(0);
  }, [incomes, arrow, expenses]);

  const handelArrow = () => {
    setArrow(ps => !ps);
  };

  const handelClickOnCategory = (item, currentIdItem) => {
    setItemEl(item);
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
