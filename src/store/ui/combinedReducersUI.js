import { combineReducers } from 'redux';
import ThemeMode from '../../assets/ThemeMode';
import { CHANGE_THEME } from './actionCreator/changeThemeActionCreator';

const theme = (state = ThemeMode.LIGHT, action) => {
  if (action.type === CHANGE_THEME) {
    if (action?.payload?.theme) {
      return action.payload.theme;
    }
    return state;
  }
  return state;
};

const CombinedReducersUI = combineReducers({
  theme,
});

export default CombinedReducersUI;
