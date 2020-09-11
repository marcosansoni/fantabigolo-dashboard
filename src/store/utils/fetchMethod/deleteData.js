import { select } from 'redux-saga/effects';
import axios from 'axios';
import { getSession } from '../../session/sessionSelector';

function* deleteData({ url, data }) {
  // Get the session used for api call
  const sessionID = yield select(getSession);

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
