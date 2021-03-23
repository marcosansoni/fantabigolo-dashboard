import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  border-radius: ${(p) => !p.squared && '50%'};
  min-width: 42px;
  max-width: 42px;
  min-height: 42px;
  max-height: 42px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconCard = (props) => {
  const {
    style,
    className,
    children,
    squared,
  } = props;

  return (
    <Container style={style} className={className} squared={squared}>
      {children}
    </Container>
  );
};

IconCard.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  squared: PropTypes.bool,
  children: PropTypes.any,
};

IconCard.defaultProps = {
  style: undefined,
  className: undefined,
  children: undefined,
  squared: false,
};

export default IconCard;
