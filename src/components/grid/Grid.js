import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color } from '../../assets/theme';

const FullPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(p) => p.theme[Color.BACKGROUND]};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

const Grid = (props) => {
  const {
    style,
    className,
    children,
  } = props;

  return (
    <FullPage>
      <Container style={style} className={className}>
        {children}
      </Container>
    </FullPage>
  );
};

Grid.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
};

Grid.defaultProps = {
  children: undefined,
  style: undefined,
  className: undefined,
};

export default Grid;
