import RealWorldActionType from '../RealWorldActionType';

export const RealWorldStatusFetching = {
  NO_DATA: 'NO_DATA',
  START_FETCHING: 'START_FETCHING',
  COMPLETED_LEAGUE: 'COMPLETED_LEAGUE',
  COMPLETED_TEAM: 'COMPLETED_TEAM',
  COMPLETED_PLAYER: 'COMPLETED_PLAYER',
};

const statusFetching = (state = RealWorldStatusFetching.NO_DATA, action) => {
  switch (action.type) {
    case RealWorldActionType.REAL_WORLD_STATUS_FETCHING:
      if (action?.payload?.statusFetching) {
        return action.payload.statusFetching;
      }
      return state;
    default:
      return state;
  }
};

export default statusFetching;
