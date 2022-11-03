// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from '../features/userSlice'

// export default configureStore({
//     reducer:{
//         user: userReducer,
//     }
// })

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import userReducer from "../features/userSlice";
const logger = createLogger();

const reducer = combineReducers({
  state: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});

export const persistor = persistStore(store);
