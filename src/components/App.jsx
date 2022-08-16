import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';
// import { getIsLogged } from 'redux/auth/auth-selectors';
import { Modal } from 'pages/SignIn';

import { MainContainer } from './MainContainer/MainContainer';
import { Route, Routes } from 'react-router-dom';
// import { Main } from 'pages/Main';
import SharedLayout from 'pages/SharedLayout';
import Tablelist from './TableList/TableList';
// import PublicRoute from './PublicRoute/PublicRoute';
// import PrivateRoute from './PrivateRoute/PrivateRoute';
//---------------------------------------------------------------//
export const App = () => {
  const dispatch = useDispatch();

  // const isLogged = useSelector(getIsLogged);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <div>
        <Routes>
          <Route path="/kapusta-project/" element={<SharedLayout />}>
            <Route index element={<Modal />} />
            <Route path={'expenses'} element={''}>
              <Route path={'expenses'} element={''} />
            </Route>
          </Route>
        </Routes>

        {/* {!isLogged ? : <Main />} */}
        <Tablelist />
        <MainContainer />
      </div>
    </>
  );
};

/**
 * 
 * 
 *  <Routes>
            <Route path="/goit-react-hw-08-phonebook/" element={<LayOut />}>
              <Route index element={<HomeView />} />
              <Route
                path="register"
                element={
                  <PublicRoute>
                    <RegistrationView />
                  </PublicRoute>
                }
              >
              </Route>
              <Route
                path="login"
                element={
                  <PublicRoute>
                    <LoginView />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsView />
                  </PrivateRoute>
                }
              >
                <Route
                  path="add"
                  element={
                    <Container title="Add contact">
                      <Form />
                    </Container>
                  }
                ></Route>
                <Route path="search" element={<Filter />}></Route>
              </Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
 */
