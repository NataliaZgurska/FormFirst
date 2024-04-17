import { createSlice } from '@reduxjs/toolkit';

const INITAL_STATE = {
  users: [],
  filter: '',
};

const mailboxSlice = createSlice({
  // Ім'я слайсу
  name: 'phoneBook',

  initialState: INITAL_STATE,

  reducers: {
    addUser(state, action) {
      state.users.push(action.payload); // 1️⃣
      // state.users = [...state.users, action.payload] - 2️⃣
    },
    deleteUser(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload); // 1️⃣
      //   const userIndex = state.users.findIndex(user => user.id === action.payload); - 2️⃣
      //   state.users.splice(userIndex, 1);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
