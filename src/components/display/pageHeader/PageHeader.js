import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BoxShadow from '../../../assets/BoxShadow';
import Color from '../../../assets/Color';

const Container = styled.div`
  width: 100%;
  padding: 36px;
  background-color: ${(p) => p.theme[Color.BACKGROUND]};
  box-shadow: ${BoxShadow.DARK};
  display: flex;
  justify-content: space-between;
`;

const PageHeader = (props) => {
  const { children, style, className } = props;

  return (
    <Container style={style} className={className}>
      {children}
    </Container>
  );
};

PageHeader.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
};

PageHeader.defaultProps = {
  children: undefined,
  style: undefined,
  className: undefined,
};

export default PageHeader;
