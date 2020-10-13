import postData from '../../utils/fetchMethod/postData';
import PathAPI, { urlFactory } from '../../../constants/PathAPI';

// eslint-disable-next-line consistent-return
function* postLogin(data) {
  try {
    return yield postData({
      url: urlFactory(PathAPI.LOGIN),
      data,
    });
  } catch (e) {
    console.log(e);
  }
}

export default postLogin;
