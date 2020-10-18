import { select, put } from 'redux-saga/effects';
import PathAPI, { urlFactory } from '../../../constants/PathAPI';
import getData from '../../utils/fetchMethod/getData';
import sessionSelector from '../../session/selectors/sessionSelector';
import actionCreator from '../../utils/actionCreator';
import FantaleagueActionType from '../FantaleagueActionType';
import getFantaleagueMethod from '../method/getFantaleagueMethod';
import { firstLetterLowerCaseObjectKey } from '../../../utils/firstLetterLowerCase';
import getFantateamMethod from '../../fantateam/method/getFantateamMethod';
import getRealLeague from '../../realWorld/method/getRealLeagueMethod';

function* getFantaLeagueByUsernameWorker(action) {
  try {
    const { username: defaultUsername } = yield select(sessionSelector);

    const {
      username = defaultUsername,
    } = action?.payload;

    const data = { username };

    const response = yield getData({ url: urlFactory(PathAPI.USER.PARTICIPANT), data });

    console.log(response);

    const participation = response?.data?.Partecipations || [];

    console.log(participation);

    let byId = {};
    let fantateamById = {};

    // For is preferred to forEach in order to use yield into inner cycle
    // eslint-disable-next-line no-restricted-syntax
    for (const p of participation) {
      const lowerCaseKeyP = firstLetterLowerCaseObjectKey(p);
      const { leagueID, season } = lowerCaseKeyP;
      const {
        admin,
        team,
        participant,
      } = yield getFantaleagueMethod(leagueID, season);

      byId = {
        ...byId,
        [leagueID]: {
          ...lowerCaseKeyP,
          admin,
          participant,
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
    // participation.forEach((p) => {
    //   const lowerCaseKeyP = firstLetterLowerCaseObjectKey(p);
    //   const { leagueID } = lowerCaseKeyP;
    //   byId = {
    //     ...byId,
    //     [leagueID]: lowerCaseKeyP,
    //   };
    // });

    // const getData = (leagueId, season) => yield getFantaleagueMethod()
    //
    // console.log('aaa');

    // if (Object.keys(byId).length) {
    //   const leagueId = Object.keys(byId)[0];
    //   const { season } = byId[leagueId];
    //   console.log(leagueId, season);
    //   console.log(yield getFantaleagueMethod(leagueId, season));
    // }
    yield getRealLeague();

    if (response?.status === 200 && participation) {
      return yield put(actionCreator(
        FantaleagueActionType.GET_FANTA_LEAGUE_BY_USERNAME,
        { fantaleague: { byId }, fantateam: { byId: fantateamById } },
      ));
    }
    // Stop fetching
    return yield put(actionCreator(FantaleagueActionType.GET_FANTA_LEAGUE_BY_USERNAME));
  } catch (e) {
    console.log(e);
  }
}

export default getFantaLeagueByUsernameWorker;
