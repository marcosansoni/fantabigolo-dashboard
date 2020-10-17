import axios from 'axios';
import { select } from 'redux-saga/effects';
import sessionSelector from '../../session/selectors/sessionSelector';

function* postData({ url, data }) {
  // Get the session used for api call
  const { session: sessionID } = yield select(sessionSelector);

  console.log(data)

  return yield axios(
    {
      url,
      method: 'POST',
      headers: {
        sessionID,
      },
      data,
    },

    // {
    // method: 'POST',
    // headers,
    // body: JSON.stringify(data),
    // ...data,
    // },
    // data,
  )
    .then((response) => response)
    // .then((res) => res)
    .catch((err) => err.response);
}

export default postData;
