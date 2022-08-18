import { render } from '@testing-library/react';
import Style from './ReportsItemsCard.mpdule.css';
// import { Icons } from 'components/Icons/Icons';
export const ReportsItemsCard = ({total, category, id}) => {
  return (
      <li className={Style.item_spend} key={id}>
        <p className={Style.item_text}>{total}</p> 
          {/* <Icons 
					  name={}
					  className={}
					  color="#000000"
            width=""
            height=""
				  /> */}
        <p className={Style.item_text}>{category}</p>
      </li>
  );
};