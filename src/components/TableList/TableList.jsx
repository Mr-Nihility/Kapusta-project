import s from './TableList.module.css';
import vvv from '../../images/svg-icon-project/symbol-defs.svg';
const Tablelist = ({ stats, list, type = false, delTrans }) => {
  const month = Object.keys(stats);
  const monthValues = Object.values(stats);

  const onDelete = id => {
    delTrans(id);
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
                <th className={s.table_th5}></th>
              </tr>
            </thead>
            <tbody className={s.table_tbody}>
              {list.map(el => {
                return (
                  <tr key={el._id} id={el._id}>
                    <td className={s.date_td1}>{el.date}</td>
                    <td className={s.description_td2}>{el.description}</td>
                    <td className={s.category_td3}>{el.category}</td>

                    <td className={type ? s.expense : s.income}>
                      {el.amount} грн.
                    </td>
                    <td className={s.date_td1}>
                      {/* <input
                        value="del"
                        className={s.btn_delete}
                        type="button"
                        onClick={() => onDelete(el._id)}
                      /> */}
                      <div className={s.svg}>
                        <svg width="17" height="17">
                          <use href={vvv + '#icon-trash-can'}></use>
                        </svg>
                      </div>
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
              {/* eslint-disable-next-line array-callback-return */}
              {month.map((el, i) => {
                if (monthValues[i] !== 'N/A') {
                  return (
                    <tr key={i}>
                      <td className={s.summary_td1}>{el}</td>
                      <td className={s.summary_td2}>{monthValues[i]}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tablelist;
