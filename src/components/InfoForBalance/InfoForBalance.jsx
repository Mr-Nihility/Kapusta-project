import { useSelector } from 'react-redux'
import Style from './InfiForBalance.module.css'
import { incomeSelector, expensesSelector } from 'redux/reports/reports-selector';

export const InfoForBalance = () => {
const income = useSelector(incomeSelector)
const expenses = useSelector(expensesSelector)

	return (
		<>
			<div className={Style.Сontainer}>
				<p className={Style.textSpent}>Expenses: 
					<span className={Style.text_spentMoney}>
				   - {expenses}.00 грн.
					</span>
				</p>
				<div className={Style.decor}></div>
				<p className={Style.textEarned}>Income: 
					<span className={Style.text_earnedMoney}>
						+ {income}.00 грн.
					</span>
				</p>
			</div>
		</>
	)
}