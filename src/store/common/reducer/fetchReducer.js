import ActionStatus, { getActionStatus, getActionType } from '../../constants/ActionStatus';

const fetchReducer = (state = [], action) => {
  const status = getActionStatus(action?.type);
  switch (status) {
    case ActionStatus.REQUEST:
      return [...new Set([...state, getActionType(action?.type)])];
    case ActionStatus.SUCCESS:
    case ActionStatus.ERROR:
      return state.filter((type) => type !== getActionType(action?.type));
    default:
      return state;
  }
};

export default fetchReducer;
