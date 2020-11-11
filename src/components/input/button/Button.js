import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import Color from '../../../assets/Color';
import Shadow from '../../../assets/Shadow';

export const ButtonType = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const getHeightFromSize = (size) => {
  switch (size) {
    case ButtonSize.SMALL:
      return '24px';
    case ButtonSize.MEDIUM:
      return '36px';
    case ButtonSize.LARGE:
      return '48px';
    default:
      return '36px';
  }
};

const Container = styled.button`
  outline: 0;
  border: 0;
  display: flex;
  box-shadow: ${(p) => !p.disabled && Shadow.NORMAL};
  justify-content: center;
  align-items: center;
  background-color: ${(p) => (p.type === ButtonType.PRIMARY ? p.theme[Color.PRIMARY_DARK] : p.theme[Color.SUBTITLE])};
  padding: 8px 16px;
  border-radius: 4px;
  font-size: ${p => p.size === ButtonSize.SMALL ? '12px' : '14px'};
  height: ${(p) => getHeightFromSize(p.size)};
  color: ${(p) => (p.type === ButtonType.PRIMARY ? p.theme[Color.BACKGROUND] : p.theme[Color.DARK_TEXT])};
  position: relative;
  cursor: ${(p) => !p.disabled && !p.fetching && 'pointer'};
  opacity:  ${(p) => p.disabled && '0.4'};
  
  
  :hover::before{
     display: ${(p) => (p.disabled || p.fetching) && 'none'};
     content: '';
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     border-radius: 4px;
     background-color: rgba(0,0,0,0.08);
  }
  
  ::after{
    display: ${(p) => !p.fetching && 'none'};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    animation: ${(p) => (p.fetching && 'loading 4s')};
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: rgba(0,0,0,0.3);
  }
  
  
  
  /* Animation Keyframes*/
  @keyframes loading {
     0% { width: 0; }
     100% { width: 100%; }
  }
  
  @-moz-keyframes loading {
     0% { width: 0; }
     50% { width: 100%; }
  }

  @-webkit-keyframes loading {
     0% { width: 0; }
     50% { width: 100%; }
  }

  @-o-keyframes loading {
     0% { width: 0; }
     50% { width: 100%; }
  }
`;

const Button = (props) => {
  const { style, className, children, type, size, disabled, fetching } = props;

  return (
    <Container
      style={style}
      className={className}
      type={type}
      size={size}
      disabled={disabled}
      fetching={fetching}
    >
      {children}
    </Container>
  );
};

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  type: PropTypes.oneOf(Object.values(ButtonType)),
  size: PropTypes.oneOf(Object.values(ButtonSize)),
  disabled: PropTypes.bool,
  fetching: PropTypes.bool,
};

Button.defaultProps = {
  style: undefined,
  className: undefined,
  type: ButtonType.PRIMARY,
  size: ButtonSize.MEDIUM,
  disabled: false,
  fetching: false,
};

export default Button;
