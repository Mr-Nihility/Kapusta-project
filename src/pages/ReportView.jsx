import React from 'react';
import { Statisticts } from './Statisticts/Statisticts';
export default function ReportView({ screenWidth }) {
  return (
    <div>
      <Statisticts screenWidth={screenWidth} />
    </div>
  );
}
