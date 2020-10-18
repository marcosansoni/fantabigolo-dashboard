import getData from '../../utils/fetchMethod/getData';
import PathAPI, { urlFactory } from '../../../constants/PathAPI';

const normalizedParticipant = (response) => {
  if (response?.status === 200 && response?.data) {
    const { Partecipants: participants } = response?.data;
    return participants.map((t) => t.Trainer);
  }
  return [];
};

const normalizedAdmin = (response) => {
  if (response?.status === 200 && response?.data) {
    const { LeagueAdmin: participants } = response?.data;
    const admins = participants && participants.length && participants[0];
    if (!admins) return [];
    const { Admin1, Admin2 } = admins;
    return [
      ...(Admin1 ? [Admin1] : []),
      ...(Admin2 ? [Admin2] : []),
    ];
  }
  return [];
};

const normalizedTeam = (response) => {
  if (response?.status === 200 && response?.data) {
    const { Teams: teams = [] } = response?.data;

    let result = {};

    teams.forEach((t) => {
      const { ID, Name } = t;
      result = {
        ...result,
        [ID]: { id: ID, name: Name },
      };
    });

    return result;
  }
  return { };
};

function* getFantaleagueMethod(leagueId, season) {
  // list of username of participants
  const participant = yield getData({
    url: urlFactory(PathAPI.FANTALEAGUE.PARTICIPANT),
    data: { leagueID: leagueId, season },
  });

  // list of all teams into league
  const team = yield getData({
    url: urlFactory(PathAPI.FANTALEAGUE.TEAM),
    data: { leagueID: leagueId, season },
  });

  // username of admin into league
  const admin = yield getData({
    url: urlFactory(PathAPI.FANTALEAGUE.ADMIN),
    data: { leagueID: leagueId },
  });

  return {
    admin: normalizedAdmin(admin),
    participant: normalizedParticipant(participant),
    team: normalizedTeam(team),
  };
}

export default getFantaleagueMethod;
