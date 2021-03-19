import { actionStatusSuccess } from '../../../../constants/ActionStatus';
import { GET_USER } from './getUserActionCreator';

const getUserSuccessActionCreator = (user) => ({
  type: actionStatusSuccess(GET_USER),
  payload: { user },
});

export default getUserSuccessActionCreator;
