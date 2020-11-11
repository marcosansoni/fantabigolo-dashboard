import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../../../assets/Color';
import Card from '../card/Card';
import Heading4 from '../../typography/heading/Heading4';
import Label from '../label/Label';
import Paragraph14 from '../../typography/paragraph/Paragraph14';
import Paragraph12 from '../../typography/paragraph/Paragraph12';

const Container = styled.div`
  display: flex;
  padding-top: 24px;
`;

const Separator = styled.div`
  width: 2px;
  margin-left: 16px;
  background-color: ${(p) => p.theme[Color.SUBTITLE]};
  border-radius: 2px;
`;

const Results = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MatchStatus = {
  TERMINATED: 'TERMINATED',
  IN_PROGRESS: 'IN_PROGRESS',
  SCHEDULED: 'SCHEDULED',
};

const MatchCard = (props) => {
  const { style, className, league, home, away, fixtures, status } = props;

  console.log(home, away, fixtures, status);

  const renderResult = (team) => {
    if (!team || team.points === undefined || team.goal === undefined) return undefined;
    return (
      <Results>
        <Paragraph14 color={Color.SUBTITLE}>{`(${team.points})`}</Paragraph14>
        <Heading4 style={{ paddingLeft: 16 }}>{team.goal}</Heading4>
      </Results>
    );
  };

  return (
    <Card
      style={{
        ...style,
        width: 480,
      }}
      className={className}
    >
      <Heading4 color={Color.SUBTITLE}>
        {league}
      </Heading4>
      <Container>
        <div style={{ minWidth: 300 }}>
          <Label
            title={home?.team}
            subtitle={home?.trainer}
            logo={home?.logo}
            rightContent={renderResult(home)}
          />
          <Label
            style={{ paddingTop: 24 }}
            title={away?.team}
            subtitle={away?.trainer}
            logo={away?.logo}
            rightContent={renderResult(away)}
          />
        </div>
        <Separator />
        <Right>
          <Heading4>{fixtures}</Heading4>
          <Paragraph12 style={{ paddingTop: 8 }} color={Color.SUBTITLE}>{status}</Paragraph12>
        </Right>
      </Container>
    </Card>
  );
};

const teamProps = {
  team: PropTypes.string,
  trainer: PropTypes.string,
  logo: PropTypes.string,
  points: PropTypes.number,
  goal: PropTypes.number,
};

MatchCard.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  league: PropTypes.string,
  home: PropTypes.shape(teamProps),
  away: PropTypes.shape(teamProps),
  fixtures: PropTypes.number,
  status: PropTypes.oneOf(Object.values(MatchStatus)),
};

MatchCard.defaultProps = {
  style: undefined,
  className: undefined,
  league: undefined,
  home: undefined,
  away: undefined,
  fixtures: undefined,
  status: undefined,
};

export default MatchCard;
