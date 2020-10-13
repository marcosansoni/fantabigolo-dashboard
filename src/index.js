import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from './assets/theme';
import configureStore from './store/config/configureStore';
import Routing from './route/Routing';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import 'antd/dist/antd.css';

const store = configureStore();

const currentTheme = store.getState().settings.theme;

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <ThemeProvider theme={theme[currentTheme]}>
        <Provider store={store}>
          <Routing />
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById('root'),
);
