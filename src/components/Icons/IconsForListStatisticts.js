import React from 'react';
import IconsSVG from '../../svg/svg-list/symbol-defs.svg';

export const Icons = ({name, className, color, height}) => {
  return(
    <svg className={`${className}`} fill={color} height={height} >
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}