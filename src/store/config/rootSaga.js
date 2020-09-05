/** root */
import { all } from 'redux-saga/effects';
import settingsWatchers from '../settings/settingsWatchers';

export default function* rootSaga() {
  yield all([
    ...settingsWatchers,
  ]);
}
