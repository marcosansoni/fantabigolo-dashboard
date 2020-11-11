export const CHANGE_THEME = 'CHANGE_THEME';

const changeThemeActionCreator = (theme) => ({
  type: CHANGE_THEME,
  payload: { theme },
});

export default changeThemeActionCreator;
