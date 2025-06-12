import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import contactsReducer from "./contacts/contactsSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // no whitelist — персиститься все
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
