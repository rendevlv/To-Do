import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import todoReducer from './features/todoSlice';


const persistConfig = {
  key: 'todos',
  storage: AsyncStorage,
};


const persistedTodoReducer = persistReducer(persistConfig, todoReducer);


const store = configureStore({
  reducer: {
    todos: persistedTodoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
