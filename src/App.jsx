import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

// import initialContacts from './myContacts.json';
// import meestExpressUsers from '../meesExpress.json';
import { addUser, deleteUser, setFilter } from '../src/redux/phoneBookSlice';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.phoneBook.users);
  console.log(state);
  const filter = useSelector(state => state.phoneBook.filter);

  const onAddUser = formData => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    dispatch(addUser(finalUser));
  };

  const onDeleteUser = userId => {
    dispatch(deleteUser(userId));
  };

  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  const filteredUsers = useMemo(
    () =>
      users.filter(user => {
        return user.name.toLowerCase().includes(filter.toLowerCase());
      }),
    [filter, users]
  );
  //   const visibleContacts = contacts.filter(item =>
  //   item.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={onAddUser} />

      {/* <SearchBox value={filter} onFilter={setFilter} /> */}
      <ContactList contacts={filteredUsers} onDelete={onDeleteUser} />
    </div>
  );
}

export default App;
