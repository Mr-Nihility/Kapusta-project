import { Balance } from 'components/Balance/Balance';
import Navigation from 'components/Navigation/Navigation';
import { ReportBtn } from 'components/ReportBtn/ReportBtn';
import Tablelist from 'components/TableList/TableList';
import Styles from '../Balance/BalancePage.module.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from 'redux/auth/auth-selectors';
import { deleteTrancaction } from 'redux/transaction/transaction-operations';
import DatePickerComponent from 'components/DatePickerComponent/DatePickerComponent';

//---------------------------------------------------------------//
export default function MainMobile() {
  const [date, setDate] = useState(new Date());
  console.log(date);
  const dispatch = useDispatch();
  const allTransactions = useSelector(getAllTransactions);
  const deleteItem = id => {
    dispatch(deleteTrancaction(id));
  };
  const handleChangedate = changeDate => {
    setDate(changeDate);
  };

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
      <Navigation
        expenses={'create-transaction'}
        income={'create-transaction'}
      />
    </>
  );
}
