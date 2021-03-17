import { put } from 'redux-saga/effects';
import Severity from '../../message/constants/Severity';
import actionCreator from '../../utils/actionCreator';
import MessageActionType from '../../message/MessageActionType';
import postData from '../../utils/fetchMethod/postData';
import Endpoint, { urlFactory } from '../../constants/Endpoint';
import SessionActionType from '../SessionActionType';

function* loginWorker(action) {
  const {
    username,
    password,
  } = action?.payload || {};

  const response = yield postData({ url: urlFactory(Endpoint.LOGIN), data: { username, password } });

  const {
    data,
    status,
  } = response || {};

  // console.log(status);
  // // console.log(response.response.data)
  //
  // console.log(data);

  // Stop fetching
  // if(!response){
  //   return yield put({type: LOGIN});
  // }
  // console.log(response)

  if (status === 404) {
    // yield put(snackbarActionCreator('User not found', Severity.ERROR));
    yield put(actionCreator(MessageActionType.SNACKBAR, {
      text: 'User not found',
      severity: Severity.ERROR,
    }));
    return yield put({ type: SessionActionType.POST_LOGIN });
  }

  if (status === 200) {
    // // Start fetching of real world data
    // yield put(actionCreator(
    //   RealWorldActionType.REAL_WORLD_STATUS_FETCHING,
    //   { statusFetching: RealWorldStatusFetching.START_FETCHING },
    // ));
    const session = data.code;
    // const realLeagueById = yield getRealLeague({ session });
    // // Completed the league
    // yield put(actionCreator(
    //   RealWorldActionType.REAL_WORLD_STATUS_FETCHING,
    //   { statusFetching: RealWorldStatusFetching.COMPLETED_LEAGUE },
    // ));
    // const { teamIds } = realLeagueById;
    // const realTeamById = yield getRealTeams({ teamIds, session });
    //
    // // Completed the teams
    // yield put(actionCreator(
    //   RealWorldActionType.REAL_WORLD_STATUS_FETCHING,
    //   { statusFetching: RealWorldStatusFetching.COMPLETED_TEAM },
    // ));
    //
    // // Get a list with all the player Id currently into the store
    // let realPlayerIds = [];
    // Object.keys(realTeamById).forEach((teamId) => {
    //   const { playerIds } = realTeamById[teamId];
    //   const allSeason = Object.keys(playerIds);
    //   allSeason.forEach((season) => {
    //     realPlayerIds = [...realPlayerIds, ...playerIds[season]];
    //   });
    // });
    //
    // const uniquePlayerIds = [...new Set(realPlayerIds)];
    // const realPlayerById = yield getRealPlayers({ playerIds: uniquePlayerIds, session });

    // yield put(loginSuccess(username, data.code));
    yield put(actionCreator(SessionActionType.POST_LOGIN, { username, session }));
  }

  return yield put({ type: SessionActionType.POST_LOGIN });
}

export default loginWorker;
