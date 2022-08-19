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
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(false);
  const addActiveClass = id => {
    // handelClickOnCategory(item);
    if (id === id) {
      setActive(!active);
      // setCurrent(!current);
    }

    // setActive(false);

    //  if(e.target.classList.contains("active")){
    //  }else{

    //  }
  };

  console.log(active);
  return (
    <li
      className={active && id === id ? Style.active : Style.item_spend}
      key={id}
      onClick={() => {
        handelClickOnCategory(item);
      }}
      onMouseDownCapture={e => {
        console.log(e.target);
        addActiveClass(id);
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
