import { actionStatusError } from '../../../../constants/ActionStatus';
import { POST_FANTALEAGUE_NEW } from './postFantaleagueNewActionCreator';

const postFantaleagueNewErrorActionCreator = (errors) => ({
  type: actionStatusError(POST_FANTALEAGUE_NEW),
  payload: { errors},
});

export default postFantaleagueNewErrorActionCreator;
