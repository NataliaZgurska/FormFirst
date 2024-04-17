import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  const { id, name, number, favColor, description } = contact;

  return (
    <li className={css.contactItem}>
      <div className={css.contactItemTextContainer}>
        <p style={{ color: favColor }} className={css.contactItemText}>
          {name}
        </p>

        {/* <p className={css.contactItemText}>
          <FaPhone />
          {number}
        </p>
        <p className={css.contactItemText}>{description}</p> */}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
