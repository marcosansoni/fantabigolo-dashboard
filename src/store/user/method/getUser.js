import PathAPI, { BASE_PATH } from '../../../constants/PathAPI';
import getData from '../../utils/fetchMethod/getData';

// eslint-disable-next-line consistent-return
function* getUser(data) {
  try {
    return yield getData({
      url: BASE_PATH + PathAPI.USER,
      data,
    });
  } catch (e) {
    console.log(e);
  }
}

export default getUser;
