import Style from './ReportsItemsCard.module.css';
import { Icons } from '../Icons/Icons';

export const ReportsItemsCard = ({
  total,
  category,
  id,
  item,
  handelClickOnCategory,
}) => {
  return (
    <li
      className={Style.item_spend}
      key={id}
      onClick={() => {
        handelClickOnCategory(item);
      }}
    >
      <p className={Style.item_text}>{total + '.00'}</p>
      <div className={Style.item_backgroundDiv}>
        <div className={Style.item_backgroundSvg}> </div>
        <Icons
          name={category}
          className={Style.item_spendSvg}
          color="#000000"
          width="56"
          height="56"
        />
      </div>

      <p className={Style.item_textDown}>{category}</p>
    </li>
  );
};
