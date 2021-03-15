import React from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import PageHeaderTitle from '../../../components/display/pageHeader/PageHeaderTitle';
import Tabs from '../../../components/display/tab/Tabs';
import Tab from '../../../components/display/tab/Tab';

const FantaleagueList = () => {
  const {t} = useTranslation();

  return (
    <PageHeaderTitle
      title={t('fantaleague.list.title')}
      rightContent={(
        <Button variant="contained" color="primary">
          {t('fantaleague.list.add')}
        </Button>
 )}
    >
      <Tabs>
        <Tab label={t('fantaleague.list.tabs.recent')} />
      </Tabs>
    </PageHeaderTitle>
  );
};

export default FantaleagueList;
