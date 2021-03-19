import { CHANGE_THEME } from '../actionCreator/changeThemeActionCreator';
import ThemeMode from '../../../../../assets/ThemeMode';

const themeReducer = (state = ThemeMode.LIGHT, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload.theme;
    default:
      return state;
  }
};

export default themeReducer;
