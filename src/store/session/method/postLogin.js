import postData from '../../utils/fetchMethod/postData';
import PathAPI, { BASE_PATH } from '../../../constants/PathAPI';

// eslint-disable-next-line consistent-return
function* postLogin(data) {
  try {
    return yield postData({
      url: BASE_PATH + PathAPI.LOGIN,
      data,
    });
  } catch (e) {
    console.log(e);
  }
}

export default postLogin;
