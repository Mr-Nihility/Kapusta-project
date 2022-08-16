import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { getIsLogged } from 'redux/auth/auth-selectors';
import { Modal } from 'pages/SignIn';
import { MainContainer } from './MainContainer/MainContainer';
import { Main } from 'pages/Main';

export const App = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector(getIsLogged);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {!isLogged ? <Modal /> : <Main />}
      <MainContainer />
    </div>
  );
};
