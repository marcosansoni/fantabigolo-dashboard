import axios from 'axios';
import { select } from 'redux-saga/effects';
import sessionSelector from '../../state/common/selectors/sessionSelector';

function* postData({ url, data }) {
  // Get the session used for api call
  const session = yield select(sessionSelector);

  return yield axios(
    {
      url,
      method: 'POST',
      headers: {
        sessionID: session.code,
      },
      data,
    },
  )
    .then((response) => response)
    .catch((err) => err.response);
}

export default postData;
