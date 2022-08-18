import Style from './ReportsItemsCard.module.css';
import { Icons } from '../Icons/Icons';
export const ReportsItemsCard = ({total, category, id}) => {
  return (
      <li className={Style.item_spend} key={id}>
        <p className={Style.item_text}>{total + '.00'}</p> 
          <Icons 
					  name={category}
					  className={Style.item_spendSvg}
					  color="#000000"
            width="56"
            height="56"
				  />
        <p className={Style.item_textDown}>{category}</p>
      </li>
  );
};