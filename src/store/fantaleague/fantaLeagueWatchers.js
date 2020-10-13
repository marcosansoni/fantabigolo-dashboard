import { takeLatest } from 'redux-saga/effects';
import { CREATE_FANTA_LEAGUE_REQUEST } from './actionCreators/createFantaLeagueCreator';
import createFantaLeagueWorker from './workers/createFantaLeagueWorker';

const fantaLeagueWatchers = [
  takeLatest(CREATE_FANTA_LEAGUE_REQUEST, createFantaLeagueWorker),
];

export default fantaLeagueWatchers;
