import { put, select } from 'redux-saga/effects';
import Endpoint, { urlFactory } from '../../constants/Endpoint';
import getData from '../../utils/fetchMethod/getData';
import sessionSelector from '../../session/selectors/sessionSelector';
import actionCreator from '../../utils/actionCreator';
import FantaleagueActionType from '../FantaleagueActionType';
import getFantaleagueMethod from '../method/getFantaleagueMethod';
import { firstLetterLowerCaseObjectKey } from '../../../utils/firstLetterLowerCase';
import getFantateamMethod from '../../fantateam/method/getFantateamMethod';

// eslint-disable-next-line consistent-return
function* getFantaLeagueByUsernameWorker(action) {
  try {
    const { username: defaultUsername } = yield select(sessionSelector);

    const {
      username = defaultUsername,
    } = action?.payload;

    const data = { username };

    const response = yield getData({ url: urlFactory(Endpoint.USER.PARTICIPANT), data });

    // console.log(response);

    const participation = response?.data?.Partecipations || [];

    // console.log(participation);

    let byId = {};
    let fantateamById = {};

    // For is preferred to forEach in order to use yield into inner cycle
    // eslint-disable-next-line no-restricted-syntax
    for (const p of participation) {
      const lowerCaseKeyP = firstLetterLowerCaseObjectKey(p);
      const { leagueID, season, leagueName } = lowerCaseKeyP;
      const {
        admin,
        team,
        participant,
      } = yield getFantaleagueMethod(leagueID, season);

      byId = {
        ...byId,
        [leagueID]: {
          leagueID,
          leagueName,
          admin,
          participant: {
            [season]: participant,
          },
          team: {
            [season]: team,
          },
        },
      };

      // eslint-disable-next-line no-restricted-syntax
      for (const t of Object.keys(team)) {
        const fantateamData = yield getFantateamMethod(t);
        fantateamById = {
          ...fantateamById,
          [t]: fantateamData,
        };
      }
    }

    if (response?.status === 200 && participation) {
      return yield put(actionCreator(
        FantaleagueActionType.GET_FANTA_LEAGUE_BY_USERNAME,
        { fantaleague: { byId }, fantateam: { byId: fantateamById } },
      ));
    }
    // Stop fetching
    return yield put(actionCreator(FantaleagueActionType.GET_FANTA_LEAGUE_BY_USERNAME));
  } catch (e) {
    // console.log(e);
  }
}

export default getFantaLeagueByUsernameWorker;
