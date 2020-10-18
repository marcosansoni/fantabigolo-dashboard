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
  const leagueResponse = yield getData({
    url: urlFactory(PathAPI.REAL_TEAM.LEAGUE),
    data: { teamID: teamId, season },
    session,
  });

  const nationResponse = yield getData({
    url: urlFactory(PathAPI.REAL_TEAM.COUNTRY),
    data: { teamID: teamId },
    session,
  });

  const foundedResponse = yield getData({
    url: urlFactory(PathAPI.REAL_TEAM.FOUNDED),
    data: { teamID: teamId },
    session,
  });

  const logoResponse = yield getData({
    url: urlFactory(PathAPI.REAL_TEAM.LOGO),
    data: { teamID: teamId },
    session,
  });

  const cityResponse = yield getData({
    url: urlFactory(PathAPI.REAL_TEAM.CITY),
    data: { teamID: teamId },
    session,
  });

  const stadiumResponse = yield getData({
    url: urlFactory(PathAPI.REAL_TEAM.STADIUM),
    data: { teamID: teamId },
    session,
  });

  const playersResponse = yield getData({
    url: urlFactory(PathAPI.REAL_TEAM.PLAYERS),
    data: { team: teamId, season },
    session,
  });

  const founded = normalizedFounded(foundedResponse);
  const logo = normalizedLogo(logoResponse);
  const nation = normalizedNation(nationResponse);
  const league = normalizedLeague(leagueResponse);
  const city = normalizedCity(cityResponse);
  const stadium = normalizedStadium(stadiumResponse);
  const playerIds = normalizedPlayers(playersResponse);

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
  for (const teamId of teamIds) {
    const normalizedTeam = yield getRealTeam(teamId, season, session);
    teamById = {
      ...teamById,
      [teamId]: normalizedTeam,
    };
  }

  return teamById;
}

export default getRealTeams;
