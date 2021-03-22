import { all } from 'redux-saga/effects';
import authenticationWatcher from '../state/authentication/authenticationWatcher';
import navbarWatcher from '../state/navbar/navbarWatcher';
import fantaleagueWatcher from '../state/fantaleague/fantaleagueWatcher';

export default function* rootSaga() {
  yield all([
    ...authenticationWatcher,
    ...navbarWatcher,
    ...fantaleagueWatcher,
  ]);
}
