const ActionStatus = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const actionStatusRequest = (type) => `${type}/${ActionStatus.REQUEST}`;
export const actionStatusSuccess = (type) => `${type}/${ActionStatus.SUCCESS}`;
export const actionStatusError = (type) => `${type}/${ActionStatus.ERROR}`;

export const getActionType = (action) => action?.split('/')[0];
export const getActionStatus = (action) => action?.split('/')?.[1];

export default ActionStatus;
