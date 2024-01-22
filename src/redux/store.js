import { legacy_createStore as createStore, combineReducers } from "redux";
import { companyReducer } from "./companyReducer";
import { persistStore,persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig= {
    key:"persist-sotre",
    storage,
}

const rootReducer = combineReducers({
  company: companyReducer,
});

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store = createStore(persistedReducer);
export const persister= persistStore(store)
