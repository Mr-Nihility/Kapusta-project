import React from 'react';
import { useSize } from 'react-use';
export default function FormMobile() {
  const [i, { width }] = useSize(<div></div>);
  console.log(width);
  return (
    <div>
      {i}
      <div>width: {width}</div>
    </div>
  );
}
