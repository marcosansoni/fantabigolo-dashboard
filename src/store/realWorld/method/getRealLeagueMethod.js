import getData from '../../utils/fetchMethod/getData';
import PathAPI, { urlFactory } from '../../../constants/PathAPI';

function* getRealLeague(leagueId = 1) {
  const name = yield getData({
    url: urlFactory(PathAPI.REAL_LEAGUE.NAME),
    data: { leagueID: leagueId },
  });

  const nation = yield getData({
    url: urlFactory(PathAPI.REAL_LEAGUE.NATION),
    data: { leagueID: leagueId },
  });

  const logo = yield getData({
    url: urlFactory(PathAPI.REAL_LEAGUE.LOGO),
    data: { leagueID: leagueId },
  });

  const season = yield getData({
    url: urlFactory(PathAPI.REAL_LEAGUE.SEASON),
    data: { leagueID: leagueId },
  });

  const dates = yield getData({
    url: urlFactory(PathAPI.REAL_LEAGUE.DATES),
    data: { leagueID: leagueId },
  });

  const teams = yield getData({
    url: urlFactory(PathAPI.REAL_LEAGUE.TEAMS),
    data: { leagueID: leagueId },
  });
  console.log(name, teams, season, logo, dates, nation);
}

export default getRealLeague;
