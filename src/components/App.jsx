import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { getIsLogged } from 'redux/auth/auth-selectors';
import { Modal } from 'pages/SignIn';
import { Main } from 'pages/Main';

export const App = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector(getIsLogged);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return <div>{!isLogged ? <Modal /> : <Main />}</div>;
};
