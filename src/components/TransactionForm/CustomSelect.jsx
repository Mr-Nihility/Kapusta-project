import { useState } from 'react';
import styles from '../TransactionForm/CustomSelect.module.css';
import svg from '../../images/svg-icon-project/symbol-defs.svg';
export const CustomSelect = ({ category }) => {
  const [active, setActive] = useState(false);


  const onClick = evt => {
   if (evt.target.innerText==='Product Category') {
    setActive(!active);
    return
   }
   console.log(evt.target.innerText);
    setActive(!active);
  };


  
  const onSubmit = evt => {
    evt.preventDefault();
    // console.dir(evt.target.elements.);
  };
  return (
    // selectionIconRev
      <div onClick={onClick} className={styles.dropdown}>
        {!active?(<svg className={styles.selectionIcon} width="15" height="10">
                <use href={`${svg}#icon-arrow-to-down`}></use>
              </svg>):<svg className={styles.selectionIconRev} width="15" height="10">
                <use href={`${svg}#icon-arrow-to-down`}></use>
              </svg>}
      
        <div  className={styles.dropdownBtn}>Product Category
          <div className={styles.dropdownContent}>
            {active &&
              category.map((el, i) => {
                return (
                  <p key={i} className={styles.dropdownItem}>
                    {el}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    
  );
};
