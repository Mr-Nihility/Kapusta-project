import { Chart } from 'components/Chart/Chart';
import React from 'react';
import BalancePage from './Balance/BalancePage';
import { Statisticts } from './Statisticts/Statisticts';
export default function ReportView() {
  return (
    <div>
			<Statisticts />
      <Chart></Chart>
    </div>
  );
}
