import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';
import { generatePath, useHistory, useLocation, useParams } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../../../components/display/navBar/NavBar';
import Card from '../../../../components/display/card/Card';
import Font from '../../../../assets/Font';
import Page from '../../../../components/display/navBar/Page';
import PageHeaderTitle from '../../../../components/display/pageHeader/PageHeaderTitle';
import Routes from '../../../../route/Routes';
import GeneralSettingsForm from './form/GeneralSettingsForm';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
  overflow: hidden;
  padding: 24px 0 24px 32px;
`;

const Title = styled.div`
  padding: 24px 32px 0 32px;
  font-family: ${Font.SEMIBOLD};
  font-size: 20px;
`;

const Left = styled.div`
  width: 340px;
  height: 100%;
`;

const Right = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`;

const Chips = styled.div`
  display: flex;
`;

const SettingsTab = {
  GENERAL: 'general',
  GAME: 'game',
};

const FantaleagueDetailsSettings = (props) => {
  const { fantateam, fantaleague, labels } = props;
  const { t } = useTranslation();
  const history = useHistory();

  const location = useLocation();
  const { leagueId } = useParams();

  const settingsTab = useMemo(() => location?.pathname?.split('/')?.splice(-1)?.[0], [location?.pathname]);

  useEffect(() => {
    if (settingsTab !== SettingsTab.GAME && settingsTab !== SettingsTab.GENERAL) {
      history.push(Routes.HOME);
    }
  }, [settingsTab]);

  return (
    <>
      <NavBar />
      <Page>
        <Container>
          <PageHeaderTitle
            upperTitle={fantaleague}
            title={fantateam}
            style={{ paddingBottom: 36 }}
          >
            <Chips>
              {labels.map((label, index) => (
                <Chip color="primary" label={label} style={index !== 0 ? { marginLeft: 16 } : {}} />
              ))}
            </Chips>
          </PageHeaderTitle>
          <Title>{t('fantaleague.details.settings.title')}</Title>
          <Flex>
            <Left>
              <Card
                style={{ marginBottom: 16 }}
                clickable={settingsTab !== SettingsTab.GENERAL}
                selected={settingsTab === SettingsTab.GENERAL}
                onClick={settingsTab !== SettingsTab.GENERAL ? () => {
                  history.push(generatePath(Routes.FANTALEAGUE.SETTINGS.GENERAL, { leagueId }));
                } : undefined}
              >
                {t('fantaleague.details.settings.general')}
              </Card>
              <Card
                clickable={settingsTab !== SettingsTab.GAME}
                selected={settingsTab === SettingsTab.GAME}
                onClick={settingsTab !== SettingsTab.GAME ? () => {
                  history.push(generatePath(Routes.FANTALEAGUE.SETTINGS.GAME, { leagueId }));
                } : undefined}
              >
                {t('fantaleague.details.settings.game')}
              </Card>
            </Left>
            <Right>
              <PerfectScrollbar>
                <Switch>
                  <Route path={Routes.FANTALEAGUE.SETTINGS.GENERAL} exact>
                    <GeneralSettingsForm />
                  </Route>
                  <Route path={Routes.FANTALEAGUE.SETTINGS.GAME} exact>
                    <div>Game</div>
                  </Route>
                </Switch>
              </PerfectScrollbar>
            </Right>
          </Flex>
        </Container>
      </Page>
    </>
  );
};

FantaleagueDetailsSettings.propTypes = {
  fantateam: PropTypes.string,
  fantaleague: PropTypes.string,
  labels: PropTypes.array,
};

FantaleagueDetailsSettings.defaultProps = {
  fantateam: undefined,
  fantaleague: undefined,
  labels: [],
};

export default FantaleagueDetailsSettings;
