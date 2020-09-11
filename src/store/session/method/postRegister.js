import postData from '../../utils/fetchMethod/postData';
import PathAPI, { BASE_PATH } from '../../../constants/PathAPI';

// eslint-disable-next-line consistent-return
function* postRegister(data) {
  try {
    return yield postData({
      url: BASE_PATH + PathAPI.REGISTER,
      data,
    });
  } catch (e) {
    console.log(e);
  }
}

export default postRegister;
