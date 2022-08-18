// import Style from './Statisticts.module.css'
import { NavStatis } from '../../components/NavStatis/NavStatis'
import { InfoForBalance } from '../../components/InfoForBalance/InfoForBalance'
import { SpendingMoneyStatisticts } from '../../components/SpendingMoneyStatisticts/SpendingMonStat'
// import { StatistictsSchedule } from '../../components/StatistictsSchedule/StactistictsSchedule'
export const Statisticts = () => {
	return (
		<>
			<NavStatis />
			<InfoForBalance />
			<SpendingMoneyStatisticts />
			{/* <StatistictsSchedule /> */}
		</>
	)
}