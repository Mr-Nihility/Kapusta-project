import { Chart } from 'components/Chart/Chart';
import React from 'react';
import BalancePage from './Balance/BalancePage';
import { Statisticts } from './Statisticts/Statisticts';
export default function ReportView() {
  return (
    <div>
      <BalancePage />
			<Statisticts />
      <Chart></Chart>
    </div>
  );
}
