export const DEFAULT_THEME = 'light';
export const DARK_THEME = 'dark';
export const getGradient = (top, bottom) => `linear-gradient(180deg, ${top} 0%, ${bottom} 100%)`;

/**
 * The Palette represents the entire set of color codes used inside the application.
 * Rarely Palette colors are used directly inside components.
 * More frequently they are used to define themes.
 */
export const palette = {
  // Grey
  GREY_SUPER_DARK: '#333333',
  GREY_DARK: '#4f4f4f',
  GREY_SHADOW: '#828282',
  GREY_NEUTRAL: '#bdbdbd',
  GREY_LIGHT: '#e0e0e0',
  GREY_SUPER_LIGHT: '#f2f2f2',
  // Primary
  WHITE: '#ffffff',
  PRIMARY_LIGHT: '#BDEFEA',
  PRIMARY_STANDARD: '#40c1bb',
  PRIMARY_SHADOW: '#24adad',
  PRIMARY_DARK: '#0b7f8e',
  // Secondary
  SECONDARY_PALE: '#e6d08b',
  SECONDARY_HIGHLIGHT: '#f2c554',
  SECONDARY_ACCENT: '#f68545',
  SECONDARY_CAUTION: '#ff5c5a',
  SECONDARY_ALERT: '#ed1459',
  SECONDARY_SUCCESS: '#3DBB61',
  // Tertiary
  TERTIARY_SUCCESS: 'rgba(61, 187, 97, 0.1)',
  TERTIARY_LIGHT: 'rgba(189, 239, 234, 0.5)',
  TERTIARY_ALERT: 'rgba(237, 20, 89, 0.1)',
  TERTIARY_DEV: '#9A6BFF',
  // Old
  DEV_MODE: '#DECFFF',
  THIRD_ALERT: '#FF9D9C',
  THIRD_WARNING: '#FAB68F',
  THIRD_SUCCESS: '#8BD6A0',
  BLACK: '#333333',
  // Utils
  TRANSPARENT: 'transparent',
};

/**
 * A Color represents a "name" of a specific theme property.
 */
export const Color = {
  PRIMARY: 'primary',
  PRIMARY_VARIANT: 'primaryVariant',
  PRIMARY_HIGHLIGHT: 'primaryHighlight',
  PRIMARY_STANDARD: 'primaryStandard',
  SECONDARY: 'secondary',
  BACKGROUND: 'background',
  SURFACE: 'surface',
  OVERLAY: 'overlay',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  ALERT: 'alert',
  FAILED: 'failed',
  ON_PRIMARY: 'onPrimary',
  ON_SECONDARY: 'onSecondary',
  ON_BACKGROUND: 'onBackground',
  ON_SURFACE: 'onSurface',
  ON_ERROR: 'onError',
  ON_ICON_HOVER: 'onIconHover',
  SELECTION: 'selection',
  BACKGROUND_SUCCESS: 'backgroundSuccess',
  BACKGROUND_ALERT: 'backgroundAlert',
  TRANSPARENT: 'transparent',
  TEXT: 'text',
  NEUTRAL: 'neutral',
  BORDER: 'border',
};

const defaultTheme = {
  [Color.PRIMARY]: palette.PRIMARY_SHADOW,
  [Color.PRIMARY_VARIANT]: palette.PRIMARY_DARK,
  [Color.PRIMARY_HIGHLIGHT]: palette.PRIMARY_LIGHT,
  [Color.PRIMARY_STANDARD]: palette.PRIMARY_STANDARD,
  [Color.SECONDARY]: palette.GREY_SUPER_LIGHT,
  [Color.BACKGROUND]: palette.WHITE,
  [Color.SURFACE]: palette.GREY_SUPER_LIGHT,
  [Color.OVERLAY]: palette.BLACK, // with opacity: 0.25;
  [Color.SUCCESS]: palette.SECONDARY_SUCCESS,
  [Color.WARNING]: palette.SECONDARY_ACCENT,
  [Color.ERROR]: palette.SECONDARY_CAUTION,
  [Color.ALERT]: palette.SECONDARY_ALERT,
  [Color.FAILED]: palette.SECONDARY_HIGHLIGHT,
  [Color.ON_PRIMARY]: palette.WHITE,
  [Color.ON_SECONDARY]: palette.GREY_DARK,
  [Color.ON_BACKGROUND]: palette.BLACK,
  [Color.ON_SURFACE]: palette.BLACK,
  [Color.ON_ERROR]: palette.WHITE,
  [Color.ON_ICON_HOVER]: palette.GREY_SUPER_DARK,
  [Color.SELECTION]: palette.TERTIARY_LIGHT,
  [Color.BACKGROUND_SUCCESS]: palette.TERTIARY_SUCCESS,
  [Color.BACKGROUND_ALERT]: palette.TERTIARY_ALERT,
  [Color.TRANSPARENT]: palette.TRANSPARENT,
  [Color.TEXT]: palette.GREY_SHADOW,
  [Color.NEUTRAL]: palette.GREY_NEUTRAL,
  [Color.BORDER]: palette.GREY_LIGHT,
};

const darkTheme = {
  [Color.PRIMARY]: palette.PRIMARY_LIGHT,
  [Color.PRIMARY_VARIANT]: palette.PRIMARY_STANDARD,
  [Color.PRIMARY_HIGHLIGHT]: palette.PRIMARY_LIGHT,
  [Color.PRIMARY_STANDARD]: palette.PRIMARY_DARK,
  [Color.SECONDARY]: palette.GREY_DARK,
  [Color.BACKGROUND]: palette.BLACK,
  [Color.SURFACE]: palette.GREY_DARK,
  [Color.OVERLAY]: palette.GREY_SUPER_LIGHT, // with opacity: 0.25;
  [Color.SUCCESS]: palette.THIRD_SUCCESS,
  [Color.WARNING]: palette.THIRD_WARNING,
  [Color.ERROR]: palette.THIRD_ALERT,
  [Color.ALERT]: palette.SECONDARY_ALERT,
  [Color.FAILED]: palette.SECONDARY_HIGHLIGHT,
  [Color.ON_PRIMARY]: palette.WHITE,
  [Color.ON_SECONDARY]: palette.WHITE,
  [Color.ON_BACKGROUND]: palette.WHITE,
  [Color.ON_SURFACE]: palette.BLACK,
  [Color.ON_ERROR]: palette.WHITE,
  [Color.ON_ICON_HOVER]: palette.WHITE,
  [Color.SELECTION]: palette.TERTIARY_LIGHT,
  [Color.BACKGROUND_SUCCESS]: palette.TERTIARY_SUCCESS,
  [Color.BACKGROUND_ALERT]: palette.TERTIARY_ALERT,
  [Color.TRANSPARENT]: palette.TRANSPARENT,
  [Color.TEXT]: palette.GREY_SUPER_LIGHT,
  [Color.NEUTRAL]: palette.GREY_NEUTRAL,
  [Color.BORDER]: palette.GREY_DARK,
};

const themes = {
  [DEFAULT_THEME]: defaultTheme,
  [DARK_THEME]: darkTheme,
};

export default themes;
