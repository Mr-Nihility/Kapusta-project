import { Balance } from 'components/Balance/Balance';
import Navigation from 'components/Navigation/Navigation';
import { ReportBtn } from 'components/ReportBtn/ReportBtn';
import Tablelist from 'components/TableList/TableList';
import Styles from '../Balance/BalancePage.module.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTransactions,
  getIsLogged,
  getStartBalance,
} from 'redux/auth/auth-selectors';
import { deleteTrancaction } from 'redux/transaction/transaction-operations';
import DatePickerComponent from 'components/DatePickerComponent/DatePickerComponent';
import { refreshUserInfo } from 'redux/auth/auth-operations';

//---------------------------------------------------------------//
export default function MainMobile() {
  const isLog = useSelector(getIsLogged);
  const bal = useSelector(getStartBalance);
  const [date, setDate] = useState(new Date());
  const allTransactions = useSelector(getAllTransactions);
  console.log(allTransactions);
  const dispatch = useDispatch();

  const deleteItem = id => {
    dispatch(deleteTrancaction(id))
      .unwrap()
      .then(() => {
        dispatch(refreshUserInfo());
      });
  };
  const handleChangedate = changeDate => {
    setDate(changeDate);
  };
  useEffect(() => {
    if (!isLog) return;
  }, [bal, isLog]);

  return (
    <>
      <div className={Styles.paddingTop}>
        <Balance />
        <ReportBtn />
        <DatePickerComponent
          name="date"
          selected={date}
          handler={handleChangedate}
        />
      </div>

      {!!allTransactions?.length && (
        <Tablelist list={allTransactions} delTrans={deleteItem} />
      )}
      <Navigation expenses={'create-expanse'} income={'create-income'} />
    </>
  );
}
