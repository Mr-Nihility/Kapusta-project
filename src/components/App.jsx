import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser, googleAuthUser } from 'redux/auth/auth-operations';
import { lazy, Suspense } from 'react';
// import SignInView from '../pages/SignInView/SignInView';
// import { NotFound } from 'pages/NotFound/NotFound';
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout';
// import ExpensesView from 'pages/ExpenseView/ExpensesView';
// import  ReportView  from 'pages/ReportView';
// import IncomeView from 'pages/IncomeView';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { getIsLoading, getSuccessToken } from 'redux/auth/auth-selectors';
import { MainContainer } from './MainContainer/MainContainer';
import { LoaderLine } from './Loaders/LoaderLine/LoaderLine';
import Media from 'react-media';
// import MainMobile from 'pages/MobileView/MainMobile';
// import FormMobile from 'pages/MobileView/FormMobile';
//----------------------------------------------------------------------//

const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const MainMobile = lazy(() => import('pages/MobileView/MainMobile'));
const FormMobile = lazy(() => import('pages/MobileView/FormMobile'));
const SignInView = lazy(() => import('../pages/SignInView/SignInView'));
const IncomeView = lazy(() => import('pages/IncomeView'));
const ExpensesView = lazy(() => import('pages/ExpenseView/ExpensesView'));
const ReportView = lazy(() => import('pages/ReportView'));

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

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    const sid = searchParams.get('sid');

    if (!accessToken) return;
    dispatch(googleAuthUser({ accessToken, refreshToken, sid }));

    navigate('/kapusta-project/main');
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
                  <Suspense fallback={<LoaderLine />}>
                    <SignInView />
                  </Suspense>
                </PublicRoute>
              }
            />
            <Route path="main">
              <Route
                index
                element={
                  <PrivateRoute>
                    <Media
                      queries={{
                        small: '(max-width: 767.92px)',
                        medium: '(min-width: 768px)',
                      }}
                    >
                      {({ small, medium }) => (
                        <>
                          {small && (
                            <Suspense fallback={<LoaderLine />}>
                              <MainMobile />
                            </Suspense>
                          )}
                          {medium && (
                            <Suspense fallback={<LoaderLine />}>
                              <ExpensesView />
                            </Suspense>
                          )}
                        </>
                      )}
                    </Media>
                  </PrivateRoute>
                }
              />
              <Route
                path={'income'}
                element={
                  <PrivateRoute>
                    <Media
                      queries={{
                        small: '(min-width: 319px) and (max-width: 767.92px)',
                        medium: '(min-width: 768px)',
                      }}
                    >
                      {({ small, medium }) => (
                        <>
                          {small && <Navigate to="/kapusta-project/main" />}
                          {medium && (
                            <Suspense fallback={<LoaderLine />}>
                              <IncomeView />
                            </Suspense>
                          )}
                        </>
                      )}
                    </Media>
                  </PrivateRoute>
                }
              />
              <Route
                path={'create/:location'}
                element={
                  <PrivateRoute>
                    <Media
                      queries={{
                        small: '(min-width: 319px) and (max-width: 767.92px)',
                        medium: '(min-width: 768px)',
                      }}
                    >
                      {({ small, medium }) => (
                        <>
                          {small && (
                            <Suspense fallback={<LoaderLine />}>
                              <FormMobile />
                            </Suspense>
                          )}
                          {medium && <Navigate to="/kapusta-project/main" />}
                        </>
                      )}
                    </Media>
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path={'reports'}
              element={
                <PrivateRoute>
                  <Suspense fallback={<LoaderLine />}>
                    <ReportView />
                  </Suspense>
                </PrivateRoute>
              }
            />
          </Route>

          <Route
            path="*"
            element={
              <Suspense fallback={<LoaderLine />}>
                <MainContainer>
                  <NotFound />
                </MainContainer>
              </Suspense>
            }
          />
        </Routes>
      )}
    </>
  );
};
