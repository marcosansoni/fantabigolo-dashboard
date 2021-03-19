import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Chip } from '@material-ui/core';
import Card from '../../../../components/display/card/Card';
import Font from '../../../../assets/Font';

const Title = styled.div`
  font-family: ${Font.SEMIBOLD};
  font-size: 24px;
`;

const Chips = styled.div`
  margin-top: 8px;
  display: flex;
`;

const FantaleagueListCard = (props) => {
  const {title, chipsLabel, style, className, onClick} = props;

  return (
    <Card style={style} className={className} clickable onClick={onClick}>
      <Title>{title}</Title>
      <Chips>
        {chipsLabel.map((label) => <Chip key={label} label={label} size="small" color="primary" style={{marginRight: 8}} />)}
      </Chips>
    </Card>
  );
};

FantaleagueListCard.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  chipsLabel: PropTypes.array,
  className: PropTypes.string,
};

FantaleagueListCard.defaultProps = {
  title: undefined,
  style: undefined,
  onClick: undefined,
  chipsLabel: undefined,
  className: undefined,
};

export default FantaleagueListCard;
