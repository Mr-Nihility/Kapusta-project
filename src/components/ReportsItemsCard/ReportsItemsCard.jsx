import Style from './ReportsItemsCard.module.css';
import { Icons } from '../Icons/IconsForListStatisticts';
import { useState } from 'react';

export const ReportsItemsCard = ({
  total,
  category,
  id,
  item,
  handelClickOnCategory,
}) => {
  const [active, setActive] = useState('');
  const addActiveClass = id => {
    console.log(id);

    // if (e.currentTarget.tagName === 'LI') {
    //   // e.currentTarget.style.backgroundColor = 'red';
    //   // classList?.add('active');
    // }
    // handelClickOnCategory(item);
    setActive(id);
    //  if(e.target.classList.contains("active")){
    //  }else{

    //  }
  };
  console.log(active);
  return (
    <li
      className={Style.item_spend + ' ' + (active === id ? Style.active : '')}
      key={id}
      onClick={() => {
        addActiveClass(id);
        handelClickOnCategory(item);
      }}
    >
      <p className={Style.item_text}>{total + '.00'}</p>
      <div className={Style.item_backgroundDiv}>
        <div className={Style.item_backgroundSvg}> </div>
        <Icons
          name={category}
          className={Style.item_spendSvg}
          color="#071F41"
          width="56"
          height="56"
        />
      </div>

      <p className={Style.item_textDown}>{category}</p>
    </li>
  );
};
