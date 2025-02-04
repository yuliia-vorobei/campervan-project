import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import transportSlice from "./transportation/transportSlice.js";
import filtersSlice from "./filters/filtersSlice.js";
import favoriteSlice from "./favorite/favoriteSlice.js";
export const store = configureStore({
  reducer: {
    transport: transportSlice,
    favorite: favoriteSlice,
    filters: filtersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
