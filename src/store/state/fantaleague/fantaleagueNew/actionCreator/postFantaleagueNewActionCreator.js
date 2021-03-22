import { actionStatusRequest } from '../../../../constants/ActionStatus';

export const POST_FANTALEAGUE_NEW = 'POST_FANTALEAGUE_NEW';

const postFantaleagueNewActionCreator = ({
  fantateam,
  fantaleague,
  participants,
  visibility,
  competition,
}) => ({
  type: actionStatusRequest(POST_FANTALEAGUE_NEW),
  payload: { fantateam, fantaleague, participants, visibility, competition },
});

export default postFantaleagueNewActionCreator;
