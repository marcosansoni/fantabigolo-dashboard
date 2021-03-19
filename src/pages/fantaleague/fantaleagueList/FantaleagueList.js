import React from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageHeaderTitle from '../../../components/display/pageHeader/PageHeaderTitle';
import Tabs from '../../../components/display/tab/Tabs';
import Tab from '../../../components/display/tab/Tab';
import Routes from '../../../route/Routes';
import NavBar from '../../../components/display/navBar/NavBar';
import Page from '../../../components/display/navBar/Page';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: unset;
`;

const FantaleagueList = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <Page>
        <PageHeaderTitle
          title={t('fantaleague.list.title')}
          rightContent={(
            <Button variant="contained" color="primary">
              <StyledLink to={Routes.FANTALEAGUE.NEW}>
                {t('fantaleague.list.add')}
              </StyledLink>
            </Button>
          )}
        >
          <Tabs>
            <Tab label={t('fantaleague.list.tabs.recent')} />
          </Tabs>
        </PageHeaderTitle>
      </Page>
    </>

  );
};

export default FantaleagueList;
