import getData from '../../utils/fetchMethod/getData';
import PathAPI, { urlFactory } from '../../../constants/PathAPI';

function* getFriendsListWorker(action) {
  const {
    username,
  } = action?.payload || {};

  console.log('here', username);

  // const data =

  // const response = yield getFriends({ username });
  const response = yield getData({ url: urlFactory(PathAPI.FRIEND), data: { username } });
  // const response = yield getFriends({ username });

  const {
    data,
    status,
  } = response || {};

  console.log(data);

  if (status === 404) {
    // yield put(snackbarActionCreator('User not found', Severity.ERROR));
    // return yield put(userInfoSuccess());
  }

  if (status === 200) {
    console.log(response);
    // const {
    //   firstname: firstName,
    //   lastname: lastName,
    //   email,
    // } = data;
    // return yield put(actionCreator(UserActionType.GET_USER_INFO, { firstName, lastName, email }));
  }

  // return yield put(actionCreator(UserActionType.GET_USER_INFO));
}

export default getFriendsListWorker;
