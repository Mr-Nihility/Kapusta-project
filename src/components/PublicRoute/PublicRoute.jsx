import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getSuccessToken } from 'redux/auth/auth-selectors';
// import { useSize } from 'react-use';
//-----------------------------------------------------------//

export default function PublicRoute({ children }) {
  const accountToken = useSelector(getSuccessToken);
  // const [, { width, height }] = useSize();
  // console.log(width);
  return !accountToken ? (
    children
  ) : (
    <Navigate to="/kapusta-project/expenses"></Navigate>
  );
}
