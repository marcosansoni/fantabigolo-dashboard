import { combineReducers } from 'redux';
import userCombineReducers from './user/userCombineReducers';
import themeReducer from './theme/reducers/themeReducer';

const navbarCombineReducers = combineReducers({
  user: userCombineReducers,
  theme: themeReducer,
});

export default navbarCombineReducers;
