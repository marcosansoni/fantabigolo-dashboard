import ThemeMode from './ThemeMode';
import Color from './Color';
import Palette from './Palette';

const Theme = {
  [ThemeMode.LIGHT]: {
    [Color.BACKGROUND]: Palette.WHITE,
    [Color.TEXT_DARK]: Palette.BLACK,
    [Color.TEXT_LIGHT]: Palette.GRAY_LIGHT,
    [Color.SUBTITLE]: Palette.GRAY,
    [Color.BORDER]: Palette.GRAY_SUPER_LIGHT,
    [Color.PRIMARY_DARK]: Palette.BLUE_DARK,
    [Color.PRIMARY_LIGHT]: Palette.BLUE_LIGHT,
    [Color.ERROR]: Palette.RED,
    [Color.SUCCESS]: Palette.GREEN,
  },
  [ThemeMode.DARK]: {
    [Color.BACKGROUND]: Palette.WHITE,
    [Color.TEXT_DARK]: Palette.BLACK,
    [Color.TEXT_LIGHT]: Palette.GRAY_LIGHT,
    [Color.SUBTITLE]: Palette.GRAY,
    [Color.BORDER]: Palette.GRAY_SUPER_LIGHT,
    [Color.PRIMARY_DARK]: Palette.BLUE_DARK,
    [Color.PRIMARY_LIGHT]: Palette.BLUE_LIGHT,
    [Color.ERROR]: Palette.RED,
    [Color.SUCCESS]: Palette.GREEN,
  },
};

export default Theme;
