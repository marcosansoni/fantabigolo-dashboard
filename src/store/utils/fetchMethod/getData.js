import axios from 'axios';
import { select } from 'redux-saga/effects';
import sessionSelector from '../../state/common/selectors/sessionSelector';

function* getData({ url, data, session: customSession = undefined }) {
  // Get the session used for api call
  const sessionID = yield select(sessionSelector);

  return yield axios.get(
    url,
    {
      headers: {
        sessionID: customSession || sessionID,
        ...data,
      },
    },
  )
    .then((response) => response)
    // .then((res) => res)
    .catch((err) => err.response);
}

export default getData;
