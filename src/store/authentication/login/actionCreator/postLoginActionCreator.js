import { actionStatusRequest } from '../../../constants/ActionStatus';

export const POST_LOGIN = 'POST_LOGIN';

const postLoginActionCreator = (username, password) => ({
  type: actionStatusRequest(POST_LOGIN),
  payload: { username, password},
});

export default postLoginActionCreator;
