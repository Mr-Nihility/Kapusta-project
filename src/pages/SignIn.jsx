import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn, signIn } from 'redux/auth/auth-operations';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import styles from './SignIn.module.css';
import { TextField } from 'components/SignIn/TextField';

export const Modal = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'email':
        setEmail(evt.target.value);
        break;
      case 'password':
        setPassword(evt.target.value);
        break;
      default:
        return;
    }
  };

  const handleSignIn = evt => {
    evt.preventDefault();

    const user = { email, password };

    dispatch(signIn(user));
  };

  const handleLogIn = async evt => {
    evt.preventDefault();

    const userToLogIn = { email, password };

    dispatch(logIn(userToLogIn));
  };

  return (
    <>
      <div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validate}
        >
          {formik => (
            <div>
              <Form className={styles.form} onChange={handleChange}>
                <TextField label="Email" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />
                <div className={styles.buttons}>
                  <button onClick={handleLogIn} className={styles.btn}>
                    Log in
                  </button>
                  <button onClick={handleSignIn} className={styles.btn}>
                    Sign in
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
        {/* <form onSubmit={handleSignIn} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="email"
          />
          <input
            className={styles.input}
            type="text"
            name="password"
            onChange={handleChange}
            placeholder="password"
          />
          <div className={styles.buttons}>
            <button onClick={handleLogIn} className={styles.btn}>
              Log in
            </button>
            <button onClick={handleSignIn} className={styles.btn}>
              Sign in
            </button>
          </div>
        </form> */}
      </div>
    </>
  );
};
