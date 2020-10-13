import PathAPI, { urlFactory } from '../../../constants/PathAPI';
import deleteData from '../../utils/fetchMethod/deleteData';

// eslint-disable-next-line consistent-return
function* deleteLogout(data) {
  try {
    return yield deleteData({
      url: urlFactory(PathAPI.LOGOUT),
      data,
    });
  } catch (e) {
    console.log(e);
  }
}

export default deleteLogout;
