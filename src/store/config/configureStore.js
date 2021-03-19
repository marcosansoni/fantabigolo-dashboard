import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('fantabigolo', serializedState);
  } catch {
    // ignore write errors
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composedMiddleware = process.env.NODE_ENV === 'production'
    ? applyMiddleware(sagaMiddleware)
    : compose(
      applyMiddleware(sagaMiddleware),
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

  const persistentState = loadState();

  const store = createStore(
    rootReducer,
    persistentState,
    composedMiddleware,
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
