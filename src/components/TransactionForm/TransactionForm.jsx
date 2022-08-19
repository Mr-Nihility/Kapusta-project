import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../TransactionForm/TransactionForm.module.css';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import svg from '../../images/svg-icon-project/symbol-defs.svg';

// import saa from '../../images/svg-icon-project.svg';
//----------------------------------------------------------------------------//

export const TransactionForm = ({ engCategory, rCategory, onSubmit }) => {
  const [date, setDate] = useState(new Date());

  const handlerSubmit = evt => {
    evt.preventDefault();

    const { date: x, description, amount, category } = evt.target.elements;

    const date = x.value.replaceAll('.', '-');

    onSubmit({
      description: description.value,
      category: category.value,
      amount: Number(amount.value),
      date,
    });
    evt.target.reset();
  };

  const validate = Yup.object().shape({
    amount: Yup.number().min(2).required('Required'),
    description: Yup.string()
      .min(3, 'Must be at least 3 charaters')
      .required('Required'),
    category: Yup.string().required(),
  });

  return (
    <>
      <Formik
        initialValues={{
          amount: '',
          description: '',
          category: '',
        }}
        validationSchema={validate}
      >
        {({
          errors,
          touched,
          isValid,
          dirty,
          handleChange,
          handleReset,
          values,
        }) => {
          return (
            <Form className={styles.form} onSubmit={handlerSubmit}>
              <label className={styles.label}>
                <svg className={styles.iconCalendar} width="20" height="20">
                  <use href={`${svg}#icon-calendar`}></use>
                </svg>
                <DatePicker
                  className={styles.date}
                  name="date"
                  dateFormat="yyyy.MM.dd"
                  selected={date}
                  onChange={changeDate => {
                    setDate(changeDate);
                  }}
                />
              </label>

              <label className={styles.label}>
                <Field
                  className={styles.description}
                  name="description"
                  type="text"
                  onChange={handleChange}
                  placeholder="Product description"
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
                  name="category"
                  onChange={handleChange}
                  // placeholder="Product category"
                >
                  <option
                    value=""
                    // disabled
                    label="Product category"
                    className={styles.placeholder}
                    selected
                    styles={{ color: '#C7CCDC' }}
                  >
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

                <svg className={styles.icon} width="15" height="10">
                  <use href={`${svg}#icon-arrow-to-down`}></use>
                </svg>
              </div>

              <label className={styles.label}>
                <svg className={styles.iconCalculator} width="20" height="20">
                  <use href={`${svg}#icon-calculator`}></use>
                </svg>
                <Field
                  onChange={handleChange}
                  className={styles.amount}
                  name="amount"
                  type="number"
                  placeholder="0,00"
                />
                {errors.amount && touched.amount && (
                  <span className={styles.errorMessage}>{errors.amount}</span>
                )}
              </label>

              <button
                className={styles.inputBtn}
                type="submit"
                disabled={!isValid || !dirty}
              >
                INPUT
              </button>
              <button
                className={styles.clearBtn}
                type="button"
                onClick={() => {
                  handleReset();
                }}
              >
                CLEAR
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
