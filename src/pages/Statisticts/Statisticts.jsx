import { NavStatis } from '../../components/NavStatis/NavStatis';
import { InfoForBalance } from '../../components/InfoForBalance/InfoForBalance';
import { SpendingMoneyStatisticts } from '../../components/SpendingMoneyStatisticts/SpendingMonStat';
import { Chart } from 'components/Chart/Chart';
import { useState } from 'react';
import styles from '../../components/SpendingMoneyStatisticts/SpendingMonStat.module.css';
import { ReportsItemsCard } from 'components/ReportsItemsCard/ReportsItemsCard';

export const Statisticts = () => {
  const [itemEl, setItemEL] = useState([]);
  console.log(itemEl);

  const handelClickOnCategory = item => {
    setItemEL(item);
    ReportsItemsCard.addClass('active');
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
        />
        {!!itemEl.length && <Chart itemEl={itemEl} />}
      </div>
    </>
  );
};
