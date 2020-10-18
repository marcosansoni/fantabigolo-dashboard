import getData from '../../utils/fetchMethod/getData';
import PathAPI, { urlFactory } from '../../../constants/PathAPI';

const normalizedTrainer = (response) => {
  if (response?.status === 200 && response?.data) {
    // const { Trainer: participants } = response?.data;
    return response.data.map((t) => t.Trainer);
  }
  return [];
};

const normalizedBalance = (response) => {
  if (response?.status === 200 && response?.data) {
    return response.data?.Balance;
  }
  return 0;
};

const normalizedCash = (response) => {
  if (response?.status === 200 && response?.data) {
    return response.data?.Cash;
  }
  return 0;
};

const normalizedPlayer = (response) => {
  if (response?.status === 200 && response?.data) {
    const { Players = [] } = response.data;
    return Players.map((p) => p.ID);
  }
  return [];
};

function* getFantateamMethod(fantateamId, role, isTrequartista) {
  const trainer = yield getData({
    url: urlFactory(PathAPI.FANTATEAM.TRAINER),
    data: { fantateamID: fantateamId },
  });

  const balance = yield getData({
    url: urlFactory(PathAPI.FANTATEAM.BALANCE),
    data: { fantateamID: fantateamId },
  });

  const cash = yield getData({
    url: urlFactory(PathAPI.FANTATEAM.CASH),
    data: { fantateamID: fantateamId },
  });

  const player = yield getData({
    url: urlFactory(PathAPI.FANTATEAM.PLAYER),
    data: {
      fantateamID: fantateamId,
      ...(role && { role }),
      ...(isTrequartista && { isTrequartista }),
    },
  });

  return {
    trainer: normalizedTrainer(trainer),
    balance: normalizedBalance(balance),
    cash: normalizedCash(cash),
    playerIds: normalizedPlayer(player),
  };
}

export default getFantateamMethod;
