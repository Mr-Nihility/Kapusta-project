import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';
// import { getIsLogged } from 'redux/auth/auth-selectors';
import { SignInView } from '../pages/SignInView/SignInView';
// import BalancePage from 'pages/Balance/BalancePage';
import { MainContainer } from './MainContainer/MainContainer';
import { Route, Routes } from 'react-router-dom';
// import { Main } from 'pages/Main';
import SharedLayout from 'pages/SharedLayout';
import ExpensesView from 'pages/ExpensesView';
import ReportView from 'pages/ReportView';
import IncomeView from 'pages/IncomeView';
// import Tablelist from './TableList/TableList';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
//---------------------------------------------------------------//
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <MainContainer>
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
        </Routes>
      </MainContainer>
    </>
  );
};
