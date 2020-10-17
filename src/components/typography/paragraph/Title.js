import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color } from '../../../assets/theme';

const Text = styled.h1`
  font-size: 18px;
  color: ${(p) => p.theme[p.color]}
`;

const Title = (props) => {
  const { children, color } = props;

  return (
    <Text color={color}>{children}</Text>
  );
};

Title.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
};

Title.defaultProps = {
  color: Color.ON_BACKGROUND,
};

export default Title;
