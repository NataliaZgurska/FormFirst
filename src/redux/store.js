import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { mailboxReducer } from './mailbox/mailboxReducer';
// import { timerReducer } from './timer/timerSlice';
import { phoneBookReducer } from './phoneBookSlice';

const phoneBookPeristConfig = {
  key: 'phoneBook',
  storage,
  whitelist: ['contacts'],
};

export const store = configureStore({
  reducer: {
    phoneBook: persistReducer(phoneBookPeristConfig, phoneBookReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
