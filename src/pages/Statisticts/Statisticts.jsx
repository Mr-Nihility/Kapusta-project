import { Link } from "react-router-dom"
import { Style } from './Statisticts.module.css'
export const Statisticts = () => {
	return (
		<>
			<Link to='/' className={Style.button_goHome}>Main page</Link>
			<div className={Style.infoForUserBalance}>
				<p className={Style.textBalance}>Balance: <span className={Style.span_balance}>'{}'</span></p>
				<button className={Style.button_confirm}>CONFIRM</button>
			</div>
			<div className={Style.month_switch}>
				<p className={Style.month_switchText}>Current period:</p>
				<p className={Style.month_switchTextBig}><span className={Style.month_switch}></span>November 2019<span className={Style.month_switch}></span></p>
			</div>
		</>
	)
}