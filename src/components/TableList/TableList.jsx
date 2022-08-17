import s from './TableList.module.css';


// import { TransactionForm } from 'components/TransactionForm/TransactionForm';


const Tablelist = () => {
  
  return (
    <>
      {/* <TransactionForm /> */}
      <div className={s.table_container}>
        <div className={s.table_wrapper}>
          <table className={s.table}>
            <thead className={s.table_thead}>
              <tr>
                <th className={s.table_th1}>Date</th>
                <th className={s.table_th2}>Description</th>
                <th className={s.table_th3}>Category</th>
                <th className={s.table_th4}>Summ</th>
              </tr>
            </thead>
            <tbody className={s.table_tbody}>
              <tr>
                <td className={s.date_td1}>05.09.2019</td>
                <td className={s.description_td2}>test1</td>
                <td className={s.category_td3}>казино</td>
                <td className={s.summ_td4}>230</td>
              </tr>
              <tr>
                <td className={s.date_td1}>05.09.2019</td>
                <td className={s.description_td2}>test2</td>
                <td className={s.category_td3}>Рояль</td>
                <td className={s.summ_td4}>400</td>
              </tr>
              <tr>
                <td className={s.date_td1}>05.09.2019</td>
                <td className={s.description_td2}>test3</td>
                <td className={s.category_td3}>Зп</td>
                <td className={s.summ_td4}>23</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={s.summary_wrapper}>
          <table className={s.summary_table}>
            <caption className={s.summary_head}>Summary</caption>

            <tbody className={s.summary_tbody}>
              <tr>
                <td className={s.summary_td1}>NOVEMBER</td>
                <td className={s.summary_td2}>200</td>
              </tr>
              <tr>
                <td className={s.summary_td1}>JUNE</td>
                <td className={s.summary_td2}>20000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tablelist;
