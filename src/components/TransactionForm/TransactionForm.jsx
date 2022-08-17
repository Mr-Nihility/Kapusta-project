import { useState } from 'react';

// import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import styles from '../TransactionForm/TransactionForm.module.css';
import { useDispatch } from 'react-redux';
import getStoredState from 'redux-persist/es/getStoredState';

// import svg from '../../images/svg-icon-project/symbol-defs.svg'
// import saa from '../../images/svg-icon-project.svg'
export const TransactionForm = ({
  engCategory,
  rCategory,
  onSubmit,
  getInputs,
  getDate,
  onChange,
  description,
  category,
  amount,
}) => {
  // const myDate =new Date()

  // const [description, setDescription] = useState('');
  // const [category, setCategory] = useState('');
  // const [amount, setAmount] = useState('');
  const [date, setDate] = useState(null);
  // const [month, setMonth] = useState('');
  // const [day, setDay] = useState('');
  // const [year, setYear] = useState('');
  const dispatch = useDispatch();
  // console.log(year, month, day );
  // const onChangeDate=(Date)=>{

  //    setDate(Date)
  // }
  // const onSubmit = evt => {
  //   evt.preventDefault();

  //   dispatch(
  //     addExpanses({
  //       description: description,
  //       amount: amount,

  //       date: String(date),
  //       category: category,

  //     })
  //   );
  //   console.log(dispatch(getExpanses()));
  //   setDescription('');
  //   setCategory('');
  //   setAmount('');
  // };

  // getInputs(description,
  //   category,
  //   amount)
  // const onChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'description':
  //       setDescription(value);
  //       break;
  //     case 'category':
  //       setCategory(value);
  //       break;
  //     case 'amount':
  //       setAmount(value);
  //       break;
  //     default:
  //       return '';
  //   }
  //   // getDate(date)
  // };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        {/* <DatePicker
          dateFormat="yyyy/dd/MM"
          selected={new Date()}
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
          onChange={e => setDate(e.target.value)}
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
            <option className={styles.placeholder} value="Транспорт">
              {/* className={styles.placeholder} */}
              Transport
            </option>
            <option className={styles.placeholder} value="Продукты">
              Products
            </option>
            <option className={styles.placeholder} value="Здоровье">
              Health
            </option>
            <option className={styles.placeholder} value="Развлечения">
              Entertainment
            </option>
            <option className={styles.placeholder} value="Всё для дома">
              Housing
            </option>
            <option className={styles.placeholder} value="Техника">
              Technique
            </option>
            <option className={styles.placeholder} value="Коммуналка и связь">
              Communal, communication
            </option>
            <option className={styles.placeholder} value="Спорт и хобби">
              Sports, hobbies
            </option>
            <option className={styles.placeholder} value="Образование">
              Education
            </option>
            <option className={styles.placeholder} value="Прочее">
              Other
            </option>
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
      </form>
    </>
  );
};
