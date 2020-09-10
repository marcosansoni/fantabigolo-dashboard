import axios from 'axios';
import { rejectUndefinedError } from '../common';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

function* postData({ url, data }) {
  return yield axios.post(
    url,
    // {
    // method: 'POST',
    // headers,
    // body: JSON.stringify(data),
    // ...data,
    // },
    data,
  )
    .then((response) => response)
    // .then((res) => res)
    .catch((err) => err.response);
}

export default postData;
