import { combineReducers } from 'redux';
import snackbar from './reducers/snackbar';

const MessageCombinedReducers = combineReducers({
  snackbar,
});

export default MessageCombinedReducers;
