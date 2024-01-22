import { legacy_createStore as createStore, combineReducers } from "redux";
import { companyReducer } from "./companyReducer";

const rootReducer = combineReducers({
  company: companyReducer,
});

export const store = createStore(rootReducer);
