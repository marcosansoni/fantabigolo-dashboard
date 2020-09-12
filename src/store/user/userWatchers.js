import { takeLatest } from 'redux-saga/effects';
import { USER_INFO_REQUEST } from './userActionCreator';
import userInfoWorker from './worker/userInfoWorker';

const userWatchers = [
  takeLatest(USER_INFO_REQUEST, userInfoWorker),
];

export default userWatchers;
