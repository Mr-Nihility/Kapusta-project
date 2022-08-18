import { useState } from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../TransactionForm/TransactionForm.module.css';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
// import svg from '../../images/svg-icon-project/symbol-defs.svg'
// import saa from '../../images/svg-icon-project.svg'
export const TransactionForm = ({ engCategory, rCategory, onSubmit }) => {
  // const myDate =new Date()

  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(null);
  // const [month, setMonth] = useState('');
  // const [day, setDay] = useState('');
  // const [year, setYear] = useState('');
  // const dispatch = useDispatch();
  // console.log(year, month, day );
  // const onChangeDate=(Date)=>{

  //    setDate(Date)
  // }
  const handlerSubmit = evt => {
    evt.preventDefault();
    onSubmit({ description, category, amount, date });
    setDescription('');
    setCategory('');
    setAmount('');
  };

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'description':
        setDescription(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'amount':
        setAmount(Number(value) ? Number(value) : 0);
        break;
      default:
        return '';
    }
    // getDate(date)
  };

  const validate = Yup.object({
    amount: Yup.string().required('Amount is required field'),
    description: Yup.string()
      .min(3, 'Description must be at least 3 charaters')
      .required('Description is required'),
  });

  return (
    <>
      <Formik
        initialValues={{
          amount: '',
          description: '',
        }}
        validationSchema={validate}
      >
        <Form className={styles.form} onSubmit={handlerSubmit}>
          {/* <DatePicker
          dateFormat="yyyy/dd/MM"
          // selected={new Date()}
          maxDate={new Date()}
          onChange={date => {
            // setDate(date)
            setYear(date.getFullYear());
            setDay(date.getDay())
            setMonth(date.getMonth())
          }}
        /> */}

          <input
            max={new Date()}
            type="date"
            name="date"
            onChange={e => setDate(e.target.value)}
            required
          />
          <input
            className={styles.description}
            required
            name="description"
            value={description}
            type="text"
            placeholder="Product description"
            onChange={onChange}
          />

          <div className={styles.wrapper}>
            <select
              className={styles.selected}
              required
              value={category}
              onChange={onChange}
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
          <input
            className={styles.amount}
            required
            name="amount"
            value={amount}
            type="text"
            placeholder="0,00"
            onChange={onChange}
          />

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
      </Formik>
    </>
  );
};
