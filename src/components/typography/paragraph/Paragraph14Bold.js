import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../../../assets/Color';

const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${(p) => p.theme[p.color]};
  margin: 0;
`;

const Paragraph14Bold = (props) => {
  const {
    children, color, style, className,
  } = props;

  return (
    <Text color={color} style={style} className={className}>{children}</Text>
  );
};

Paragraph14Bold.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
};

Paragraph14Bold.defaultProps = {
  color: Color.DARK_TEXT,
  style: undefined,
  className: undefined,
};

export default Paragraph14Bold;
