import Style from './SpendingMonStat.module.css'

export const SpendingMoneyStatisticts = () => {
	return (
		<>
			<div className={Style.spend_stat}>
          <p className={Style.spend_statTextBig}>
            <svg className={Style.spend_statSvg}>
              <use
                className={Style.spend_statUse}
                href='../../svg/svg-icon-project/symbol-defs.svg#icon-arrow-left'//https://polyakovdmitriy.ru/svg-v-react/
              />
            </svg>
            EXPENSES
            <svg className={Style.spend_statSvg}>
              <use
                className={Style.spend_stathUse}
                href="../../svg/svg-icon-project/symbol-defs.svg#icon-arrow-right"
              />
            </svg>
          </p>
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
	)
}