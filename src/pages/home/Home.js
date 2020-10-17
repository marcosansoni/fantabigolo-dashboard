import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import ContainerPage from '../../components/layout/ContainerPage';
import Section from '../../components/display/Section';
import H3 from '../../components/typography/heading/H3';
import P from '../../components/typography/paragraph/P';
import Routes from '../../route/Routes';
import useActionCreator from '../../store/utils/useActionCreator';
import FantaleagueActionType from '../../store/fantaleague/FantaleagueActionType';
import fantaleagueFetchingSelector
  from '../../store/fantaleague/selectors/fantaleagueFetchingSelector';
import byIdSelectorFactory from '../../store/common/selectors/byIdSelectorFactory';

const ContainerEmpty = styled.div`
  width: 100%;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Home = () => {
  const history = useHistory();

  const isFetching = useSelector(fantaleagueFetchingSelector);
  const fantaleagueById = useSelector(byIdSelectorFactory('fantaleague'));

  const getCompetitions = useActionCreator(FantaleagueActionType.GET_FANTA_LEAGUE_BY_USERNAME_REQUEST);

  useEffect(() => getCompetitions(), []);

  return (
    <ContainerPage>
      {isFetching && (
        <H3>Fetching data ...</H3>
      )}
      {!isFetching && Object.values(fantaleagueById).length === 0 && (
      <Section title={(<H3>Fantaleghe</H3>)}>
        <ContainerEmpty>
          <P>Nessuna fantalega al momento</P>
          <Button onClick={() => history.push(Routes.FANTALEAGUE.NEW)}>Creane una</Button>
        </ContainerEmpty>
      </Section>
      )}
      {!isFetching && Object.values(fantaleagueById).length && (
        JSON.stringify(fantaleagueById)
      )}
    </ContainerPage>
  );
};

export default Home;
