import React from 'react';
import styled from 'styled-components';
import { Color } from '../../assets/theme';

const Container = styled.div`
  width: 100%;
  padding: 8px 16px 24px 16px;
  background-color: ${(p) => p.theme[Color.BACKGROUND]};
  position: relative;
  border-radius: 16px;
  box-shadow: ${(p) => p.isShadow && '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'} ;
`;

const BottomBorder = styled.div`
  position: absolute;
  bottom: 8px;
  width: calc(100% - 32px);
  left: 16px;
  background-color: ${(p) => p.theme[Color.WARNING]};
  height: 2px;
`;

const LeftBorder = styled.div`
  position: absolute;
  top: 16px;
  height: calc(100% - 32px);
  left: 0;
  background-color: ${(p) => p.theme[Color.WARNING]};
  width: 4px;
`;

const Tile = (props) => {
  const {
    leftBorder,
    bottomBorder,
    shadow,
    children,
    style,
    className,
  } = props;

  return (
    <Container isShadow={shadow} style={style} className={className}>
      {leftBorder && <LeftBorder />}
      {bottomBorder && <BottomBorder />}
      {children}
    </Container>
  );
};

export default Tile;
