/** Settings */
import { takeLatest } from 'redux-saga/effects';
import loginWorker from './workers/loginWorker';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from './sessionActionCreator';
import logoutWorker from './workers/logoutWorker';

const sessionWatchers = [
  takeLatest(LOGIN_REQUEST, loginWorker),
  takeLatest(LOGOUT_REQUEST, logoutWorker),
];

export default sessionWatchers;
