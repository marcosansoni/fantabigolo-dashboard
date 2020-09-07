import { combineReducers } from 'redux';
import snackbar from './reducers/snackbar';

const messageCombinedReducers = combineReducers({
  snackbar,
});

export default messageCombinedReducers;
