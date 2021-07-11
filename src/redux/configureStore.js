import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { Tasks } from './reducers/tasks'
import { addFinalResult } from "./reducers/addFinalResult";
import { addUserName } from "./reducers/addUserName";

const rootReducer = combineReducers({
  tasks: Tasks,
  finalResult: addFinalResult,
  userName: addUserName,
  form: formReducer
})

const store = createStore(rootReducer)

export default store;
