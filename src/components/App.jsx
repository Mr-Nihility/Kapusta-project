import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser, googleAuthUser } from 'redux/auth/auth-operations';
// import { getIsLogged } from 'redux/auth/auth-selectors';
import { SignInView } from '../pages/SignInView/SignInView';
// import BalancePage from 'pages/Balance/BalancePage';
import { NotFound } from 'pages/NotFound/NotFound';
import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
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
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  // console.log(accessToken, '+', refreshToken, '+', sid);

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    const sid = searchParams.get('sid');

    if (!accessToken) return;
    dispatch(googleAuthUser({ accessToken, refreshToken, sid }));

    navigate('/kapusta-project/expenses');
  }, [searchParams, dispatch, navigate]);

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
