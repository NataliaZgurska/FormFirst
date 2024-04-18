import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectNameFilter);
  const filterContacts = contacts.filter(contact => {
    contact.name.includes(filter.toLowerCase());
  });

  return (
    <div>
      Contacts
      {/* <ul className={css.contactList}>
        {Array.isArray(filterContacts) &&
          filterContacts.map(contact => {
            return (
              <li key={contact.id}>
                <Contact contact={contact} />
              </li>
            );
          })}
      </ul> */}
    </div>
  );
};

export default ContactList;
