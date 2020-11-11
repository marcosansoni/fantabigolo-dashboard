import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import configureStore from './store/config/configureStore';
import Routing from './route/Routing';
import './index.css';
import i18n from './i18n';
import 'antd/dist/antd.css';
import Theme from './assets/Theme';

const store = configureStore();

const themeMode = store.getState().ui.theme;

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <ThemeProvider theme={Theme[themeMode]}>
        <Provider store={store}>
          <Routing />
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById('root'),
);
