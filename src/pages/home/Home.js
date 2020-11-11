import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useActionCreator from '../../store/utils/useActionCreator';
import FantaleagueActionType from '../../store/fantaleague/FantaleagueActionType';
import fantaleagueFetchingSelector
  from '../../store/fantaleague/selectors/fantaleagueFetchingSelector';

const Home = () => {

  const isFetching = useSelector(fantaleagueFetchingSelector);

  const getCompetitions = useActionCreator(FantaleagueActionType.GET_FANTA_LEAGUE_BY_USERNAME_REQUEST);

  useEffect(() => getCompetitions(), []);

  return (
    <div>
      {isFetching && (
        <div>Fetching data ...</div>
      )}
      <div>Home</div>
    </div>
  );
};

export default Home;
