import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../../../../../../components/display/card/Card';
import Font from '../../../../../../assets/Font';

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: -8px;
`;

const StyledCard = styled(Card)`
  width: 242px;
  display: flex;
  justify-content: space-between;
  font-family: ${Font.BOLD};
  margin: 8px;
`;

const Deleted = styled.div`
  cursor: pointer;
`;

const compareFunctionFormation = (formationA, formationB) => {
  const splitA = formationA.split('-').map((role) => Number(role));
  const splitB = formationB.split('-').map((role) => Number(role));
  let result = 0;
  splitA.forEach((numberA, index) => {
    if (result !== 0) return;
    const numberB = splitB[index];
    if (numberA < numberB) {
      result = -1;
    }
    if (numberA > numberB) {
      result = 1;
    }
  });
  return result;
};

const GameSettingsFormFormation = (props) => {
  const { formationList } = props;

  const sortedDefender = formationList.sort(compareFunctionFormation);

  let formationByDefender = {};
  sortedDefender.forEach((formation) => {
    const defender = Number(formation.substring(0, 1));
    formationByDefender = {
      ...formationByDefender,
      [defender]: [...(formationByDefender[defender] || []), formation],
    };
  });

  return (
    <>
      {Object.keys(formationByDefender || []).map((defender) => (
        <>
          <div>Difesa a {defender}</div>
          <Wrap>
            {formationByDefender[defender].map((formation) => (
              <StyledCard>
                {formation}
                <Deleted>Cancella</Deleted>
              </StyledCard>
            ))}
          </Wrap>
        </>
      ))}
    </>
  );
};

GameSettingsFormFormation.propTypes = {
  formationList: PropTypes.array,
};

GameSettingsFormFormation.defaultProps = {
  formationList: [],
};

export default GameSettingsFormFormation;
