import { actionStatusSuccess } from '../../../../constants/ActionStatus';
import { POST_LOGIN } from './postLoginActionCreator';

const postLoginSuccessActionCreator = (session) => ({
  type: actionStatusSuccess(POST_LOGIN),
  payload: { session },
});

export default postLoginSuccessActionCreator;
