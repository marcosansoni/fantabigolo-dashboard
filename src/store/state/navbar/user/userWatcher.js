import { takeLatest } from 'redux-saga/effects';
import { actionStatusRequest } from '../../../constants/ActionStatus';
import { GET_USER } from './actionCreator/getUserActionCreator';
import getUserWorker from './worker/getUserWorker';

const userWatcher = [
  takeLatest(actionStatusRequest(GET_USER), getUserWorker),
];

export default userWatcher;
