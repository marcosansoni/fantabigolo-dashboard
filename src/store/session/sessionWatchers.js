/** Settings */
import { takeLatest } from 'redux-saga/effects';
import loginWorker from './workers/loginWorker';
import { LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST } from './sessionActionCreator';
import logoutWorker from './workers/logoutWorker';
import registerWorker from './workers/registerWorker';

const sessionWatchers = [
  takeLatest(LOGIN_REQUEST, loginWorker),
  takeLatest(LOGOUT_REQUEST, logoutWorker),
  takeLatest(REGISTER_REQUEST, registerWorker),
];

export default sessionWatchers;
