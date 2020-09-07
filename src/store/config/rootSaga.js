/** root */
import { all } from 'redux-saga/effects';
import settingsWatchers from '../settings/settingsWatchers';
import sessionWatchers from '../session/sessionWatchers';

export default function* rootSaga() {
  yield all([
    ...settingsWatchers,
    ...sessionWatchers,
  ]);
}
