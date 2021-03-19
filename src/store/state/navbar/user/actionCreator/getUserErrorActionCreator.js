import { actionStatusError } from '../../../../constants/ActionStatus';
import { GET_USER } from './getUserActionCreator';

const getUserErrorActionCreator = (errors) => ({
  type: actionStatusError(GET_USER),
  payload: { errors},
});

export default getUserErrorActionCreator;
