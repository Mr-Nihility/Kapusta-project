import Style from './InfiForBalance.module.css'
const a = 10000
export const InfoForBalance = () => {
	return (
		<>
			<div className={Style.Сontainer}>
				<p className={Style.textSpent}>Expenses: 
					<span className={Style.text_spentMoney}>
				   - {a}.00 грн.
					</span>
				</p>
				<div className={Style.decor}></div>
				<p className={Style.textEarned}>Income: 
					<span className={Style.text_earnedMoney}>
						+ {a}.00 грн.
					</span>
				</p>
			</div>
		</>
	)
}