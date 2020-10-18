import { combineReducers } from 'redux';
import RealLeagueCombinedReducers from './reducers/realLeague/RealLeagueCombinedReducers';
import RealTeamCombinedReducers from './reducers/realTeam/RealTeamCombinedReducers';
import RealPlayerCombinedReducers from './reducers/realPlayer/RealPlayerCombinedReducers';

const RealWorldCombinedReducers = combineReducers({
  realLeague: RealLeagueCombinedReducers,
  realTeam: RealTeamCombinedReducers,
  realPlayer: RealPlayerCombinedReducers,
});

export default RealWorldCombinedReducers;
