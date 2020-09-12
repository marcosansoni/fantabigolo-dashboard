import CaretDownOutlined from '@ant-design/icons/lib/icons/CaretDownOutlined';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Color } from '../../../assets/theme';
import useClickOut from '../../../hooks/useClickOut';

const ContainerOption = styled.div`
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  box-sizing: border-box;
  margin-right: 16px;
  display: flex;
  align-items: center;
  border: ${(p) => `1px solid ${p.selected ? p.theme[Color.PRIMARY_HIGHLIGHT] : p.theme[Color.TRANSPARENT]}`};
  border-radius: 4px;
  background-color: ${(p) => p.selected && p.theme[Color.PRIMARY_HIGHLIGHT]};
  
  :hover{
    border: ${(p) => `1px solid ${p.theme[Color.PRIMARY_HIGHLIGHT]}`};
    background-color: ${(p) => p.theme[Color.PRIMARY_HIGHLIGHT]};
  }
`;

const Icon = styled.div`
  padding-left: 8px;
`;

const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  min-width: 164px;
  background-color: ${(p) => p.theme[Color.BACKGROUND]};
  border-radius: 4px;
  border: ${(p) => `1px solid${p.theme[Color.BORDER]}`};
  box-shadow: 2px 12px 24px rgba(51, 51, 51, 0.08);
  z-index: 10;
  
  :empty{
    display: none;
  }
`;

const Option = (props) => {
  const {
    option,
    index,
    indexOptionSelected,
    setIndexOptionSelected,
    renderDropdown,
    renderOption,
  } = props;

  const handleClickOut = () => {
    if (indexOptionSelected === index) {
      setIndexOptionSelected(-1);
    }
  };

  const ref = useClickOut(handleClickOut);

  const dropdown = () => (
    <Dropdown>
      {renderDropdown(option)}
    </Dropdown>
  );

  const handleClickOption = () => {
    if (indexOptionSelected === index) {
      setIndexOptionSelected(-1);
    }
    setIndexOptionSelected(index);
  };

  return (
    <VerticalFlex>
      {renderOption
        ? renderOption(option)
        : (
          <ContainerOption
            selected={indexOptionSelected === index}
            onClick={handleClickOption}
          >
            {option}
            <Icon><CaretDownOutlined /></Icon>
          </ContainerOption>
        )}
      <div ref={ref}>
        {indexOptionSelected === index && dropdown()}
      </div>
    </VerticalFlex>
  );
};

Option.propTypes = {
  option: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  indexOptionSelected: PropTypes.number.isRequired,
  setIndexOptionSelected: PropTypes.func.isRequired,
  renderDropdown: PropTypes.func,
  renderOption: PropTypes.func,
};

Option.defaultProps = {
  renderDropdown: () => undefined,
  renderOption: undefined,
};

export default Option;
