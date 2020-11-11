import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../../../assets/Color';

const Text = styled.p`
  font-size: 14px;
  color: ${(p) => p.theme[p.color]};
  margin: 0;
`;

const Paragraph14 = (props) => {
  const {
    children, color, style, className,
  } = props;

  return (
    <Text color={color} style={style} className={className}>{children}</Text>
  );
};

Paragraph14.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
};

Paragraph14.defaultProps = {
  color: Color.DARK_TEXT,
  style: undefined,
  className: undefined,
};

export default Paragraph14;
