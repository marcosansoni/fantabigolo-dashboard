import { actionStatusSuccess } from '../../../../constants/ActionStatus';
import { POST_FANTALEAGUE_NEW } from './postFantaleagueNewActionCreator';

const postFantaleagueNewSuccessActionCreator = () => ({
  type: actionStatusSuccess(POST_FANTALEAGUE_NEW),
  // payload: { fanta },
});

export default postFantaleagueNewSuccessActionCreator;
