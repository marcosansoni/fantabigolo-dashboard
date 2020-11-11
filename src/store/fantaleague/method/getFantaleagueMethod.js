import { all } from 'redux-saga/effects';
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
  const participantRequest = getData({
    url: urlFactory(PathAPI.FANTALEAGUE.PARTICIPANT),
    data: { leagueID: leagueId, season },
  });

  // list of all teams into league
  const teamRequest = getData({
    url: urlFactory(PathAPI.FANTALEAGUE.TEAM),
    data: { leagueID: leagueId, season },
  });

  // username of admin into league
  const adminRequest = getData({
    url: urlFactory(PathAPI.FANTALEAGUE.ADMIN),
    data: { leagueID: leagueId },
  });

  const statusRequest = getData({
    url: urlFactory(PathAPI.RULES.STATE),
    data: { leagueID: leagueId, season },
  });

  const response = yield all([
    adminRequest,
    participantRequest,
    teamRequest,
    statusRequest,
  ]);

  const adminResponse = response && response.length && response[0];
  const participantResponse = response && response.length > 1 && response[1];
  const teamResponse = response && response.length > 2 && response[2];
  const statusResponse = response && response.length > 3 && response[3];

  const admin = adminResponse && normalizedAdmin(adminResponse);
  const participant = participantResponse && normalizedParticipant(participantResponse);
  const team = teamResponse && normalizedTeam(teamResponse);
  console.log(statusResponse)

  return {
    ...(admin.length && { admin }),
    ...(participant.length && { participant }),
    ...(Object.keys(team).length && { team }),
    // participant: normalizedParticipant(participant),
    // team: normalizedTeam(team),
  };
}

export default getFantaleagueMethod;
