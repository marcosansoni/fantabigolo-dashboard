import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color } from '../../../assets/theme';

const Text = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${(p) => p.theme[p.color]};
  margin: 0;
`;

const H1 = (props) => {
  const { children, color } = props;

  return (
    <Text color={color}>{children}</Text>
  );
};

H1.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
};

H1.defaultProps = {
  color: Color.ON_BACKGROUND,
};

export default H1;
