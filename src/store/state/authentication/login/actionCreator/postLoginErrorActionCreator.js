import { actionStatusError } from '../../../../constants/ActionStatus';
import { POST_LOGIN } from './postLoginActionCreator';

const postLoginErrorActionCreator = (errors) => ({
  type: actionStatusError(POST_LOGIN),
  payload: { errors},
});

export default postLoginErrorActionCreator;
