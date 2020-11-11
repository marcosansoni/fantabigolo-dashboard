import ThemeMode from './ThemeMode';
import Color from './Color';
import Palette from './Palette';

const Theme = {
  [ThemeMode.LIGHT]: {
    [Color.BACKGROUND]: Palette.WHITE,
    [Color.DARK_TEXT]: Palette.BLACK,
    [Color.SUBTITLE]: Palette.GRAY,
    [Color.PRIMARY_DARK]: Palette.BLUE_DARK,
    [Color.PRIMARY_LIGHT]: Palette.BLUE_LIGHT,
    [Color.ERROR]: Palette.RED,
    [Color.SUCCESS]: Palette.GREEN,
  },
};

export default Theme;
