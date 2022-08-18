import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';
// import { getIsLogged } from 'redux/auth/auth-selectors';
import { SignInView } from '../pages/SignInView/SignInView';
// import BalancePage from 'pages/Balance/BalancePage';
import { NotFound } from 'pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
// import { Main } from 'pages/Main';
import SharedLayout from 'pages/SharedLayout';
import ExpensesView from 'pages/ExpensesView';
import { ReportView } from 'pages/ReportView';
import IncomeView from 'pages/IncomeView';
// import Tablelist from './TableList/TableList';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { getSuccessToken } from 'redux/auth/auth-selectors';
import { MainContainer } from './MainContainer/MainContainer';

//---------------------------------------------------------------//
export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getSuccessToken);
  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(getCurrentUser());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  //---//

  return (
    <>
      <Routes>
        <Route path="/kapusta-project/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute>
                <SignInView />
              </PublicRoute>
            }
          />
          <Route
            path={'expenses'}
            element={
              <PrivateRoute>
                <ExpensesView />
              </PrivateRoute>
            }
          />
          <Route
            path={'income'}
            element={
              <PrivateRoute>
                <IncomeView />
              </PrivateRoute>
            }
          />
          <Route
            path={'reports'}
            element={
              <PrivateRoute>
                <ReportView />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <MainContainer>
              <NotFound />
            </MainContainer>
          }
        />
      </Routes>
    </>
  );
};
