import { Chart } from 'components/Chart/Chart';
import React from 'react';
import BalancePage from './Balance/BalancePage';

export default function ReportView() {
  return (
    <div>
      ReportView
      <BalancePage />
      <Chart />
    </div>
  );
}
