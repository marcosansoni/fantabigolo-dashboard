import { takeLatest } from 'redux-saga/effects';
import getUserInfoWorker from './worker/getUserInfoWorker';
import UserActionType from './UserActionType';

const UserWatcher = [
  takeLatest(UserActionType.GET_USER_INFO_REQUEST, getUserInfoWorker),
];

export default UserWatcher;
