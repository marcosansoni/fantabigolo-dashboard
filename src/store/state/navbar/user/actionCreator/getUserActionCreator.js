import { actionStatusRequest } from '../../../../constants/ActionStatus';

export const GET_USER = 'GET_USER';

const getUserActionCreator = () => ({
  type: actionStatusRequest(GET_USER),
});

export default getUserActionCreator;
