import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../../../assets/Color';
import CloseIcon from '../../icons/CloseIcon';

const Input = styled.input`
  flex: 1 1 0;
  border: 0;
  margin: 0;
  outline: none;
  font-size: inherit;
  color: ${(p) => p.theme[Color.DARK_TEXT]};
  background: transparent;
`;

const Container = styled.div`
  border: ${(p) => (p.focus ? `1px solid${p.theme[Color.PRIMARY_DARK]}` : `1px solid${p.theme[Color.SUBTITLE]}`)};
  padding: 8px;
  border-radius: 4px;
  
  :hover{
    border: ${(p) => `1px solid${p.theme[Color.PRIMARY_DARK]}`};
  }
`;

const TextInput = (props) => {
  const { style, className, defaultValue, value: valueProps, onFocus, onBlur, onChange } = props;

  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setFocus(true);
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    setFocus(false);
    if (onBlur) onBlur();
  };

  return (
    <Container style={style} className={className} focus={focus}>
      <Input
        value={valueProps || value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <CloseIcon />
    </Container>
  );
};

TextInput.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  // title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  // description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // validation: PropTypes.oneOf(Object.values(Validation)),
};

TextInput.defaultProps = {
  style: undefined,
  className: undefined,
  value: undefined,
  defaultValue: undefined,
  onFocus: undefined,
  onBlur: undefined,
  onChange: undefined,
  // title: undefined,
  // description: undefined,
  // validation: Validation.VALID,
};

export default TextInput;
