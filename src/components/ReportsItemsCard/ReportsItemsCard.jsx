import Style from './ReportsItemsCard.module.css';
import { Icons } from '../Icons/IconsForListStatisticts.js';
import { useState } from 'react';

export const ReportsItemsCard = ({total, category, id}) => {
	const [idEl, setIdEl] =useState('');
	const [categoryEl, setCategoryEl] =useState('');
	console.log(idEl);
	console.log(categoryEl);

  const handelClickOnCategory = (id, category ) => {
		console.log(id, category);
		setIdEl(id);
		setCategoryEl(category);
	}
	
	return (
      <li className={Style.item_spend} key={id} onClick={() =>handelClickOnCategory(id, category)}>
        <p className={Style.item_text}>{total + '.00'}</p> 
          <Icons 
					  name={category}
					  className={Style.item_spendSvg}
					  color="#000000"
            height="56"
				  />
        <p className={Style.item_textDown}>{category}</p>
      </li>
  );
};