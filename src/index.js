import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from './assets/theme';
import configureStore from './store/config/configureStore';
import Routing from './route/Routing';
import './index.css';

const store = configureStore();

const currentTheme = store.getState().settings.theme;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme[currentTheme]}>
      <Provider store={store}>
        <Routing/>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
