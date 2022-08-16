import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newBalanceThunk } from 'redux/newBalance/nebBalanceThunk';
export const Balance = () => {
  const [name, setName] = useState('');
  console.log();
  const dispatch = useDispatch();
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      default:
        return;
    }
  };

  const handleClick = event => {
    event.preventDefault();
    dispatch(newBalanceThunk({ newBalance: name }));
  };
  return (
    <>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        Confirm
      </button>
    </>
  );
};
