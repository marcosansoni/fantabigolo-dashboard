import { takeLatest } from 'redux-saga/effects';
import createFantaLeagueWorker from './workers/createFantaLeagueWorker';
import FantaleagueActionType from './FantaleagueActionType';
import getFantaLeagueByUsernameWorker from './workers/getFantaLeagueByUsernameWorker';

const FantaleagueWatcher = [
  takeLatest(FantaleagueActionType.CREATE_FANTA_LEAGUE_REQUEST, createFantaLeagueWorker),
  takeLatest(FantaleagueActionType.GET_FANTA_LEAGUE_BY_USERNAME_REQUEST, getFantaLeagueByUsernameWorker),
];

export default FantaleagueWatcher;
