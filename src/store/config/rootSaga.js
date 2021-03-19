import { all } from 'redux-saga/effects';
import FantaleagueWatcher from '../fantaleague/FantaleagueWatcher';
import FriendWatcher from '../friend/FriendWatcher';
import UserWatcher from '../user/UserWatcher';
import authenticationWatcher from '../authentication/authenticationWatcher';

export default function* rootSaga() {
  yield all([
    ...FantaleagueWatcher,
    ...FriendWatcher,
    ...UserWatcher,
    ...authenticationWatcher,
  ]);
}
