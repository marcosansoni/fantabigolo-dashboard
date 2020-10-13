import PathAPI, { urlFactory } from '../../../constants/PathAPI';
import getData from '../../utils/fetchMethod/getData';

// eslint-disable-next-line consistent-return
function* getFriends(data) {
  try {
    return yield getData({
      url: urlFactory(PathAPI.FRIENDS),
      data,
    });
  } catch (e) {
    console.log(e);
  }
}

export default getFriends;
