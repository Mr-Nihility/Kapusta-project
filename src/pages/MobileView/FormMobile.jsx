import React from 'react';
import { Icons } from '../../components/Icons/Icons';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentDate } from 'redux/date/date-selector';
//------------------------------------------------//

export default function FormMobile() {
  const currentDate = useSelector(getCurrentDate);

  return (
    <div>
      <NavLink to="/kapusta-project/main">
        <Icons
          name="long-arrow-left"
          className=""
          color="#FF751D"
          width="18"
          height="12"
        />
      </NavLink>
      <TransactionForm isRenderDate={false} />
    </div>
  );
}
