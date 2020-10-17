import { combineReducers } from 'redux';
import { DEFAULT_THEME } from '../../assets/theme';
import SettingActionType from './SettingActionType';

const theme = (state = DEFAULT_THEME, action) => {
  if (action.type === SettingActionType.CHANGE_THEME) {
    if (action?.payload?.theme) {
      return action.payload.theme;
    }
    return state;
  }
  return state;
};

const SettingCombinedReducers = combineReducers({
  theme,
});

export default SettingCombinedReducers;
