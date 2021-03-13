import { ThemeProvider } from 'styled-components';
import Theme from '../src/assets/Theme';
import ThemeMode from '../src/assets/ThemeMode';
import { MuiThemeProvider } from '@material-ui/core';
import muiTheme from '../src/muiTheme';
import i18n from '../src/constants/localization/i18n';
import { I18nextProvider } from 'react-i18next';
import React from 'react';

require('../src/index.css');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const globalTypes = {
  theme: {
    name: 'theme',
    description: 'Mode of theme',
    defaultValue: ThemeMode.LIGHT,
    toolbar: {
      icon: 'component',
      items: [
        { value: ThemeMode.LIGHT, title: 'Light' },
        { value: ThemeMode.DARK, title: 'Dark' },
      ],
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={Theme[context.globals.theme]}>
          <MuiThemeProvider theme={muiTheme(context.globals.theme)}>
            <Story />
          </MuiThemeProvider>
        </ThemeProvider>
      </I18nextProvider>
    )
  },
];
