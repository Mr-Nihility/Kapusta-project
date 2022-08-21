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
    <table>
      <tbody className={Style.Сontainer}>
        <tr className={Style.textSpent}>
          <td>
            <span className={Style.textCategory}>Expenses:</span>

            <span className={Style.text_spentMoney}>- {expenses}.00 грн.</span>
          </td>
        </tr>
        <tr className={Style.textEarned}>
          <td>
            <span className={Style.textCategory}>Income:</span>

            <span className={Style.text_earnedMoney}>+ {income}.00 грн.</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
