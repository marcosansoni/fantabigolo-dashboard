import getFantaLeagueByUsernameWorker from './getFantaLeagueByUsernameWorker';

function* createFantaLeagueWorker() {
  try {
    // const {
    //   leagueName,
    //   teamName,
    //   inviteVisibility = 0,
    //   competition = 1,
    //   participants, // Number of partecipants
    // } = action?.payload;

    // const data = {
    //   leagueName,
    //   teamName,
    //   inviteVisibility,
    //   competition,
    //   partecipants: participants,
    // };

    // console.log(data);

    // console.log(urlFactory(PathAPI.FANTALEAGUE.NEW));
    // console.log(data)

    // const response = yield postData({ url: urlFactory(PathAPI.FANTALEAGUE.NEW), data });

    // const user = yield select(userSelector);
    //
    // const { username } = user;

    yield getFantaLeagueByUsernameWorker({ payload: 'should be the username' });

    // if(response?.status === 200){
    //
    // }
  } catch (e) {
    // console.log(e);
  }
}

export default createFantaLeagueWorker;
