import PropTypes from 'prop-types';
import style from './Filter.module.css';

export const Filter = ({ handelFilter }) => {
  return (
    <>
      <form className={style.form}>
        <label className={style.label}>Find contact by name</label>
        <input
          onChange={handelFilter}
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </form>
    </>
  );
};

Filter.propTypes = {
  handelFilter: PropTypes.func,
};
