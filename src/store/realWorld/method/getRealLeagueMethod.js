import { all } from 'redux-saga/effects';
import getData from '../../utils/fetchMethod/getData';
import PathAPI, { urlFactory } from '../../../constants/PathAPI';

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
    url: urlFactory(PathAPI.REAL_LEAGUE.NAME),
    data: { leagueID: leagueId },
    session,
  });

  const nationRequest = getData({
    url: urlFactory(PathAPI.REAL_LEAGUE.NATION),
    data: { leagueID: leagueId },
    session,
  });

  const logoRequest = getData({
    url: urlFactory(PathAPI.REAL_LEAGUE.LOGO),
    data: { leagueID: leagueId },
    session,
  });

  const seasonRequest = getData({
    url: urlFactory(PathAPI.REAL_LEAGUE.SEASON),
    data: { leagueID: leagueId },
    session,
  });

  const dateRequest = getData({
    url: urlFactory(PathAPI.REAL_LEAGUE.DATES),
    data: { leagueID: leagueId },
    session,
  });

  const teamsRequest = getData({
    url: urlFactory(PathAPI.REAL_LEAGUE.TEAMS),
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

  console.log(realLeagueResponse);

  // const name = normalizedName(nameResponse);
  // const logo = normalizedLogo(logoResponse);
  // const nation = normalizedNation(nationResponse);
  // const season = normalizedSeason(seasonResponse);
  // const date = normalizedDate(dateResponse);
  // const teamIds = normalizedTeams(teamsResponse);
  //
  // return {
  //   ...(name && { name }),
  //   ...(logo && { logo }),
  //   ...(nation && { nation }),
  //   ...(season && { season: Number(season) }),
  //   ...(Object.keys(date).length && { date }),
  //   ...(teamIds.length && { teamIds }),
  // };
  return {};
}

export default getRealLeague;
