import React, { useState } from 'react';
import vvv from '../../images/svg-icon-project/symbol-defs.svg';
import s from '../TableList/TableList.module.css';
import { ConfirmationModal } from 'components/ConfirmationModal/ConfirmationModal';
import { getLoading } from 'redux/transaction/transactions-selectors';
import { useSelector } from 'react-redux';
import { LoaderLineTable } from 'components/Loaders/LoaderLine/LoaderLineTable';
//-----------------------------------------------------//
export default function TableItem({
  date,
  description,
  category,
  amount,

  id,
  type,
  categorys,
  delTrans,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDelete = id => {
    console.log('tableList', id);
    delTrans(id);
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const isLoading = useSelector(getLoading);
  console.log(isLoading);
  return (
    <>
      <tr className={s.tr}>
        <td className={s.date_td1}>{date}</td>
        <td className={s.description_td2}>{description}</td>
        <td className={s.category_td3}>{category}</td>

        <td className={type ? s.expense : s.income}>
          {categorys.length > 2 && <span>-</span>}
          {amount} грн.
        </td>
        <td className={s.date_td1}>
          <div className={s.svg} onClick={handleOpenModal}>
            <svg width="17" height="17" type="button">
              <use href={vvv + '#icon-trash-can'}></use>
            </svg>
          </div>
        </td>
      </tr>

      {isModalOpen && (
        <ConfirmationModal
          onSubmit={() => onDelete(id)}
          onClose={handleCloseModal}
          title="Are you sure?"
        />
      )}
      {isLoading && (
        <tr>
          <td>
            <LoaderLineTable />
          </td>
        </tr>
      )}
    </>
  );
}
