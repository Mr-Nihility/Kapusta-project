// import Style from './Statisticts.module.css'
import { NavStatis } from './NavStatis/NavStatis'
import { InfoForBalance } from './InfoForBalance/InfoForBalance'
import { SpendingMoneyStatisticts } from './SpendingMoneyStatisticts/SpendingMonStat'
import { StatistictsSchedule } from './StatistictsSchedule/StactistictsSchedule'
export const Statisticts = () => {
	return (
		<>
			<NavStatis />
			<InfoForBalance />
			<SpendingMoneyStatisticts />
			<StatistictsSchedule />
		</>
	)
}