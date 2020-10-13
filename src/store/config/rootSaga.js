/** root */
import { all } from 'redux-saga/effects';
import settingsWatchers from '../settings/settingsWatchers';
import sessionWatchers from '../session/sessionWatchers';
import userWatchers from '../user/userWatchers';
import friendsWatchers from '../friends/friendsWatchers';
import fantaLeagueWatchers from '../fantaleague/fantaLeagueWatchers';

export default function* rootSaga() {
  yield all([
    ...settingsWatchers,
    ...sessionWatchers,
    ...userWatchers,
    ...friendsWatchers,
    ...fantaLeagueWatchers,
  ]);
}
