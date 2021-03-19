import { actionStatusSuccess } from '../../../constants/ActionStatus';
import { POST_REGISTER } from './postRegisterActionCreator';

const postRegisterSuccessActionCreator = () => ({
  type: actionStatusSuccess(POST_REGISTER),
})

export default postRegisterSuccessActionCreator;
