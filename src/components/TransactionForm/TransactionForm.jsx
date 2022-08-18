import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../TransactionForm/TransactionForm.module.css';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
// import svg from '../../images/svg-icon-project/symbol-defs.svg'
// import saa from '../../images/svg-icon-project.svg'
export const TransactionForm = ({ engCategory, rCategory, onSubmit }) => {
  const [date, setDate] = useState(new Date());

  const handlerSubmit = evt => {
    evt.preventDefault();

    const { date: x, description, amount, category } = evt.target.elements;

    const date = x.value.replaceAll('.', '-');

    onSubmit({
      description: description.value,
      category: category.value,
      amount: amount.value,
      date,
    });
    evt.target.reset();
  };

  const validate = Yup.object({
    date: Yup.string().required('Pick date please'),
    amount: Yup.string().required('Required'),
    description: Yup.string()
      .min(3, 'Must be at least 3 charaters')
      .required('Required'),
  });

  return (
    <>
      <Formik
        initialValues={{
          amount: '',
          description: '',
          date: '',
          category: '',
        }}
        validationSchema={validate}
        validateOnBlur
      >
        {({ errors, touched }) => (
          <Form className={styles.form} onSubmit={handlerSubmit}>
            <DatePicker
              name="date"
              dateFormat="yyyy.MM.dd"
              selected={date}
              // maxDate={new Date()}
              onChange={changeDate => {
                setDate(changeDate);
              }}
            />
            {/* <label className={styles.label}>
              <Field
                max={new Date()}
                type="date"
                name="date"
                // onChange={e => setDate(e.target.value)}
                // required
              />
              {errors.date && touched.date && (
                <span className={styles.errorMessage}>{errors.date}</span>
              )}
            </label> */}
            <label className={styles.label}>
              <Field
                className={styles.description}
                // required
                name="description"
                // value={description}
                type="text"
                placeholder="Product description"
                // onChange={onChange}
              />
              {errors.description && touched.description && (
                <span className={styles.errorMessage}>
                  {errors.description}
                </span>
              )}
            </label>

            <div className={styles.wrapper}>
              <select
                className={styles.selected}
                // required
                // value={category}
                // onChange={onChange}
                name="category"
                placeholder="Product category"
              >
                <option disabled hidden value="">
                  Product category
                </option>

                {engCategory.map((el, i) => {
                  return (
                    <option 
                      key={i}
                      className={styles.placeholder}
                      value={rCategory && rCategory[i]}
                    >
                      {el}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* <svg className={styles.icon} width="15" height="10" fill='black'>
                <use href={`${svg}#icon-arrow-to-down`}  ></use>
              </svg> */}
            <label className={styles.label}>
              <Field
                className={styles.amount}
                // required
                name="amount"
                // value={amount}
                type="text"
                placeholder="0,00"
                // onChange={onChange}
              />
              {errors.amount && touched.amount && (
                <span className={styles.errorMessage}>{errors.amount}</span>
              )}
            </label>

            <button className={styles.inputBtn} type="submit">
              INPUT
            </button>
            <button
              className={styles.clearBtn}
              type="button"
              onClick={() => {
                // setDescription('');
                // setCategory('');
                // setAmount('');
              }}
            >
              CLEAR
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
