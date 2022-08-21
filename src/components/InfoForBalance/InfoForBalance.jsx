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
      <tbody className={Style.Сontainer}>
        <td className={Style.textSpent}>
          <p className={Style.textCategory}>Expenses:</p>
          <p className={Style.text_spentMoney}>- {expenses}.00 грн.</p>
        </td>
        <td className={Style.textEarned}>
          <p className={Style.textCategory}>Income:</p>
          <p className={Style.text_earnedMoney}>+ {income}.00 грн.</p>
        </td>
      </tbody>
    </>
  );
};
