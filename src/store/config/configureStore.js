import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

// const rootReducer = (state, action) => rootReducer(state, action);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composedMiddleware = process.env.NODE_ENV === 'production'
    ? applyMiddleware(sagaMiddleware)
    : compose(
      applyMiddleware(sagaMiddleware),
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

  const store = createStore(
    rootReducer,
    composedMiddleware,
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
