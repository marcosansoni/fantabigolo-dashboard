import Breakpoint from './Breakpoint';

const MediaQuerySelector = {
  SMALL: `@media only screen and (max-width : ${`${Breakpoint.SM}px`})`,
  MEDIUM: `@media only screen and (max-width : ${`${Breakpoint.MD}px`}) and (min-width: ${`${Breakpoint.SM + 1}px`})`,
  LARGE: `@media only screen and (max-width : ${`${Breakpoint.LG}px`}) and (min-width: ${`${Breakpoint.MD + 1}px`})`,
  DESKTOP: `@media only screen and (min-width: ${`${Breakpoint.LG + 1}px`})`,
};

export default MediaQuerySelector;
