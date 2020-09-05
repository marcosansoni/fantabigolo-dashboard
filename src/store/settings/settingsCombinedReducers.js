import { combineReducers } from 'redux';
import { DEFAULT_THEME } from '../../assets/theme';
import { CHANGE_THEME } from './actionCreator';


const theme = (state = DEFAULT_THEME, action) => {
  if(action.type === CHANGE_THEME){
    if(action?.payload?.theme){
      return action.payload.theme;
    }
    return state;
  }
  return state;
};

const settingsCombinedReducers = combineReducers({
  theme,
});

export default settingsCombinedReducers;
