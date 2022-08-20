import { useSelector } from 'react-redux';
import Style from './InfiForBalance.module.css';
import {
  incomeSelector,
  expensesSelector,
} from 'redux/reports/reports-selector';

export const InfoForBalance = () => {
  const income = useSelector(incomeSelector);
  const expenses = useSelector(expensesSelector);

  return (
    <>
      {/* <div className={Style}> */}
				
					<tbody className={Style.Сontainer}>
					<td className={Style.textSpent}>Expenses:
						<p className={Style.text_spentMoney}>- {expenses}.00 грн.</p>
					</td>
					<td className={Style.textEarned}>Income:
						<p className={Style.text_earnedMoney}>+ {income}.00 грн.</p>
					</td>
					</tbody>
      {/* </div> */}
    </>
  );
};
