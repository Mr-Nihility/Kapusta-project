import { NavStatis } from '../../components/NavStatis/NavStatis';
import { InfoForBalance } from '../../components/InfoForBalance/InfoForBalance';
import { SpendingMoneyStatisticts } from '../../components/SpendingMoneyStatisticts/SpendingMonStat';
import { Chart } from 'components/Chart/Chart';
import { useState } from 'react';

export const Statisticts = () => {
  const [itemEl, setItemEL] = useState([]);
  console.log(itemEl);

  const handelClickOnCategory = item => {
    setItemEL(item);
  };

  return (
    <>
      <NavStatis />
      <InfoForBalance />
      <SpendingMoneyStatisticts handelClickOnCategory={handelClickOnCategory} />
      {itemEl.length && <Chart itemEl={itemEl} />}
    </>
  );
};
