import { combineReducers } from 'redux';
import addUserReducer from './addUserReducer';
// import editUserReducer from './editUserReducer';

// import deleteUserReducer from './deleteUserReducer';

const rootReducer = combineReducers({ addUserReducer });
export default rootReducer;

 

 