import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../images/logo/logo@2x.png';
//-----------------------------------------------------------//
export default function Logo() {
  return (
    <NavLink to="/">
      <img src={image} alt="logo" width="90" height="31" />
    </NavLink>
  );
}
