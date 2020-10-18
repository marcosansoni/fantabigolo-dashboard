import { useHistory } from 'react-router-dom';
import useActionCreator from '../../store/utils/useActionCreator';
import SessionActionType from '../../store/session/SessionActionType';
import Routes from '../../route/Routes';

const Logout = () => {
  const history = useHistory();
  const postLogout = useActionCreator(SessionActionType.POST_LOGOUT_REQUEST);
  postLogout();
  return history.push(Routes.LOGIN);
};

export default Logout;
