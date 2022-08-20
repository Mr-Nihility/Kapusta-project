import { Balance } from 'components/Balance/Balance';
import Navigation from 'components/Navigation/Navigation';
import { ReportBtn } from 'components/ReportBtn/ReportBtn';
import Tablelist from 'components/TableList/TableList';
import Styles from '../Balance/BalancePage.module.css';
import React from 'react';

export default function MainMobile() {
  return (
    <>
      <div className={Styles.paddingTop}>
        <Balance />
        <ReportBtn />
      </div>

      <Tablelist />
      <Navigation />
    </>
  );
}
