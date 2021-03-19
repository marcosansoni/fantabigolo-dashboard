import { actionStatusError } from '../../../../constants/ActionStatus';
import { POST_REGISTER } from './postRegisterActionCreator';

const postRegisterErrorActionCreator = (errors) => ({
  type: actionStatusError(POST_REGISTER),
  payload: { errors},
});

export default postRegisterErrorActionCreator;
