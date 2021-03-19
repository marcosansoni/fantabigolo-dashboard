import { select } from 'redux-saga/effects';
import axios from 'axios';
import sessionSelector from '../../common/selectors/sessionSelector';

function* deleteData({ url, data }) {
  // Get the session used for api call
  const sessionID = yield select(sessionSelector);

  return yield axios.delete(url, {
    headers: {
      sessionID,
      ...data,
    },
  })
    .then((response) => response)
    // .then((res) => res)
    .catch((err) => err.response);
}

export default deleteData;
