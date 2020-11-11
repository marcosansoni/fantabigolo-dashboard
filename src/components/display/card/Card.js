import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from '../../../assets/Color';
import Shadow from '../../../assets/Shadow';

const Container = styled.div`
  border-radius: 4px;
  padding: 16px;
  border: ${(p) => (p.selected ? `1px solid${p.theme[Color.PRIMARY_DARK]}` : `1px solid${p.theme[Color.SUBTITLE]}`)};
  box-shadow: ${Shadow.NORMAL};
  transition: transform .2s linear,box-shadow .2s linear;
  cursor: ${(p) => p.clickable && 'pointer'};
  background-color: ${(p) => (p.selected ? p.theme[Color.PRIMARY_DARK] : p.theme[Color.BACKGROUND])};
  color: ${(p) => (p.selected ? p.theme[Color.BACKGROUND] : p.theme[Color.DARK_TEXT])};
  
  :hover{
     transform: scale(1.05);
     box-shadow: ${Shadow.DARK};
  }
`;

const Card = (props) => {
  const { children, style, className, clickable, selected } = props;

  return (
    <Container clickable={clickable} style={style} className={className} selected={selected}>
      {children}
    </Container>
  );
};

Card.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  clickable: PropTypes.bool,
  selected: PropTypes.bool,
};

Card.defaultProps = {
  style: undefined,
  className: undefined,
  clickable: false,
  selected: false,
};

export default Card;
