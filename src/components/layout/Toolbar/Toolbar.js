import styled from 'styled-components';
import React, { useState } from 'react';
import Option from './Option';
import Profile from './Profile';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  justify-content: space-between;
`;

const Section = styled.div`
  display: flex;
`;

const Toolbar = (props) => {
  const {
    options,
    renderOption,
    renderDropdown,
  } = props;

  const [indexOptionSelected, setIndexOptionSelected] = useState(-1);

  return (
    <Container>
      <Section>
        {options.map((option, index) => (
          <Option
            option={option}
            index={index}
            indexOptionSelected={indexOptionSelected}
            setIndexOptionSelected={setIndexOptionSelected}
            renderDropdown={renderDropdown}
            renderOption={renderOption}
          />
        ))}
      </Section>
      <Section>
        <Profile />
      </Section>
    </Container>

  );
};

export default Toolbar;
