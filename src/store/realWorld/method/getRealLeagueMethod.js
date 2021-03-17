import { all } from 'redux-saga/effects';
import getData from '../../utils/fetchMethod/getData';
import Endpoint, { urlFactory } from '../../constants/Endpoint';

const normalizedName = (response) => {
  if (response?.status === 200 && response?.data) {
    return response.data?.LeagueName;
  }
  return undefined;
};

const normalizedLogo = (response) => {
  if (response?.status === 200 && response?.data) {
    return response.data?.LeagueLogo;
  }
  return undefined;
};

const normalizedSeason = (response) => {
  if (response?.status === 200 && response?.data) {
    return response.data?.LeagueSeason;
  }
  return undefined;
};

const normalizedNation = (response) => {
  if (response?.status === 200 && response?.data) {
    return response.data?.LeagueNation;
  }
  return undefined;
};

const normalizedDate = (response) => {
  if (response?.status === 200 && response?.data) {
    const { Season_start, Season_end } = response.data?.Dates;
    return { start: Season_start, end: Season_end };
  }
  return {};
};

const normalizedTeams = (response) => {
  if (response?.status === 200 && response?.data) {
    const teams = response.data?.Teams;
    return teams.filter((team) => team.TeamID).map((team) => team.TeamID);
  }
  return [];
};

// 891 is Serie A into this current season = 2019
function* getRealLeague({ leagueId = 891, session }) {
  // yield all([
  //   retrievePreviousSettings(vehicleId, dateExceptionId),
  //   retrieveTags(),
  // ]);

  const nameRequest = getData({
    url: urlFactory(Endpoint.REAL_LEAGUE.NAME),
    data: { leagueID: leagueId },
    session,
  });

  const nationRequest = getData({
    url: urlFactory(Endpoint.REAL_LEAGUE.NATION),
    data: { leagueID: leagueId },
    session,
  });

  const logoRequest = getData({
    url: urlFactory(Endpoint.REAL_LEAGUE.LOGO),
    data: { leagueID: leagueId },
    session,
  });

  const seasonRequest = getData({
    url: urlFactory(Endpoint.REAL_LEAGUE.SEASON),
    data: { leagueID: leagueId },
    session,
  });

  const dateRequest = getData({
    url: urlFactory(Endpoint.REAL_LEAGUE.DATES),
    data: { leagueID: leagueId },
    session,
  });

  const teamsRequest = getData({
    url: urlFactory(Endpoint.REAL_LEAGUE.TEAMS),
    data: { leagueID: leagueId },
    session,
  });

  const realLeagueResponse = yield all([
    nameRequest,
    logoRequest,
    nationRequest,
    seasonRequest,
    dateRequest,
    teamsRequest,
  ]);

  const nameResponse = realLeagueResponse && realLeagueResponse.length && realLeagueResponse[0];
  const logoResponse = realLeagueResponse && realLeagueResponse.length > 0 && realLeagueResponse[1];
  const nationResponse = realLeagueResponse && realLeagueResponse.length > 1 && realLeagueResponse[2];
  const seasonResponse = realLeagueResponse && realLeagueResponse.length > 2 && realLeagueResponse[3];
  const dateResponse = realLeagueResponse && realLeagueResponse.length > 3 && realLeagueResponse[4];
  const teamsResponse = realLeagueResponse && realLeagueResponse.length > 4 && realLeagueResponse[5];

  const name = nameResponse && normalizedName(nameResponse);
  const logo = logoResponse && normalizedLogo(logoResponse);
  const nation = nationResponse && normalizedNation(nationResponse);
  const season = seasonRequest && normalizedSeason(seasonResponse);
  const date = dateResponse && normalizedDate(dateResponse);
  const teamIds = teamsResponse && normalizedTeams(teamsResponse);

  return {
    ...(name && { name }),
    ...(logo && { logo }),
    ...(nation && { nation }),
    ...(season && { season: Number(season) }),
    ...(Object.keys(date).length && { date }),
    ...(teamIds.length && { teamIds }),
  };
}

export default getRealLeague;
