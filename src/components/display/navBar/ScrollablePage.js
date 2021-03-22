import PerfectScrollbar from 'react-perfect-scrollbar';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MediaQuerySelector from '../../../constants/responsive/MediaQuerySelector';

const Container = styled.div`
  margin-top: -64px;
  padding-top: 64px;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  ${MediaQuerySelector.SMALL} {
    margin-top: -56px;
    padding-top: 56px;
  }
`;

const ScrollablePage = (props) => {
  const { children, style, className } = props;

  return (
    <Container style={style} className={className}>
      <PerfectScrollbar>
        {children}
      </PerfectScrollbar>
    </Container>
  );
};

ScrollablePage.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
};

ScrollablePage.defaultProps = {
  children: undefined,
  style: undefined,
  className: undefined,
};

export default ScrollablePage;
