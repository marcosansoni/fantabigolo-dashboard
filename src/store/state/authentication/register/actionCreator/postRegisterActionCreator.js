import { actionStatusRequest } from '../../../../constants/ActionStatus';

export const POST_REGISTER = 'POST_REGISTER';

const postRegisterActionCreator = ({
  username,
  password,
  email,
  firstName,
  lastName,
}) => ({
  type: actionStatusRequest(POST_REGISTER),
  payload: {
    username,
    password,
    email,
    firstName,
    lastName,
  },
});

export default postRegisterActionCreator;
