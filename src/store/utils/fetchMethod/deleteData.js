import { select } from 'redux-saga/effects';
import axios from 'axios';
import { rejectUndefinedError } from '../common';
import { getSession } from '../../session/sessionSelector';

const defaultHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

function* deleteData({ url, data }) {
  // Get the session used for api call
  const sessionID = yield select(getSession);

  const headers = new Headers();

  // Set the default Header
  // Object.keys(defaultHeader).forEach((key) => {
  //   console.log(key)
  //   headers.append(key, defaultHeader[key]);
  // });
  //
  // // Set the sessionID
  // headers.append('sessionID', sessionID);
  //
  // // Set the parameters of data
  // Object.keys(data).forEach((key) => {
  //   headers.append(key, data[key]);
  // });

  return yield axios.delete(url, {
    headers: {
      sessionID,
      ...data,
    },
  }).then((response) => response)
    // .then((res) => res)
    .catch((err) => err.response);

  // return yield fetch(
  //   url,
  //   {
  //     method: 'DELETE',
  //     headers,
  //     redirect: 'follow',
  //     // body: JSON.stringify({ ...data, sessionID }),
  //   },
  // )
  //   .then((response) => response.json())
  //   .then((res) => res)
  //   .catch(() => rejectUndefinedError());
}

export default deleteData;
