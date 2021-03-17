import { takeLatest } from 'redux-saga/effects';
import { actionStatusRequest } from '../../constants/ActionStatus';
import { POST_LOGIN } from './actionCreator/postLoginActionCreator';
import postLoginWorker from './worker/postLoginWorker';

const loginWatcher = [
  takeLatest(actionStatusRequest(POST_LOGIN), postLoginWorker),
];

export default loginWatcher;
