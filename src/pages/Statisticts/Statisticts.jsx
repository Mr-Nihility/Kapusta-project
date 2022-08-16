import { Link } from "react-router-dom"
import { Style } from './Statisticts.module.css'
export const Statisticts = () => {
	return (
		<>
			<Link to='/' className={Style.button_goHome}>Main page</Link>
			<div className={Style.infoForUserBalance}>
				<p className={Style.textBalance}></p>
			</div>
		</>
	)
}