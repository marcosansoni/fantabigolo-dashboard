import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  background-color: red;
`;

const Button = (props) => {
  const { style, className, children } = props;

  return (
    <Container style={style} className={className}>
      {children}
    </Container>
  );
};

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

Button.defaultProps = {
  style: undefined,
  className: undefined,
};

export default Button;
