import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color } from '../../../assets/theme';

const Text = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${(p) => p.theme[p.color]};
  margin: 0;
`;

const H2 = (props) => {
  const { children, color } = props;

  return (
    <Text color={color}>{children}</Text>
  );
};

H2.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
};

H2.defaultProps = {
  color: Color.ON_BACKGROUND,
};
export default H2;
