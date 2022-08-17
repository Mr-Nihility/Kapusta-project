import Style from './SpendingMonStat.module.css';
import { Icons } from '../../components/Icons/Icons';

export const SpendingMoneyStatisticts = () => {
  return (
    <>
      <div className={Style.spend_stat}>
        <div className={Style.spend_statPosition}>
          <Icons
            name="arrow-left"
            className="Style.spend_statSvg"
            color="#ff751d"
            width="4"
            height="10"
          />
          <p className={Style.spend_statTextBig}>EXPENSES</p>
          <Icons
            name="arrow-right"
            className="Style.spend_statSvg"
            color="#ff751d"
            width="4"
            height="10"
          />
        </div>
        <ul className={Style.list_spend}>
          <li className={Style.item_spend}>
            <p className={Style.item_text}>5000.00</p>
            <svg className={Style.item_statSvg}>
              <use
                className={Style.item_stathUse}
                href="../../svg/svg-icon-project/symbol-defs.svg#icon-arrow-right"
              />
            </svg>
            <p className={Style.item_text}>Products</p>
          </li>
        </ul>
      </div>
    </>
  );
};
