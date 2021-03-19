import axios from 'axios';
import { select } from 'redux-saga/effects';
import sessionSelector from '../../state/common/selectors/sessionSelector';

function* postData({ url, data }) {
  // Get the session used for api call
  const sessionID = yield select(sessionSelector);

  return yield axios(
    {
      url,
      method: 'POST',
      headers: {
        sessionID,
      },
      data,
    },
  )
    .then((response) => response)
    .catch((err) => err.response);
}

export default postData;
