import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { getIsLogged } from 'redux/auth/auth-selectors';
import { Modal } from 'pages/SignIn';

import { MainContainer } from './MainContainer/MainContainer';

import { Main } from 'pages/Main';
import SharedLayout from 'pages/SharedLayout';

export const App = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector(getIsLogged);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

<<<<<<< Updated upstream
  
  return <div> <SharedLayout/>{!isLogged ? <Modal /> : <Main />}
  <MainContainer /></div>;

=======
  return (
    <div>
      <SharedLayout />
      {!isLogged ? <Modal /> : <Main />}
      <MainContainer />
      <Tablelist />
    </div>
  );
>>>>>>> Stashed changes
};
