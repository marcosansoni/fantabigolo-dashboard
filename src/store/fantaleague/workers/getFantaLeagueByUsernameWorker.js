import { select, put } from 'redux-saga/effects';
import PathAPI, { urlFactory } from '../../../constants/PathAPI';
import getData from '../../utils/fetchMethod/getData';
import sessionSelector from '../../session/selectors/sessionSelector';
import actionCreator from '../../utils/actionCreator';
import FantaleagueActionType from '../FantaleagueActionType';

function* getFantaLeagueByUsernameWorker(action) {
  try {
    const { username: defaultUsername } = yield select(sessionSelector);

    const {
      username = defaultUsername,
    } = action?.payload;

    const data = { username };

    const response = yield getData({ url: urlFactory(PathAPI.USER.PARTICIPANTS), data });

    console.log(response);

    const participation = response?.data?.Partecipations;

    console.log(participation);

    if (response?.status === 200 && participation) {
      return yield put(actionCreator(
        FantaleagueActionType.GET_FANTA_LEAGUE_BY_USERNAME,
        { byId: participation },
      ));
    }
    // Stop fetching
    return yield put(actionCreator(FantaleagueActionType.GET_FANTA_LEAGUE_BY_USERNAME));
  } catch (e) {
    console.log(e);
  }
}

export default getFantaLeagueByUsernameWorker;
