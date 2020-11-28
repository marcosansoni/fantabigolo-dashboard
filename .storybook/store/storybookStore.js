import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../../src/store/config/rootReducer';
import rootSaga from '../../src/store/config/rootSaga';

const saveStorybookState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('storybookState', serializedState);
  } catch {
    // ignore write errors
  }
};

const loadStorybookState = () => {
  try {
    const serializedState = localStorage.getItem('storybookState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const storybookConfigureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composedMiddleware = process.env.NODE_ENV === 'production'
    ? applyMiddleware(sagaMiddleware)
    : compose(
      applyMiddleware(sagaMiddleware),
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

  const persistentState = loadStorybookState();

  const store = createStore(
    rootReducer,
    persistentState,
    composedMiddleware,
  );

  store.subscribe(()=>{
    saveStorybookState(store.getState());
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default storybookConfigureStore
