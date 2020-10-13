import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color } from '../../../assets/theme';

const Text = styled.h3`
  font-size: 26px;
  font-weight: bold;
  color: ${(p) => p.theme[p.color]};
  margin: 0;
`;

const H3 = (props) => {
  const { children, color } = props;

  return (
    <Text color={color}>{children}</Text>
  );
};

H3.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
};

H3.defaultProps = {
  color: Color.ON_BACKGROUND,
};

export default H3;
