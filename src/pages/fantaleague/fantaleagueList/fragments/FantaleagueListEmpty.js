import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import IllustrationSearch from '../../../../assets/illustration/IllustrationSearch';
import Font from '../../../../assets/Font';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  margin: 8px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;

const Title = styled.div`
  font-size: 28px;
  font-family: ${Font.SEMIBOLD};
`;

const FantaleagueListEmpty = (props) => {
  const { style, className, onCreate} = props;

  const {t} = useTranslation();

  return (
    <Container style={style} className={className}>
      <Left><IllustrationSearch /></Left>
      <Right>
        <Title>{t('fantaleague.list.empty.title')}</Title>
        <Button variant="contained" color="primary" onCreate={onCreate} style={{width: 128, marginTop: 8}}>
          {t('fantaleague.list.empty.button')}
        </Button>
      </Right>
    </Container>
  );
};

FantaleagueListEmpty.propTypes = {
  style: PropTypes.object,
  onCreate: PropTypes.func,
  className: PropTypes.string,
};

FantaleagueListEmpty.defaultProps = {
  style: undefined,
  onCreate: undefined,
  className: undefined,
};

export default FantaleagueListEmpty;
