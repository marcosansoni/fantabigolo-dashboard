import postData from '../../utils/fetchMethod/postData';
import PathAPI, { BASE_PATH, urlFactory } from '../../../constants/PathAPI';

function* createFantaLeagueWorker(action) {
  try {
    const {
      leagueName,
      teamName,
      inviteVisibility = 0,
      competition = 1,
      partecipants, // Number of partecipants
    } = action?.payload;

    const data = {
      leagueName,
      teamName,
      inviteVisibility,
      competition,
      partecipants,
    };

    console.log(urlFactory(PathAPI.FANTALEAGUE.NEW));
    console.log(data)

    const response = yield postData({ url: urlFactory(PathAPI.FANTALEAGUE.NEW), data });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

export default createFantaLeagueWorker;
