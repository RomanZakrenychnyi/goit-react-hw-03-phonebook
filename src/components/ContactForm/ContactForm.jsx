import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

export const ContactForm = ({ handleAddContact }) => {
  return (
    <form className={style.form} onSubmit={handleAddContact}>
      <label className={style.label} htmlFor="text">
        Name
      </label>
      <input
        className={style.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={style.label} htmlFor="text">
        Number
      </label>
      <input
        className={style.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={style.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  handleAddContact: PropTypes.func,
};
