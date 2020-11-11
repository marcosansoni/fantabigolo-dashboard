import { all, call } from 'redux-saga/effects';
import getData from '../../utils/fetchMethod/getData';
import PathAPI, { urlFactory } from '../../../constants/PathAPI';
import { firstLetterLowerCaseObjectKey } from '../../../utils/firstLetterLowerCase';

const normalizedLeague = (response) => {
  if (response?.status === 200 && response?.data) {
    return response.data?.LeagueID;
  }
  return undefined;
};

const normalizedFounded = (response) => {
  if (response?.status === 200 && response?.data) {
    return response.data?.Founded;
  }
  return undefined;
};

const normalizedLogo = (response) => {
  if (response?.status === 200 && response?.data) {
    return response.data?.LeagueLogo;
  }
  return undefined;
};

const normalizedNation = (response) => {
  if (response?.status === 200 && response?.data) {
    return response.data?.LeagueNation;
  }
  return undefined;
};

const normalizedCity = (response) => {
  if (response?.status === 200 && response?.data) {
    return response.data?.City;
  }
  return undefined;
};

const normalizedStadium = (response) => {
  if (response?.status === 200 && response?.data) {
    const stadiumData = response.data?.Stadium;
    return firstLetterLowerCaseObjectKey(stadiumData);
  }
  return {};
};

const normalizedPlayers = (response) => {
  if (response?.status === 200 && response?.data) {
    const teams = response.data?.Players;
    return teams.filter((team) => team.PlayerID).map((team) => team.PlayerID);
  }
  return [];
};

function* getRealPlayer(playerId, season, session) {
  const nameRequest = getData({
    url: urlFactory(PathAPI.REAL_PLAYER.NAME),
    data: { playerID: playerId },
    session,
  });

  const birthRequest = getData({
    url: urlFactory(PathAPI.REAL_PLAYER.BIRTH),
    data: { playerID: playerId },
    session,
  });

  const birthPlaceRequest = getData({
    url: urlFactory(PathAPI.REAL_PLAYER.BIRTHPLACE),
    data: { playerID: playerId },
    session,
  });

  const nationRequest = getData({
    url: urlFactory(PathAPI.REAL_PLAYER.NATION),
    data: { playerID: playerId },
    session,
  });

  const teamRequest = getData({
    url: urlFactory(PathAPI.REAL_PLAYER.TEAM),
    data: { playerID: playerId, season },
    session,
  });

  const roleRequest = getData({
    url: urlFactory(PathAPI.REAL_PLAYER.ROLE),
    data: { playerID: playerId },
    session,
  });

  const heightRequest = getData({
    url: urlFactory(PathAPI.REAL_PLAYER.HEIGHT),
    data: { playerID: playerId },
    session,
  });

  const weightRequest = getData({
    url: urlFactory(PathAPI.REAL_PLAYER.WEIGHT),
    data: { playerID: playerId },
    session,
  });

  const realTeamRequest = yield all([
    nameRequest,
    birthRequest,
    birthPlaceRequest,
    nationRequest,
    teamRequest,
    roleRequest,
    heightRequest,
    weightRequest,
  ]);

  return realTeamRequest;

  // const foundedResponse = realTeamRequest && realTeamRequest.length && realTeamRequest[0];
  // const logoResponse = realTeamRequest && realTeamRequest.length > 0 && realTeamRequest[1];
  // const nationResponse = realTeamRequest && realTeamRequest.length > 1 && realTeamRequest[2];
  // const leagueResponse = realTeamRequest && realTeamRequest.length > 2 && realTeamRequest[3];
  // const cityResponse = realTeamRequest && realTeamRequest.length > 3 && realTeamRequest[4];
  // const stadiumResponse = realTeamRequest && realTeamRequest.length > 4 && realTeamRequest[5];
  // const playersResponse = realTeamRequest && realTeamRequest.length > 5 && realTeamRequest[6];
  //
  // const founded = foundedResponse && normalizedFounded(foundedResponse);
  // const logo = logoResponse && normalizedLogo(logoResponse);
  // const nation = nationResponse && normalizedNation(nationResponse);
  // const league = leagueResponse && normalizedLeague(leagueResponse);
  // const city = cityResponse && normalizedCity(cityResponse);
  // const stadium = stadiumResponse && normalizedStadium(stadiumResponse);
  // const playerIds = playersResponse && normalizedPlayers(playersResponse);
  //
  // return {
  //   ...(league && { league: { [season]: league } }),
  //   ...(logo && { logo }),
  //   ...(nation && { nation }),
  //   ...(founded && { founded }),
  //   ...(city && { city }),
  //   ...(Object.keys(stadium).length && { stadium }),
  //   ...(playerIds.length && { playerIds: { [season]: playerIds } }),
  // };
}

// 891 is Serie A into this current season = 2019
function* getRealPlayers({ playerIds = [], season = 2019, session }) {
  const playerById = {};

  const playerResponse = yield all(playerIds.map((player) => call(
    getRealPlayer,
    player,
    season,
    session,
  )));

  console.log(playerResponse);
  // playerResponse.forEach((res, index) => {
  //   teamById = {
  //     ...teamById,
  //     [teamIds[index]]: res,
  //   };
  // });
  return {};
  // return teamById;
}

export default getRealPlayers;
