import { useDispatch } from 'react-redux';
import actionCreator from './actionCreator';

const useActionCreator = (type) => {
  const dispatch = useDispatch();

  return (payload = {}) => dispatch(actionCreator(type, payload));
};

export default useActionCreator;
