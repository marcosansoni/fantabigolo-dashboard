import postData from '../../utils/fetchMethod/postData';
import PathAPI, { urlFactory } from '../../../constants/PathAPI';

// eslint-disable-next-line consistent-return
function* postRegister(data) {
  try {
    return yield postData({
      url: urlFactory(PathAPI.REGISTER),
      data,
    });
  } catch (e) {
    console.log(e);
  }
}

export default postRegister;
