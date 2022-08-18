import { useDispatch } from 'react-redux';
import { deleteTrancaction } from 'redux/transaction/transaction-operations';
import s from './TableList.module.css';

const Tablelist = ({ stats, list, type = false }) => {
  const month = Object.keys(stats);
  const monthValues = Object.values(stats);

  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteTrancaction(id));
  };
  return (
    <>
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
              {list.map(el => {
                console.log(el);
                return (
                  <tr key={el._id} id={el._id}>
                    <td className={s.date_td1}>{el.date}</td>
                    <td className={s.description_td2}>{el.description}</td>
                    <td className={s.category_td3}>{el.category}</td>

                    <td className={type ? s.expense : s.income}>
                      {el.amount} грн.
                    </td>
                    <td>
                      <input
                        value="del"
                        className={s.btn_delete}
                        type="button"
                        onClick={() => onDelete(el._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={s.summary_wrapper}>
          <table className={s.summary_table}>
            <caption className={s.summary_head}>Summary</caption>

            <tbody className={s.summary_tbody}>
              {month.map((el, i) => {
                return (
                  <tr key={i}>
                    <td className={s.summary_td1}>{el}</td>
                    <td className={s.summary_td2}>{monthValues[i]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tablelist;
