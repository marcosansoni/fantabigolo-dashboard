import { rejectUndefinedError } from './common';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const postData = ({ url, data }) => fetch(
  url,
  {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  },
)
  .then((response) => response.json())
  .then((res) => res)
  .catch(() => rejectUndefinedError());

export default postData;
