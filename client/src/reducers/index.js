import { combineReducers } from 'redux';
import messages from './messages_reducer';
import user from './user_reducer';
//import auth from './auth_reducer';

const rootReducer = combineReducers({
  messages,
  user
});

export default rootReducer;