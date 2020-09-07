/** Settings */
import { takeLatest } from 'redux-saga/effects';
import loginWorker from './workers/loginWorker';
import { LOGIN_REQUEST } from './sessionActionCreator';

const sessionWatchers = [
  takeLatest(LOGIN_REQUEST, loginWorker),
];

export default sessionWatchers;
