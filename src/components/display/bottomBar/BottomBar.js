import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BoxShadow from '../../../assets/BoxShadow';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 16px;
  box-shadow: ${BoxShadow.DARK};
  z-index: 100;
`;

const BottomBar = (props) => {
  const { children, style, className } = props;
  return (
    <Container style={style} className={className}>
      {children}
    </Container>
  );
};

BottomBar.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
};

BottomBar.defaultProps = {
  children: undefined,
  style: undefined,
  className: undefined,
};

export default BottomBar;
