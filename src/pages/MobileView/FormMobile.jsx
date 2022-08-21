import React, { useEffect } from 'react';
import { Icons } from '../../components/Icons/Icons';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentDate } from 'redux/date/date-selector';
import {
  getCategoriesExpanses,
  getCategoriesIncome,
} from 'redux/categories/catrgories-selectors';
import {
  addExpanses,
  addIncome,
  getExpanses,
} from 'redux/transaction/transaction-operations';
import {
  getExpansesCategories,
  getIncomeCategories,
} from 'redux/categories/catrgories-operation';
//------------------------------------------------//
const engCategoryExp = [
  'Products',
  'Alcohol',
  'Entertainment',
  'Health',
  'Transport',
  'Housing',
  'Technique',
  'Communal, communication',
  'Sports, hobbies',
  'Education',
  'Other',
];
const engCategoryInc = ['salary', 'additional income'];

export default function FormMobile() {
  const dispatch = useDispatch();
  //get location str
  const { location } = useParams();

  //getting categories
  const categoriesExpanses = useSelector(getCategoriesExpanses);
  const categoriesIncome = useSelector(getCategoriesIncome);
  console.log(categoriesExpanses);
  console.log(categoriesIncome);
  //get current date
  const currentDate = useSelector(getCurrentDate);
  console.log(currentDate);
  //useeffect

  useEffect(() => {
    dispatch(getExpansesCategories());
    dispatch(getIncomeCategories());
  }, [dispatch]);

  // submits
  const onSubmitExp = data => {
    console.log(data);
    // dispatch(addExpanses(data));
  };
  const onSubmitInc = data => {
    console.log(data);
    // dispatch(addIncome(data));
  };

  return (
    <div>
      <p> {`Current date :${currentDate}`}</p>
      <NavLink to="/kapusta-project/main">
        <Icons
          name="long-arrow-left"
          className=""
          color="#FF751D"
          width="18"
          height="12"
        />
      </NavLink>
      {location === 'expanse' ? (
        <TransactionForm
          isRenderDate={false}
          engCategory={engCategoryExp}
          rCategory={categoriesExpanses}
          onSubmit={onSubmitExp}
        />
      ) : (
        <TransactionForm
          isRenderDate={false}
          engCategory={engCategoryInc}
          rCategory={categoriesIncome}
          onSubmit={onSubmitInc}
        />
      )}
    </div>
  );
}
