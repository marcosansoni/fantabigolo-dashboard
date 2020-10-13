import axios from 'axios';
import { select } from 'redux-saga/effects';
import { getSession } from '../../session/sessionSelector';

function* getData({ url, data }) {
  // Get the session used for api call
  const sessionID = yield select(getSession);

  return yield axios.get(
    url,
    {
      headers: {
        sessionID,
        ...data,
      },
    },
  )
    .then((response) => response)
    // .then((res) => res)
    .catch((err) => err.response);
}

export default getData;
