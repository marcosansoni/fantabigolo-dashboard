import { takeLatest } from 'redux-saga/effects';
import { actionStatusRequest } from '../../constants/ActionStatus';
import { POST_REGISTER } from './actionCreator/postRegisterActionCreator';
import postRegisterWorker from './worker/postRegisterWorker';

const registerWatcher = [
  takeLatest(actionStatusRequest(POST_REGISTER), postRegisterWorker),
];

export default registerWatcher;
