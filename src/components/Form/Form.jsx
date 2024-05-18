import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

export const Form = ({ onSubmit }) => {
  const [values, setValues] = useState('');

  const handleChange = e => {
    setValues(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(values);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        onChange={handleChange}
        value={values}
      />
    </form>
  );
};
