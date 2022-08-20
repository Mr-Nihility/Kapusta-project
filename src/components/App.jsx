import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser, googleAuthUser } from 'redux/auth/auth-operations';
// import { getIsLogged } from 'redux/auth/auth-selectors';
import { SignInView } from '../pages/SignInView/SignInView';
import { NotFound } from 'pages/NotFound/NotFound';
import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout';
import ExpensesView from 'pages/ExpenseView/ExpensesView';
import { ReportView } from 'pages/ReportView';
import IncomeView from 'pages/IncomeView';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { getIsLoading, getSuccessToken } from 'redux/auth/auth-selectors';
import { MainContainer } from './MainContainer/MainContainer';
import { LoaderLine } from './Loaders/LoaderLine/LoaderLine';

import MainMobile from 'pages/MobileView/MainMobile';
import FormMobile from 'pages/MobileView/FormMobile';
// import Media from 'react-media';

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

  const isLoading = useSelector(getIsLoading);

  return (
    <>
      {isLoading ? (
        <LoaderLine />
      ) : (
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
            {true ? (
              <>
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
              </>
            ) : (
              <>
                <Route
                  path={'main'}
                  element={
                    <PrivateRoute>
                      <MainMobile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={'create-transaction'}
                  element={
                    <PrivateRoute>
                      <FormMobile />
                    </PrivateRoute>
                  }
                />
              </>
            )}

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
      )}
    </>
  );
};
