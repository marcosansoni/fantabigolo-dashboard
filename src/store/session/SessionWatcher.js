import { takeLatest } from 'redux-saga/effects';
import loginWorker from './workers/loginWorker';
import logoutWorker from './workers/logoutWorker';
import registerWorker from './workers/registerWorker';
import SessionActionType from './SessionActionType';

const SessionWatcher = [
  takeLatest(SessionActionType.POST_LOGIN_REQUEST, loginWorker),
  takeLatest(SessionActionType.POST_LOGOUT_REQUEST, logoutWorker),
  takeLatest(SessionActionType.POST_REGISTER_REQUEST, registerWorker),
];

export default SessionWatcher;
