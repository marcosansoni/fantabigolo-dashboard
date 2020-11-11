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

function* getRealTeam(teamId, season, session) {
  const leagueRequest = getData({
    url: urlFactory(PathAPI.REAL_TEAM.LEAGUE),
    data: { teamID: teamId, season },
    session,
  });

  const nationRequest = getData({
    url: urlFactory(PathAPI.REAL_TEAM.COUNTRY),
    data: { teamID: teamId },
    session,
  });

  const foundedRequest = getData({
    url: urlFactory(PathAPI.REAL_TEAM.FOUNDED),
    data: { teamID: teamId },
    session,
  });

  const logoRequest = getData({
    url: urlFactory(PathAPI.REAL_TEAM.LOGO),
    data: { teamID: teamId },
    session,
  });

  const cityRequest = getData({
    url: urlFactory(PathAPI.REAL_TEAM.CITY),
    data: { teamID: teamId },
    session,
  });

  const stadiumRequest = getData({
    url: urlFactory(PathAPI.REAL_TEAM.STADIUM),
    data: { teamID: teamId },
    session,
  });

  const playersRequest = yield getData({
    url: urlFactory(PathAPI.REAL_TEAM.PLAYERS),
    data: { team: teamId, season },
    session,
  });

  const realTeamRequest = yield all([
    foundedRequest,
    logoRequest,
    nationRequest,
    leagueRequest,
    cityRequest,
    stadiumRequest,
    playersRequest,
  ]);

  const foundedResponse = realTeamRequest && realTeamRequest.length && realTeamRequest[0];
  const logoResponse = realTeamRequest && realTeamRequest.length > 0 && realTeamRequest[1];
  const nationResponse = realTeamRequest && realTeamRequest.length > 1 && realTeamRequest[2];
  const leagueResponse = realTeamRequest && realTeamRequest.length > 2 && realTeamRequest[3];
  const cityResponse = realTeamRequest && realTeamRequest.length > 3 && realTeamRequest[4];
  const stadiumResponse = realTeamRequest && realTeamRequest.length > 4 && realTeamRequest[5];
  const playersResponse = realTeamRequest && realTeamRequest.length > 5 && realTeamRequest[6];

  const founded = foundedResponse && normalizedFounded(foundedResponse);
  const logo = logoResponse && normalizedLogo(logoResponse);
  const nation = nationResponse && normalizedNation(nationResponse);
  const league = leagueResponse && normalizedLeague(leagueResponse);
  const city = cityResponse && normalizedCity(cityResponse);
  const stadium = stadiumResponse && normalizedStadium(stadiumResponse);
  const playerIds = playersResponse && normalizedPlayers(playersResponse);

  return {
    ...(league && { league: { [season]: league } }),
    ...(logo && { logo }),
    ...(nation && { nation }),
    ...(founded && { founded }),
    ...(city && { city }),
    ...(Object.keys(stadium).length && { stadium }),
    ...(playerIds.length && { playerIds: { [season]: playerIds } }),
  };
}

// 891 is Serie A into this current season = 2019
function* getRealTeams({ teamIds = [], season = 2019, session }) {
  let teamById = {};

  const teamResponse = yield all(teamIds.map((t) => call(
    getRealTeam,
    t,
    season,
    session,
  )));

  teamResponse.forEach((res, index) => {
    teamById = {
      ...teamById,
      [teamIds[index]]: res,
    };
  });

  return teamById;
}

export default getRealTeams;
