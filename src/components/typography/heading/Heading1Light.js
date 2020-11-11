import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../../../assets/Color';

const Text = styled.h1`
  font-size: 40px;
  font-weight: normal;
  color: ${(p) => p.theme[p.color]};
  margin: 0;
`;

const Heading1Light = (props) => {
  const {
    children, color, style, className,
  } = props;

  return (
    <Text color={color} style={style} className={className}>{children}</Text>
  );
};

Heading1Light.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
};

Heading1Light.defaultProps = {
  color: Color.DARK_TEXT,
  style: undefined,
  className: undefined,
};

export default Heading1Light;
