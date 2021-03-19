import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { MuiThemeProvider } from '@material-ui/core';
import configureStore from './store/config/configureStore';
import Routing from './route/Routing';
import './index.css';
import i18n from './constants/localization/i18n';
import Theme from './assets/Theme';
import muiTheme from './muiTheme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import themeSelector from './store/state/navbar/theme/selectors/themeSelector';

const store = configureStore();

const themeMode = themeSelector(store.getState());

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={Theme[themeMode]}>
          <MuiThemeProvider theme={muiTheme(themeMode)}>
            <Routing />
          </MuiThemeProvider>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById('root'),
);
